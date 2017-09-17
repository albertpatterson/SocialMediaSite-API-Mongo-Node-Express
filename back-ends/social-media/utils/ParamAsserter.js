function ParamAsserter(req, res, type){
    this._req = req;
    this._res = res;
    this._type = type;
    this._ended = !this._req[this._type];
    if(this._ended){
        this.sendErrorMsgAndEnd("Parameters must be included in the request " + this._type);
    }
}

ParamAsserter.prototype.assertParam = function (){
    if(!this._ended){
        let name;
        for(let idx = 0; idx < arguments.length; idx++){        
            
            name = arguments[idx];
            let isParamMissing = !(this._req[this._type][name]);
            if(isParamMissing){
                this.sendErrorMsgAndEnd("\"" + name +"\" must be included in the request " + this._type);
                break;
            }
        }
    }

    return this;
}

ParamAsserter.prototype.finally = function(finalFcn){
    if(!this._ended){
        finalFcn();
        this._ended = true;
    }
}

ParamAsserter.prototype.then = function(thenFcn){
    if(!this._ended){
        thenFcn();
    }
    return this;
}

ParamAsserter.prototype.sendErrorMsgAndEnd = function(errMsg){
    this._res.status(400).send(errMsg);
    this._ended = true;
}

module.exports = ParamAsserter;