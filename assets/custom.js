var recommendSelects = document.querySelectorAll('.recommend-select');

recommendSelects.forEach(function(select){
    select.addEventListener('change', function(){
        var selectVariantId = this.value;
        // console.log('aa', selectVariantId);
        var hiddenInput = this.closest('.recommend-upsell-wrapper').querySelector('[input="id"]');
        hiddenInput = selectVariantId;
        console.log('aa',  hiddenInput);

        var options = this.options;
        for (var i = 0; i < options.length; i++) {
           options[i].removeAttribute('selected');
        }

        var selectOption = this.querySelector(`option[value="${selectVariantId}"]`);
        selectOption.setAttribute('selected', 'selected');
    });
});

  class CartRecommendations extends HTMLElement {
    constructor() {
      super();
      this.form = this.querySelector('form');
      new theme.AjaxProduct(this.form);
    }
}

customElements.define('cart-recommendations', CartRecommendations);

document.querySelector("#product-discount").addEventListener("click", () => {
    const discountValue = parseInt(document.querySelector("#discount-value").value);
    let protectPriceStr = document.querySelector(".shipping-protection--product__price").innerHTML;
    let discountTotalAmount = document.querySelector("#discount-origin-value").value / 100;
    
    const protectPrice = parseInt(protectPriceStr.replace("$", ""));
    const totalDiscontPrice = parseFloat(protectPrice / discountValue);

    if (document.querySelector("#product-discount").checked) {
        discountTotalAmount += totalDiscontPrice;
        document.querySelector(".discount-total-amount").innerHTML = `$${Number(discountTotalAmount).toFixed(2)}`;
    } else {
        discountTotalAmount = document.querySelector("#discount-origin-value").value / 100;
        document.querySelector(".discount-total-amount").innerHTML = `$${Number(discountTotalAmount).toFixed(2)}`;
    }
});