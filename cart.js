let cartCount = 0;

// Lấy giá trị từ URL (nếu có)
function getCartCountFromURL() {
  const params = new URLSearchParams(window.location.search);
  const count = parseInt(params.get('cart'));
  return isNaN(count) ? 0 : count;
}

// Cập nhật giao diện
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  if (cartCountElement) cartCountElement.textContent = cartCount;
}

// Gắn sự kiện thêm sản phẩm
document.addEventListener('DOMContentLoaded', () => {
  cartCount = getCartCountFromURL();
  updateCartCount();

  const buttons = document.querySelectorAll('.product button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      updateCartCount();

      // Gán lại ?cart= lên tất cả link
      document.querySelectorAll('a').forEach(link => {
        const url = new URL(link.href);
        url.searchParams.set('cart', cartCount);
        link.href = url.toString();
      });
    });
  });
});
