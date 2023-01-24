import React, { useEffect, useRef } from 'react';

function GoogleMap({ lat, lng }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat, lng },
            zoom: 15
        });
        const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: "marker title",
            icon: {
                url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2.png',
                scaledSize: new window.google.maps.Size(22, 40)

            }
        });

    }, [lat, lng]);

    return <div ref={mapRef} style={{ height: '400px' }} />;
}

export default GoogleMap;
