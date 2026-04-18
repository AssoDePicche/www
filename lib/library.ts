export interface BookDimensions {
  width: number;
  height: number;
  unit: string;
}

export interface Book {
  isbn: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publisher: string;
  synopsis: string;
  dimensions: BookDimensions;
  year: number;
  format: string;
  page_count: number;
  subjects: string[];
  location: string;
  retail_price?: number;
  cover_url?: string;
  provider: string;
}

export async function fetchBook(isbn: string): Promise<Book> {
  const URL = "https://brasilapi.com.br/api/isbn/v1/" + isbn;

  const response = await fetch(URL);

  return await response.json();
}

export const fetchBookCover = (isbn: string): string => {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
};
