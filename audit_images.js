
const fs = require('fs');
const path = require('path');

const productData = [
    { id: "1", name: "LINICH 3100 Auto Puller", image: "/images/products/1-linich-auto-puller.jpg" },
    { id: "2", name: "LINICH Spot Welder LCR-70", image: "/images/products/2-spot-welder-lcr-70.jpg" },
    { id: "3", name: "CAR-O-LINER CTR-9 Inverter Spot Welder", image: "/images/products/6-car-o-liner-cm-250-equipment.jpg" },
    { id: "4", name: "CAR-O-LINER CRX Spot Welder", image: "/images/products/35-car-o-liner-equipment.jpg" },
    { id: "5", name: "Blue Point Inverter MIG Welder 160A", image: "/images/products/1-linich-auto-mig-250-xl.jpg" },
    { id: "6", name: "AutoMIG MW-250 3-Phase MIG Welder", image: "/images/products/3-automig-mw-250-xl-welder.jpg" },
    { id: "7", name: "4-Ton Hydraulic Two-Post Lift", image: "/images/products/4-hydraulic-two-post-lift.jpg" },
    { id: "8", name: "5-Ton Floor Jack", image: "/images/products/8-floor-jack-5ton.jpg" },
    { id: "9", name: "Engine Crane 0.5 Ton", image: "/images/products/9-engine-crane-500kg.jpg" },
    { id: "10", name: "Engine Crane 2 Ton", image: "/images/products/10-engine-crane-2ton.jpg" },
    { id: "11", name: "Engine Stand 450kg", image: "/images/products/11-engine-stand.jpg" },
    { id: "12", name: "Transmission Jack 0.5 Ton", image: "/images/products/12-trans-jack-500kg.jpg" },
    { id: "13", name: "Transmission Jack 1 Ton", image: "/images/products/13-trans-jack-1ton.jpg" },
    { id: "14", name: "Transmission Jack 2 Ton", image: "/images/products/14-trans-jack-2ton.jpg" },
    { id: "15", name: "Hydraulic Press 20 Ton", image: "/images/products/15-hydraulic-press-20ton.jpg" },
    { id: "16", name: "Hydraulic Press 30 Ton", image: "/images/products/16-hydraulic-press-30ton.jpg" },
    { id: "17", name: "Hydraulic Press 50 Ton", image: "/images/products/17-hydraulic-press-50ton.jpg" },
    { id: "18", name: "SATAjet 1000 IC Paint Spray Gun", image: "/images/products/18-sata-jet-1000ic.jpg" },
    { id: "19", name: "DeVilbiss DV1 Basecoat Spray Gun", image: "/images/products/19-devilbiss-dv1.jpg" },
    { id: "20", name: "DeVilbiss ProLite Spray Gun", image: "/images/products/20-devilbiss-prolite.jpg" },
    { id: "21", name: "3M Performance Spray Gun", image: "/images/products/21-3m-performance.jpg" },
    { id: "22", name: "Rexter Paint Gun Professional", image: "/images/products/22-rexter-paint-gun.jpg" },
    { id: "23", name: "Infrared Paint Booth 3000W", image: "/images/products/23-infrared-booth.jpg" },
    { id: "24", name: "Infrared Heat Gun Professional", image: "/images/products/24-infrared-heat-gun.jpg" },
    { id: "25", name: "LINICH Air Compressor 30L", image: "/images/products/25-air-comp-30l.jpg" },
    { id: "26", name: "LINICH Air Compressor 80L", image: "/images/products/26-air-comp-80l.jpg" },
    { id: "27", name: "Air Compressor 50L Tank", image: "/images/products/27-air-comp-50l.jpg" },
    { id: "28", name: "Vacuum Cleaner for Workshops", image: "/images/products/28-vacuum-cleaner.jpg" },
    { id: "29", name: "PCL SUMO Nitrogen Generator", image: "/images/products/29-pcl-nitrogen.jpg" },
    { id: "30", name: "ACCURA Compact D60 Digital Inflator", image: "/images/products/30-accura-d60.jpg" },
    { id: "31", name: "ACCURA QUBE Digital Inflator", image: "/images/products/31-accura-qube.jpg" },
    { id: "32", name: "Bearing Puller Set", image: "/images/products/32-bearing-puller-set.jpg" },
    { id: "33", name: "Spring Compressor Hydraulic", image: "/images/products/33-spring-compressor.jpg" },
    { id: "34", name: "Fluke Digital Multimeter", image: "/images/products/34-fluke-multimeter.jpg" },
    { id: "35", name: "Mitutoyo Micrometer 25mm", image: "/images/products/35-mitutoyo-micrometer.jpg" },
    { id: "36", name: "Vernier Caliper Mitutoyo", image: "/images/products/36-vernier-caliper.jpg" },
    { id: "37", name: "Digital Tyre Pressure Gauge", image: "/images/products/37-tyre-gauge.jpg" },
    { id: "38", name: "Bosch Angle Grinder GWS 800", image: "/images/products/38-bosch-gws-800.jpg" },
    { id: "39", name: "Bosch Rotary Drill GBS 600", image: "/images/products/39-bosch-gbs-600.jpg" },
    { id: "40", name: "Bosch Heat Gun GHG 180", image: "/images/products/40-bosch-heat-gun.jpg" },
    { id: "41", name: "DeWALT Angle Grinder 800W", image: "/images/products/41-dewalt-grinder.jpg" },
    { id: "42", name: "Mirka Orbital Sander", image: "/images/products/42-mirka-sander.jpg" },
    { id: "43", name: "Menzerna Polishing Compounds", image: "/images/products/43-menzerna-compounds.jpg" },
    { id: "44", name: "MaxShine Cordless Polisher", image: "/images/products/44-maxshine-polisher.jpg" },
    { id: "45", name: "Tool Storage Chest Heavy Duty", image: "/images/products/45-tool-storage-chest.jpg" },
    { id: "46", name: "Tool Box Storage Portable", image: "/images/products/46-tool-box.jpg" }
];

const productsDir = path.join(__dirname, 'public', 'images', 'products');
const actualFiles = fs.readdirSync(productsDir);

const results = {
    exactMatch: [],
    nameMatchOnly: [],
    missing: []
};

productData.forEach(p => {
    const expectedFileName = p.image.split('/').pop();

    if (actualFiles.includes(expectedFileName)) {
        results.exactMatch.push({ id: p.id, name: p.name, file: expectedFileName });
    } else {
        // Try to find a file with a similar name (ignoring prefix number)
        const expectedNamePart = expectedFileName.replace(/^\d+-/, '').replace('.jpg', '');
        const found = actualFiles.find(f => f.includes(expectedNamePart));

        if (found) {
            results.nameMatchOnly.push({ id: p.id, name: p.name, expected: expectedFileName, found: found });
        } else {
            results.missing.push({ id: p.id, name: p.name, expected: expectedFileName });
        }
    }
});

console.log(JSON.stringify(results, null, 2));
