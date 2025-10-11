import { Card } from "@/components/ui/card";
import { Users, HardHat, Briefcase, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Factory Labor Supply",
    description: "Providing reliable and skilled factory workers for various manufacturing operations.",
  },
  {
    icon: HardHat,
    title: "Skilled & Unskilled Manpower",
    description: "Access to both specialized technicians and general workforce based on your needs.",
  },
  {
    icon: Briefcase,
    title: "On-Site HR Support",
    description: "Dedicated HR professionals to manage your workforce efficiently on-site.",
  },
  {
    icon: ClipboardCheck,
    title: "Workforce Planning",
    description: "Strategic workforce planning and management solutions for optimal productivity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive workforce solutions tailored to your manufacturing requirements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
