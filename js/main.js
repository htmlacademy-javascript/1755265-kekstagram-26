let newComment = document.querySelector('.social__footer-text');

function amountCommentary(field, size) {
  if (field.value.length < size) {
    newComment++;
  } else {
    newComment--;
  }
  return amountCommentary;
}

amountCommentary(newComment,140);
