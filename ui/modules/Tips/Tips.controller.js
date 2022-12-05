sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("tag.rugby.ui.modules.Tips.Tips", {

    onInit: function () {
        var oModel = new JSONModel({
            HTML : '<div class="text"> </div><!-- post-tools --> <p>Your knowledge of the rugby-relevant elements of TAG will enable you to improve your players’ core rugby skills in the long term. In this article we describe the main benefits of TAG.</p> <p><strong>Tackle and defend </strong></p> <p>The TAGs are difficult to grab hold of. Defenders have to get close to the ball carrier using good footwork skills and then get low to reach the TAG. </p> <p>The game improves the basics of defensive organisation, since defenders have to keep a straight line and communicate with each other as they move forward. </p> <p><strong>Running </strong></p> <p>The faster the ball carrier is moving, the harder the TAGs are to grab. Once players discover this, they will happily run forward and attack space in the defence. </p> <p><strong>Agility </strong></p> <p>TAG is excellent at developing agility and speed. The footwork used by attacking players to avoid being “tagged” develops quickly as they soon appreciate that a moving target is much harder to tackle.</p> <p>As the attackers’ agility develops, so will the defenders’ as they have to keep up. </p> <p><strong>Using space</strong></p> <p>To succeed at TAG rugby, players need to attack space and not to run directly at the defenders. This reinforces the most important principle of attacking play – go forward.</p> <p><strong>Go forward </strong></p> <p>The game naturally promotes going forward, whether attacking or defending. Ball carriers are encouraged to run at space. Because it is difficult to grab the TAGs there is a high success rate for ball carriers making clean breaks. </p> <p><strong>Get there</strong></p> <p>Support play is vital in TAG rugby as the ball carrier only has three seconds to pass the ball after being “tagged”. Support players must be close to the ball carrier when the TAG is made to provide effective support. </p> <p><strong>Ball skills</strong></p> <p>Passing is as important in TAG rugby as in any other form of the game. TAG gives you the opportunity to observe players passing under pressure but without them worrying about getting tackled. </p> <p>By playing games on different-sized pitches, you can vary the level of pressure on the players and the different passes they have to use.</p></div>' 
        });
        this.getView().setModel(oModel);
    },
  });

});
