import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

/**
 * Validates if one data property is not equal to another.
 *
 * @param {string} property
 * @param {ValidationOptions} validationOptions
 */
export function IsNotEqualToProperty(
  property: string,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return function(object: unknown, propertyName: string): any {
    registerDecorator({
      name: 'isNotEqualToProperty',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];

          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            value !== relatedValue
          );
        },
      },
    });
  };
}
