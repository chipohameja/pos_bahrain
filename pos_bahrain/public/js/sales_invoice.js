frappe.ui.form.on('Sales Invoice', {
  refresh: function (frm) {
    _create_custom_buttons(frm);
    pos_bahrain.scripts.extensions.hide_sales_return('Return / Credit Note', 'Create');
  },
});


function _create_custom_buttons(frm) {
  if (frm.doc.docstatus !== 1) {
    return;
  }
  frm.add_custom_button(__("Purchase Invoice"), function () {
    _make_purchase_invoice(frm);
  }, __("Create"));
}


function _make_purchase_invoice(frm) {
  frappe.model.open_mapped_doc({
    method: "pos_bahrain.api.sales_invoice.make_purchase_invoice",
    frm,
  });
}
