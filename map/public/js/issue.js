frappe.ui.form.on('Issue', {
	onload(frm) {
	    frm.fields_dict.custom_map.html(
			frappe.render_template('map_html')
		);
    }
})