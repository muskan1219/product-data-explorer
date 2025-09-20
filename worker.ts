/**
 * Scraper worker skeleton using Crawlee + Playwright.
 * IMPORTANT: this file is a skeleton. Installing Playwright and
 * configuring browsers is required to run it.
 *
 * Implement:
 * - rate limiting
 * - retries with exponential backoff
 * - respect robots.txt
 * - caching & deduplication
 */
import { BasicCrawler, PlaywrightCrawler, RequestQueue } from 'crawlee';

export async function startScrape(seedUrl:string){
  // Placeholder: implement a PlaywrightCrawler with proper settings
  console.log('startScrape called for', seedUrl);
  // e.g. use PlaywrightCrawler from crawlee with handlePageFunction
}
