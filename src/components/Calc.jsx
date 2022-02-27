import React, { useState } from 'react';
import "./Calc.css"
import RP from '../rp.gif'
import EK from '../ek.gif'
import MG from '../mage.gif'
import "../App.css"
import { render } from '@testing-library/react';
import mathJs from 'math.js';

const lt = { 'ENL': 'Skills Calculator', 'BRL': 'Calculadora de skills' }
const ll1 = { 'ENL': 'Current skill.', 'BRL': 'Skill atual.' }
const ll2 = { 'ENL': '% to next lvl.', 'BRL': '% para o próximo lvl' }
const ll3 = { 'ENL': 'Desired skill.', 'BRL': 'Skill desejada.' }
const ll4 = { 'ENL': 'Expected time.', 'BRL': 'Tempo esperado.' }
const ll5 = { 'ENL': 'Total cost.', 'BRL': 'Custo total.' }
const ll6 = { 'ENL': 'Calculator based on training weapons from npc.', 'BRL': 'Calculadora baseado em armas de treino do npc.' }
const imagens = { 'EK': EK, 'RP': RP, 'MG': MG }




const Calc = (props) => {

    const hitsn = 'hits'
    const [Tclass, setTclass] = useState("");
    const [Language, setLanguage] = useState("BRL");
    const [CS, setCS] = useState("");
    const [PN, setPN] = useState("");
    const [DS, setDS] = useState("");
    const FT = {
        'EK': 1.1,
        'RP': 1.08,
        "MG": 1.12
    };
    //console.log(ft)
    var a;
    a = 50 * (Math.pow((FT[Tclass]), (DS - 9))) * ((FT[Tclass]) - 1)
    var b;
    b = (50 * (Math.pow((FT[Tclass]), (CS - 9)))) * ((FT[Tclass]) - 1) * ((100 - PN) / 100)
    var c;
    c = 50 * (Math.pow((FT[Tclass]), (CS - 9))) * ((FT[Tclass]) - 1)
    var hits;
    hits = (a - (b / 10) - c)
    const hit = hits
    // each hit = 525gp

    const waste = Math.round(hits * 525)
    var wDisplay = waste > 0 ? waste + (waste == 1 ? " gp" : " gps") : "";



    var h = Math.floor(hit / 3600);
    var m = Math.floor(hit % 3600 / 60);
    var s = Math.floor(hit % 3600 % 60);
    console.log(h)
    console.log(m)
    console.log(s)
    var hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";


    return (<div>
        <h2>{lt[Language]}</h2>
        <div >
            <ul >
                <li className='skills'>
                    {ll1[Language]}
                </li>
                <input className='input' type="number"
                    value={CS} onChange={(e) => {
                        setCS(e.target.value)
                    }} />
                <li className='skills'>
                    {ll2[Language]}
                </li>
                <input className='input' type="number"
                    value={PN} onChange={(e) => {
                        setPN(e.target.value)
                    }}
                />
                <li className='skills'>
                    {ll3[Language]}
                </li>
                <input className='input' type="number"
                    value={DS} onChange={(e) => {
                        setDS(e.target.value)
                    }} />
                <li className='select'>
                    <select onChange={(e) => {
                        const selectedClass = e.target.value;
                        setTclass(selectedClass)

                    }}
                    >
                        <option value="BLANK"> </option>
                        <option value="EK">Knight</option>
                        <option value="RP">Paladin</option>
                        <option value="MG">Mage</option>
                    </select>
                </li>
                <li className='img'>

                    <img src={imagens[Tclass]} />

                </li>





            </ul>

            <select className='lselector' onChange={(el) => {
                const selectedLanguage = el.target.value;
                setLanguage(selectedLanguage)

            }}
            >
                <option value="BRL"> PT-BR </option>
                <option value="ENL"> EN </option>

            </select>
        </div>
        <ul id='final'>
            <li> {ll4[Language]}  </li>
            <li>{hDisplay + mDisplay + sDisplay}</li>
            <li> {ll5[Language]} </li>
            <li>{wDisplay}</li>
        </ul>
        <div className='footer'>
            {ll6[Language]}
        </div>

    </div>);
}
export default Calc;
