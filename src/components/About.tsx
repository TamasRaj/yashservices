import trustIcon from "@/assets/trust-icon.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Yash Services
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              With years of experience in the human resources industry, Yash Services has 
              established itself as a trusted partner for manufacturing units across the region.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is to bridge the gap between skilled workers and industries that need 
              them, ensuring smooth operations and sustainable growth for your business.
            </p>
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges of manufacturing environments and provide 
              tailored workforce solutions that meet your specific requirements.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
              <img 
                src={trustIcon} 
                alt="Trust and professionalism" 
                className="relative w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
