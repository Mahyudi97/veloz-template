// Import Images
import btcCoin from "../../assets/images/svg/crypto-icons/btc.svg";
import ltcCoin from "../../assets/images/svg/crypto-icons/ltc.svg";
import ethCoin from "../../assets/images/svg/crypto-icons/eth.svg";
import etcCoin from "../../assets/images/svg/crypto-icons/etc.svg";
import bnbCoin from "../../assets/images/svg/crypto-icons/bnb.svg";
import usdtCoin from "../../assets/images/svg/crypto-icons/usdt.svg";
import dashCoin from "../../assets/images/svg/crypto-icons/dash.svg";
import neoCoin from "../../assets/images/svg/crypto-icons/neo.svg";
import dogeCoin from "../../assets/images/svg/crypto-icons/doge.svg";
import aaveCoin from "../../assets/images/svg/crypto-icons/aave.svg";

import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

const cyptoWidgets = [
    {
        id: 1,
        icon: "ri-money-dollar-circle-fill",
        label: "Total Invested",
        counter: "2390.68",
        badge: "ri-arrow-up-s-fill",
        badgeColor: "success",
        percentage: "6.24",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
    {
        id: 2,
        icon: "ri-arrow-up-circle-fill",
        label: "Total Change",
        counter: "19523.25",
        badge: "ri-arrow-up-s-fill",
        badgeColor: "success",
        percentage: "3.67",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
    {
        id: 3,
        icon: "ri-arrow-down-circle-fill",
        label: "Day Change",
        counter: "14799.44",
        badge: "ri-arrow-down-s-fill",
        badgeColor: "danger",
        percentage: "4.80",
        decimal: "2",
        prefix: "$",
        separator: ","
    },
];

const cryptoSlider = [
    {
        id: 1,
        img: btcCoin,
        label: "Bitcoin",
        price: "$1,523,647",
        change: "+13.11%",
        changeClass: "success",
        coinName: "btc",
        chartsColor: "#6ada7d",
        series: [{
            name: "Bitcoin",
            data: [85, 68, 35, 90, 8, 11, 26, 54]
        }],
    },
    {
        id: 2,
        img: ltcCoin,
        label: "Litecoin",
        price: "$2,145,687",
        change: "+15.08%",
        changeClass: "success",
        coinName: "ltc",
        chartsColor: "#6ada7d",
        series: [{
            name: "Litecoin",
            data: [25, 50, 41, 87, 12, 36, 9, 54]
        }]
    },
    {
        id: 3,
        img: etcCoin,
        label: "Eathereum",
        price: "$3,312,870",
        change: "+08.57%",
        changeClass: "success",
        coinName: "etc",
        chartsColor: "#6ada7d",
        series: [{
            name: "Eathereum",
            data: [36, 21, 65, 22, 35, 50, 29, 44]
        }],
    },
    {
        id: 4,
        img: bnbCoin,
        label: "Binance",
        price: "$1,820,045",
        change: "-09.21%",
        changeClass: "danger",
        coinName: "bnb",
        chartsColor: "#f06548",
        series: [{
            name: "Binance",
            data: [30, 58, 29, 89, 12, 36, 9, 54]
        }],
    },
    {
        id: 5,
        img: dashCoin,
        label: "Dash",
        price: "$9,458,153",
        change: "+12.07%",
        changeClass: "success",
        coinName: "dash",
        chartsColor: "#6ada7d",
        series: [{
            name: "Dash",
            data: [24, 68, 39, 86, 29, 42, 11, 58]
        }],
    },
    {
        id: 6,
        img: usdtCoin,
        label: "Tether",
        price: "$5,201,458",
        change: "+14.99%",
        changeClass: "success",
        coinName: "usdt",
        chartsColor: "#6ada7d",
        series: [{
            name: "Dash",
            data: [13, 76, 12, 85, 25, 60, 9, 54]
        }],
    },
    {
        id: 7,
        img: neoCoin,
        label: "NEO",
        price: "$6,147,957",
        change: "-05.07%",
        changeClass: "danger",
        coinName: "neo",
        chartsColor: "#f06548",
        series: [{
            name: "Neo",
            data: [9, 66, 41, 89, 12, 36, 25, 54]
        }],
    },
];

const currencies = [
    {
        id: 1,
        img: btcCoin,
        coinName: "Bitcoin",
        price: "48,568.025",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "5.26",
        balance: "53,914.025",
        totalCoin: "1.25634801",
    },
    {
        id: 2,
        img: ltcCoin,
        coinName: "Litecoin",
        price: "87,142.027",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "3.07",
        balance: "75,854.127",
        totalCoin: "2.85472161",
    },
    {
        id: 3,
        img: ethCoin,
        coinName: "Eathereum",
        price: "33,847.961",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "7.13",
        balance: "44,152.185",
        totalCoin: "1.45612347",
    },
    {
        id: 4,
        img: bnbCoin,
        coinName: "Binance",
        price: "73,654.421",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "0.97",
        balance: "48,367.125",
        totalCoin: "0.35734601",
    },
    {
        id: 5,
        img: usdtCoin,
        coinName: "Tether",
        price: "66,742.077",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "1.08",
        balance: "53,487.083",
        totalCoin: "3.62912570",
    },
    {
        id: 6,
        img: dashCoin,
        coinName: "Dash",
        price: "34,736.209",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "4.52",
        balance: "15,203.347",
        totalCoin: "1.85412740",
    },
    {
        id: 7,
        img: neoCoin,
        coinName: "Neo",
        price: "56,357.313",
        iconClass: "danger",
        icon: "mdi mdi-trending-down",
        change: "2.87",
        balance: "61,843.173",
        totalCoin: "1.87732061",
    },
    {
        id: 8,
        img: dogeCoin,
        coinName: "Dogecoin",
        price: "62,357.649",
        iconClass: "success",
        icon: "mdi mdi-trending-up",
        change: "3.45",
        balance: "54,843.173",
        totalCoin: "0.95632087",
    },
];

const recentActivity = [
    { id: 1, date: "25 Dec 2021", isDate: true },
    {
        id: 2,
        feaIcon: "arrow-down-circle",
        feaIconClass: "success",
        label: "Bought Bitcoin",
        caption: "Visa Debit Card ***6",
        captionColor: "success",
        coinActivity: "+0.04025745",
        coinActivityClass: "success",
        coinName: "Btc",
        price: "+878.52",
    },
    {
        id: 3,
        feaIcon: "send",
        feaIconClass: "warning",
        label: "Sent Eathereum",
        caption: " Sofia Cunha",
        captionColor: "warning",
        coinActivity: "-0.09025182",
        coinActivityClass: "muted",
        coinName: "Eth",
        price: "-659.35",
    },
    { id: 4, date: "24 Dec 2021", isDate: true },
    {
        id: 5,
        feaIcon: "arrow-up-circle",
        feaIconClass: "danger",
        label: "Sell Dash",
        caption: "www.cryptomarket.com",
        captionColor: "danger",
        coinActivity: "-98.6025422",
        coinActivityClass: "danger",
        coinName: "Dash",
        price: "-1508.98",
    },
    {
        id: 6,
        feaIcon: "arrow-up-circle",
        feaIconClass: "danger",
        label: "Sell Dogecoin",
        caption: "www.coinmarket.com",
        captionColor: "success",
        coinActivity: "-1058.08025142",
        coinActivityClass: "danger",
        coinName: "Doge",
        price: "-89.3",
    },
    {
        id: 7,
        feaIcon: "arrow-up-circle",
        feaIconClass: "success",
        label: "Bought Litecoin",
        caption: "Payment via Wallet",
        captionColor: "warning",
        coinActivity: "+0.07225912",
        coinActivityClass: "success",
        coinName: "Ltc",
        price: "+759.45",
    },
    { id: 8, date: "20 Dec 2021", isDate: true },
    {
        id: 9,
        feaIcon: "send",
        feaIconClass: "warning",
        label: "Sent Eathereum",
        caption: " Sofia Cunha",
        captionColor: "warning",
        coinActivity: "-0.09025182",
        coinActivityClass: "muted",
        coinName: "Eth",
        price: "-659.35",
    },
    {
        id: 10,
        feaIcon: "arrow-down-circle",
        feaIconClass: "success",
        label: "Bought Bitcoin",
        caption: "Visa Debit Card ***6",
        captionColor: "success",
        coinActivity: "+0.04025745",
        coinActivityClass: "success",
        coinName: "Btc",
        price: "+878.52",
    },
];

const topPerformers = [
    {
        id: 1,
        img: btcCoin,
        coinName: "Bitcoin",
        marketCap: "18.7",
        price: "12,863.08",
        change: "+$67.21",
        textColor: "success",
        percentage: "+4.33%",
    },
    {
        id: 2,
        img: ethCoin,
        coinName: "Eathereum",
        marketCap: "27.4",
        price: "08,256.04",
        change: "+$51.19",
        textColor: "success",
        percentage: "+5.64%",
    },
    {
        id: 3,
        img: aaveCoin,
        coinName: "Avalanche",
        marketCap: "12.9",
        price: "11,896.13",
        change: "-$59.01",
        textColor: "danger",
        percentage: "-4.08%",
    },
    {
        id: 4,
        img: dogeCoin,
        coinName: "Dogecoin",
        marketCap: "09.5",
        price: "15,999.06",
        change: "+$74.05",
        textColor: "success",
        percentage: "+3.12%",
    },
    {
        id: 5,
        img: bnbCoin,
        coinName: "Binance",
        marketCap: "14.2",
        price: "13,786.18",
        change: "-$61.05",
        textColor: "danger",
        percentage: "-9.22%",
    },
    {
        id: 6,
        img: ltcCoin,
        coinName: "Litecoin",
        marketCap: "09.5",
        price: "10,604.27",
        change: "+$76.12",
        textColor: "success",
        percentage: "+4.92%",
    },
];

const newsFeed = [
    {
        id: 1,
        img: img1,
        caption:
            "One stop shop destination on all the latest news in crypto currencies",
        date: "Dec 12, 2021",
        time: "09:22 AM",
    },
    {
        id: 2,
        img: img2,
        caption:
            "Coin Journal is dedicated to delivering stories on the latest crypto",
        date: "Dec 03, 2021",
        time: "12:09 PM",
    },
    {
        id: 3,
        img: img3,
        caption:
            "The bitcoin-holding U.S. senator is trying to “fully integrate” crypto ",
        date: "Nov 22, 2021",
        time: "11:47 AM",
    },
    {
        id: 4,
        img: img6,
        caption:
            "Cryptocurrency price like Bitcoin, Dash, Dogecoin, Ripple and Litecoin",
        date: "Nov 18, 2021",
        time: "06:13 PM",
    },
];

// My Portfolio
const btcPortfolioData = [19405, 40552, 15824, 30635];
const usdPortfolioData = [9405, 20552, 5824, 20635];
const euroPortfolioData = [29405, 50552, 25824, 40635];

// Market Graph
const MarketGraphAll = [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
    },
    {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
    },
    {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
    },
    {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
    },
    {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
    },
    {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
    },
    {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
    },
    {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
    },
    {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
    },
    {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
}];

const MarketGraphYear = [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
    },
    {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
    },
    {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
    },
    {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
    },
    {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
    },
    {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
    },
    {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
    },
    {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
    },
    {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
    },
    {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
}];

const MarketGraphMonth = [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
    },
    {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
    },
    {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
    },
    {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
    },
    {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
    },
    {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
    },
    {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
    },
    {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
    },
    {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
    },
    {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
}];

const MarketGraphWeek = [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
    },
    {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
    },
    {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
    },
    {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
    },
    {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
    },
    {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
    },
    {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
    },
    {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
    },
    {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
    },
    {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
}];

const MarketGraphHour = [{
    data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
    },
    {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
    },
    {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
    },
    {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
    },
    {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
    },
    {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
    },
    {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
    },
    {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
    },
    {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
    },
    {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
    },
    {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
    },
    {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
    },
    {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
    },
    {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
    },
    {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
    },
    {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
    },
    {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
    },
    {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
    },
    {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
    },
    {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
    },
    {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
    },
    {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
    },
    {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
    },
    {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
    },
    {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
    },
    {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
    },
    {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
    },
    {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
    },
    {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
    },
    {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
    },
    {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
    },
    ]
}];

export { cyptoWidgets, currencies, recentActivity, topPerformers, newsFeed, cryptoSlider, btcPortfolioData, usdPortfolioData, euroPortfolioData, MarketGraphAll, MarketGraphYear, MarketGraphMonth, MarketGraphWeek, MarketGraphHour};
