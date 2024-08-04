frappe.ui.form.on('Service Request', {
	onload(frm) {
		console.log("!!!!!!!!!!!!!!!!!!!!!!")
		frm.trigger('set_map');
        frm.trigger('set_map1');
    },
	on_save(frm) {
		frm.trigger('set_map');
        frm.trigger('set_map1');
    },
	destination_latitude(frm) {
		frm.trigger('set_map');
    },
	destination_longitude(frm) {
		frm.trigger('set_map');
    },
    pickup_latitude(frm) {
		frm.trigger('set_map1');
    },
	pickup_longitude(frm) {
		frm.trigger('set_map1');
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
	},
    set_map1(frm){
        if (frm.doc.pickup_latitude && frm.doc.pickup_longitude)
            { 
                console.log( frappe.render_template('map_html',{ 
                    latitude:frm.doc.pickup_latitude,
                    longitude:frm.doc.pickup_longitude
    
                }));
                
                frm.fields_dict.source_map.html(
                 frappe.render_template('map_html',{ 
                     latitude:frm.doc.pickup_latitude,
                     longitude:frm.doc.pickup_longitude
     
                 })
             );
            
            }
    }
})