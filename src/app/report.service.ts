import { Injectable } from '@angular/core';

/**
 * Fetches rendered reports.
 *
 * Added on a branch so the pull request has findings of its own.
 */
@Injectable({ providedIn: 'root' })
export class ReportService {
  // Hardcoded, and over plain HTTP.
  private endpoint = 'http://reports.internal.example.com/api';

  render(container: HTMLElement, report: any): void {
    // The payload is written into the page as markup.
    container.innerHTML = report.body;
  }

  async load(id: any): Promise<any> {
    const response = await fetch(this.endpoint + '/report/' + id);
    try {
      return await response.json();
    } catch (e) {}
    return null;
  }
}
