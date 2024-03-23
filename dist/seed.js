"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = __importDefault(require("./City"));
const db_1 = __importDefault(require("./db"));
db_1.default.once('open', async () => {
    await City_1.default.deleteMany();
    const cities = [
        {
            name: 'Mumbai',
            neighbors: [
                { name: 'Delhi', distance: 1400 },
                { name: 'Bangalore', distance: 980 },
                { name: 'Chennai', distance: 1330 },
                { name: 'Kolkata', distance: 1960 },
                { name: 'Hyderabad', distance: 710 },
                { name: 'Pune', distance: 150 },
                { name: 'Ahmedabad', distance: 530 },
                { name: 'Jaipur', distance: 1150 },
                { name: 'Lucknow', distance: 1440 },
                { name: 'Kanpur', distance: 1340 },
                { name: 'Nagpur', distance: 840 },
            ],
        },
        {
            name: 'Delhi',
            neighbors: [
                { name: 'Mumbai', distance: 1400 },
                { name: 'Bangalore', distance: 1750 },
                { name: 'Chennai', distance: 2190 },
                { name: 'Kolkata', distance: 1470 },
                { name: 'Hyderabad', distance: 1550 },
                { name: 'Pune', distance: 1430 },
                { name: 'Ahmedabad', distance: 910 },
                { name: 'Jaipur', distance: 270 },
                { name: 'Lucknow', distance: 550 },
                { name: 'Kanpur', distance: 490 },
                { name: 'Nagpur', distance: 970 },
            ],
        },
        {
            name: 'Bangalore',
            neighbors: [
                { name: 'Mumbai', distance: 980 },
                { name: 'Delhi', distance: 1750 },
                { name: 'Chennai', distance: 350 },
                { name: 'Kolkata', distance: 1860 },
                { name: 'Hyderabad', distance: 570 },
                { name: 'Pune', distance: 840 },
                { name: 'Ahmedabad', distance: 1400 },
                { name: 'Jaipur', distance: 2000 },
                { name: 'Lucknow', distance: 1910 },
                { name: 'Kanpur', distance: 1810 },
                { name: 'Nagpur', distance: 1040 },
            ],
        },
        {
            name: 'Chennai',
            neighbors: [
                { name: 'Mumbai', distance: 1330 },
                { name: 'Delhi', distance: 2190 },
                { name: 'Bangalore', distance: 350 },
                { name: 'Kolkata', distance: 1660 },
                { name: 'Hyderabad', distance: 625 },
                { name: 'Pune', distance: 1180 },
                { name: 'Ahmedabad', distance: 1750 },
                { name: 'Jaipur', distance: 2400 },
                { name: 'Lucknow', distance: 2190 },
                { name: 'Kanpur', distance: 2090 },
                { name: 'Nagpur', distance: 1100 },
            ],
        },
        {
            name: 'Kolkata',
            neighbors: [
                { name: 'Mumbai', distance: 1960 },
                { name: 'Delhi', distance: 1470 },
                { name: 'Bangalore', distance: 1860 },
                { name: 'Chennai', distance: 1660 },
                { name: 'Hyderabad', distance: 1460 },
                { name: 'Pune', distance: 2060 },
                { name: 'Ahmedabad', distance: 2200 },
                { name: 'Jaipur', distance: 1650 },
                { name: 'Lucknow', distance: 980 },
                { name: 'Kanpur', distance: 880 },
                { name: 'Nagpur', distance: 1160 },
            ],
        },
        {
            name: 'Hyderabad',
            neighbors: [
                { name: 'Mumbai', distance: 710 },
                { name: 'Delhi', distance: 1550 },
                { name: 'Bangalore', distance: 570 },
                { name: 'Chennai', distance: 625 },
                { name: 'Kolkata', distance: 1460 },
                { name: 'Pune', distance: 560 },
                { name: 'Ahmedabad', distance: 1230 },
                { name: 'Jaipur', distance: 1780 },
                { name: 'Lucknow', distance: 1590 },
                { name: 'Kanpur', distance: 1490 },
                { name: 'Nagpur', distance: 500 },
            ],
        },
        {
            name: 'Pune',
            neighbors: [
                { name: 'Mumbai', distance: 150 },
                { name: 'Delhi', distance: 1430 },
                { name: 'Bangalore', distance: 840 },
                { name: 'Chennai', distance: 1180 },
                { name: 'Kolkata', distance: 2060 },
                { name: 'Hyderabad', distance: 560 },
                { name: 'Ahmedabad', distance: 660 },
                { name: 'Jaipur', distance: 1250 },
                { name: 'Lucknow', distance: 1450 },
                { name: 'Kanpur', distance: 1340 },
                { name: 'Nagpur', distance: 910 },
            ],
        },
        {
            name: 'Ahmedabad',
            neighbors: [
                { name: 'Mumbai', distance: 530 },
                { name: 'Delhi', distance: 910 },
                { name: 'Bangalore', distance: 1400 },
                { name: 'Chennai', distance: 1750 },
                { name: 'Kolkata', distance: 2200 },
                { name: 'Hyderabad', distance: 1230 },
                { name: 'Pune', distance: 660 },
                { name: 'Jaipur', distance: 670 },
                { name: 'Lucknow', distance: 1170 },
                { name: 'Kanpur', distance: 1070 },
                { name: 'Nagpur', distance: 860 },
            ],
        },
        {
            name: 'Jaipur',
            neighbors: [
                { name: 'Mumbai', distance: 1150 },
                { name: 'Delhi', distance: 270 },
                { name: 'Bangalore', distance: 2000 },
                { name: 'Chennai', distance: 2400 },
                { name: 'Kolkata', distance: 1650 },
                { name: 'Hyderabad', distance: 1780 },
                { name: 'Pune', distance: 1250 },
                { name: 'Ahmedabad', distance: 670 },
                { name: 'Lucknow', distance: 590 },
                { name: 'Kanpur', distance: 480 },
                { name: 'Nagpur', distance: 1100 },
            ],
        },
        {
            name: 'Lucknow',
            neighbors: [
                { name: 'Mumbai', distance: 1440 },
                { name: 'Delhi', distance: 550 },
                { name: 'Bangalore', distance: 1910 },
                { name: 'Chennai', distance: 2190 },
                { name: 'Kolkata', distance: 980 },
                { name: 'Hyderabad', distance: 1590 },
                { name: 'Pune', distance: 1450 },
                { name: 'Ahmedabad', distance: 1170 },
                { name: 'Jaipur', distance: 590 },
                { name: 'Kanpur', distance: 100 },
                { name: 'Nagpur', distance: 860 },
            ],
        },
        {
            name: 'Kanpur',
            neighbors: [
                { name: 'Mumbai', distance: 1340 },
                { name: 'Delhi', distance: 490 },
                { name: 'Bangalore', distance: 1810 },
                { name: 'Chennai', distance: 2090 },
                { name: 'Kolkata', distance: 880 },
                { name: 'Hyderabad', distance: 1490 },
                { name: 'Pune', distance: 1340 },
                { name: 'Ahmedabad', distance: 1070 },
                { name: 'Jaipur', distance: 480 },
                { name: 'Lucknow', distance: 100 },
                { name: 'Nagpur', distance: 700 },
            ],
        },
        {
            name: 'Nagpur',
            neighbors: [
                { name: 'Mumbai', distance: 840 },
                { name: 'Delhi', distance: 970 },
                { name: 'Bangalore', distance: 1040 },
                { name: 'Chennai', distance: 1100 },
                { name: 'Kolkata', distance: 1160 },
                { name: 'Hyderabad', distance: 500 },
                { name: 'Pune', distance: 910 },
                { name: 'Ahmedabad', distance: 860 },
                { name: 'Jaipur', distance: 1100 },
                { name: 'Lucknow', distance: 860 },
                { name: 'Kanpur', distance: 700 },
            ],
        },
        {
            name: 'Chandigarh',
            neighbors: [
                { name: 'Delhi', distance: 260 },
                { name: 'Jaipur', distance: 500 },
                { name: 'Lucknow', distance: 640 },
                { name: 'Amritsar', distance: 230 },
                { name: 'Shimla', distance: 110 },
            ],
        },
        {
            name: 'Surat',
            neighbors: [
                { name: 'Mumbai', distance: 280 },
                { name: 'Ahmedabad', distance: 260 },
                { name: 'Pune', distance: 420 },
                { name: 'Vadodara', distance: 150 },
                { name: 'Nashik', distance: 220 },
            ],
        },
        {
            name: 'Visakhapatnam',
            neighbors: [
                { name: 'Chennai', distance: 800 },
                { name: 'Vijayawada', distance: 350 },
                { name: 'Hyderabad', distance: 600 },
                { name: 'Bhubaneswar', distance: 440 },
                { name: 'Raipur', distance: 630 },
            ],
        },
        {
            name: 'Bhopal',
            neighbors: [
                { name: 'Indore', distance: 190 },
                { name: 'Nagpur', distance: 390 },
                { name: 'Ahmedabad', distance: 520 },
                { name: 'Jaipur', distance: 590 },
                { name: 'Lucknow', distance: 780 },
            ],
        }
    ];
    await City_1.default.insertMany(cities);
    console.log('Example data inserted.');
    process.exit();
});
//# sourceMappingURL=seed.js.map