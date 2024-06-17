// --- início rotas
import { createRouter, createWebHistory } from 'vue-router'
//import Contratos from '@/components/vendas/ContratosComp.vue'
//import Dashboard from '@/components/dashboard/DashboardComp.vue'
//import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
//import Home from '@/views/HomeView.vue'
//import Indicadores from '@/components/servicos/IndicadoresView.vue'
//import Lead from '@/components/vendas/LeadComp.vue'
//import Leads from '@/components/vendas/LeadsComp.vue'
//import Login from '@/views/LoginView.vue'
//import Opcoes from '@/components/servicos/OpcoesView.vue'
//import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
//import Servico from '@/components/servicos/ServicoView.vue'
//import Servicos from '@/components/servicos/ServicosComp.vue'
//import Site from '@/views/SiteView.vue'
//import Vendas from '@/components/vendas/VendasComp.vue'
//import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

//lazy loading
const Contratos = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/ContratosComp.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardComp.vue')
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardRodape.vue')
const Home = () => import('@/views/HomeView.vue')
const Indicadores = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/IndicadoresView.vue')
const Lead = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/LeadComp.vue')
const Leads = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/LeadsComp.vue')
const Login = () => import('@/views/LoginView.vue')
const Opcoes = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/OpcoesView.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')
const Servico = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/ServicoView.vue')
const Servicos = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/ServicosComp.vue')
const Site = () => import('@/views/SiteView.vue')
const Vendas = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasComp.vue')
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasPadrao.vue')

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: { requerAutorizacao: false }
    },
    {
        path: '/home', //localhost:8080/home
        meta: { requerAutorizacao: true },
        alias: '/app',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { 
                        path: 'leads', 
                        component: Leads, 
                        name: 'leads',
                        //beforeEnter(to, from, next) {
                        beforeEnter() {
                            //poderíamos verificar se o usuário tem permissão de carregar a rota
                            console.log('Guarda de rota beforeEnter')
                        }
                    }, //localhost:8080/home/vendas/leads
                    { 
                        path: 'leads/:id/:outroParametro', 
                        props: true,
                        /*
                        props: {
                            id: 4,
                            outroParametro: 'pt-br'
                        },
                        */
                        /*
                        props: route => {

                            console.log('Rota ativa: ', route)

                            let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro

                            //implementando uma lógica para definir as props que serão submetidas para o componente roteado
                            return { 
                                id: parseInt(route.params.id) + 1,
                                outroParametro: teste 
                            }
                        },
                        */
                        component: Lead,
                        name: 'lead', 
                        alias: [
                            '/l/:id/:outroParametro', 
                            '/pessoa/:id/:outroParametro', 
                            '/:id/:outroParametro'
                        ] 
                    }, //localhost:8080/5
                    { path: 'contratos', component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
                    { path: '', component: VendasPadrao, name: 'vendas' } //localhost:8080/home/vendas/
                    
                ]
            }, //localhost:8080/home/vendas
            { path: 'servicos', component: Servicos, name: 'servicos', children:
                [ 
                    { 
                        path: ':id', 
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true
                        },
                        alias: '/s/:id', 
                        name: 'servico', 
                        components: 
                        {
                            default: Servico,
                            indicadores: Indicadores,
                            opcoes: Opcoes
                        }
                    } //localhost:8080/home/servicos/5
                ] 
            }, //localhost:8080/home/servicos
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape
                } 
            }//localhost:8080/home/dashboard
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login,
        meta: { requerAutorizacao: false, campo2: 'teste', campo3: 50 }
    },
    { path: '/redirecionamento-1', redirect: '/home/servicos' },
    { path: '/redirecionamento-2', redirect: { name: 'leads' } },
    { path: '/redirecionamento-3', redirect: '/home/vendas' },
    { path: '/redirecionamento-4', redirect: { name: 'vendas' } },
    { path: '/redirecionamento-5', redirect: to => {
            //podemos programar algo antes do redirecionamento ser efetivado
            console.log(to)

            //return '/home/vendas'
            return { name: 'vendas' }
        } 
    },
    //{ path: '/:catchAll(.*)*', redirect: '/' } //Vue2 = *
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada } //Vue2 = *
] 

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        //return { left: 150, top: 150 } //left = x; top = y
        if(savedPosition) {
            return savedPosition
        }

        if(to.hash) {
            return { el: to.hash } //to.hash deve corresponder a um id de elemento HTML
            //fragmento = #secao_1 => id = secao_1
        }

        return { left: 0, top: 0 }
    },
    routes //routes: routes
})

//router.beforeEach((to, from, next) => {
router.beforeEach(() => {
    //console.log('Guarda global beforeEach')
})

//router.afterEach((to, from) => {
router.afterEach(() => {
    //console.log('Guarda global afterEach')
})

router.beforeResolve(() => {
    //console.log('Guarda global beforeResolve')
})

export default router