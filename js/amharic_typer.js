(function ($) {
    

        var consonantsE = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
        var voyelE = ["A", "E", "I", "O", "U"];

        var doubleConsonantsE = ["CH", "SH", "TS"];
        var singleW = ["BWA", "CWA", "DWA", "FWA", "GWA", "HWA", "KWA", "LWA", "MWA", "QWA", "RWA", "SWA", "TWA", "VWA", "ZWA"];
        var doubleW = ["CHWA", "SHWA", "TSWA"];

        var translatorMap = {};

        translatorMap["BA"] = ["ባ"];
        translatorMap["BE"] = ["በ", "ቤ"];
        translatorMap["BI"] = ["ብ", "ቢ"];
        translatorMap["BO"] = ["ቦ"];
        translatorMap["BU"] = ["ቡ"];
        translatorMap["B"] = ["ብ", "በ"];
        translatorMap["CA"] = ["ቻ", "ጫ"];
        translatorMap["CE"] = ["ጨ", "ቼ", "ቸ", "ጬ"];
        translatorMap["CI"] = ["ጭ", "ቺ", "ጪ"];
        translatorMap["CO"] = ["ጮ"];
        translatorMap["CU"] = ["ቹ", "ጩ"];
        translatorMap["C"] = ["ች", "ጭ"];
        translatorMap["DA"] = ["ዳ", "ደ"];
        translatorMap["DE"] = ["ደ", "ዴ"];
        translatorMap["DI"] = ["ድ", "ዲ"];
        translatorMap["DO"] = ["ዶ"];
        translatorMap["DU"] = ["ዱ"];
        translatorMap["D"] = ["ድ"];
        translatorMap["FA"] = ["ፋ"];
        translatorMap["FE"] = ["ፈ", "ፌ"];
        translatorMap["FI"] = ["ፍ", "ፊ"];
        translatorMap["FO"] = ["ፎ"];
        translatorMap["FU"] = ["ፉ"];
        translatorMap["F"] = ["ፍ"];
        translatorMap["GA"] = ["ጋ"];
        translatorMap["GE"] = ["ገ", "ጌ"];
        translatorMap["GI"] = ["ግ", "ጊ"];
        translatorMap["GO"] = ["ጎ"];
        translatorMap["GU"] = ["ጉ"];
        translatorMap["G"] = ["ግ"];
        translatorMap["HA"] = ["ሀ", "ሃ", "ሐ", "ኃ", "ሓ", "ኀ"];
        translatorMap["HE"] = ["ሀ", "ሐ", "ሄ", "ሔ", "ኄ"];
        translatorMap["HI"] = ["ህ", "ሕ", "ሂ"];
        translatorMap["HO"] = ["ሆ"];
        translatorMap["HU"] = ["ሁ"];
        translatorMap["H"] = ["ህ", "ሕ", "ኅ"];
        translatorMap["JA"] = ["ጃ"];
        translatorMap["JE"] = ["ጀ", "ጄ"];
        translatorMap["JI"] = ["ጅ", "ጂ"];
        translatorMap["JO"] = ["ጆ"];
        translatorMap["JU"] = ["ጁ"];
        translatorMap["J"] = ["ጅ"];
        translatorMap["KA"] = ["ካ", "ቃ"];
        translatorMap["KE"] = ["ከ", "ቀ", "ቄ", "ኬ", "ኸ"];
        translatorMap["KI"] = ["ክ", "ኪ", "ቂ"];
        translatorMap["KO"] = ["ኮ", "ቆ"];
        translatorMap["KU"] = ["ቁ", "ኩ"];
        translatorMap["K"] = ["ክ", "ቅ", "ከ"];
        translatorMap["LA"] = ["ላ"];
        translatorMap["LE"] = ["ለ", "ሌ"];
        translatorMap["LI"] = ["ል", "ሊ"];
        translatorMap["LO"] = ["ሎ"];
        translatorMap["LU"] = ["ሉ"];
        translatorMap["L"] = ["ል", "ለ"];
        translatorMap["MA"] = ["ማ"];
        translatorMap["ME"] = ["መ", "ሜ"];
        translatorMap["MI"] = ["ም", "ሚ"];
        translatorMap["MO"] = ["ሞ"];
        translatorMap["MU"] = ["ሙ"];
        translatorMap["M"] = ["ም"];
        translatorMap["NA"] = ["ና", "ኛ"];
        translatorMap["NE"] = ["ነ", "ኔ", "ኘ"];
        translatorMap["NI"] = ["ን", "ኒ"];
        translatorMap["NO"] = ["ኖ", "ኞ"];
        translatorMap["NU"] = ["ኑ", "ኙ"];
        translatorMap["N"] = ["ን", "ኝ"];
        translatorMap["PA"] = ["ፓ", "ጳ"];
        translatorMap["PE"] = ["ፔ", "ፐ", "ጴ", "ጰ"];
        translatorMap["PI"] = ["ፕ", "ፒ", "ጵ"];
        translatorMap["PO"] = ["ፖ"];
        translatorMap["PU"] = ["ፑ"];
        translatorMap["P"] = ["ፕ", "ጵ"];
        translatorMap["QA"] = ["ቃ"];
        translatorMap["QE"] = ["ቀ", "ቄ"];
        translatorMap["QI"] = ["ቂ"];
        translatorMap["QO"] = ["ቆ"];
        translatorMap["QU"] = ["ቁ"];
        translatorMap["Q"] = ["ቅ"];
        translatorMap["RA"] = ["ራ"];
        translatorMap["RE"] = ["ረ", "ሬ"];
        translatorMap["RI"] = ["ር", "ሪ"];
        translatorMap["RO"] = ["ሮ"];
        translatorMap["RU"] = ["ሩ"];
        translatorMap["R"] = ["ር"];
        translatorMap["SA"] = ["ሳ", "ሣ", "ጻ"];
        translatorMap["SE"] = ["ሰ", "ሴ", "ሠ", "ጸ", "ጼ"];
        translatorMap["SI"] = ["ስ", "ሲ", "ጽ"];
        translatorMap["SO"] = ["ሶ", "ሦ", "ጾ"];
        translatorMap["SU"] = ["ሱ", "ጹ", "ሡ"];
        translatorMap["S"] = ["ስ", "ጽ", "ሥ"];
        translatorMap["TA"] = ["ታ", "ጣ"];
        translatorMap["TE"] = ["ተ", "ጠ", "ቴ", "ጤ"];
        translatorMap["TI"] = ["ት", "ጥ"];
        translatorMap["TO"] = ["ቶ", "ጦ"];
        translatorMap["TU"] = ["ቱ", "ጡ"];
        translatorMap["T"] = ["ት", "ጥ"];
        translatorMap["VA"] = ["ቫ"];
        translatorMap["VE"] = ["ቨ", "ቬ"];
        translatorMap["VI"] = ["ቪ", "ቭ"];
        translatorMap["VO"] = [];
        translatorMap["VU"] = [];
        translatorMap["V"] = ["ቭ"];
        translatorMap["WA"] = ["ዋ"];
        translatorMap["WE"] = ["ወ", "ዌ"];
        translatorMap["WI"] = ["ው", "ዊ"];
        translatorMap["WO"] = ["ዎ"];
        translatorMap["WU"] = ["ዉ"];
        translatorMap["W"] = ["ው"];
        translatorMap["XA"] = ["ሻ"];
        translatorMap["XE"] = ["ሸ", "ሼ"];
        translatorMap["XI"] = ["ሺ"];
        translatorMap["XO"] = ["ሾ"];
        translatorMap["XU"] = ["ሹ"];
        translatorMap["X"] = ["ሽ"];
        translatorMap["YA"] = ["ያ"];
        translatorMap["YE"] = ["የ", "ዬ"];
        translatorMap["YI"] = ["ይ"];
        translatorMap["YO"] = ["ዮ"];
        translatorMap["YU"] = ["ዩ"];
        translatorMap["Y"] = ["ይ", "የ"];
        translatorMap["ZA"] = ["ዛ", "ዣ"];
        translatorMap["ZE"] = ["ዘ", "ዜ", "ዤ"];
        translatorMap["ZI"] = ["ዝ", "ዚ", "ዥ", "ዢ"];
        translatorMap["ZO"] = ["ዞ"];
        translatorMap["ZU"] = ["ዙ"];
        translatorMap["Z"] = ["ዝ", "ዥ"];
        translatorMap["A"] = ["አ", "ዓ", "ዐ"];
        translatorMap["E"] = ["አ", "ኤ"];
        translatorMap["I"] = ["እ", "ኢ", "ዕ"];
        translatorMap["O"] = ["ኦ", "ዖ"];
        translatorMap["U"] = ["ኡ", "ዑ"];
        translatorMap["CHA"] = ["ቻ"];
        translatorMap["CHE"] = ["ቸ", "ቼ"];
        translatorMap["CHI"] = ["ቺ"];
        translatorMap["CHO"] = [];
        translatorMap["CHU"] = ["ቹ"];
        translatorMap["CH"] = ["ች"];
        translatorMap["SHA"] = ["ሻ"];
        translatorMap["SHE"] = ["ሸ", "ሼ"];
        translatorMap["SHI"] = ["ሺ"];
        translatorMap["SHO"] = ["ሾ"];
        translatorMap["SHU"] = ["ሹ"];
        translatorMap["SH"] = ["ሽ"];
        translatorMap["TSA"] = ["ፃ"];
        translatorMap["TSE"] = ["ፀ", "ፄ"];
        translatorMap["TSI"] = [];
        translatorMap["TSO"] = ["ፆ"];
        translatorMap["TSU"] = ["ፁ"];
        translatorMap["TS"] = ["ፅ"];
        translatorMap["BWA"] = ["ቧ"];
        translatorMap["CWA"] = ["ቿ", "ጧ"];
        translatorMap["DWA"] = ["ዷ"];
        translatorMap["FWA"] = ["ፏ"];
        translatorMap["GWA"] = ["ጓ"];
        translatorMap["HWA"] = ["ሗ"];
        translatorMap["KWA"] = ["ኳ", "ቋ"];
        translatorMap["LWA"] = ["ሏ"];
        translatorMap["MWA"] = ["ሟ"];
        translatorMap["QWA"] = ["ቋ"];
        translatorMap["RWA"] = ["ሯ"];
        translatorMap["SWA"] = ["ሷ", "ሧ"];
        translatorMap["TWA"] = ["ቷ", "ጧ"];
        translatorMap["VWA"] = ["ቯ"];
        translatorMap["ZWA"] = ["ዟ", "ዧ"];
        translatorMap["CHWA"] = ["ቿ"];
        translatorMap["SHWA"] = ["ሿ"];
        translatorMap["TSWA"] = ["ጿ"];


        var maxPosibilities = 8;

        function divideIntoPhonems(str, res, finalRes) {
            var i = 0;
            while (i < str.length) {
                if (i == str.length - 1) {
                    res.push(str[i]);
                    i++;
                } else if (voyelE.includes(str[i])) {
                    res.push(str[i]);
                    i++;
                } else if (i + 3 < str.length && doubleW.includes(str.substring(i, i + 4))) {
                    divideIntoPhonems(str.substring(i + 4), res.concat(str.substring(i, i + 4)), finalRes);
                    divideIntoPhonems(str.substring(i + 3), res.concat(str.substring(i, i + 3)), finalRes);
                    divideIntoPhonems(str.substring(i + 2), res.concat(str.substring(i, i + 2)), finalRes);
                    return

                } else if (i + 2 < str.length && singleW.includes(str.substring(i, i + 3))) {
                    divideIntoPhonems(str.substring(i + 3), res.concat(str.substring(i, i + 3)), finalRes);
                    divideIntoPhonems(str.substring(i + 1), res.concat(str.substring(i, i + 1)), finalRes);
                    return
                } else if (doubleConsonantsE.includes(str.substring(i, 2 + i))) {
                    if (i + 2 < str.length && voyelE.includes(str[i + 2])) {
                        divideIntoPhonems(str.substring(i + 3), res.concat(str.substring(i, i + 3)), finalRes)
                    }

                    divideIntoPhonems(str.substring(i + 2), res.concat(str.substring(i, i + 2)), finalRes);
                    divideIntoPhonems(str.substring(i + 1), res.concat(str.substring(i, i + 1)), finalRes);
                    return
                } else if (consonantsE.includes(str[1 + i])) {
                    res.push(str[i]);
                    i++;
                } else {
                    divideIntoPhonems(str.substring(i + 2), res.concat(str.substring(i, i + 2)), finalRes);
                    divideIntoPhonems(str.substring(i + 1), res.concat(str.substring(i, i + 1)), finalRes);
                    return
                }

            }

            finalRes.push(res);
        }

        function getPossibleFidels(listOfPhonems, res, finalRes) {

            while (listOfPhonems.length != 0) {
                var firstPhonem = listOfPhonems.shift();
                var phonemList = translatorMap[firstPhonem];
                if (null == phonemList || phonemList.length == 0) {

                    return
                } else if (phonemList.length > 1) {
                    for (var i = 0; i < phonemList.length; i++) {
                        getPossibleFidels(listOfPhonems, res.concat(phonemList[i]), finalRes)
                    }
                    return
                } else {
                    res.push(phonemList[0]);
                }

            }
            if (res.length != 0) {
                finalRes.push(res);
            }

        }


        function getFidels(input) {

            input = input.replace(/[^A-Za-z]+/g, "");

            if (input.length != 0) {
                input = input.toUpperCase();
                var listOfPhonems = [];
                divideIntoPhonems(input, [], listOfPhonems);

                var posFidelList = [];

                for (var i = 0; i < maxPosibilities && i < listOfPhonems.length; i++) {
                    getPossibleFidels(listOfPhonems[i], [], posFidelList)
                }
                var finalRes = [];
                for (var j = 0; j < maxPosibilities && j < posFidelList.length; j++) {
                    finalRes.push(posFidelList[j].join(""));
                }
                return finalRes;
            }
            return []
        }



    var $global_fsm_InputEventsEnum = {
        TYPE_AZ: 1,
        TYPE_09: 2,
        TYPE_DOWN_ARROW: 3,
        TYPE_UP_ARROW: 4,
        TYPE_SPACE: 5,
        TYPE_ENTER: 6,
        TYPE_BACKSPACE: 7,
        TYPE_OTHER: 8,
        ON_FOCUS: 9,
        ON_PASTE: 10,
        ON_CLICK: 11,
        ON_RECEIVE_FIELDS: 12
    };

    function printable(e) {
        switch (e) {
            case $global_fsm_InputEventsEnum.TYPE_AZ:
                return "TYPE_AZ";
                break;
            case $global_fsm_InputEventsEnum.TYPE_09:
                return "TYPE_09";
                break;
            case $global_fsm_InputEventsEnum.TYPE_DOWN_ARROW:
                return "TYPE_DOWN_ARROW";
                break;
            case $global_fsm_InputEventsEnum.TYPE_UP_ARROW:
                return "TYPE_UP_ARROW";
                break;
            case $global_fsm_InputEventsEnum.TYPE_SPACE:
                return "TYPE_SPACE";
                break;
            case $global_fsm_InputEventsEnum.TYPE_ENTER:
                return "TYPE_ENTER";
                break;
            case $global_fsm_InputEventsEnum.TYPE_BACKSPACE:
                return "TYPE_BACKSPACE";
                break;
            case $global_fsm_InputEventsEnum.TYPE_OTHER:
                return "TYPE_OTHER";
                break;
            case $global_fsm_InputEventsEnum.ON_FOCUS:
                return "ON_FOCUS";
                break;
            case $global_fsm_InputEventsEnum.ON_PASTE:
                return "ON_PASTE";
                break;
            case $global_fsm_InputEventsEnum.ON_CLICK:
                return "ON_CLICK";
                break;
            case $global_fsm_InputEventsEnum.ON_RECEIVE_FIELDS:
                return "ON_RECEIVE_FIELDS";
                break;
            default:
                console.error("Error in switch case " + e);
                return ""
        }
    }

    var $global_fsm_statesEnum = {
        STATE_IDLE: 1,
        STATE_WRITING_NO_SHOW: 2,
        STATE_WRITING_SHOW: 3
    };

    $.fn.eventManager = function (e,k) {

        switch ($(this).data("$fsm_state")) {
            case $global_fsm_statesEnum.STATE_IDLE:
                $(this).actionOnStateIdle(e, k);
                break;
            case $global_fsm_statesEnum.STATE_WRITING_NO_SHOW:
                $(this).actionOnStateWritingNoShow(e, k);
                break;
            case $global_fsm_statesEnum.STATE_WRITING_SHOW:
                $(this).actionOnStateWritingShow(e, k);
                break;
            default:
                console.log("ERROR in the FSM");
        }
    };


    $.fn.actionOnStateIdle = function (e,k) {

        console.log("received event " + printable(e) + " on state idle");

        switch (e) {
            case $global_fsm_InputEventsEnum.TYPE_AZ:
                $(this).data("$fsm_string_processed", String.fromCharCode(k));
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_WRITING_NO_SHOW);
                this.doApiQuery();
                break;

            case $global_fsm_InputEventsEnum.TYPE_09:
            case $global_fsm_InputEventsEnum.TYPE_DOWN_ARROW:
            case $global_fsm_InputEventsEnum.TYPE_UP_ARROW:
            case $global_fsm_InputEventsEnum.TYPE_SPACE:
            case $global_fsm_InputEventsEnum.TYPE_ENTER:
            case $global_fsm_InputEventsEnum.TYPE_BACKSPACE:
            case $global_fsm_InputEventsEnum.TYPE_OTHER:
            case $global_fsm_InputEventsEnum.ON_FOCUS:
            case $global_fsm_InputEventsEnum.ON_PASTE:
            case $global_fsm_InputEventsEnum.ON_CLICK:
            case $global_fsm_InputEventsEnum.ON_RECEIVE_FIELDS:
                $(this).data("$fsm_string_processed", "");
                break;

            default:
                $(this).data("$fsm_string_processed", "");
                console.error("Error in the FSM. untreated event " + e + " in state IDLE");
                break

        }
    };

    $.fn.actionOnStateWritingNoShow = function (e,k) {

        console.log("received event " + printable(e) + " on state writing no show");

        switch (e) {
            case $global_fsm_InputEventsEnum.TYPE_AZ:
                $(this).data("$fsm_string_processed", $(this).data("$fsm_string_processed") + String.fromCharCode(k));
                this.doApiQuery();
                break;

            case $global_fsm_InputEventsEnum.TYPE_BACKSPACE:
                $(this).data("$fsm_string_processed", $(this).data("$fsm_string_processed").substring(0, $(this).data("$fsm_string_processed").length - 1));
                this.doApiQuery();
                break;

            case $global_fsm_InputEventsEnum.TYPE_DOWN_ARROW:
            case $global_fsm_InputEventsEnum.TYPE_UP_ARROW:
                break;

            case $global_fsm_InputEventsEnum.ON_RECEIVE_FIELDS:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_WRITING_SHOW);
                this.showDropdown();
                break;

            case $global_fsm_InputEventsEnum.TYPE_09:
            case $global_fsm_InputEventsEnum.TYPE_SPACE:
            case $global_fsm_InputEventsEnum.TYPE_ENTER:
            case $global_fsm_InputEventsEnum.TYPE_OTHER:
            case $global_fsm_InputEventsEnum.ON_FOCUS:
            case $global_fsm_InputEventsEnum.ON_PASTE:
            case $global_fsm_InputEventsEnum.ON_CLICK:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                $(this).data("$fsm_string_processed", "");
                this.hideDropdown();
                break;

            default:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                $(this).data("$fsm_string_processed", "");
                this.hideDropdown();
                console.error("Error in the FSM. untreated event " + e + " in state IDLE");
                break
        }
    };

    $.fn.actionOnStateWritingShow = function (e,k) {

        console.log("received event " + printable(e) + " on state writing show");
        switch (e) {
            case $global_fsm_InputEventsEnum.TYPE_AZ:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_WRITING_NO_SHOW);
                this.hideDropdown();
                $(this).data("$fsm_string_processed", $(this).data("$fsm_string_processed") + String.fromCharCode(k));
                this.doApiQuery();
                break;

            case $global_fsm_InputEventsEnum.TYPE_09:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                this.choseDropdownOption(String.fromCharCode(k));
                this.hideDropdown();
                event.preventDefault();
                break;

            case $global_fsm_InputEventsEnum.TYPE_DOWN_ARROW:
                this.moveSelectedDropdownOption(true);
                event.preventDefault();
                break;

            case $global_fsm_InputEventsEnum.TYPE_UP_ARROW:
                this.moveSelectedDropdownOption(false);
                event.preventDefault();
                break;

            case $global_fsm_InputEventsEnum.TYPE_SPACE:
            case $global_fsm_InputEventsEnum.TYPE_ENTER:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                this.choseSelectedDropdownOption();
                this.hideDropdown();
                this.resetData();
                event.preventDefault();
                break;

            case $global_fsm_InputEventsEnum.TYPE_BACKSPACE:
                this.hideDropdown();
                $(this).data("$fsm_string_processed", $(this).data("$fsm_string_processed").substring(0, $(this).data("$fsm_string_processed").length - 1));
                if ($(this).data("$fsm_string_processed").length > 0) {
                    $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_WRITING_NO_SHOW);
                    this.doApiQuery();
                }
                else {
                    $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                }
                break;

            case $global_fsm_InputEventsEnum.ON_RECEIVE_FIELDS:
                console.error("Received fields while FSM was displaying data... whaaaat?");
                break;

            case $global_fsm_InputEventsEnum.TYPE_OTHER:
            case $global_fsm_InputEventsEnum.ON_FOCUS:
            case $global_fsm_InputEventsEnum.ON_PASTE:
            case $global_fsm_InputEventsEnum.ON_CLICK:
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                $(this).data("$fsm_string_processed", "");
                this.hideDropdown();
                break;

            default:
                console.error("Error in the FSM. untreated event " + e + " in state IDLE");
                $(this).data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
                $(this).data("$fsm_string_processed", "");
                this.hideDropdown();
                break;
        }
    };


    $.fn.doApiQuery = function () {

        console.log("entering doApiQuery");

        if ($(this).data("$fsm_string_processed").length > 0) {

            var response = getFidels($(this).data("$fsm_string_processed"));
            $(this).data("$fsm_list_fidels", response);
            console.log($(this).data("$fsm_list_fidels"));
            $(this).eventManager($global_fsm_InputEventsEnum.ON_RECEIVE_FIELDS)
        }
    };


    $.fn.showDropdown = function () {
        console.log("show dropdown");
        $(this).data("$fsm_list_fidels_selected_index", 0);

        var l = $(this).data("$fsm_list_fidels");
        var drop = $(this).next("div.dropdown").find("div.dropdown-content");
        drop.empty();
        drop.show();
        $.each(l,function (index, value){
            var idx = index+1;
            drop.append("<span data-idx='" + index + "'>" + idx + ". " + value + "</span>");
        });
        this.highlightSelectionInDropdown();
    };

    $.fn.hideDropdown = function () {
        console.log("hide dropdown");
        $(this).data("$fsm_list_fidels_selected_index", 0);

        var l = $(this).data("$fsm_list_fidels");
        var drop = $(this).next("div.dropdown").find("div.dropdown-content");
        drop.empty();
        drop.hide();
        this.resetData();
    };

    $.fn.moveSelectedDropdownOption = function (b) {
        var l = $(this).data("$fsm_list_fidels").length;
        var idx = $(this).data("$fsm_list_fidels_selected_index");

        if (b) {
            idx += 1;
        } else {
            idx -= 1;
        }
        $(this).data("$fsm_list_fidels_selected_index", (l + idx) % l);
        console.log("index at " + $(this).data("$fsm_list_fidels_selected_index"));
        this.highlightSelectionInDropdown();
    };

    $.fn.highlightSelectionInDropdown = function () {
        var d = $(this).data("$fsm_list_fidels_selected_index");
        var drop = $(this).next("div.dropdown").find("div.dropdown-content");
        drop.find("span").removeClass("selected");
        drop.find("span[data-idx='"+d+"']").addClass("selected");
    };

    $.fn.choseSelectedDropdownOption = function () {
        this.writeInInput($(this).data("$fsm_list_fidels")[$(this).data("$fsm_list_fidels_selected_index")]);
        console.log("space/enter on dropdown")
    };

    $.fn.choseDropdownOption = function (index) {
        if (index != 0) {
            var idx = ($(this).data("$fsm_list_fidels").length < index ? $(this).data("$fsm_list_fidels").length - 1 : index - 1);
            this.writeInInput($(this).data("$fsm_list_fidels")[idx]);
        }
        console.log("Choose dropdown " + index)
    };

    $.fn.writeInInput = function (str) {
        var v = this.val();
        var pos = this[0].selectionStart;

        v = v.substring(0, pos - $(this).data("$fsm_string_processed").length) + str + " " + v.substring(pos, v.length);
        this.val(v);
        this.selectRange(pos - $(this).data("$fsm_string_processed").length + str.length + 1);
    };

    $.fn.selectRange = function (pos) {
        return this.each(function () {
            if ('selectionStart' in this) {
                this.selectionStart = pos;
                this.selectionEnd = pos;
            } else if (this.setSelectionRange) {
                this.setSelectionRange(pos, pos);
            } else if (this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
    };

    $.fn.resetData = function () {
        $(this).data("$fsm_list_fidels_selected_index", 0);
        $(this).data("$fsm_list_fidels", []);
    };

    $.fn.onDropdownClick = function () {
        console.log("click on dropdown");
        var idx = this.data("idx");
        var $_fidel_input = this.parent().parent().siblings("input");
        $_fidel_input.choseDropdownOption(idx+1);
        $_fidel_input.hideDropdown();
        $_fidel_input.focus();
    };

    $(function () {

        var $_fidelInput = $("input.amharic-typer");

        $_fidelInput.after($("<div>").addClass("dropdown").append($("<div>").addClass("dropdown-content")));

        $("div.dropdown-content").on('click', 'span', function () {
            $(this).onDropdownClick();
        });

        $_fidelInput.click(function () {
            $(this).eventManager($global_fsm_InputEventsEnum.ON_CLICK);
        });

        $_fidelInput.data("$fsm_state", $global_fsm_statesEnum.STATE_IDLE);
        $_fidelInput.data("$fsm_string_processed", "");
        $_fidelInput.data("$fsm_list_fidels", []);
        $_fidelInput.data("$fsm_list_fidels_selected_index", 0);

        $_fidelInput.on("focus", function () {
            $(this).eventManager($global_fsm_InputEventsEnum.ON_FOCUS);
        });

        $_fidelInput.on("keydown", function (event) {
            var key = event.keyCode;

            if (key == 8) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_BACKSPACE);
            }
            else if (key == 38) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_UP_ARROW);
            }
            else if (key == 40) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_DOWN_ARROW);
            }
            // key right, left, ESC
            else if (key == 37 || key == 39 || key == 27) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_OTHER);
            }
        });

        $_fidelInput.on("keypress", function (event) {
            var key = event.keyCode || event.charCode;

            if (key >= 48 && key <= 57) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_09, key);
            }
            else if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_AZ, key);
            }
            else if (key == 32) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_SPACE);
            }
            else if (key == 13) {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_ENTER);
            }
            else {
                $(this).eventManager($global_fsm_InputEventsEnum.TYPE_OTHER);
            }

        });

        $_fidelInput.on("paste", function () {
            $(this).eventManager($global_fsm_InputEventsEnum.ON_PASTE)
        });


    });

})(jQuery);
