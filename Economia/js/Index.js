	function CalcularTasa() {
        var resultado = "";
        var valorTasa = document.getElementById('txtValorTasa').value;
        var tasaOriginal = document.getElementById('TasaOriginal').value;
        var tasaFinal = document.getElementById('TasaFinal').value;
        var tiempoOriginal = SeleccionTiempoTasa(document.getElementById('TiempoOriginal').value);
        var tiempoFinal = SeleccionTiempoTasa(document.getElementById('TiempoFinal').value);
        var tiempoResultado = document.getElementById('TiempoFinal').value;


        if (tasaOriginal == "Nominal" && tasaFinal == "Efectiva") {
            resultado = ConvercionNominalAEfectiva(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal).toString();
        }
        else if (tasaOriginal == "Efectiva" && tasaFinal == "Nominal") {
            resultado = ConversionEfectivaANominal(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal);
        }
        else if (tasaOriginal == "Efectiva" && tasaFinal == "Efectiva") {
            resultado = EquivalenciaEfectiva(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal);
        }
        else if (tasaOriginal == "Nominal" && tasaFinal == "Nominal") {
            resultado = EquivalenciaNominal(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal);
        }
        alert('El resultado es: ' + resultado + '\n' + 'La tasa es: ' + tasaFinal + '\n' + 'El tiempo es: ' + tiempoResultado);
        document.getElementById('txtTasaCredito').value = resultado;
        document.getElementById('txtValorTiempo').value = tiempoResultado;
    }
	
	function LimpiarFormTasas(){
		document.getElementById('txtValorTasa').value = "";
		document.getElementById('TasaOriginal').value = "0";
		document.getElementById('TasaFinal').value = "0";
		document.getElementById('TiempoOriginal').value = "0";
		document.getElementById('TiempoFinal').value = "0";
	}
	
	function CargarSelect(){
		var cantidad = document.getElementById('txtCantidadTiempo').value;
		var valor = 0;
		document.getElementById('SelectTiempo1').options.length = 0;
		document.getElementById('SelectTiempo2').options.length = 0;
		document.getElementById('SelectTiempo3').options.length = 0;
		AgregarSelect("SelectTiempo1");	
	    AgregarSelect("SelectTiempo2");
		AgregarSelect("SelectTiempo3");
		var array = [];
		for (var i = 0; i < cantidad; i++) {
			array.push(i+1);
        }
		if (array.length > 0) {
			if(array.length < 20){
				valor = array.length;
			}
			else
			{
				valor = 20;
			}			
			addOptions("SelectTiempo1", array, 0, valor);
        }
		if (array.length > 20) {
			if(array.length < 40){
				valor = array.length;
			}
			else
			{
				valor = 40;
			}
			addOptions("SelectTiempo2", array, 20, valor);
        }
		if (array.length > 40) {
			addOptions("SelectTiempo3", array, 40, array.length);
        }
	}
	
	function AgregarSelect(domElement){
		var select = document.getElementsByName(domElement)[0];
		var option = document.createElement("option");
		option.value = 0;
		option.text = "Seleccione...";
		select.add(option);
	}
	
	function addOptions(domElement, array, valorI, valorSelect) {
		var select = document.getElementsByName(domElement)[0];
		for (var i = valorI; i < valorSelect; i++) {
			var option = document.createElement("option");
			option.value = i+1;
			option.text = array[i];
			select.add(option);
			}
	}
	
	function ConvercionNominalAEfectiva(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal) {
        var valor = 0.1;
        valor = valorTasa / 100;
        valor = valor / tiempoOriginal;
        valor = valor + 1;
        valor = Math.pow(valor, (tiempoOriginal / tiempoFinal));
        valor = valor - 1;
        valor = valor * 100;
        return valor;
    }

    function ConversionEfectivaANominal(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal) {
        var valor = 0.0;
        valor = valorTasa / 100;
        valor = valor + 1;
        valor = Math.pow(valor, (tiempoOriginal / tiempoFinal));
        valor = valor - 1;
        valor = valor * tiempoFinal;
        valor = valor * 100;
        return valor;
    }

    function EquivalenciaEfectiva(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal) {
        var valor = 0.0;
        valor = valorTasa / 100;
        valor = valor + 1;
        valor = Math.pow(valor, (tiempoOriginal / tiempoFinal));
        valor = valor - 1;
        valor = valor * 100;
        return valor;
    }

    function EquivalenciaNominal(valorTasa, tasaOriginal, tasaFinal, tiempoOriginal, tiempoFinal) {
        var valor = 0.0;
        valor = (valorTasa / 100) / tiempoOriginal;
        valor = valor + 1;
        valor = Math.pow(valor, (tiempoOriginal / tiempoFinal));
        valor = valor - 1;
        valor = valor * tiempoFinal;
        valor = valor * 100;
        return valor;
    }
	
	function SeleccionTiempoTasa(tiempoTasa) {
        var tiempo = 0.0;
        switch (tiempoTasa) {
            case "Mensual":
                tiempo = 12.0;
                break;
            case "Bimestral":
                tiempo = 6.0;
                break;
            case "Trimestral":
                tiempo = 4.0;
                break;
            case "Semestral":
                tiempo = 2.0;
                break;
            case "Anual":
                tiempo = 1.0;
                break;
            default:
                tiempo = 0.0;
                break;
        }
        return tiempo;
    }
	
	function CalcularPagoExtraordinario(){
		var valorCapital = Number(document.getElementById('txtValorCapital').value);
		var valorTiempo = parseInt(document.getElementById('txtCantidadTiempo').value);
		var valorTasa = Number(document.getElementById('txtTasaCredito').value);
		var cuota = CalcularCuota(valorCapital, valorTiempo, valorTasa);
		var pago1 = Number(document.getElementById('txtPagoExt1').value);
		var pago2 = Number(document.getElementById('txtPagoExt2').value);
		var pago3 = Number(document.getElementById('txtPagoExt3').value);
		var selectTiempo1 = parseInt(document.getElementById('SelectTiempo1').value);
		var selectTiempo2 = parseInt(document.getElementById('SelectTiempo2').value);
		var selectTiempo3 = parseInt(document.getElementById('SelectTiempo3').value);
		var newCuota = 0;
		var tiempoTemporal = 0;
		var cuotaTemporal = 0;
		document.getElementById('txtCuotaInicial').value = cuota;
		if(document.getElementById("option1").checked == true){
			if(selectTiempo1 > 0){
				tiempoTemporal = selectTiempo1 - 1;
				tiempoTemporal = valorTiempo - tiempoTemporal;
				var valorPresente = CalcularValorPresente(pago1, cuota, tiempoTemporal, valorTasa);		
				document.getElementById('txtNewTime1').value = CalcularTiempo(valorPresente, cuota, valorTasa) + selectTiempo1;
			}
			if(selectTiempo2 > 0){
				tiempoTemporal = selectTiempo2 - 1;
				if(Number(document.getElementById('txtNewTime1').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime1').value) - tiempoTemporal;
				}
				else{
					tiempoTemporal = valorTiempo - tiempoTemporal;
				}
				var valorPresente = CalcularValorPresente(pago2, cuota, tiempoTemporal, valorTasa);		
				document.getElementById('txtNewTime2').value = CalcularTiempo(valorPresente, cuota, valorTasa);	
			}
			if(selectTiempo3 > 0){
				tiempoTemporal = selectTiempo3 - 1;
				if(Number(document.getElementById('txtNewTime1').value) > 0 && Number(document.getElementById('txtNewTime2').value) == 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime1').value) - tiempoTemporal;
				}
				else if(Number(document.getElementById('txtNewTime2').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime2').value) - tiempoTemporal;
				}
				else{
					tiempoTemporal = valorTiempo - tiempoTemporal;
				}
				var valorPresente = CalcularValorPresente(pago3, cuota, tiempoTemporal, valorTasa);		
				document.getElementById('txtNewTime3').value = CalcularTiempo(valorPresente, cuota, valorTasa);
			}
		}
		else if(document.getElementById("option2").checked == true){
			if(selectTiempo1 > 0){
				tiempoTemporal = selectTiempo1 - 1;
				if(Number(document.getElementById('txtNewTime1').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime1').value) - tiempoTemporal;
				}
				else{
					tiempoTemporal = valorTiempo - tiempoTemporal;	
				}
				newCuota = CalcularNuevaCuota(pago1, cuota, tiempoTemporal, valorTasa);
				document.getElementById('txtNewCuota1').value = newCuota;
			}
			if(selectTiempo2 > 0){
				tiempoTemporal = selectTiempo2 - 1;
				if(Number(document.getElementById('txtNewTime1').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime1').value) - tiempoTemporal;
				}
				else if(Number(document.getElementById('txtNewTime2').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime2').value) - tiempoTemporal;
				}
				else{
					tiempoTemporal = valorTiempo - tiempoTemporal;	
				}
				if(Number(document.getElementById('txtNewCuota1').value) > 0){
					cuotaTemporal = Number(document.getElementById('txtNewCuota1').value);
					newCuota = CalcularNuevaCuota(pago2, cuotaTemporal, tiempoTemporal, valorTasa);	
				}
				else{
					newCuota = CalcularNuevaCuota(pago2, cuota, tiempoTemporal, valorTasa);	
				}
				document.getElementById('txtNewCuota2').value = newCuota;
			}
			if(selectTiempo3 > 0){
				tiempoTemporal = selectTiempo3 - 1;
				if(Number(document.getElementById('txtNewTime1').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime1').value) - tiempoTemporal;
				}
				else if(Number(document.getElementById('txtNewTime2').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime2').value) - tiempoTemporal;
				}
				else if(Number(document.getElementById('txtNewTime3').value) > 0){
					tiempoTemporal = Number(document.getElementById('txtNewTime3').value) - tiempoTemporal;
				}
				else{
					tiempoTemporal = valorTiempo - tiempoTemporal;	
				}
				if(Number(document.getElementById('txtNewCuota1').value) > 0){
					cuotaTemporal = Number(document.getElementById('txtNewCuota1').value);
					newCuota = CalcularNuevaCuota(pago3, cuotaTemporal, tiempoTemporal, valorTasa);	
				}
				else if(Number(document.getElementById('txtNewCuota2').value) > 0){
					cuotaTemporal = Number(document.getElementById('txtNewCuota2').value);
					newCuota = CalcularNuevaCuota(pago3, cuotaTemporal, tiempoTemporal, valorTasa);	
				}
				else{
					newCuota = CalcularNuevaCuota(pago3, cuota, tiempoTemporal, valorTasa);	
				}
				document.getElementById('txtNewCuota2').value = newCuota;
			}
		}
		LimpiarPagos();
	}
	
	function CalcularCuota(valor, tiempo, tasa){
		var cuota = 0;
		tiempo = tiempo * -1;
		tasa = tasa/100;
		cuota = valor/((1-(Math.pow(1+tasa, tiempo)))/tasa);
		return cuota;
	}
	
	function CalcularValorPresente(pago, cuota, tiempo, tasa){
		var valorPresente = 0;
		tiempo = tiempo * -1;
		tasa = tasa/100;
		valorPresente = cuota*((1-(Math.pow(1+tasa, tiempo)))/tasa);
		valorPresente = valorPresente - (pago - (valorPresente * tasa));
		document.getElementById('txtValorPresente').value = valorPresente;
		return valorPresente;
	}
	
	function CalcularTiempo(valorPresente, cuota, tasa){
		var tiempo = 0;
		tasa = tasa/100;
		tiempo = -1*(Math.log(-1*(-1 + ((valorPresente/cuota)*tasa)))/Math.log(tasa+1));
		tiempo = tiempo;
		tiempo = tiempo;
		tiempo = tiempo;
		return tiempo;
	}

	function RestarTiempo(tiempo, tiempoPresente){
		var tiempoParcial = 0;
		tiempoParcial = tiempo - tiempoPresente;
		return tiempoParcial;
	}
	
	function CalcularNuevaCuota(pago, cuota, tiempo, tasa){
		var valorPresente = 0;
		var nuevaCuota = 0;
		tiempo = tiempo * -1;
		tasa = tasa/100;
		valorPresente = cuota*((1-(Math.pow(1+tasa, tiempo)))/tasa);
		valorPresente = valorPresente - (pago - (valorPresente * tasa));
		document.getElementById('txtValorPresente').value = valorPresente;
		tiempo = -1*(tiempo + 1);
		tasa = tasa * 100;
		nuevaCuota = CalcularCuota(valorPresente, tiempo, tasa);
		return nuevaCuota;
	}
	
	function LimpiarPagoUno(){
		document.getElementById('txtPagoExt1').value = "";
		document.getElementById('SelectTiempo1').value = "0";
		document.getElementById('txtNewTime1').value = "";
		document.getElementById('txtNewCuota1').value = "";
	}
	
	function LimpiarPagoDos(){
		document.getElementById('txtPagoExt2').value = "";
		document.getElementById('SelectTiempo2').value = "0";
		document.getElementById('txtNewTime2').value = "";
		document.getElementById('txtNewCuota2').value = "";
	}
	
	function LimpiarPagoTres(){
		document.getElementById('txtPagoExt3').value = "";
		document.getElementById('SelectTiempo3').value = "0";
		document.getElementById('txtNewTime3').value = "";
		document.getElementById('txtNewCuota3').value = "";
	}
	
	function LimpiarPagoExtraordinario(){
		document.getElementById('txtValorCapital').value = "";
		document.getElementById('txtCantidadTiempo').value = "";
		document.getElementById('txtTasaCredito').value = "";
		document.getElementById('txtValorTiempo').value = "";
		document.getElementById('txtCuotaInicial').value = "";
		document.getElementById('txtPagoExt1').value = "";
		document.getElementById('SelectTiempo1').value = "0";
		document.getElementById('txtNewTime1').value = "";
		document.getElementById('txtNewCuota1').value = "";
		document.getElementById('txtPagoExt2').value = "";
		document.getElementById('SelectTiempo2').value = "0";
		document.getElementById('txtNewTime2').value = "";
		document.getElementById('txtNewCuota2').value = "";
		document.getElementById('txtPagoExt3').value = "";
		document.getElementById('SelectTiempo3').value = "0";
		document.getElementById('txtNewTime3').value = "";
		document.getElementById('txtNewCuota3').value = "";
		document.getElementById('txtValorPresente').value = "";
	}
	
	function LimpiarPagos(){
		document.getElementById('txtPagoExt1').value = "";
		document.getElementById('SelectTiempo1').value = "0";
		document.getElementById('txtPagoExt2').value = "";
		document.getElementById('SelectTiempo2').value = "0";
		document.getElementById('txtPagoExt3').value = "";
		document.getElementById('SelectTiempo3').value = "0";
	}
	
	function SumarCuota(){
		var cuota = Number(document.getElementById('txtCuotaInicial').value);
		var pago = 0;
		if(Number(document.getElementById('txtPagoExt1').value) > 0){
			pago = Number(document.getElementById('txtPagoExt1').value);
			pago = pago + cuota;
			document.getElementById('txtPagoExt1').value = pago; 
		}
		if(Number(document.getElementById('txtPagoExt2').value) > 0){
			if(Number(document.getElementById('txtNewCuota1').value) > 0){
				cuota = Number(document.getElementById('txtNewCuota1').value);
			}
			pago = Number(document.getElementById('txtPagoExt2').value);
			pago = pago + cuota;
			document.getElementById('txtPagoExt2').value = pago;
		}
		if(Number(document.getElementById('txtPagoExt3').value) > 0){
			if(Number(document.getElementById('txtNewCuota1').value) > 0){
				cuota = Number(document.getElementById('txtNewCuota1').value);
			}
			else if(Number(document.getElementById('txtNewCuota2').value) > 0){
				cuota = Number(document.getElementById('txtNewCuota2').value);
			}
			pago = Number(document.getElementById('txtPagoExt3').value);
			pago = pago + cuota;
			document.getElementById('txtPagoExt3').value = pago;
		}
	}
	
	
	
	
	
	
	
	
	
	
	