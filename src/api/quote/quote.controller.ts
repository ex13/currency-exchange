import { Controller, Get, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteRequestDto } from './dto/quote-request.dto';
import { QuoteResponseDto } from './dto/quote-response.dto';
import { Cache } from './decorators/cache.decorator';
import { DEFAULT_CACHE_TTL, DEFAULT_CACHE_CAPACITY } from './constants/cache';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  @Cache({
    ttl: DEFAULT_CACHE_TTL,
    capacity: DEFAULT_CACHE_CAPACITY,
  })
  getQuote(@Query() query: QuoteRequestDto): Promise<QuoteResponseDto> {
    return this.quoteService.getQuote(query);
  }
}
