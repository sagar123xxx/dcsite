// JavaScript Document
	$( document ).on( "pageinit", "#page", function() {
			
			$( document ).on( "swipeleft swiperight", "#page", function( e ) {
				// We check if there is no open panel on the page because otherwise
				// a swipe to close the left panel would also open the right panel (and v.v.).
				// We do this by checking the data that the framework stores on the page element (panel: open).
				if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
					if ( e.type === "swipeleft"  ) {
						$( "#right-panel" ).panel( "open" );
					} else if ( e.type === "swiperight" ) {
						$( "#left-panel" ).panel( "open" );
					}
				}
			});
		});
		$( document ).on( "pageinit", "#unit7", function() {
			
			$( document ).on( "swipeleft swiperight", "#unit7", function( e ) {
				// We check if there is no open panel on the page because otherwise
				// a swipe to close the left panel would also open the right panel (and v.v.).
				// We do this by checking the data that the framework stores on the page element (panel: open).
				if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
					if ( e.type === "swipeleft"  ) {
						$( "#right-panel1" ).panel( "open" );
					} else if ( e.type === "swiperight" ) {
						$( "#left-panel1" ).panel( "open" );
					}
				}
			});
		});
	