(function($) {
  $('#new_spree_wished_product').on('submit', function() {
    selected_variant_id = $('#product-variants input[type=radio]:checked').val();
    if (selected_variant_id)
    {
      $('#wished_product_variant_id').val(selected_variant_id);
    }
  });

  $('form#change_wishlist_accessibility').on('submit', function() {
    $.post($(this).attr('action'), $(this).serialize(), null, 'script');
    return false;
  });

  $('form#change_wishlist_accessibility input[type=radio]').on('click', function() {
    $(this).parent().submit();
  });
})(jQuery);
