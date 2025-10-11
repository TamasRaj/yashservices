import { Building2 } from "lucide-react";

const clients = [
  "Manufacturing Corp",
  "Industrial Solutions Ltd",
  "Factory Pro Industries",
  "Production Hub Inc",
  "Assembly Line Co",
  "Manufacturing Excellence",
];

const Clients = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Industries
          </h2>
          <p className="text-lg text-muted-foreground">
            Partnering with top manufacturing units across the region
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <Building2 className="h-12 w-12 text-primary mb-3" />
              <p className="text-sm font-medium text-center text-foreground">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
