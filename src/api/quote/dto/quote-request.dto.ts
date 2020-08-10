import { IsNotEmpty, IsNumberString, IsEnum } from 'class-validator';
import { IsNotEqualToProperty } from '../../../common/validators/is-not-equal-to-property.validator';
import { MESSAGES } from '../../../common/constants/messages';
import {
  CurrencyStringOption,
  CurrencyStringOptions,
} from '../interfaces/currency-string.interfaces';

export class QuoteRequestDto {
  @IsNotEmpty({ message: MESSAGES.VALIDATION.BASE_CURRENCY_REQUIRED })
  @IsNotEqualToProperty('quote_currency', {
    message: MESSAGES.VALIDATION.CURRENCY_FIELDS_NOT_EQUAL,
  })
  @IsEnum(CurrencyStringOptions, {
    message: MESSAGES.VALIDATION.BASE_CURRENCY_VALID_CODE,
  })
  base_currency: CurrencyStringOption;

  @IsNotEmpty({ message: MESSAGES.VALIDATION.QUOTE_CURRENCY_REQUIRED })
  @IsEnum(CurrencyStringOptions, {
    message: MESSAGES.VALIDATION.QUOTE_CURRENCY_VALID_CODE,
  })
  quote_currency: CurrencyStringOption;

  @IsNotEmpty({ message: MESSAGES.VALIDATION.BASE_AMOUNT_REQUIRED })
  @IsNumberString(
    { no_symbols: true },
    { message: MESSAGES.VALIDATION.BASE_AMOUNT_INVALID }
  )
  base_amount: number;
}
