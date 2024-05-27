frappe.ui.form.on('Issue', {
	onload(frm) {
		frm.trigger('set_map');
    },
	on_save(frm) {
		frm.trigger('set_map');
    },
	custom_latitude(frm) {
		frm.trigger('set_map');
    },
	custom_longitude(frm) {
		frm.trigger('set_map');
    },
	set_map(frm){
		if (frm.doc.custom_latitude && frm.doc.custom_longitude)
			{ frm.fields_dict.custom_map.html(
				 frappe.render_template('map_html',{ 
					 latitude:frm.doc.custom_latitude,
					 longitude:frm.doc.custom_longitude
	 
				 })
			 );}
	}
})