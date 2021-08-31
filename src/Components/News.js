import React, { Component } from 'react'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Matt Egan, CNN Business",
            "title": "Progressives led by AOC call for Biden to replace Fed Chair Powell - CNN",
            "description": "Progressive Democrats, including New York Rep. Alexandria Ocasio-Cortez, are calling on President Joe Biden to give the Federal Reserve a sweeping makeover by replacing Jerome Powell as chairman.",
            "url": "https://www.cnn.com/2021/08/31/economy/jerome-powell-fed-aoc/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210831092117-federal-reserve-0825-restricted-super-tease.jpg",
            "publishedAt": "2021-08-31T13:54:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Nichola Groom,Valerie Volcovici",
            "title": "Biden administration aims to cut costs for solar, wind projects on public land - Reuters",
            "description": "The Biden administration plans to make federal lands cheaper to access for solar and wind power developers after the clean power industry argued in a lobbying push this year that lease rates and fees are too high to draw investment and could torpedo the presi…",
            "url": "https://www.reuters.com/world/us/exclusive-biden-administration-aims-cut-costs-solar-wind-projects-public-land-2021-08-31/",
            "urlToImage": "https://www.reuters.com/resizer/VQEnSHNSCrWwrtH1FCBbrxMZ7dY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6V7CXQ5HMNNANCU7VQLANHMIL4.jpg",
            "publishedAt": "2021-08-31T13:52:00Z",
            "content": "LOS ANGELES/WASHINGTON, Aug 31 (Reuters) - The Biden administration plans to make federal lands cheaper to access for solar and wind power developers after the clean power industry argued in a lobbyi… [+4365 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Peter Valdes-Dapena, CNN Business",
            "title": "Here's what it's like to drive a new $100,000 Jeep - CNN",
            "description": "Cruising up a highway heading north out of New York City, the bright white Jeep Grand Wagoneer I was driving got the sort of attention usually given to Lamborghinis and Ferraris. Other vehicles maneuvered to get a better look and smartphones were held out thr…",
            "url": "https://www.cnn.com/2021/08/31/success/jeep-grand-wagoneer-review/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210310171626-02-new-jeep-grand-wagoneer-super-tease.jpg",
            "publishedAt": "2021-08-31T13:39:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Dror Poleg",
            "title": "Here Are The Winners of Remote Work - The New York Times",
            "description": "There are already examples of how gains are captured by the few and not the many.",
            "url": "https://www.nytimes.com/2021/08/31/upshot/remote-work.html",
            "urlToImage": "https://static01.nyt.com/images/2021/08/17/upshot/00up-remote-work1/00up-remote-work1-facebookJumbo.jpg",
            "publishedAt": "2021-08-31T13:20:25Z",
            "content": "This trend continued into the 21st century. According to a 2020 study by the economists David Autor, Claudia Goldin and Lawrence F. Katz, most of the increase in income inequality over the past two d… [+2547 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "James Willhite",
            "title": "Zoom Video, AMC, CrowdStrike: What to Watch When the Stock Market Opens Today - The Wall Street Journal",
            "description": "Futures put Wall Street indexes on track to hover near records",
            "url": "https://www.wsj.com/articles/zoom-video-amc-crowdstrike-what-to-watch-when-the-stock-market-opens-today-11630406640",
            "urlToImage": "https://images.wsj.net/im-371470/social",
            "publishedAt": "2021-08-31T13:20:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Lauren Thomas",
            "title": "Sustainable shoe maker Allbirds files for IPO and reveals continued losses - CNBC",
            "description": "The sustainable shoe maker Allbirds said it has lost money since its inception and expects it will continue to be unprofitable for the foreseeable future.",
            "url": "https://www.cnbc.com/2021/08/31/shoe-maker-allbirds-files-for-ipo-and-reveals-continued-losses.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/105096250-allbirds.jpg?v=1522270873",
            "publishedAt": "2021-08-31T13:09:21Z",
            "content": "The sustainable shoe maker Allbirds said Tuesday that it has lost money since its inception and expects it will continue to be unprofitable for the foreseeable future, as it prepares to debut on Wall… [+2387 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Diana Olick",
            "title": "Soaring home prices shattered another record in June, S&P Case-Shiller says - CNBC",
            "description": "Home prices in the U.S. are now 41% higher than their last peak during the housing boom in 2006.",
            "url": "https://www.cnbc.com/2021/08/31/home-prices-surged-in-june-shattering-another-record-sp-case-shiller-says.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106872971-1619185782795-gettyimages-1313885906-b91i344870845.jpeg?v=1630355794",
            "publishedAt": "2021-08-31T13:00:12Z",
            "content": "Home prices rose 18.6% annually in June, up from the 16.8% increase in May, according to the S&amp;P CoreLogic Case-Shiller national home price index.\r\nThat is the largest annual gain in the history … [+2413 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Justin Baer",
            "title": "Fidelity Is Going on a Hiring Spree - The Wall Street Journal",
            "description": "Move to meet investing demand will boost company’s workforce to more than 60,000, up at least 22% from last year",
            "url": "https://www.wsj.com/articles/fidelity-is-going-on-a-hiring-spree-11630414800",
            "urlToImage": "https://images.wsj.net/im-392647/social",
            "publishedAt": "2021-08-31T13:00:00Z",
            "content": "Fidelity Investments plans to hire another 9,000 employees this year to help its businesses keep pace with the surge in demand for stock-trading and other personal-investing services.\r\nFidelitys hiri… [+1452 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Nathan Bomey, USA TODAY",
            "title": "Thieves strike: Auto theft spikes during the pandemic as cars are left unattended - Yahoo Finance",
            "description": "Thieves stole 880,595 vehicles in the U.S. in 2020, up 10.9% from 2019, according to the National Insurance Crime Bureau",
            "url": "https://www.usatoday.com/story/money/cars/2021/08/31/auto-theft-spikes-stolen-car-vehicle-theft-pandemic-nicb/5652615001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/04/29/PMCA/42dfda48-f163-4bf7-afce-5c3b7bcbdae7-Stolen_vehicle_himage.jpg?auto=webp&crop=1274,717,x5,y0&format=pjpg&width=1200",
            "publishedAt": "2021-08-31T12:48:39Z",
            "content": "Vehicle theft spiked in 2020, according to a new report that suggests a variety of reasons for the increase, including the pandemic causing Americans to leave their cars unattended for longer than us… [+3802 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Doug Johnson",
            "title": "In the US, wind power is getting bigger and better, report says - Ars Technica",
            "description": "Longer blades, taller towers among the reasons wind power is growing in the US.",
            "url": "https://arstechnica.com/science/2021/08/in-the-us-wind-power-is-getting-bigger-and-better-report-says/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/08/GettyImages-1233272264-760x380.jpg",
            "publishedAt": "2021-08-31T12:28:18Z",
            "content": "81 with 46 posters participating\r\nWind power isn't the largest part of the United States' energy mix, but it grew over the last year, according to the Wind Technologies Market Report. The renewable e… [+4819 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Andrew Singer",
            "title": "The great crypto flippening: Can Ethereum overtake Bitcoin? - Cointelegraph",
            "description": "Is BTC, crypto’s flagship, prepared to fend off Ethereum with its “incredible network value, rich community and pace of innovation?”",
            "url": "https://cointelegraph.com/news/the-great-crypto-flippening-can-ethereum-overtake-bitcoin",
            "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDgvOTE1NGUzYmQtZjgwZi00MDJmLWFjM2EtM2RjZGMwZmM0YTQwLmpwZw==.jpg",
            "publishedAt": "2021-08-31T12:14:00Z",
            "content": "Ethereums ascent to the top of the cryptoverse seems unstoppable, declared Nigel Green in mid-August, and its not hard to see why the deVere CEO thinks this. DeFi is on a tear, NFTs are mushrooming, … [+9968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "8 Stocks Turned $10000 Into $109333 In 8 Months - Investor's Business Daily",
            "description": "Who says August isn't a good month for S&P 500 stocks? Investors just scored more big gains during another banner month.",
            "url": "https://www.investors.com/etfs-and-funds/sectors/sp500-8-stocks-turned-10000-into-8-months-2021/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2016/11/IT20_cash_110316_adobe.jpg",
            "publishedAt": "2021-08-31T12:00:00Z",
            "content": "Who says August isn't a good month for S&amp;P 500 stocks? Investors just scored more big gains in the month.\r\nXPowered by jumps in stocks like information technology leader Paycom Software (PAYC) pl… [+5341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Chris Paukert",
            "title": "2021 Ford F-150 Raptor first drive review: American badass - CNET",
            "description": "A killer new five-link suspension and buckets of new tech make this the best Raptor yet -- at a price.",
            "url": "https://www.cnet.com/roadshow/reviews/2021-ford-raptor-f150-first-drive-preview/",
            "urlToImage": "https://www.cnet.com/a/img/oeFrSmdwsQqmnjwc4RYLLHBm8kE=/1200x630/2021/08/30/259ed22a-56d6-4f6a-ba9f-0fd6252224ea/raptor-ogi.jpg",
            "publishedAt": "2021-08-31T11:59:00Z",
            "content": "There's something wholly satisfying about using a well-designed tool to its full potential. The best tools are arguably those that deliver better results the harder they are worked. Call it grace und… [+14355 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Will Horner",
            "title": "Stock Futures Wobble After S&P 500 Notches Record - The Wall Street Journal",
            "description": "The S&P 500 is poised to hover near its all-time high closing level at the market open",
            "url": "https://www.wsj.com/articles/global-stock-markets-dow-update-08-31-2021-11630396190",
            "urlToImage": "https://images.wsj.net/im-393569/social",
            "publishedAt": "2021-08-31T11:58:00Z",
            "content": "U.S. stock futures wobbled Tuesday, suggesting that the S&amp;P 500 will hover near its all-time closing high after the market opens.\r\nFutures tied to the S&amp;P 500 wavered between gains and losses… [+1147 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bitcoin Magazine"
            },
            "author": "Alex McShane",
            "title": "El Salvador's Democratic Assembly Approves $150 Million Bitcoin Trust - Bitcoin Magazine",
            "description": "The Finance Commission of the Legislative Assembly of El Salvador agreed Monday to create a $150 million Bitcoin trust to facilitate exchange between Bitcoin and U.S. dollars in El Salvador.",
            "url": "https://bitcoinmagazine.com/business/el-salvadors-democratic-assembly-approves-150-million-bitcoin-trust",
            "urlToImage": "https://bitcoinmagazine.com/.image/t_share/MTgzNTM2MTgzODE5NjQxODk0/e-fnsm2xeaai-zn.png",
            "publishedAt": "2021-08-31T11:47:50Z",
            "content": "The deputies of the Finance Commission of the Legislative Assembly of El Salvador agreed Monday to create a $150 million Bitcoin trust to facilitate exchange between Bitcoin and U.S. dollars in El Sa… [+2068 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "AC Immune SA",
            "title": "AC Immune Announces First Positive Cognitive Results for a Tau-Targeting Monoclonal Antibody in Alzheimer’s Disease - Yahoo Finance",
            "description": "Top-line data from Lauriet Phase 2 trial of semorinemab in mild-to-moderate AD shows a statistically significant reduction on one of two co-primary endpoints...",
            "url": "https://finance.yahoo.com/news/ac-immune-announces-first-positive-113000060.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qkiqevhdaHJtnnH6yY9trQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0zNzY-/https://s.yimg.com/uu/api/res/1.2/K86tZBKE4._SHTQLIHVJWA--~B/aD03NDE7dz0yMzYyO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/globenewswire.com/ac0c40a8dd4f9059cabbfee6127383cc",
            "publishedAt": "2021-08-31T11:30:00Z",
            "content": "Top-line data from Lauriet Phase 2 trial of semorinemab in mild-to-moderate AD shows a statistically significant reduction on one of two co-primary endpoints, ADAS-Cog11\r\nFirst evidence of clinical a… [+7769 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Nalak Das",
            "title": "5 Tech Giants to Buy Irrespective of Fed's Bond-Buy Tapering - Yahoo Finance",
            "description": "We have narrowed down our search to five U.S. technology bigwigs (market capital > $100 billion) with strong growth potential for 2021. These are: AAPL, MSFT...",
            "url": "https://finance.yahoo.com/news/5-tech-giants-buy-irrespective-105910257.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/yq04QnX6H3bPSGZ9wbT0Ig--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/zacks.com/f3466aebbef6850826a46314bf4b3ccf",
            "publishedAt": "2021-08-31T10:59:10Z",
            "content": "Wall Street is likely to conclude a strong August with just a day of trading left. Several economists and financial experts were concerned that August may be volatile due to the resurgence of the Del… [+8474 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Saheli Roy Choudhury",
            "title": "South Korea passes bill limiting Apple and Google control over app store payments - CNBC",
            "description": "Google and Apple's policies usually require developers to pay them a commission as high as 30% in every transaction.",
            "url": "https://www.cnbc.com/2021/08/31/south-korea-first-country-to-curb-google-apples-in-app-billing-policies.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106932970-1629895691546-gettyimages-1233496372-SKOREA_SK_TELECOM.jpeg?v=1630284426",
            "publishedAt": "2021-08-31T10:34:52Z",
            "content": "South Korea's parliament has approved a bill that will make it the first country to impose curbs on Google and Apple's payment policies that force developers to only use the tech giants' proprietary … [+3428 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "PayPal Wants to Develop Stock Trading Platform: Report - Gizmodo",
            "description": "PayPal recently added cryptocurrency trading to its platform in the U.S.",
            "url": "https://gizmodo.com/paypal-wants-to-develop-stock-trading-platform-report-1847588973",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ee65fe9e741df0ae10c95dda9ba9de0f.jpg",
            "publishedAt": "2021-08-31T10:00:00Z",
            "content": "PayPal is interested in developing a stock trading platform, according to a report from CNBC that cites anonymous sources at the company. The move would make PayPal a direct competitor of Robinhood, … [+2470 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Sara Randazzo",
            "title": "Jury Selection Begins in Theranos Founder Elizabeth Holmes’s Trial - The Wall Street Journal",
            "description": "U.S. prosecutors and the onetime Silicon Valley star’s lawyers are scrutinizing a pool of nearly 200 to find 17 jurors",
            "url": "https://www.wsj.com/articles/jury-selection-begins-in-theranos-founder-elizabeth-holmess-trial-11630402202",
            "urlToImage": "https://images.wsj.net/im-393411/social",
            "publishedAt": "2021-08-31T09:30:00Z",
            "content": "SAN JOSE, Calif.Theranos Inc. founder\r\nElizabeth Holmes\r\nheads to court Tuesday, as her legal team seeks to help assemble a group of impartial jurors to weigh the criminal-fraud charges filed against… [+5331 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        let { title, description, ImageURL } = this.props;
        return (
            <div class="card my-3 mx-3" style={{ width: '18rem' }}>
                <img src={ImageURL} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}.</p>
                    <a href="#" class="btn btn-sm btn-primary">Read More...</a>
                </div>
            </div>
        )
    }
}

export default News
