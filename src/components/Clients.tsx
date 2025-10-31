import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logo from "@/assets/yash-logo.png";
import aakash_logo from "@/assets/aakash-logo.svg"
import yamato_logo from "@/assets/yamato-logo.png"
import rini_logo from "@/assets/rini-logo.jpeg"
import sudarshan_pharma_logo from "@/assets/sudarshan-pharma-logo.png"
import cyno_logo from "@/assets/cyno-logo.png"
import biofil_logo from "@/assets/biofil-logo.png"


const clients = [
  { name: "AAKASH GLOBAL FOODS PVT LTD  INDORE", logo: aakash_logo },
  { name: "YAMATO LOGISTIC INDIA LTD PITHAMPUR", logo: yamato_logo },
  { name: "RINI LIFE SCIENCE PVT LTD  INDORE", logo: rini_logo },
  { name: "SUDARSHAN PHARMA PVT LTD  INDORE", logo: sudarshan_pharma_logo },
  { name: "CYANO PHARMA PVT LTD  INDORE", logo: cyno_logo },
  { name: "BIOFIL (HLL) CHEMICAL PVT LTD  INDORE", logo: biofil_logo },
  { name: "PHARMO PLAST  LTD INDORE", logo: logo },
  { name: "FOUR ACCES FRAGRANCES LLP INDORE", logo: logo },
  { name: "PRIMA PLASTIC PVT  LTD PITHAMPUR", logo: logo },
  { name: "ARIBA  FOODS PVT LTD  UJJAIN", logo: logo },
  { name: "JASH  ENGG. PVT LTD.   INDORE", logo: logo },
  { name: "DEE TEE INDUSTRIES LTD  INDORE", logo: logo },
  { name: "PRINTWEL  LTD   INDORE", logo: logo },
  { name: "FENA INDIA PVT LTD UJJAIN", logo: logo },
  { name: "META TUBEX PVT LTD INDORE", logo: logo },
  { name: "CROMWELL  INDIA PVT ITD  DEWAS", logo: logo },
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

        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <img className="h-12 mb-3" src={client.logo} />
              <p className="text-sm font-medium text-center text-foreground">
                {client.name}
              </p>
            </div>
          ))}
        </div> */}

        <Carousel className="mx-10"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/5"
              >
                <div className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <img className="h-12 mb-3" src={client.logo} />
                  <p className="text-sm font-medium text-center text-foreground">
                    {client.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>


      </div>
    </section>
  );
};

export default Clients;
