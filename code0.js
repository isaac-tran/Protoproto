gdjs.Level_321Code = {};
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects3= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPBullet1Objects1= [];
gdjs.Level_321Code.GDPBullet1Objects2= [];
gdjs.Level_321Code.GDPBullet1Objects3= [];
gdjs.Level_321Code.GDPBullet2Objects1= [];
gdjs.Level_321Code.GDPBullet2Objects2= [];
gdjs.Level_321Code.GDPBullet2Objects3= [];
gdjs.Level_321Code.GDPBullet3Objects1= [];
gdjs.Level_321Code.GDPBullet3Objects2= [];
gdjs.Level_321Code.GDPBullet3Objects3= [];
gdjs.Level_321Code.GDPBullet4Objects1= [];
gdjs.Level_321Code.GDPBullet4Objects2= [];
gdjs.Level_321Code.GDPBullet4Objects3= [];
gdjs.Level_321Code.GDEnemy1Objects1= [];
gdjs.Level_321Code.GDEnemy1Objects2= [];
gdjs.Level_321Code.GDEnemy1Objects3= [];
gdjs.Level_321Code.GDEnemy2Objects1= [];
gdjs.Level_321Code.GDEnemy2Objects2= [];
gdjs.Level_321Code.GDEnemy2Objects3= [];
gdjs.Level_321Code.GDEnemy3Objects1= [];
gdjs.Level_321Code.GDEnemy3Objects2= [];
gdjs.Level_321Code.GDEnemy3Objects3= [];
gdjs.Level_321Code.GDDamageTextObjects1= [];
gdjs.Level_321Code.GDDamageTextObjects2= [];
gdjs.Level_321Code.GDDamageTextObjects3= [];
gdjs.Level_321Code.GDHPBarMiddleObjects1= [];
gdjs.Level_321Code.GDHPBarMiddleObjects2= [];
gdjs.Level_321Code.GDHPBarMiddleObjects3= [];
gdjs.Level_321Code.GDHPBarShadowObjects1= [];
gdjs.Level_321Code.GDHPBarShadowObjects2= [];
gdjs.Level_321Code.GDHPBarShadowObjects3= [];
gdjs.Level_321Code.GDHPBarTextObjects1= [];
gdjs.Level_321Code.GDHPBarTextObjects2= [];
gdjs.Level_321Code.GDHPBarTextObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet1Objects2Objects = Hashtable.newFrom({"PBullet1": gdjs.Level_321Code.GDPBullet1Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet2Objects2Objects = Hashtable.newFrom({"PBullet2": gdjs.Level_321Code.GDPBullet2Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet3Objects2Objects = Hashtable.newFrom({"PBullet3": gdjs.Level_321Code.GDPBullet3Objects2});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet4Objects1Objects = Hashtable.newFrom({"PBullet4": gdjs.Level_321Code.GDPBullet4Objects1});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PBullet1"), gdjs.Level_321Code.GDPBullet1Objects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").FireCustom((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 28, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 100, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet1Objects2Objects, 270, 900, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet1Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet1Objects2[0].getVariables()).getFromIndex(2))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 2 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PBullet2"), gdjs.Level_321Code.GDPBullet2Objects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").FireCustom((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 28, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 100, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet2Objects2Objects, 270, 1200, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet2Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet2Objects2[0].getVariables()).getFromIndex(2))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(2)) == 3 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PBullet3"), gdjs.Level_321Code.GDPBullet3Objects2);
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("FireBullet").FireCustom((gdjs.Level_321Code.GDPlayerObjects2[i].getPointX("")) - 28, (gdjs.Level_321Code.GDPlayerObjects2[i].getPointY("")) - 100, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet3Objects2Objects, 270, 1400, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet3Objects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet3Objects2[0].getVariables()).getFromIndex(2))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 4 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PBullet4"), gdjs.Level_321Code.GDPBullet4Objects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("FireBullet").FireCustom((gdjs.Level_321Code.GDPlayerObjects1[i].getPointX("")) - 28, (gdjs.Level_321Code.GDPlayerObjects1[i].getPointY("")) - 100, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet4Objects1Objects, 270, 1800, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet4Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet4Objects1[0].getVariables()).getFromIndex(2))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)) > 4 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).sub(4);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1, "Enemy3": gdjs.Level_321Code.GDEnemy3Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet1Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet2Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet3Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet4Objects1Objects = Hashtable.newFrom({"PBullet1": gdjs.Level_321Code.GDPBullet1Objects1, "PBullet2": gdjs.Level_321Code.GDPBullet2Objects1, "PBullet3": gdjs.Level_321Code.GDPBullet3Objects1, "PBullet4": gdjs.Level_321Code.GDPBullet4Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDamageTextObjects1Objects = Hashtable.newFrom({"DamageText": gdjs.Level_321Code.GDDamageTextObjects1});gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_321Code.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBackgroundObjects1[i].addPolarForce(90, 80, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_321Code.GDBackgroundObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBackgroundObjects1[i].getY() > 900 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDBackgroundObjects1[k] = gdjs.Level_321Code.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBackgroundObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBackgroundObjects1[i].setY(gdjs.Level_321Code.GDBackgroundObjects1[i].getY() - (1800));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce(270, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce(180, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce(90, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1))), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(1))), 0);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].timerElapsedTime("WeaponSwitchTimer", 0.5) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].resetTimer("WeaponSwitchTimer");
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("PBullet1"), gdjs.Level_321Code.GDPBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet2"), gdjs.Level_321Code.GDPBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet3"), gdjs.Level_321Code.GDPBullet3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet4"), gdjs.Level_321Code.GDPBullet4Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPBullet1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet1Objects1[i].setScale(0.3);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet2Objects1[i].setScale(0.3);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet3Objects1[i].setScale(0.3);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet4Objects1[i].setScale(0.3);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet1"), gdjs.Level_321Code.GDPBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet2"), gdjs.Level_321Code.GDPBullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet3"), gdjs.Level_321Code.GDPBullet3Objects1);
gdjs.copyArray(runtimeScene.getObjects("PBullet4"), gdjs.Level_321Code.GDPBullet4Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy3Objects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPBullet1Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet2Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet3Objects1ObjectsGDgdjs_46Level_95321Code_46GDPBullet4Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DamageText"), gdjs.Level_321Code.GDDamageTextObjects1);
/* Reuse gdjs.Level_321Code.GDEnemy1Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy3Objects1 */
/* Reuse gdjs.Level_321Code.GDPBullet1Objects1 */
/* Reuse gdjs.Level_321Code.GDPBullet2Objects1 */
/* Reuse gdjs.Level_321Code.GDPBullet3Objects1 */
/* Reuse gdjs.Level_321Code.GDPBullet4Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPBullet1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDPBullet4Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPBullet4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].getBehavior("Health").Hit((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet4Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet3Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet2Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet1Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet2Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet3Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet4Objects1[0].getVariables()).get("damage"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].getBehavior("Health").Hit((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet4Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet3Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet2Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet1Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet2Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet3Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet4Objects1[0].getVariables()).get("damage"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects1[i].getBehavior("Health").Hit((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet4Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet3Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet2Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet1Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet2Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet3Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet4Objects1[0].getVariables()).get("damage"))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__UIDamageText__CreateDamageText.func(runtimeScene, (gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_321Code.GDPBullet4Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet3Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet2Objects1.length === 0 ) ? ((gdjs.Level_321Code.GDPBullet1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDPBullet1Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet2Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet3Objects1[0].getVariables()) : gdjs.Level_321Code.GDPBullet4Objects1[0].getVariables()).get("damage"))), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDamageTextObjects1Objects, (( gdjs.Level_321Code.GDEnemy3Objects1.length === 0 ) ? (( gdjs.Level_321Code.GDEnemy2Objects1.length === 0 ) ? (( gdjs.Level_321Code.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDEnemy1Objects1[0].getPointX("")) :gdjs.Level_321Code.GDEnemy2Objects1[0].getPointX("")) :gdjs.Level_321Code.GDEnemy3Objects1[0].getPointX("")), (( gdjs.Level_321Code.GDEnemy3Objects1.length === 0 ) ? (( gdjs.Level_321Code.GDEnemy2Objects1.length === 0 ) ? (( gdjs.Level_321Code.GDEnemy1Objects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDEnemy1Objects1[0].getPointY("")) :gdjs.Level_321Code.GDEnemy2Objects1[0].getPointY("")) :gdjs.Level_321Code.GDEnemy3Objects1[0].getPointY("")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].setAngle(-(90));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].setAngle(-(90));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects1[i].setAngle(-(90));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy3"), gdjs.Level_321Code.GDEnemy3Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy1Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy1Objects1[k] = gdjs.Level_321Code.GDEnemy1Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy2Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy2Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy2Objects1[k] = gdjs.Level_321Code.GDEnemy2Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level_321Code.GDEnemy3Objects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDEnemy3Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDEnemy3Objects1[k] = gdjs.Level_321Code.GDEnemy3Objects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDEnemy3Objects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy3Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy3Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("HPBarMiddle"), gdjs.Level_321Code.GDHPBarMiddleObjects1);
gdjs.copyArray(runtimeScene.getObjects("HPBarText"), gdjs.Level_321Code.GDHPBarTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDHPBarTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHPBarTextObjects1[i].returnVariable(gdjs.Level_321Code.GDHPBarTextObjects1[i].getVariables().getFromIndex(0)).setNumber((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHPBarTextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHPBarTextObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Level_321Code.GDHPBarTextObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDHPBarMiddleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHPBarMiddleObjects1[i].setWidth((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getBehavior("Health").MaxHealth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDHPBarMiddleObjects1[i].getVariables().getFromIndex(3))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("Health").Hit(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDPBullet1Objects1.length = 0;
gdjs.Level_321Code.GDPBullet1Objects2.length = 0;
gdjs.Level_321Code.GDPBullet1Objects3.length = 0;
gdjs.Level_321Code.GDPBullet2Objects1.length = 0;
gdjs.Level_321Code.GDPBullet2Objects2.length = 0;
gdjs.Level_321Code.GDPBullet2Objects3.length = 0;
gdjs.Level_321Code.GDPBullet3Objects1.length = 0;
gdjs.Level_321Code.GDPBullet3Objects2.length = 0;
gdjs.Level_321Code.GDPBullet3Objects3.length = 0;
gdjs.Level_321Code.GDPBullet4Objects1.length = 0;
gdjs.Level_321Code.GDPBullet4Objects2.length = 0;
gdjs.Level_321Code.GDPBullet4Objects3.length = 0;
gdjs.Level_321Code.GDEnemy1Objects1.length = 0;
gdjs.Level_321Code.GDEnemy1Objects2.length = 0;
gdjs.Level_321Code.GDEnemy1Objects3.length = 0;
gdjs.Level_321Code.GDEnemy2Objects1.length = 0;
gdjs.Level_321Code.GDEnemy2Objects2.length = 0;
gdjs.Level_321Code.GDEnemy2Objects3.length = 0;
gdjs.Level_321Code.GDEnemy3Objects1.length = 0;
gdjs.Level_321Code.GDEnemy3Objects2.length = 0;
gdjs.Level_321Code.GDEnemy3Objects3.length = 0;
gdjs.Level_321Code.GDDamageTextObjects1.length = 0;
gdjs.Level_321Code.GDDamageTextObjects2.length = 0;
gdjs.Level_321Code.GDDamageTextObjects3.length = 0;
gdjs.Level_321Code.GDHPBarMiddleObjects1.length = 0;
gdjs.Level_321Code.GDHPBarMiddleObjects2.length = 0;
gdjs.Level_321Code.GDHPBarMiddleObjects3.length = 0;
gdjs.Level_321Code.GDHPBarShadowObjects1.length = 0;
gdjs.Level_321Code.GDHPBarShadowObjects2.length = 0;
gdjs.Level_321Code.GDHPBarShadowObjects3.length = 0;
gdjs.Level_321Code.GDHPBarTextObjects1.length = 0;
gdjs.Level_321Code.GDHPBarTextObjects2.length = 0;
gdjs.Level_321Code.GDHPBarTextObjects3.length = 0;

gdjs.Level_321Code.eventsList2(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
