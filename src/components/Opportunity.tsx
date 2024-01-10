import { useState } from "react";

const Opportunity = () => {
    const [readMode, setReadMode] = useState(false);

    return (
        <section className="py-12">
            <h2 className="text-slate-600 font-extrabold text-2xl mb-8">Opportunity</h2>

            <h1 className="text-4xl text-zinc-900 font-extrabold pt-4 pb-8">Invest in the Future of Skiing</h1>

            <section className="flex flex-col gap-4 text-slate-800">
                <p>Skis have existed for thousands of years, but for too long their design for and delivery to consumers has been stagnant.</p>

                <p>Until now.</p>

                <p>Welcome to Peak Ski Company, the most innovative, customer-focused, and forward-thinking ski company on earth.</p>

                <p>In 2022, former ski area CEO Andy Wirth and six-time Olympian Bode Miller launched Peak Ski Company. Peak's goal is to reinvent your skis and the way you buy them. In Year 1, Peak launched with its first six models of skis, containing technology and construction that made them perform unlike any other ski on the market.  At the same time, we also established the first “at-scale” direct-to-consumer, e-commerce ski company, giving consumers a more contemporary and entirely new way to purchase skis.</p>

                {
                    readMode ?
                        <>
                            <p>We want every Peak model to outperform the top skis on the market. To do that, we test them against the best of the rest—repeatedly—from phase one prototypes, to early production, to the final skis we send you.</p>

                            <p>Our patented KeyHole Technology™ and PEAK Loc8™ represent just the initial steps in our journey to reshape the ski industry. Our future strategic plans include a comprehensive reengineering of the entire ski manufacturing process and related machinery. Our goal? To reduce energy consumption, increase production speed, improve manufacturing precision, utilize environmentally conscious materials, and introduce the ability to repurpose the materials from retired skis.</p>
                        </> :
                        null
                }

                <div className="text-pink-600 font-semibold cursor-pointer" onClick={() => setReadMode(prev => !prev)}>Read More</div>
            </section>

            <section className="py-8">
                <h3 className="text-slate-600 font-semibold text-xl">The Demand</h3>

                <img src="/the_demand.jpg" alt="" />

                <p className="text-lg italic font-semibold text-slate-800">*Sources: National Ski Areas Association <a href="https://nsaa.org/webdocs/Media_Public/IndustryStats/historical_skier_visits_thru_22-23.pdf" className="text-blue-700 underline">National Skier/Snowboarder Visits, 1978/79 to 2022/23</a> & <a href="https://www.zionmarketresearch.com/report/ski-gear-equipment-market" className="text-blue-700 underline">Zion Market Research</a>.</p>
            </section>

            <section className="py-8">
                <h3 className="text-slate-600 font-semibold mb-8 text-xl">The Competition</h3>

                <section className="flex flex-col gap-4 text-slate-800">
                    <p>The ski market, particularly in North America, is dominated by European-based, large-scale manufacturers.  Most of these companies produce high-quality skis but haven’t focused on developing and funding strategic-level ski innovation.</p>

                    <p>We aim to capitalize on market opportunities resulting from low levels of innovation in the industry.  Peak has achieved great results in our first year, led by our award-winning line of 22/23 skis.</p>

                    <p>Join us in this movement. Investing in Peak Ski Company is a unique opportunity to become an integral part of a ski company that's driving dramatic levels of innovation.</p>

                    <img src="/the_competition.jpg" alt="" className="mt-2" />
                </section>
            </section>
        </section>
    );
}

export default Opportunity
