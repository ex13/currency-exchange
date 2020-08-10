import { LRUCacheModel } from '../../../common/models/lru-cache.model';

interface CacheParameters {
  ttl: number;
  capacity: number;
}

/**
 * Quote feature specific NestJS decorator for a cache model.
 *
 * @param {CacheParameters} parameters
 */
export function Cache({ ttl, capacity }: CacheParameters): MethodDecorator {
  const cache = new LRUCacheModel<string>(ttl, capacity);

  return function(
    _target: Record<string, any>,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    const method = descriptor.value;

    descriptor.value = async function(...args: any[]) {
      // A unique key for the cache entity identification
      const key = `${args[0].base_currency}_${args[0].quote_currency}_${args[0].base_amount}`;

      if (cache.get(key)) {
        return cache.get(key);
      }

      const result = await method.apply(this, args);
      cache.set(key, result);

      return result;
    };
  };
}
