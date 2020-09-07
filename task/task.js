(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (factory());
}(this, (function() {
    'use strict';

    var Config = {
        appKey: ''
    };

    var main = function main() {
        var refText = 'Here is first text.';
        //refTextをindex.htmlで表示できるようにしてください。
        var sdk = new ChiVoxSDK({ //リファレンスを参考にインスタンスを作成してください
            appKey: ,
            sigurl: "",
            data: {
                duration:,
                serverParams: {
                    coreType: ,
                    refText: ,
                    rank: ,
                    userId: ,
                    attachAudioUrl: ,
                    result:{
                        details: {
                        phone:
                        }
                    }
                }
            },
            onInit: function onInit(errno, err) {
            },
            onError: function onError(err) {
            },
            onBeforeRecord: function onBeforeRecord() {
                //現在表示されている評価結果を非表示/リセットするための処理を追加してください
            },
            onScore: function onScore(data) {
                //評価結果を取得し、index.htmlで表示できるようにしてください。
                
        
            }
        });

        $(".changeWordButton").click(function() {
            //changeWordButtonが押下された時に、refTextが"Here is second text."になるように処理を追加してください。
            //refTextがindex.htmlで表示されるよう処理を追加してください。
            //リファレンスを参考にchaneWordButtonが押下された時に実行されるdataの再設定処理を追加してください。
        });

        

    };

    main();

})));