
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){function ShowBackground(sym){sym.$("MerkelClick").hide();sym.$("MechClick").hide();sym.$("TempChemClick").hide();sym.$("LanceClick").hide();sym.$("MeissnerClick").hide();sym.$("PaciniClick").hide();sym.$("PainClick").hide();sym.$("RuffiniClick").hide();sym.$("TemperatureClick").hide();sym.$("ItchClick").hide();sym.$("MechanicalButton3").hide();sym.$("MechanicalButton2").hide();sym.$("MechanicalButton1").hide();sym.$("MerkelButton").hide();sym.$("PaciniButton").hide();sym.$("RuffiniButton").hide();sym.$("LanceButton").hide();sym.$("MeissnerButton").hide();sym.$("TempChemButton3").hide();sym.$("TempChemButton2").hide();sym.$("TempChemButton1").hide();sym.$("TemperatureButton").hide();sym.$("ItchButton").hide();sym.$("PainButton").hide();sym.$("TempText").hide();sym.$("Text").hide();sym.$("Text2").hide();}
function MechShow(sym){sym.$("MerkelButton").show();sym.$("PaciniButton").show();sym.$("LanceButton").show();sym.$("MeissnerButton").show();sym.$("RuffiniButton").show();sym.$("MechanicalButton2").show();sym.$("MechanicalButton3").hide();sym.$("MechanicalButton1").hide();sym.$("TempChemButton3").show();}
function TempShow(sym){sym.$("PainButton").show();sym.$("ItchButton").show();sym.$("TemperatureButton").show();sym.$("TempChemButton2").show();sym.$("TempChemButton3").hide();sym.$("TempChemButton1").hide();sym.$("MechanicalButton3").show();}
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch7}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch6}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch5}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch4}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch3}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerTouch1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch8}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch7}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch6}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch5}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch4}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch3}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelTouch1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LanceTouch2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("LanceClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LanceTouch1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("LanceClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RuffiniTouch2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("RuffiniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RuffiniTouch1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("RuffiniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PaciniTouch3}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("PaciniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PaciniTouch2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("PaciniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PaciniTouch1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("PaciniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch19}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch18}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch13}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch11}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch9}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch8}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch7}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch5}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch4}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_CoolTouch2}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WarmTouch7}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WarmTouch4}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WarmTouch3}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WarmTouch2}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_WarmTouch1}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch37}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch33}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch30}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch27}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch25}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch23}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch21}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch20}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch18}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch14}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch13}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch12}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch10}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch8}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch7}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch4}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainTouch1}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){ShowBackground(sym);sym.$("Text").show();sym.$("Text2").show();sym.$("MechanicalButton1").show();sym.$("TempChemButton1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RuffiniTouch3}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("RuffiniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RuffiniTouch4}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("RuffiniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PaciniTouch4}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("PaciniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ShowBackground}","click",function(sym,e){ShowBackground(sym);sym.$("MechanicalButton1").show();sym.$("TempChemButton1").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TempChemButton1}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TempChemClick").show();sym.getSymbol("TempChemClick").play(104);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MechanicalButton1}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MechClick").show();sym.getSymbol("MechClick").play(104);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ItchTouch1}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("ItchClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ItchTouch2}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("ItchClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MechanicalButton3}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MechClick").show();sym.getSymbol("MechClick").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MechanicalButton2}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MechClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MerkelButton}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MerkelClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RuffiniButton}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("RuffiniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PaciniButton}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("PaciniClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LanceButton}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("LanceClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_MeissnerButton}","click",function(sym,e){ShowBackground(sym);MechShow(sym);sym.$("MeissnerClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TempChemButton3}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TempChemClick").show();sym.getSymbol("TempChemClick").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TempChemButton2}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TempChemClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PainButton}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("PainClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ItchButton}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("ItchClick").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TemperatureButton}","click",function(sym,e){ShowBackground(sym);TempShow(sym);sym.$("TemperatureClick").show();sym.play("Temperature");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'TemperatureClick'
(function(symbolName){})("TemperatureClick");
//Edge symbol end:'TemperatureClick'

//=========================================================

//Edge symbol: 'TempChemClick'
(function(symbolName){})("TempChemClick");
//Edge symbol end:'TempChemClick'

//=========================================================

//Edge symbol: 'RuffiniClick'
(function(symbolName){})("RuffiniClick");
//Edge symbol end:'RuffiniClick'

//=========================================================

//Edge symbol: 'PainClick'
(function(symbolName){})("PainClick");
//Edge symbol end:'PainClick'

//=========================================================

//Edge symbol: 'ItchClick'
(function(symbolName){})("ItchClick");
//Edge symbol end:'ItchClick'

//=========================================================

//Edge symbol: 'PaciniClick'
(function(symbolName){})("PaciniClick");
//Edge symbol end:'PaciniClick'

//=========================================================

//Edge symbol: 'MerkelClick'
(function(symbolName){})("MerkelClick");
//Edge symbol end:'MerkelClick'

//=========================================================

//Edge symbol: 'MeissnerClick'
(function(symbolName){})("MeissnerClick");
//Edge symbol end:'MeissnerClick'

//=========================================================

//Edge symbol: 'MechClick'
(function(symbolName){})("MechClick");
//Edge symbol end:'MechClick'

//=========================================================

//Edge symbol: 'LanceClick'
(function(symbolName){})("LanceClick");
//Edge symbol end:'LanceClick'

//=========================================================

//Edge symbol: 'TemeratureButton2'
(function(symbolName){})("TempChemButton1");
//Edge symbol end:'TempChemButton1'

//=========================================================

//Edge symbol: 'MechanicalButton1'
(function(symbolName){})("MechanicalButton1");
//Edge symbol end:'MechanicalButton1'
})(jQuery,AdobeEdge,"EDGE-490995");