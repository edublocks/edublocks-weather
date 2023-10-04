Blockly.Python['import_weather'] = function(block) {
    var code = 'from weather import Weather\n';
    return code;
};

Blockly.Python['weather_init'] = function(block) {
    var weather = Blockly.Python.nameDB_.getName(block.getFieldValue('weather'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${weather} = Weather()\n`;
    return code;
};

Blockly.Python['weather_get_current_weather'] = function(block) {
    var location = Blockly.Python.nameDB_.getName(block.getFieldValue('location'), Blockly.VARIABLE_CATEGORY_NAME);
    var weather = Blockly.Python.nameDB_.getName(block.getFieldValue('weather'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `${location} = ${weather}.get_current_weather(${parameters})\n`;
    return code;
};  

Blockly.Python['weather_get_feature'] = function(block) {
    var location = Blockly.Python.nameDB_.getName(block.getFieldValue('location'), Blockly.VARIABLE_CATEGORY_NAME);
    var condition = block.getFieldValue('condition');
    var code = `${location}.${condition}`;
    return [code, 0];
};  