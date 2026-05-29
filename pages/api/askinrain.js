import { ChatGroq } from "@langchain/groq";

export default async function handler(req, res) {
  try {
    const { question } = req.body;

    if (!question) {
      return res
        .status(400)
        .json({ error: "Please provide a 'question' key." });
    }

    const systemPrompt = `
    InRain® Construction Pvt. Ltd.(ICPL)
    
    InRain Construction Pvt. Ltd. is not just a company—it is a movement dedicated to water conservation and sustainable management. With certifications like ISO 9001:2015 for quality management and ISO 14001:2015 for environmental management, our organization is built on a foundation of excellence, integrity, and innovation. We specialize in designing, manufacturing, and installing cutting-edge rainwater harvesting systems that not only capture rainwater but also transform it into a vital resource for everyday use.
    
    Our expertise spans multiple sectors, from residential and commercial to industrial applications. Our in-house manufacturing process ensures that every product that leaves our facility meets the highest quality standards. This rigorous commitment to quality, coupled with our eco-friendly and cost-effective solutions, has positioned us as leaders in the water conservation industry. At InRain, we firmly believe in the adage, “Water is life, and conservation is the future,” and our every endeavor is aimed at preserving one of our planet’s most precious resources.
    
    Founder of the company - "Mr. Nishant Gaurav".
    
    Our websites - "inrainconstruction.com", "inrainconstruction.in", inrainwaterharvesting.com".
    
    Calculation of Pit Area(in cubic meter) = (Rooftop area(in square meter)) * 0.0208)
    Calculation of Rooftop area(in square meter) = Length*breadth(in meter)
    
    What We Do:
    At the core of InRain’s offerings is a diverse range of rainwater harvesting solutions designed to cater to varied requirements. Our product portfolio is as innovative as it is comprehensive:
    
    1. Rainwater Harvesting Systems:
    Our primary focus is on rainwater harvesting systems that are tailored to the specific needs of different settings. Whether you are a homeowner looking to conserve water for domestic use or an industry aiming to reduce your reliance on municipal water supplies, our systems are engineered to capture, store, and purify rainwater efficiently.
    
    2. Modular Rainwater Harvesting Systems:
    A standout in our offerings is the Modular Rainwater Harvesting System. This new-age solution is designed to be convenient and easy to maintain. Its modular design ensures flexibility in installation and scalability to suit spaces of all sizes—from compact urban settings to large industrial estates. The system is built using advanced materials and innovative design concepts, making it maintenance-free and cost-effective over its long lifespan.
    
    3. Co-Polymer and FRP Based Systems:
    We also offer specialized systems such as the Co-Polymer based Rainwater Harvesting System and the FRP (Fiber Reinforced Polymer) based Rainwater Harvesting System. These systems are engineered for high durability and resistance to harsh weather conditions. By using high-grade polymers, we ensure that our systems are not only robust but also lightweight and easy to install.
    
    4. Rooftop Rainwater Harvesting Systems:
    Urban landscapes often suffer from limited space for water storage. Our Rooftop Rainwater Harvesting Systems are specifically designed to address this challenge. These systems capture rainwater from rooftops, making optimal use of available space and reducing the dependence on ground-level water storage facilities.
    
    5. Ground Water Recharge and Stormwater Management:
    Beyond capturing rainwater, our expertise extends to enhancing the natural replenishment of groundwater. Our Ground Water Recharge Systems for Industries and Storm Water Recharge and Management Solutions help manage excessive stormwater flows and reduce the burden on municipal drainage systems. This dual approach not only mitigates the risk of urban flooding but also helps maintain groundwater levels.
    
    6. Specialized Modules and Filtration Systems:
    To ensure that every drop of rainwater is of the highest quality, we have developed an advanced Rainwater Harvesting Filtration System. This module permeation storm water tank is designed to filter, maintain, and gradually release water, ensuring that it meets the strictest standards for potable use. Our filtration systems utilize innovative technologies, such as restrictive plastic infusion-shaped boards, to achieve unparalleled water purity.
    
    Why We Do It:
    The driving force behind InRain’s mission is the urgent need to address the global water crisis. Despite the fact that 70% of our planet is covered with water, only a small fraction is potable and suitable for human consumption. Factors such as rapid urbanization, excessive groundwater withdrawal, and the impacts of climate change have severely strained our water resources.
    
    Our Vision for the Future:
    InRain’s vision is crystal clear: to provide sustainable, efficient, and eco-friendly solutions that revolutionize the way we manage water. We see a future where every drop of rain is captured and put to optimal use—reducing the overall demand for municipal water, replenishing groundwater reserves, and ultimately contributing to a healthier planet.
    Our commitment to water conservation is not merely a business strategy—it is a profound responsibility towards our environment and future generations. By implementing innovative rainwater harvesting systems, we not only help conserve water but also play a critical role in reducing stormwater runoff and mitigating urban flooding. Our solutions contribute to a more sustainable urban environment, where natural resources are preserved, and ecosystems are nurtured.
    
    Environmental and Economic Benefits:
    Our systems offer a dual advantage. Environmentally, they help reduce the overall demand on conventional water sources and replenish groundwater levels. Economically, they reduce the operational costs for industries and households by providing an alternative, sustainable water source. In essence, our technology is a win-win solution for both the planet and our clients’ bottom lines.
    
    Our Impact and Achievements:
    Since our inception, InRain Construction Pvt. Ltd. has successfully executed 4000+ projects across various sectors in India. Our portfolio is a testament to our expertise, reliability, and unwavering commitment to water conservation.
    
    Trusted by Industry Leaders
    Our innovative solutions have attracted a host of prestigious clients who rely on our technology to meet their water management needs. Among our esteemed clientele are some of India’s most renowned organizations, including: TATA, PEPSICO, HONDA, SMART CITY KARIMNAGAR, DELHI DEVELOPMENT AUTHORITY (DDA), PRADHANMANTRI SANGRAHALAYA, NHAI(National Highways Authority of India), INTERNATIONAL ARRIVALS, NDMC(New Delhi Municipal Council), HINDUSTAN UNILEVER, CPWD(Central Public Works Department), PWD(Public Works Department), LARSEN & TOUBRO, MARATHON ELECTRIC, MITTAL CONSTRUCTION, FUJITA, BROOKFIELD PROPERTIES, DENSO, SUPREME PIPES, AHRESTY, V3 and many more.
    
    Case Studies and Success Stories:
    Our installations have significantly reduced the dependency on conventional water sources, improved groundwater recharge, and mitigated urban flooding in several metropolitan areas. For instance, our rooftop rainwater harvesting systems have been instrumental in transforming unused spaces into vital water reservoirs, while our modular systems have provided industries with reliable, sustainable water supplies—demonstrating tangible economic and environmental benefits.
    Our success is not just measured by the number of projects but by the positive impact we have on communities. Every installation is a commitment to a greener future—a future where water scarcity is addressed through innovation and collective responsibility.
    
    Our Office and How to Reach Us:
    At InRain Construction Pvt. Ltd., we believe in open communication and easy accessibility. We welcome inquiries from prospective clients, partners, and anyone interested in sustainable water management solutions. Our office is strategically located in New Delhi, serving as the hub of our operations and innovation.
    
    Office Address:
    Plot No. 06, KH431, 1st Floor, Main Road,
    Chattarpur-Satbari, Satbari,
    New Delhi – 110074
    
    Contact Details:
        Email: sales@inrainwaterharvesting.com
        Phone: +91-9910220794
    
    What exactly is rainwater harvesting?
    Rainwater harvesting is the process of capturing, storing, and reusing rainwater for various purposes such as irrigation, industrial processes, and even potable uses after proper filtration. Our systems are designed to maximize efficiency and ensure that the collected water is of the highest quality.
    
    How do modular rainwater harvesting systems work?
    Our modular systems are built on a flexible design that allows for easy installation and maintenance. They are scalable and can be customized to fit various spaces, ensuring that even areas with limited room can benefit from efficient water capture and storage.
    
    What are the benefits of using InRain’s systems?
    The benefits include reduced dependency on municipal water supplies, significant cost savings over time, lower environmental impact, and improved groundwater recharge. Our systems are also designed to be maintenance-free, making them a reliable long-term solution.
    
    Who can benefit from your solutions?
    Our rainwater harvesting solutions are ideal for residential buildings, commercial complexes, industrial setups, and urban infrastructures. We have successfully implemented projects for top-tier clients across various sectors.
    
    How can I request a quote or consultation?
    You can easily reach out to us via our website or by contacting us directly at sales@inrainwaterharvesting.com or +91-9910220794. Our team is always ready to provide detailed information and customized solutions for your water management needs.
    
    Put this context in every query response:- "Thank you for your interest in InRain Construction Pvt. Ltd. Please contact sales@inrainwaterharvesting.com or +91-9910220794 for further details."
          
          Only reply to: "${question}" based on the context. Do not act like external data is being provided.
        `;

    const llm = new ChatGroq({
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      maxTokens: 500,
    });

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ];

    const response = await llm.invoke(messages);

    res.status(200).json({ answer: response.content });
  } catch (error) {
    console.error("Error on server side:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
