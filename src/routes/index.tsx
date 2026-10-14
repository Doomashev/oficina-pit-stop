import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/business-page";
export const Route = createFileRoute("/")({
 head: () => ({meta:[
 {title:"Pit Stop | Oficina automotiva"},
 {name:"description",content:"Manutenção preventiva e diagnóstico para você seguir com tranquilidade."},
 {property:"og:title",content:"Pit Stop | Oficina automotiva"},
 {property:"og:description",content:"Manutenção preventiva e diagnóstico para você seguir com tranquilidade."},
 {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
 ]}), component:BusinessPage
});
