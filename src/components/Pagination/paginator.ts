interface IPaginator {
  perPage: number;
  length: number;
  totalResults: number;
  currentPage: number;
}

export default function({ perPage, length, totalResults, currentPage}: IPaginator) {
  // We want the number of pages, rounded up to the nearest page.
  var totalPages = Math.ceil(totalResults / perPage);

  // Obviously we can't be on a negative or 0 page.
  if (currentPage < 1) { currentPage = 1; }
  // If the user has done something like /page/99999 we want to clamp that back
  // down.
  if (currentPage > totalPages) { currentPage = totalPages; }

  // This is the first page to be displayed as a numbered link.
  var firstPage = Math.max(1, currentPage - Math.floor(length / 2));

  // And here's the last page to be displayed specifically.
  var lastPage = Math.min(totalPages, currentPage + Math.floor(length / 2));

  // This is triggered if we're at or near one of the extremes; we won't have
  // enough page links. We need to adjust our bounds accordingly.
  if (lastPage - firstPage + 1 < length) {
    if (currentPage < (totalPages / 2)) {
      lastPage = Math.min(totalPages, lastPage + (length - (lastPage - firstPage)));
    } else {
      firstPage = Math.max(1, firstPage - (length - (lastPage - firstPage)));
    }
  }

  // This can be triggered if the user wants an odd number of pages.
  if (lastPage - firstPage + 1 > length) {
    // We want to move towards whatever extreme we're closest to at the time.
    if (currentPage > (totalPages / 2)) {
      firstPage++;
    } else {
      lastPage--;
    }
  }

  return {
    firstPage,
    lastPage,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
  };
}
