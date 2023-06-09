import { styled } from "styled-components"


import { NavItem } from "component/Nav"
import dasboard from "Assets/category.svg"
import market from "Assets/shop.svg"
import active from "Assets/judge.svg"
import portfolio from "Assets/buy-crypto.svg"
import wallet from "Assets/wallet-3.svg"
import favoutite from 'Assets/lovely.svg'
import history from 'Assets/clock.svg'
import setting from 'Assets/setting.svg'
import { TopUpCard } from "component/Card"
import lightMode from 'Assets/theme.svg'
import { Content } from "component/Content"
import { Logo } from "component/Logo"
import { Header } from "component/Header"


const TotalContainer = styled.div`
    width: 100%;
    height: 150vh;
    background-color:gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
const LayoutStyled = styled.div`
    width: 1400px;
    height: 100%;
    background-color: #CAEAE6;
    display: flex;
`
const SideBar = styled.div`
    float: left;
    width: 200px;
    height: 100%;
    background-color: #ffffff;
    position: fixed;
    padding-left: 20px;
    .logo-sidebar{
        margin-top: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        margin-bottom: 10px;
        
    }
    .logo-text{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
    }
    .logo-desc{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
        color: #7A797D;
    }
    .topup{
        padding-top: 30px;
    }
`
const Center = styled.div`
    float: right;
    width: 1200px;
    height: 100%;
    background-color: #CAEAE6;
    margin-left: 250px;
    /* padding-left: 30px; */
    padding-right:30px;
    .center-layout{
        /* padding-left: 20px; */
        margin-top:20px;
    }
    .Header-home{
    }
`
const Layout = ({ children }) => {
    return (
        <TotalContainer >
            <LayoutStyled>
                <SideBar >
                    <div className="">
                        <Logo />
                        

                        <div className="nav">
                            <NavItem text="Dashboard" path="/" icon={dasboard}></NavItem>
                            <NavItem text="Market" path="/1" icon={market}></NavItem>
                            <NavItem text="Active Bids" path="/2" icon={active}></NavItem>
                        </div>
                        <h5 className="nav">PROFILE</h5>
                        <div className="nav">
                            <NavItem text="My Portfolio" path="/3" icon={portfolio}></NavItem>
                            <NavItem text="Wallet" path="/4" icon={wallet}></NavItem>
                            <NavItem text="Favourites" path="/5" icon={favoutite}></NavItem>
                            <NavItem text="History" path="/6" icon={history}></NavItem>
                            <NavItem text="Settings" path="/7" icon={setting}></NavItem>
                        </div>
                        <h5 className="nav">ORTHER</h5>
                        <div className="nav">
                            <NavItem text="LightMode" path="/8" icon={lightMode}></NavItem>
                        </div>
                        <div className="topup">
                            <TopUpCard title="Your Balance" amount="1,034.02" content="Top Up Balance" ></TopUpCard>
                        </div>
                    </div>

                </SideBar>
                <Center>
                    <div className="center-layout">

                        <Header className="Header-home"/>

                        <div className="content-center-layout">
        {children}
                            {/* <Content></Content> */}
                        </div>
                    </div>
                </Center>

            </LayoutStyled>
        </TotalContainer>
    )
}
export { Layout };