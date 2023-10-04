const weatherColor = "#38bdf8";

Blockly.Blocks['import_weather'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from weather import Weather");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(weatherColor);
    }
};

Blockly.Blocks['weather_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("weather"), "weather")
          .appendField(" = Weather()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(weatherColor);
    }
};

Blockly.Blocks['weather_get_current_weather'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("london"), "location")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("weather"), "weather")
          .appendField(".get_current_weather(");
      this.appendValueInput("parameters")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(weatherColor);
    }
};  

Blockly.Blocks['weather_get_condition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("london"), "location")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["temperature","temperature"], ["wind_speed","wind_speed"], ["wind_direction","wind_direction"], ["conditions","conditions"]]), "condition");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(weatherColor);
    }
};  