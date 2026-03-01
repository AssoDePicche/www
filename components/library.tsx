"use client";

import { useEffect, useState } from "react";

import { type Book, fetchBook } from "@lib/library";

interface Properties {
  books: string[];
}

function BookComponent({ isbn }: { isbn: string }) {
  const [book, setBook] = useState<Book | null>(null);

  const fetchData = async () => {
    fetchBook(isbn).then(setBook);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!book) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div>
      <div>
        <p className="capitalize">{book.title}</p>
      </div>
    </div>
  );
}

export function Library(properties: Properties) {
  return (
    <div>
      {properties.books.map((book, index) => (<BookComponent key={index} isbn={book}/>))}
    </div>
  );
}
