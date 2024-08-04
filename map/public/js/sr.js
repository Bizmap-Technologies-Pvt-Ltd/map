frappe.ui.form.on('SR', {
	onload(frm) {
		console.log("!!!!!!!!!!!!!!!!!!!!!!")
		frm.trigger('set_map');
    },
	on_save(frm) {
		frm.trigger('set_map');
    },
	destination_latitude(frm) {
		frm.trigger('set_map');
    },
	destination_longitude(frm) {
		frm.trigger('set_map');
    },
	set_map(frm){
		if (frm.doc.destination_latitude && frm.doc.destination_longitude)
			{ 
				console.log( frappe.render_template('map1_html',{ 
					latitude:frm.doc.destination_latitude,
					longitude:frm.doc.destination_longitude
	
				}));
				
				frm.fields_dict.destination_map.html(
				 frappe.render_template('map1_html',{ 
					 latitude:frm.doc.destination_latitude,
					 longitude:frm.doc.destination_longitude
	 
				 })
			 );}
	}
})