import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Compass, Rocket, Target } from "lucide-react";

import heroPastor from "@/assets/hero-pastor.png";
import amazonRiver from "@/assets/amazon-river.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "O Poder da Atualização — Pastor Marquinhos Maciel",
      },
      {
        name: "description",
        content:
          "Imersão com Pastor Marquinhos Maciel para pastores e líderes que desejam atualizar sua visão, fortalecer sua liderança e ampliar seu impacto sem perder a essência do chamado.",
      },
      {
        property: "og:title",
        content: "O Poder da Atualização — Pastor Marquinhos Maciel",
      },
      {
        property: "og:description",
        content:
          "Atualize sua visão, fortaleça sua liderança e amplie seu impacto sem perder a essência do chamado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface border-b border-black/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 py-20">
            <div className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">
              O Poder da Atualização
            </div>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-foreground">
              O seu chamado não mudou.{" "}
              <span className="font-extrabold block">
                Mas talvez a forma de conduzi-lo precise mudar.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Uma imersão com <strong>Pastor Marquinhos Maciel</strong> para
              pastores e líderes que desejam atualizar sua visão, fortalecer sua
              liderança e ampliar seu impacto —{" "}
              <strong>sem perder a essência do chamado.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-primary text-primary-foreground px-8 py-5 rounded-full font-bold text-lg hover:bg-accent transition-colors flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                QUERO ACESSAR O PODER DA ATUALIZAÇÃO
                <span className="opacity-50 text-xl">→</span>
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
              </div>
              <span>+2.500 líderes impactados</span>
            </div>
          </div>

          <div className="relative hidden lg:block h-full">
            <img
              src={heroPastor}
              alt="Pastor Marquinhos Maciel"
              width={800}
              height={1000}
              className="w-full h-[800px] object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-2xl border border-black/5">
              <div className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-1 italic">
                Tenente-Coronel
              </div>
              <div className="text-lg font-bold">Marquinhos Maciel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter border-l-4 border-primary pl-6">
              Você pode ter chamado, visão e experiência...
            </h2>
            <p className="text-2xl text-muted-foreground mb-16">
              Mas se a estrutura não acompanhar, o crescimento pode se
              transformar em sobrecarga.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Você vai aprender como:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-4 p-6 rounded-xl border border-black/5 hover:border-primary/20 transition-all">
                <div className="text-primary font-bold text-xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">Ampliar sua influência</h3>
                  <p className="text-muted-foreground text-sm">
                    Amplie sua influência além das quatro paredes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl border border-black/5 hover:border-primary/20 transition-all">
                <div className="text-primary font-bold text-xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">Construir estruturas</h3>
                  <p className="text-muted-foreground text-sm">
                    Construa estruturas mais sólidas e sustentáveis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl border border-black/5 hover:border-primary/20 transition-all">
                <div className="text-primary font-bold text-xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">Desenvolver alianças</h3>
                  <p className="text-muted-foreground text-sm">
                    Desenvolva alianças e novas oportunidades.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl border border-black/5 hover:border-primary/20 transition-all">
                <div className="text-primary font-bold text-xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">
                    Fortalecer sua vida pessoal e liderança
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fortaleça sua vida pessoal e sua liderança.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl border border-black/5 hover:border-primary/20 transition-all md:col-span-2 lg:col-span-1">
                <div className="text-primary font-bold text-xl">✓</div>
                <div>
                  <h3 className="font-bold mb-2">Pensar em legado</h3>
                  <p className="text-muted-foreground text-sm">
                    Pensar em legado, sucessão e longevidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <img
                src={amazonRiver}
                alt="Rio da Amazônia ao amanhecer, representando as origens do Pastor Marquinhos Maciel no Acre"
                width={600}
                height={800}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-60 mb-6">
                A Trajetória
              </h2>
              <h3 className="text-4xl font-bold mb-8">
                Conheça o Pastor Marquinhos Maciel
              </h3>
              <div className="space-y-6 text-primary-foreground/80 text-lg leading-relaxed">
                <p>
                  Do seringal no Acre, onde até os 12 anos não conhecia energia
                  elétrica, à construção de uma trajetória marcada por
                  liderança, esporte, carreira militar e ministério.
                </p>
                <p>
                  Foi <strong>bicampeão brasileiro de futsal pelo Flamengo</strong>,
                  aposentou-se como{" "}
                  <strong>Tenente-Coronel do Corpo de Bombeiros do Acre</strong>,
                  é formado em História e Teologia e fundador da{" "}
                  <strong>CB Vida</strong>, hoje com 7 campus.
                </p>
                <p>
                  Também atua como mentor de líderes no Brasil e na Europa e é
                  autor do livro <strong>O Poder da Atualização</strong>.
                </p>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 rounded-xl">
                  <p className="italic text-xl text-primary-foreground">
                    "Ele não ensina apenas o que estudou. Ensina aquilo que
                    viveu."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O QUE VOCÊ RECEBE</h2>
          <p className="text-muted-foreground">
            Tudo o que você precisa para atualizar sua visão e liderança
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-10 border border-black/5 rounded-2xl">
            <div className="w-12 h-12 bg-primary/5 rounded-lg mb-6 grid place-items-center text-2xl">
              🎯
            </div>
            <h4 className="font-bold text-lg mb-2">IMERSÃO COMPLETA</h4>
            <p className="text-muted-foreground text-sm">
              Conteúdo completo para atualizar sua visão e liderança.
            </p>
          </div>
          <div className="bg-card p-10 border border-black/5 rounded-2xl">
            <div className="w-12 h-12 bg-primary/5 rounded-lg mb-6 grid place-items-center text-2xl">
              📚
            </div>
            <h4 className="font-bold text-lg mb-2">AULAS GRAVADAS</h4>
            <p className="text-muted-foreground text-sm">
              Acesse quando quiser e reveja o conteúdo.
            </p>
          </div>
          <div className="bg-card p-10 border border-black/5 rounded-2xl">
            <div className="w-12 h-12 bg-primary/5 rounded-lg mb-6 grid place-items-center text-2xl">
              🧭
            </div>
            <h4 className="font-bold text-lg mb-2">DIREÇÃO PRÁTICA</h4>
            <p className="text-muted-foreground text-sm">
              Liderança, propósito, estrutura, família e impacto.
            </p>
          </div>
          <div className="bg-card p-10 border border-black/5 rounded-2xl">
            <div className="w-12 h-12 bg-primary/5 rounded-lg mb-6 grid place-items-center text-2xl">
              🚀
            </div>
            <h4 className="font-bold text-lg mb-2">VISÃO DE LONGEVIDADE</h4>
            <p className="text-muted-foreground text-sm">
              Aprenda a construir algo que vá além de você.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section id="pricing" className="py-32 bg-card">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-6">
            Quanto você pagaria por uma nova visão?
          </h2>
          <p className="text-muted-foreground mb-12">
            Uma decisão certa pode economizar anos de tentativa e erro. Hoje,
            você não precisa investir milhares de reais para ter acesso a esse
            conteúdo.
          </p>

          <div className="bg-primary rounded-3xl p-12 text-primary-foreground shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <span className="block uppercase tracking-[0.2em] text-primary-foreground/60 mb-4 font-bold text-xs">
                Oferta Especial
              </span>
              <div className="text-lg line-through opacity-50 mb-2">
                DE R$ 197
              </div>
              <div className="text-7xl font-black mb-4">R$ 97</div>
              <div className="text-xl opacity-80 mb-10">
                Acesso à Imersão Completa
              </div>

              <a
                href="#"
                className="block w-full bg-card text-primary py-5 rounded-full font-black text-xl hover:bg-secondary transition-colors mb-6 shadow-lg"
              >
                QUERO PARTICIPAR POR R$ 97
              </a>
              <p className="text-xs opacity-60 flex items-center justify-center gap-2">
                🔒 Pagamento Seguro e Acesso após a Confirmação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface border-t border-black/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-xl font-bold mb-4">
            Não é sobre mudar o seu chamado.
          </h3>
          <h2 className="text-3xl lg:text-4xl font-black mb-12 uppercase tracking-tighter">
            É SOBRE ATUALIZAR A FORMA DE VIVÊ-LO.
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Se você sente que Deus está conduzindo você para um novo nível de{" "}
            <strong>visão, liderança e impacto</strong>, esse é o momento de
            começar.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full">
              Atualize sua visão
            </span>
            <span className="text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full">
              Fortaleça sua estrutura
            </span>
            <span className="text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full">
              Preserve sua essência
            </span>
            <span className="text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full">
              Amplie seu impacto
            </span>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 rounded-full font-black text-lg hover:bg-accent transition-colors shadow-xl shadow-primary/20"
          >
            QUERO GARANTIR MEU ACESSO
            <span className="opacity-50 text-xl ml-3">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center bg-card">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            O Poder da Atualização &copy; {new Date().getFullYear()}. Todos os
            direitos reservados.
            <br />
            Pastor Marquinhos Maciel — Liderança, Legado e Estrutura Pastoral.
          </p>
        </div>
      </footer>
    </main>
  );
}
