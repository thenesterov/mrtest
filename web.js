#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '<>';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_auto({
                    [$mol_dev_format_head]: () => $mol_dev_format_shade(cursor),
                    [$mol_dev_format_body]: () => $mol_dev_format_native(this),
                })
                : $mol_dev_format_shade($mol_dev_format_native(this), cursor), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = result.then(put, put);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    });
                }
            }
            if ($mol_promise_like(result) && !handled.has(result)) {
                result = Object.assign(result, {
                    destructor: result['destructor'] ?? (() => { })
                });
                handled.add(result);
                const error = new Error(`Promise in ${this}`);
                Object.defineProperty(result, 'stack', { get: () => error.stack });
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof Uint8Array)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, left.byteOffset, left.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ▫ %s' : ' ▫ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Non idempotency`,
                        existen,
                        next,
                        hint: 'Ignore it',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '<>';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + field);
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '<>';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_hue_spread: 90deg;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n\t/* --mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 0% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .2 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 120deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 80% .2 calc( var(--mol_theme_hue) - 60deg ) );\n\t--mol_theme_special: oklch( 80% .3 calc( var(--mol_theme_hue) + 60deg ) ); */\n\n}\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\t\n\t/* --mol_theme_back: oklch( 93% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 100% .02 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 70% 0 var(--mol_theme_hue) / .2 );\n\t--mol_theme_focus: oklch( 20% .8 calc( var(--mol_theme_hue) + 120deg ) );\n\t\n\t--mol_theme_control: oklch( 45% .25 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 45% .5 calc( var(--mol_theme_hue) - 60deg ) );\n\t--mol_theme_special: oklch( 45% .5 calc( var(--mol_theme_hue) + 60deg ) ); */\n\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 30% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 40%, 20%, .25 );\n\t/* --mol_theme_back: oklch( 25% .05 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 ); */\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 80% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 80%, 95%, .25 );\n\t/* --mol_theme_back: oklch( 95% .02 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 80% .05 var(--mol_theme_hue) / .25 ); */\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 30% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 20%, .25 );\n\t/* --mol_theme_back: oklch( 40% .2 calc( var(--mol_theme_hue) + 120deg ) );\n\t--mol_theme_card: oklch( 50% .3 calc( var(--mol_theme_hue) + 120deg ) / .25 ); */\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 75% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 90%, .25 );\n\t/* --mol_theme_back: oklch( 90% .03 calc( var(--mol_theme_hue) + 120deg ) );\n\t--mol_theme_card: oklch( 80% .05 calc( var(--mol_theme_hue) + 120deg ) / .25 ); */\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 50%, 30% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 40%, 20%, .25 );\n\t/* --mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - 60deg ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - 60deg ) / .25 ); */\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 50%, 92% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 100%, .5 );\n\t/* --mol_theme_back: oklch( 95% .02 calc( var(--mol_theme_hue) - 60deg ) );\n\t--mol_theme_card: oklch( 80% .05 calc( var(--mol_theme_hue) - 60deg ) / .25 ); */\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 50%, 30% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 40%, 20%, .25 );\n\t/* --mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + 60deg ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + 60deg ) / .25 ); */\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 50%, 92% );\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 100%, .5 );\n\t/* --mol_theme_back: oklch( 95% .02 calc( var(--mol_theme_hue) + 60deg ) );\n\t--mol_theme_card: oklch( 80% .05 calc( var(--mol_theme_hue) + 60deg ) / .25 ); */\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error) ? 'Promise' : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme() ?? undefined,
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            this.focused(true);
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		field(){
			return {...(super.field()), "tabIndex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val in vals) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2) = class $mol_book2 extends ($.$mol_scroll) {
		pages(){
			return [];
		}
		menu_title(){
			return "";
		}
		sub(){
			return (this.pages());
		}
		minimal_width(){
			return 0;
		}
		Placeholder(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Gap(id){
			const obj = new this.$.$mol_view();
			(obj.title) = () => ("");
			return obj;
		}
	};
	($mol_mem(($.$mol_book2.prototype), "Placeholder"));
	($mol_mem_key(($.$mol_book2.prototype), "Gap"));


;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const placeholder = this.Placeholder();
                const next = [...this.pages(), placeholder];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    if (n === placeholder)
                        continue;
                    new this.$.$mol_after_tick(() => {
                        const b = this.dom_node();
                        const p = n.dom_node();
                        b.scroll({
                            left: p.offsetLeft + p.offsetWidth - b.offsetWidth,
                            behavior: 'smooth',
                        });
                        new this.$.$mol_after_timeout(1000, () => n.bring());
                    });
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\t/* padding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px; */\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_field);\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 3px;\n\theight: 1rem;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\tvar(--mol_theme_focus) 0%,\n\t\tvar(--mol_theme_focus) 14%,\n\t\ttransparent 15%,\n\t\ttransparent 42%,\n\t\tvar(--mol_theme_focus) 43%,\n\t\tvar(--mol_theme_focus) 57%,\n\t\ttransparent 58%,\n\t\ttransparent 85%,\n\t\tvar(--mol_theme_focus) 86%,\n\t\tvar(--mol_theme_focus) 100%\n\t);\n\topacity: .5;\n\tz-index: var(--mol_layer_speck);\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		theme(){
			return "";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_mustache) = class $mol_icon_mustache extends ($.$mol_icon) {
		path(){
			return "M21 12C19 12 18 9 15 9S12 11 12 11 12 9 9 9 5 12 3 12C2 12 1 11 1 11S2 16 6 16C11 16 12 13 12 13S13 16 18 16C22 16 23 11 23 11S22 12 21 12Z";
		}
	};


;
"use strict";

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		theme(){
			return "$mol_theme_accent";
		}
		value(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_theme": (this.theme())};
		}
		style(){
			return {...(super.style()), "minHeight": "1em"};
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.event_activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.event_key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus-visible {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 10rem var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_brightness_6) = class $mol_icon_brightness_6 extends ($.$mol_icon) {
		path(){
			return "M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
		}
	};


;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $node = $node || {};

;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        open(...modes) {
            return 0;
        }
        toJSON() {
            return this.path();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        blob() {
            return $mol_wire_sync(this.native).blob();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "blob", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document?.currentScript
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        drop() {
            throw new Error('$mol_file_web.drop() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_lights_toggle) = class $mol_lights_toggle extends ($.$mol_check_icon) {
		Lights_icon(){
			const obj = new this.$.$mol_icon_brightness_6();
			return obj;
		}
		lights(next){
			if(next !== undefined) return next;
			return false;
		}
		Icon(){
			return (this.Lights_icon());
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_lights_toggle_hint"));
		}
		checked(next){
			return (this.lights(next));
		}
	};
	($mol_mem(($.$mol_lights_toggle.prototype), "Lights_icon"));
	($mol_mem(($.$mol_lights_toggle.prototype), "lights"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_magnify) = class $mol_icon_magnify extends ($.$mol_icon) {
		path(){
			return "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_plus) = class $mol_icon_plus extends ($.$mol_icon) {
		path(){
			return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
		}
	};


;
"use strict";

;
	($.$mol_page) = class $mol_page extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		Logo(){
			return null;
		}
		title_content(){
			return [(this.Logo()), (this.title())];
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("h1");
			(obj.sub) = () => ((this.title_content()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (64);
			(obj.dom_name) = () => ("header");
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		body_scroll_top(next){
			return (this.Body().scroll_top(next));
		}
		body(){
			return [];
		}
		Body_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		body_content(){
			return [(this.Body_content())];
		}
		Body(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ((this.body_content()));
			return obj;
		}
		foot(){
			return [];
		}
		Foot(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("footer");
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		dom_name(){
			return "article";
		}
		attr(){
			return {...(super.attr()), "tabIndex": (this.tabindex())};
		}
		sub(){
			return [
				(this.Head()), 
				(this.Body()), 
				(this.Foot())
			];
		}
	};
	($mol_mem(($.$mol_page.prototype), "Title"));
	($mol_mem(($.$mol_page.prototype), "Tools"));
	($mol_mem(($.$mol_page.prototype), "Head"));
	($mol_mem(($.$mol_page.prototype), "Body_content"));
	($mol_mem(($.$mol_page.prototype), "Body"));
	($mol_mem(($.$mol_page.prototype), "Foot"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [[0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)]],
                },
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Body_content: {
                padding: $mol_gap.block,
                flex: {
                    direction: 'column',
                    shrink: 1,
                    grow: 1,
                },
                justify: {
                    self: 'stretch',
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [[0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)]],
                },
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_xml) = class $mol_icon_xml extends ($.$mol_icon) {
		path(){
			return "M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z";
		}
	};


;
"use strict";

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		Anchor(){
			return null;
		}
		align(){
			return "bottom_center";
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.align) = () => ((this.align()));
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		prefer(){
			return "vert";
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Bubble())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		align(){
			return "";
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_pop_align": (this.align()), 
				"tabindex": 0
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pick) = class $mol_pick extends ($.$mol_pop) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_enabled(){
			return true;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_content(){
			return [(this.title())];
		}
		hint(){
			return "";
		}
		Trigger(){
			const obj = new this.$.$mol_check();
			(obj.minimal_width) = () => (40);
			(obj.minimal_height) = () => (40);
			(obj.enabled) = () => ((this.trigger_enabled()));
			(obj.checked) = (next) => ((this.showed(next)));
			(obj.clicks) = (next) => ((this.clicks(next)));
			(obj.sub) = () => ((this.trigger_content()));
			(obj.hint) = () => ((this.hint()));
			return obj;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		Anchor(){
			return (this.Trigger());
		}
	};
	($mol_mem(($.$mol_pick.prototype), "keydown"));
	($mol_mem(($.$mol_pick.prototype), "clicks"));
	($mol_mem(($.$mol_pick.prototype), "Trigger"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		rows(){
			return [];
		}
		gap_before(){
			return 0;
		}
		gap_after(){
			return 0;
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0;
		}
		sub(){
			return (this.rows());
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";

;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Menu())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_dots_vertical) = class $mol_icon_dots_vertical extends ($.$mol_icon) {
		path(){
			return "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
		}
	};


;
"use strict";

;
	($.$mol_select) = class $mol_select extends ($.$mol_pick) {
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		option_label(id){
			return "";
		}
		filter_pattern(next){
			if(next !== undefined) return next;
			return "";
		}
		Option_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.option_label(id)));
			(obj.needle) = () => ((this.filter_pattern()));
			return obj;
		}
		option_content(id){
			return [(this.Option_label(id))];
		}
		no_options_message(){
			return (this.$.$mol_locale.text("$mol_select_no_options_message"));
		}
		nav_components(){
			return [];
		}
		option_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		nav_cycle(next){
			if(next !== undefined) return next;
			return true;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.option_focused(next)));
			(obj.cycle) = (next) => ((this.nav_cycle(next)));
			return obj;
		}
		menu_content(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_content()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		filter_hint(){
			return (this.$.$mol_locale.text("$mol_select_filter_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		dictionary(next){
			if(next !== undefined) return next;
			return {};
		}
		options(){
			return [];
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		option_label_default(){
			return "";
		}
		Option_row(id){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_select(id, next)));
			(obj.sub) = () => ((this.option_content(id)));
			return obj;
		}
		No_options(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.no_options_message())]);
			return obj;
		}
		plugins(){
			return [...(super.plugins()), (this.Nav())];
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_select_hint"));
		}
		bubble_content(){
			return [(this.Filter()), (this.Bubble_pane())];
		}
		Filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.filter_pattern(next)));
			(obj.hint) = () => ((this.filter_hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		Trigger_icon(){
			const obj = new this.$.$mol_icon_dots_vertical();
			return obj;
		}
	};
	($mol_mem_key(($.$mol_select.prototype), "event_select"));
	($mol_mem(($.$mol_select.prototype), "filter_pattern"));
	($mol_mem_key(($.$mol_select.prototype), "Option_label"));
	($mol_mem(($.$mol_select.prototype), "option_focused"));
	($mol_mem(($.$mol_select.prototype), "nav_cycle"));
	($mol_mem(($.$mol_select.prototype), "Nav"));
	($mol_mem(($.$mol_select.prototype), "Menu"));
	($mol_mem(($.$mol_select.prototype), "Bubble_pane"));
	($mol_mem(($.$mol_select.prototype), "submit"));
	($mol_mem(($.$mol_select.prototype), "dictionary"));
	($mol_mem(($.$mol_select.prototype), "value"));
	($mol_mem_key(($.$mol_select.prototype), "Option_row"));
	($mol_mem(($.$mol_select.prototype), "No_options"));
	($mol_mem(($.$mol_select.prototype), "Filter"));
	($mol_mem(($.$mol_select.prototype), "Trigger_icon"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));

;
	($.$mol_icon_text) = class $mol_icon_text extends ($.$mol_icon) {
		path(){
			return "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_text_box) = class $mol_icon_text_box extends ($.$mol_icon) {
		path(){
			return "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_cog) = class $mol_icon_cog extends ($.$mol_icon) {
		path(){
			return "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_tick) = class $mol_icon_tick extends ($.$mol_icon) {
		path(){
			return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
		}
	};


;
"use strict";

;
	($.$mol_check_box) = class $mol_check_box extends ($.$mol_check) {
		Icon(){
			const obj = new this.$.$mol_icon_tick();
			return obj;
		}
	};
	($mol_mem(($.$mol_check_box.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));

;
	($.$mol_icon_clipboard) = class $mol_icon_clipboard extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3";
		}
	};


;
"use strict";

;
	($.$mol_icon_clipboard_outline) = class $mol_icon_clipboard_outline extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z";
		}
	};


;
"use strict";

;
	($.$mol_button_copy) = class $mol_button_copy extends ($.$mol_button_minor) {
		text(){
			return (this.title());
		}
		text_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.text())], {"type": "text/plain"});
			return obj;
		}
		html(){
			return "";
		}
		html_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.html())], {"type": "text/html"});
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_clipboard_outline();
			return obj;
		}
		title(){
			return "";
		}
		blobs(){
			return [(this.text_blob()), (this.html_blob())];
		}
		data(){
			return {};
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_copy.prototype), "text_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "html_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText?.(this.text());
                cb.write?.(this.attachments());
                if (cb.writeText === undefined && cb.write === undefined) {
                    throw new Error("doesn't support copy to clipoard");
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_stack) = class $mol_stack extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_text_code_token) = class $mol_text_code_token extends ($.$mol_dimmer) {
		type(){
			return "";
		}
		attr(){
			return {...(super.attr()), "mol_text_code_token_type": (this.type())};
		}
	};
	($.$mol_text_code_token_link) = class $mol_text_code_token_link extends ($.$mol_text_code_token) {
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		type(){
			return "code-link";
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri()), 
				"target": "_blank"
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code_row) = class $mol_text_code_row extends ($.$mol_paragraph) {
		numb(){
			return 0;
		}
		token_type(id){
			return "";
		}
		token_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		token_uri(id){
			return "";
		}
		text(){
			return "";
		}
		minimal_height(){
			return 24;
		}
		numb_showed(){
			return true;
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		Numb(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.numb())]);
			return obj;
		}
		Token(id){
			const obj = new this.$.$mol_text_code_token();
			(obj.type) = () => ((this.token_type(id)));
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		Token_link(id){
			const obj = new this.$.$mol_text_code_token_link();
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			(obj.uri) = () => ((this.token_uri(id)));
			return obj;
		}
		find_pos(id){
			return null;
		}
	};
	($mol_mem(($.$mol_text_code_row.prototype), "Numb"));
	($mol_mem_key(($.$mol_text_code_row.prototype), "Token"));
	($mol_mem_key(($.$mol_text_code_row.prototype), "Token_link"));


;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [prefix], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'spoiler': /^((?:(?:[\?] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?: |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[dygimsu]*(?!\p{Letter})|(?:^|[ \t])\\[^\n]*\n)/u,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|yield|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_row extends $.$mol_text_code_row {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_row.prototype, "find_token_pos", null);
        $$.$mol_text_code_row = $mol_text_code_row;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_row, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code) = class $mol_text_code extends ($.$mol_stack) {
		sidebar_showed(){
			return false;
		}
		render_visible_only(){
			return false;
		}
		row_numb(id){
			return 0;
		}
		row_text(id){
			return "";
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		highlight(){
			return "";
		}
		Row(id){
			const obj = new this.$.$mol_text_code_row();
			(obj.numb_showed) = () => ((this.sidebar_showed()));
			(obj.numb) = () => ((this.row_numb(id)));
			(obj.text) = () => ((this.row_text(id)));
			(obj.syntax) = () => ((this.syntax()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		rows(){
			return [(this.Row("0"))];
		}
		Rows(){
			const obj = new this.$.$mol_list();
			(obj.render_visible_only) = () => ((this.render_visible_only()));
			(obj.rows) = () => ((this.rows()));
			return obj;
		}
		text_export(){
			return "";
		}
		Copy(){
			const obj = new this.$.$mol_button_copy();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_code_Copy_hint")));
			(obj.text) = () => ((this.text_export()));
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_text_code_sidebar_showed": (this.sidebar_showed())};
		}
		text(){
			return "";
		}
		text_lines(){
			return [];
		}
		find_pos(id){
			return null;
		}
		uri_base(){
			return "";
		}
		sub(){
			return [(this.Rows()), (this.Copy())];
		}
	};
	($mol_mem_key(($.$mol_text_code.prototype), "Row"));
	($mol_mem(($.$mol_text_code.prototype), "Rows"));
	($mol_mem(($.$mol_text_code.prototype), "Copy"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return (this.text() ?? '').split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_row: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_textarea) = class $mol_textarea extends ($.$mol_stack) {
		clickable(next){
			if(next !== undefined) return next;
			return false;
		}
		sidebar_showed(){
			return false;
		}
		press(next){
			if(next !== undefined) return next;
			return null;
		}
		hover(next){
			if(next !== undefined) return next;
			return null;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		enabled(){
			return true;
		}
		spellcheck(){
			return true;
		}
		length_max(){
			return +Infinity;
		}
		selection(next){
			if(next !== undefined) return next;
			return [];
		}
		bring(){
			return (this.Edit().bring());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return true;
		}
		Edit(){
			const obj = new this.$.$mol_textarea_edit();
			(obj.value) = (next) => ((this.value(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.enabled()));
			(obj.spellcheck) = () => ((this.spellcheck()));
			(obj.length_max) = () => ((this.length_max()));
			(obj.selection) = (next) => ((this.selection(next)));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.submit_with_ctrl) = () => ((this.submit_with_ctrl()));
			return obj;
		}
		row_numb(id){
			return 0;
		}
		highlight(){
			return "";
		}
		View(){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.value()));
			(obj.render_visible_only) = () => (false);
			(obj.row_numb) = (id) => ((this.row_numb(id)));
			(obj.sidebar_showed) = () => ((this.sidebar_showed()));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_textarea_clickable": (this.clickable()), 
				"mol_textarea_sidebar_showed": (this.sidebar_showed())
			};
		}
		event(){
			return {"keydown": (next) => (this.press(next)), "pointermove": (next) => (this.hover(next))};
		}
		sub(){
			return [(this.Edit()), (this.View())];
		}
		symbols_alt(){
			return {
				"comma": "<", 
				"period": ">", 
				"dash": "−", 
				"equals": "≈", 
				"graveAccent": "́", 
				"forwardSlash": "÷", 
				"E": "€", 
				"V": "✔", 
				"X": "×", 
				"C": "©", 
				"P": "§", 
				"H": "₽", 
				"key0": "°", 
				"key8": "•", 
				"key2": "@", 
				"key3": "#", 
				"key4": "$", 
				"key6": "^", 
				"key7": "&", 
				"bracketOpen": "[", 
				"bracketClose": "]", 
				"slashBack": "|"
			};
		}
		symbols_alt_ctrl(){
			return {"space": " "};
		}
		symbols_alt_shift(){
			return {
				"V": "✅", 
				"X": "❌", 
				"O": "⭕", 
				"key1": "❗", 
				"key4": "💲", 
				"key7": "❓", 
				"comma": "«", 
				"period": "»", 
				"semicolon": "“", 
				"quoteSingle": "”", 
				"dash": "—", 
				"equals": "≠", 
				"graveAccent": "̱", 
				"bracketOpen": "{", 
				"bracketClose": "}"
			};
		}
	};
	($mol_mem(($.$mol_textarea.prototype), "clickable"));
	($mol_mem(($.$mol_textarea.prototype), "press"));
	($mol_mem(($.$mol_textarea.prototype), "hover"));
	($mol_mem(($.$mol_textarea.prototype), "value"));
	($mol_mem(($.$mol_textarea.prototype), "selection"));
	($mol_mem(($.$mol_textarea.prototype), "submit"));
	($mol_mem(($.$mol_textarea.prototype), "Edit"));
	($mol_mem(($.$mol_textarea.prototype), "View"));
	($.$mol_textarea_edit) = class $mol_textarea_edit extends ($.$mol_string) {
		dom_name(){
			return "textarea";
		}
		enter(){
			return "enter";
		}
		field(){
			return {...(super.field()), "scrollTop": 0};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : event.ctrlKey
                        ? this.symbols_alt_ctrl()[$mol_keyboard_code[event.keyCode]]
                        : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                event.preventDefault();
                document.execCommand('insertText', false, symbol);
            }
            clickable(next) {
                if (!this.enabled())
                    return true;
                return next ?? false;
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
                    event.preventDefault();
                }
            }
            row_numb(index) {
                return index;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_textarea.prototype, "clickable", null);
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n\tuser-select: none;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n\tuser-select: auto;\n}\n\n[mol_textarea_clickable] > [mol_textarea_edit] {\n\tuser-select: none;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_float) = class $mol_float extends ($.$mol_view) {
		style(){
			return {...(super.style()), "minHeight": "auto"};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";

;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-left: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_grid) = class $mol_grid extends ($.$mol_view) {
		rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_grid_table();
			(obj.sub) = () => ((this.rows()));
			return obj;
		}
		head_cells(){
			return [];
		}
		cells(id){
			return [];
		}
		cell_content(id){
			return [];
		}
		cell_content_text(id){
			return (this.cell_content(id));
		}
		cell_content_number(id){
			return (this.cell_content(id));
		}
		col_head_content(id){
			return [];
		}
		cell_level(id){
			return 0;
		}
		cell_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		needle(){
			return "";
		}
		cell_value(id){
			return "";
		}
		Cell_dimmer(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.needle()));
			(obj.haystack) = () => ((this.cell_value(id)));
			return obj;
		}
		row_height(){
			return 32;
		}
		row_ids(){
			return [];
		}
		row_id(id){
			return null;
		}
		col_ids(){
			return [];
		}
		records(){
			return {};
		}
		record(id){
			return null;
		}
		hierarchy(){
			return null;
		}
		hierarchy_col(){
			return "";
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.Head()), (this.Table())];
		}
		Head(){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.head_cells()));
			return obj;
		}
		Row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.minimal_height) = () => ((this.row_height()));
			(obj.minimal_width) = () => ((this.minimal_width()));
			(obj.cells) = () => ((this.cells(id)));
			return obj;
		}
		Cell(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		cell(id){
			return null;
		}
		Cell_text(id){
			const obj = new this.$.$mol_grid_cell();
			(obj.sub) = () => ((this.cell_content_text(id)));
			return obj;
		}
		Cell_number(id){
			const obj = new this.$.$mol_grid_number();
			(obj.sub) = () => ((this.cell_content_number(id)));
			return obj;
		}
		Col_head(id){
			const obj = new this.$.$mol_float();
			(obj.dom_name) = () => ("th");
			(obj.sub) = () => ((this.col_head_content(id)));
			return obj;
		}
		Cell_branch(id){
			const obj = new this.$.$mol_check_expand();
			(obj.level) = () => ((this.cell_level(id)));
			(obj.label) = () => ((this.cell_content(id)));
			(obj.expanded) = (next) => ((this.cell_expanded(id, next)));
			return obj;
		}
		Cell_content(id){
			return [(this.Cell_dimmer(id))];
		}
	};
	($mol_mem(($.$mol_grid.prototype), "Table"));
	($mol_mem_key(($.$mol_grid.prototype), "cell_expanded"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_dimmer"));
	($mol_mem(($.$mol_grid.prototype), "Head"));
	($mol_mem_key(($.$mol_grid.prototype), "Row"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_text"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_number"));
	($mol_mem_key(($.$mol_grid.prototype), "Col_head"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_branch"));
	($.$mol_grid_table) = class $mol_grid_table extends ($.$mol_list) {};
	($.$mol_grid_row) = class $mol_grid_row extends ($.$mol_view) {
		cells(){
			return [];
		}
		sub(){
			return (this.cells());
		}
	};
	($.$mol_grid_cell) = class $mol_grid_cell extends ($.$mol_view) {
		minimal_height(){
			return 40;
		}
	};
	($.$mol_grid_number) = class $mol_grid_number extends ($.$mol_grid_cell) {};


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 1px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 1px 0 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 1px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -1px 0 0 var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_image) = class $mol_image extends ($.$mol_view) {
		uri(){
			return "";
		}
		loading(){
			return "eager";
		}
		decoding(){
			return "async";
		}
		cors(){
			return null;
		}
		natural_width(){
			return 0;
		}
		natural_height(){
			return 0;
		}
		load(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "img";
		}
		field(){
			return {
				...(super.field()), 
				"src": (this.uri()), 
				"alt": (this.title()), 
				"loading": (this.loading()), 
				"decoding": (this.decoding()), 
				"crossOrigin": (this.cors())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"width": (this.natural_width()), 
				"height": (this.natural_height())
			};
		}
		event(){
			return {"load": (next) => (this.load(next))};
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
	};
	($mol_mem(($.$mol_image.prototype), "load"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link_iconed) = class $mol_link_iconed extends ($.$mol_link) {
		icon(){
			return "";
		}
		Icon(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.icon()));
			(obj.title) = () => ("");
			return obj;
		}
		title(){
			return (this.uri());
		}
		sub(){
			return [(this.Icon())];
		}
		content(){
			return [(this.title())];
		}
		host(){
			return "";
		}
	};
	($mol_mem(($.$mol_link_iconed.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_native) = class $mol_embed_native extends ($.$mol_scroll) {
		mime(){
			return "";
		}
		title(){
			return "";
		}
		Fallback(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.uri()));
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		uri_change(next){
			if(next !== undefined) return next;
			return null;
		}
		uri(next){
			if(next !== undefined) return next;
			return "";
		}
		dom_name(){
			return "object";
		}
		window(){
			return null;
		}
		attr(){
			return {
				...(super.attr()), 
				"data": (this.uri()), 
				"type": (this.mime())
			};
		}
		sub(){
			return [(this.Fallback())];
		}
		message(){
			return {"hashchange": (next) => (this.uri_change(next))};
		}
	};
	($mol_mem(($.$mol_embed_native.prototype), "Fallback"));
	($mol_mem(($.$mol_embed_native.prototype), "uri_change"));
	($mol_mem(($.$mol_embed_native.prototype), "uri"));


;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_youtube) = class $mol_icon_youtube extends ($.$mol_icon) {
		path(){
			return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
		}
	};


;
"use strict";

;
	($.$mol_frame) = class $mol_frame extends ($.$mol_embed_native) {
		allow(){
			return "";
		}
		uri(next){
			if(next !== undefined) return next;
			return "about:config";
		}
		html(){
			return null;
		}
		dom_name(){
			return "iframe";
		}
		attr(){
			return {
				...(super.attr()), 
				"data": null, 
				"type": null, 
				"allow": (this.allow()), 
				"src": (this.uri()), 
				"srcdoc": (this.html())
			};
		}
		fullscreen(){
			return true;
		}
		accelerometer(){
			return true;
		}
		autoplay(){
			return true;
		}
		encription(){
			return true;
		}
		gyroscope(){
			return true;
		}
		pip(){
			return true;
		}
		clipboard_read(){
			return true;
		}
		clipboard_write(){
			return true;
		}
	};
	($mol_mem(($.$mol_frame.prototype), "uri"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));

;
	($.$mol_embed_service) = class $mol_embed_service extends ($.$mol_check) {
		active(next){
			if(next !== undefined) return next;
			return false;
		}
		title(){
			return "";
		}
		video_preview(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_preview()));
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_icon_youtube();
			return obj;
		}
		video_embed(){
			return "";
		}
		Frame(){
			const obj = new this.$.$mol_frame();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_embed()));
			return obj;
		}
		uri(){
			return "";
		}
		video_id(){
			return "";
		}
		checked(next){
			return (this.active(next));
		}
		sub(){
			return [
				(this.Image()), 
				(this.Hint()), 
				(this.Frame())
			];
		}
	};
	($mol_mem(($.$mol_embed_service.prototype), "active"));
	($mol_mem(($.$mol_embed_service.prototype), "Image"));
	($mol_mem(($.$mol_embed_service.prototype), "Hint"));
	($mol_mem(($.$mol_embed_service.prototype), "Frame"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_service extends $.$mol_embed_service {
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_service.prototype, "sub", null);
        $$.$mol_embed_service = $mol_embed_service;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/service/service.view.css", "[mol_embed_service] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_service_image] {\n\tflex: auto 1 1;\n\twidth: 100vw;\n}\n\n[mol_embed_service_frame] {\n\twidth: 100vw;\n}\n\n[mol_embed_service_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_service]:hover [mol_embed_service_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_youtube) = class $mol_embed_youtube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|shorts\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_rutube) = class $mol_embed_rutube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_rutube extends $.$mol_embed_rutube {
            video_embed() {
                return `https://rutube.ru/play/embed/${encodeURIComponent(this.video_id())}`;
            }
            video_id() {
                return this.uri().match(/^https:\/\/rutube.ru\/video\/([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://rutube.ru/api/video/${this.video_id()}/thumbnail/?redirect=1`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_preview", null);
        $$.$mol_embed_rutube = $mol_embed_rutube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_any) = class $mol_embed_any extends ($.$mol_view) {
		title(){
			return "";
		}
		uri(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Object(){
			const obj = new this.$.$mol_embed_native();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Youtube(){
			const obj = new this.$.$mol_embed_youtube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Rutube(){
			const obj = new this.$.$mol_embed_rutube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
	};
	($mol_mem(($.$mol_embed_any.prototype), "Image"));
	($mol_mem(($.$mol_embed_any.prototype), "Object"));
	($mol_mem(($.$mol_embed_any.prototype), "Youtube"));
	($mol_mem(($.$mol_embed_any.prototype), "Rutube"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/rutube\.ru\//.test(uri))
                        return 'rutube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    case 'rutube': return [this.Rutube()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text) = class $mol_text extends ($.$mol_list) {
		auto_scroll(){
			return null;
		}
		block_content(id){
			return [];
		}
		uri_resolve(id){
			return "";
		}
		quote_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		list_type(id){
			return "-";
		}
		list_text(id){
			return "";
		}
		header_level(id){
			return 1;
		}
		header_arg(id){
			return {};
		}
		pre_text(id){
			return "";
		}
		code_sidebar_showed(){
			return true;
		}
		pre_sidebar_showed(){
			return (this.code_sidebar_showed());
		}
		table_head_cells(id){
			return [];
		}
		table_rows(id){
			return [];
		}
		table_cells(id){
			return [];
		}
		table_cell_text(id){
			return "";
		}
		grid_rows(id){
			return [];
		}
		grid_cells(id){
			return [];
		}
		grid_cell_text(id){
			return "";
		}
		line_text(id){
			return "";
		}
		line_type(id){
			return "";
		}
		line_content(id){
			return [];
		}
		code_syntax(){
			return null;
		}
		link_uri(id){
			return "";
		}
		link_host(id){
			return "";
		}
		spoiler_label(id){
			return "";
		}
		Spoiler_label(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_label(id)));
			return obj;
		}
		spoiler_content(id){
			return "";
		}
		Spoiler_content(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_content(id)));
			return obj;
		}
		uri_base(){
			return "";
		}
		text(){
			return "";
		}
		param(){
			return "";
		}
		flow_tokens(){
			return [];
		}
		block_text(id){
			return "";
		}
		auto(){
			return [(this.auto_scroll())];
		}
		Paragraph(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
		Quote(id){
			const obj = new this.$.$mol_text();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.quote_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.auto_scroll) = () => (null);
			return obj;
		}
		List(id){
			const obj = new this.$.$mol_text_list();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.type) = () => ((this.list_type(id)));
			(obj.text) = () => ((this.list_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		item_index(id){
			return 0;
		}
		Header(id){
			const obj = new this.$.$mol_text_header();
			(obj.minimal_height) = () => (40);
			(obj.level) = () => ((this.header_level(id)));
			(obj.content) = () => ((this.block_content(id)));
			(obj.arg) = () => ((this.header_arg(id)));
			return obj;
		}
		Pre(id){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.pre_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.sidebar_showed) = () => ((this.pre_sidebar_showed()));
			return obj;
		}
		Cut(id){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("hr");
			return obj;
		}
		Table(id){
			const obj = new this.$.$mol_grid();
			(obj.head_cells) = () => ((this.table_head_cells(id)));
			(obj.rows) = () => ((this.table_rows(id)));
			return obj;
		}
		Table_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.table_cells(id)));
			return obj;
		}
		Table_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.table_cell_text(id)));
			return obj;
		}
		Grid(id){
			const obj = new this.$.$mol_grid();
			(obj.rows) = () => ((this.grid_rows(id)));
			return obj;
		}
		Grid_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.grid_cells(id)));
			return obj;
		}
		Grid_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.grid_cell_text(id)));
			return obj;
		}
		String(id){
			const obj = new this.$.$mol_dimmer();
			(obj.dom_name) = () => ("span");
			(obj.needle) = () => ((this.highlight()));
			(obj.haystack) = () => ((this.line_text(id)));
			return obj;
		}
		Span(id){
			const obj = new this.$.$mol_text_span();
			(obj.dom_name) = () => ("span");
			(obj.type) = () => ((this.line_type(id)));
			(obj.sub) = () => ((this.line_content(id)));
			return obj;
		}
		Code_line(id){
			const obj = new this.$.$mol_text_code_row();
			(obj.numb_showed) = () => (false);
			(obj.highlight) = () => ((this.highlight()));
			(obj.text) = () => ((this.line_text(id)));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.syntax) = () => ((this.code_syntax()));
			return obj;
		}
		Link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ((this.line_content(id)));
			return obj;
		}
		Link_http(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ([(this.link_host(id))]);
			return obj;
		}
		Embed(id){
			const obj = new this.$.$mol_embed_any();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.title) = () => ((this.line_text(id)));
			return obj;
		}
		Spoiler(id){
			const obj = new this.$.$mol_expander();
			(obj.label) = () => ([(this.Spoiler_label(id))]);
			(obj.content) = () => ([(this.Spoiler_content(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_label"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_content"));
	($mol_mem_key(($.$mol_text.prototype), "Paragraph"));
	($mol_mem_key(($.$mol_text.prototype), "Quote"));
	($mol_mem_key(($.$mol_text.prototype), "List"));
	($mol_mem_key(($.$mol_text.prototype), "Header"));
	($mol_mem_key(($.$mol_text.prototype), "Pre"));
	($mol_mem_key(($.$mol_text.prototype), "Cut"));
	($mol_mem_key(($.$mol_text.prototype), "Table"));
	($mol_mem_key(($.$mol_text.prototype), "Table_row"));
	($mol_mem_key(($.$mol_text.prototype), "Table_cell"));
	($mol_mem_key(($.$mol_text.prototype), "Grid"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_row"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_cell"));
	($mol_mem_key(($.$mol_text.prototype), "String"));
	($mol_mem_key(($.$mol_text.prototype), "Span"));
	($mol_mem_key(($.$mol_text.prototype), "Code_line"));
	($mol_mem_key(($.$mol_text.prototype), "Link"));
	($mol_mem_key(($.$mol_text.prototype), "Link_http"));
	($mol_mem_key(($.$mol_text.prototype), "Embed"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler"));
	($.$mol_text_header) = class $mol_text_header extends ($.$mol_paragraph) {
		arg(){
			return {};
		}
		content(){
			return [];
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_header_Link_hint")));
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		sub(){
			return [(this.Link())];
		}
	};
	($mol_mem(($.$mol_text_header.prototype), "Link"));
	($.$mol_text_span) = class $mol_text_span extends ($.$mol_paragraph) {
		type(){
			return "";
		}
		dom_name(){
			return "span";
		}
		attr(){
			return {...(super.attr()), "mol_text_type": (this.type())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'spoiler': return this.Spoiler(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?[\)>]\./, '').replace(/[(<>)]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t| (?:\+\+|--|\*\*|  ) )/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_base_abs() {
                return new URL(this.uri_base(), $mol_dom_context.document.location.href);
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base_abs());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
            spoiler_rows(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[\?] /mg, '').split('\n');
            }
            spoiler_label(index) {
                return this.spoiler_rows(index)[0];
            }
            spoiler_content(index) {
                return this.spoiler_rows(index).slice(1).join('\n');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "uri_base_abs", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_label", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_content", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n}\n\n[mol_text_spoiler_label_paragraph] {\n\tpadding: 0;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
	($.$mol_string_button) = class $mol_string_button extends ($.$mol_string) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/button/button.view.css", "[mol_string_button]:not(:placeholder-shown):not(:focus):not(:hover):not(:disabled) {\n\tcolor: var(--mol_theme_control);\n\tbackground: transparent;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_delete) = class $mol_icon_delete extends ($.$mol_icon) {
		path(){
			return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";
		}
	};


;
"use strict";

;
	($.$mol_row) = class $mol_row extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_text_list) = class $mol_text_list extends ($.$mol_text) {
		type(){
			return "";
		}
		auto_scroll(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_type": (this.type())};
		}
		Paragraph(id){
			const obj = new this.$.$mol_text_list_item();
			(obj.index) = () => ((this.item_index(id)));
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text_list.prototype), "Paragraph"));
	($.$mol_text_list_item) = class $mol_text_list_item extends ($.$mol_paragraph) {
		index(){
			return 0;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_item_index": (this.index())};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mrtest) = class $mrtest extends ($.$mol_book2) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		LogoMenu(){
			const obj = new this.$.$mol_icon_mustache();
			return obj;
		}
		Lighter(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Search_icon(){
			const obj = new this.$.$mol_icon_magnify();
			return obj;
		}
		Search(){
			const obj = new this.$.$mol_button_minor();
			(obj.sub) = () => ([(this.Search_icon())]);
			return obj;
		}
		Add_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Add(){
			const obj = new this.$.$mol_button_minor();
			(obj.sub) = () => ([(this.Add_icon())]);
			return obj;
		}
		Menu(){
			const obj = new this.$.$mol_page();
			(obj.Logo) = () => ((this.LogoMenu()));
			(obj.title) = () => ("Мистер Тест");
			(obj.foot) = () => ([(this.Lighter())]);
			(obj.tools) = () => ([(this.Search()), (this.Add())]);
			return obj;
		}
		LogoSource(){
			const obj = new this.$.$mol_icon_xml();
			return obj;
		}
		selected_langauge(next){
			if(next !== undefined) return next;
			return "mrtest";
		}
		available_languages(){
			return {"mrtest": "Mr. Test", "postman": "Postman"};
		}
		Selected_language(){
			const obj = new this.$.$mol_select();
			(obj.filter_hint) = () => ("Выберите язык...");
			(obj.value) = (next) => ((this.selected_langauge(next)));
			(obj.dictionary) = () => ((this.available_languages()));
			return obj;
		}
		source_page_body(){
			return [];
		}
		Source_page(){
			const obj = new this.$.$mol_page();
			(obj.Logo) = () => ((this.LogoSource()));
			(obj.title) = () => ("Исходный код");
			(obj.tools) = () => ([(this.Selected_language())]);
			(obj.body) = () => ((this.source_page_body()));
			return obj;
		}
		LogoOutput(){
			const obj = new this.$.$mol_icon_text_box();
			return obj;
		}
		Options_trigger_icon(){
			const obj = new this.$.$mol_icon_cog();
			return obj;
		}
		need_print_source(next){
			if(next !== undefined) return next;
			return true;
		}
		Print_source(){
			const obj = new this.$.$mol_check_box();
			(obj.title) = () => ("Включать исходный код");
			(obj.checked) = (next) => ((this.need_print_source(next)));
			return obj;
		}
		Settings_menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Print_source())]);
			return obj;
		}
		Settings_pop(){
			const obj = new this.$.$mol_pick();
			(obj.hint) = () => ("Нажмите для открытия настроек");
			(obj.trigger_content) = () => ([(this.Options_trigger_icon())]);
			(obj.bubble_content) = () => ([(this.Settings_menu())]);
			return obj;
		}
		result_to_copy(next){
			if(next !== undefined) return next;
			return "";
		}
		Copy_result(){
			const obj = new this.$.$mol_button_copy();
			(obj.text) = (next) => ((this.result_to_copy(next)));
			return obj;
		}
		output_code(next){
			if(next !== undefined) return next;
			return "";
		}
		Output(){
			const obj = new this.$.$mol_textarea();
			(obj.enabled) = () => (false);
			(obj.value) = (next) => ((this.output_code(next)));
			return obj;
		}
		Output_page(){
			const obj = new this.$.$mol_page();
			(obj.Logo) = () => ((this.LogoOutput()));
			(obj.title) = () => ("Результат");
			(obj.tools) = () => ([(this.Settings_pop()), (this.Copy_result())]);
			(obj.body) = () => ([(this.Output())]);
			return obj;
		}
		source_code(next){
			if(next !== undefined) return next;
			return "";
		}
		Validator_header(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("**Валидаторы**");
			return obj;
		}
		validators_list(){
			return [];
		}
		Validators_list(){
			const obj = new this.$.$mol_list();
			(obj.sub) = () => ((this.validators_list()));
			return obj;
		}
		add_validator(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_validator_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Add_validator(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.add_validator(next)));
			(obj.sub) = () => ([(this.Add_validator_icon()), "Добавить валидатор"]);
			return obj;
		}
		validator_title(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Validator_title(id){
			const obj = new this.$.$mol_string_button();
			(obj.hint) = () => ("Введите название валидатора...");
			(obj.value) = (next) => ((this.validator_title(id, next)));
			return obj;
		}
		validator_delete(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Validator_delete_icon(id){
			const obj = new this.$.$mol_icon_delete();
			return obj;
		}
		Validator_delete(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.validator_delete(id, next)));
			(obj.sub) = () => ([(this.Validator_delete_icon(id))]);
			return obj;
		}
		Validator_title_row(id){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Validator_title(id)), (this.Validator_delete(id))]);
			return obj;
		}
		validator_source(id, next){
			if(next !== undefined) return next;
			return "";
		}
		Validator_source(id){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ("Введите код валидатора по аналогии с другими...");
			(obj.value) = (next) => ((this.validator_source(id, next)));
			return obj;
		}
		title(){
			return "Mr. Test Playground";
		}
		plugins(){
			return [(this.Theme())];
		}
		pages(){
			return [
				(this.Menu()), 
				(this.Source_page()), 
				(this.Output_page())
			];
		}
		Source(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ("Введите описание теста на языке MrTest");
			(obj.value) = (next) => ((this.source_code(next)));
			return obj;
		}
		Source_postman(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Validator_header()), 
				(this.Validators_list()), 
				(this.Add_validator())
			]);
			return obj;
		}
		Validator(id){
			const obj = new this.$.$mol_list();
			(obj.sub) = () => ([(this.Validator_title_row(id)), (this.Validator_source(id))]);
			return obj;
		}
	};
	($mol_mem(($.$mrtest.prototype), "Theme"));
	($mol_mem(($.$mrtest.prototype), "LogoMenu"));
	($mol_mem(($.$mrtest.prototype), "Lighter"));
	($mol_mem(($.$mrtest.prototype), "Search_icon"));
	($mol_mem(($.$mrtest.prototype), "Search"));
	($mol_mem(($.$mrtest.prototype), "Add_icon"));
	($mol_mem(($.$mrtest.prototype), "Add"));
	($mol_mem(($.$mrtest.prototype), "Menu"));
	($mol_mem(($.$mrtest.prototype), "LogoSource"));
	($mol_mem(($.$mrtest.prototype), "selected_langauge"));
	($mol_mem(($.$mrtest.prototype), "Selected_language"));
	($mol_mem(($.$mrtest.prototype), "Source_page"));
	($mol_mem(($.$mrtest.prototype), "LogoOutput"));
	($mol_mem(($.$mrtest.prototype), "Options_trigger_icon"));
	($mol_mem(($.$mrtest.prototype), "need_print_source"));
	($mol_mem(($.$mrtest.prototype), "Print_source"));
	($mol_mem(($.$mrtest.prototype), "Settings_menu"));
	($mol_mem(($.$mrtest.prototype), "Settings_pop"));
	($mol_mem(($.$mrtest.prototype), "result_to_copy"));
	($mol_mem(($.$mrtest.prototype), "Copy_result"));
	($mol_mem(($.$mrtest.prototype), "output_code"));
	($mol_mem(($.$mrtest.prototype), "Output"));
	($mol_mem(($.$mrtest.prototype), "Output_page"));
	($mol_mem(($.$mrtest.prototype), "source_code"));
	($mol_mem(($.$mrtest.prototype), "Validator_header"));
	($mol_mem(($.$mrtest.prototype), "Validators_list"));
	($mol_mem(($.$mrtest.prototype), "add_validator"));
	($mol_mem(($.$mrtest.prototype), "Add_validator_icon"));
	($mol_mem(($.$mrtest.prototype), "Add_validator"));
	($mol_mem_key(($.$mrtest.prototype), "validator_title"));
	($mol_mem_key(($.$mrtest.prototype), "Validator_title"));
	($mol_mem_key(($.$mrtest.prototype), "validator_delete"));
	($mol_mem_key(($.$mrtest.prototype), "Validator_delete_icon"));
	($mol_mem_key(($.$mrtest.prototype), "Validator_delete"));
	($mol_mem_key(($.$mrtest.prototype), "Validator_title_row"));
	($mol_mem_key(($.$mrtest.prototype), "validator_source"));
	($mol_mem_key(($.$mrtest.prototype), "Validator_source"));
	($mol_mem(($.$mrtest.prototype), "Source"));
	($mol_mem(($.$mrtest.prototype), "Source_postman"));
	($mol_mem_key(($.$mrtest.prototype), "Validator"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_dsl_visitor {
        }
        $$.$mrtest_dsl_visitor = $mrtest_dsl_visitor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_dsl_test {
            value;
            constructor(value) {
                this.value = value;
            }
        }
        $$.$mrtest_dsl_test = $mrtest_dsl_test;
        class $mrtest_dsl_test_variable_time_range extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_time_range(this);
            }
        }
        $$.$mrtest_dsl_test_variable_time_range = $mrtest_dsl_test_variable_time_range;
        class $mrtest_dsl_test_variable_array_number extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array_number(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array_number = $mrtest_dsl_test_variable_array_number;
        class $mrtest_dsl_test_variable_array_env extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array_env(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array_env = $mrtest_dsl_test_variable_array_env;
        class $mrtest_dsl_test_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_variable_number = $mrtest_dsl_test_variable_number;
        class $mrtest_dsl_test_variable_number_masked extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_number_masked(this);
            }
        }
        $$.$mrtest_dsl_test_variable_number_masked = $mrtest_dsl_test_variable_number_masked;
        class $mrtest_dsl_test_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_variable_env = $mrtest_dsl_test_variable_env;
        class $mrtest_dsl_test_variable_range extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_range(this);
            }
        }
        $$.$mrtest_dsl_test_variable_range = $mrtest_dsl_test_variable_range;
        class $mrtest_dsl_test_variable_array_time extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array_time(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array_time = $mrtest_dsl_test_variable_array_time;
        class $mrtest_dsl_test_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_variable_time = $mrtest_dsl_test_variable_time;
        class $mrtest_dsl_test_variable_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array_string = $mrtest_dsl_test_variable_array_string;
        class $mrtest_dsl_test_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_variable_validator = $mrtest_dsl_test_variable_validator;
        class $mrtest_dsl_test_variable_object extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_object(this);
            }
        }
        $$.$mrtest_dsl_test_variable_object = $mrtest_dsl_test_variable_object;
        class $mrtest_dsl_test_variable_array extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array = $mrtest_dsl_test_variable_array;
        class $mrtest_dsl_test_variable_array_check extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_array_check(this);
            }
        }
        $$.$mrtest_dsl_test_variable_array_check = $mrtest_dsl_test_variable_array_check;
        class $mrtest_dsl_test_variable_bool extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_bool(this);
            }
        }
        $$.$mrtest_dsl_test_variable_bool = $mrtest_dsl_test_variable_bool;
        class $mrtest_dsl_test_variable_rsl extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_rsl(this);
            }
        }
        $$.$mrtest_dsl_test_variable_rsl = $mrtest_dsl_test_variable_rsl;
        class $mrtest_dsl_test_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_variable_string = $mrtest_dsl_test_variable_string;
        class $mrtest_dsl_test_case extends $mrtest_dsl_test {
            accept(v) {
                return v.case(this);
            }
        }
        $$.$mrtest_dsl_test_case = $mrtest_dsl_test_case;
        class $mrtest_dsl_test_status_eql_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_eql_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_eql_number = $mrtest_dsl_test_status_eql_number;
        ;
        class $mrtest_dsl_test_status_eql_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_eql_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_eql_variable_number = $mrtest_dsl_test_status_eql_variable_number;
        class $mrtest_dsl_test_status_eql_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_eql_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_eql_env = $mrtest_dsl_test_status_eql_env;
        ;
        class $mrtest_dsl_test_status_eql_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_eql_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_eql_variable_env = $mrtest_dsl_test_status_eql_variable_env;
        ;
        class $mrtest_dsl_test_status_noteql_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_noteql_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_noteql_number = $mrtest_dsl_test_status_noteql_number;
        ;
        class $mrtest_dsl_test_status_noteql_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_noteql_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_noteql_variable_number = $mrtest_dsl_test_status_noteql_variable_number;
        class $mrtest_dsl_test_status_noteql_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_noteql_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_noteql_env = $mrtest_dsl_test_status_noteql_env;
        ;
        class $mrtest_dsl_test_status_noteql_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_noteql_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_noteql_variable_env = $mrtest_dsl_test_status_noteql_variable_env;
        ;
        class $mrtest_dsl_test_status_gt_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gt_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_gt_number = $mrtest_dsl_test_status_gt_number;
        ;
        class $mrtest_dsl_test_status_gt_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gt_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_gt_variable_number = $mrtest_dsl_test_status_gt_variable_number;
        ;
        class $mrtest_dsl_test_status_gt_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gt_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_gt_env = $mrtest_dsl_test_status_gt_env;
        ;
        class $mrtest_dsl_test_status_gt_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gt_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_gt_variable_env = $mrtest_dsl_test_status_gt_variable_env;
        ;
        class $mrtest_dsl_test_status_gte_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gte_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_gte_number = $mrtest_dsl_test_status_gte_number;
        ;
        class $mrtest_dsl_test_status_gte_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gte_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_gte_variable_number = $mrtest_dsl_test_status_gte_variable_number;
        ;
        class $mrtest_dsl_test_status_gte_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gte_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_gte_env = $mrtest_dsl_test_status_gte_env;
        ;
        class $mrtest_dsl_test_status_gte_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_gte_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_gte_variable_env = $mrtest_dsl_test_status_gte_variable_env;
        ;
        class $mrtest_dsl_test_status_lt_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lt_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_lt_number = $mrtest_dsl_test_status_lt_number;
        ;
        class $mrtest_dsl_test_status_lt_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lt_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_lt_variable_number = $mrtest_dsl_test_status_lt_variable_number;
        ;
        class $mrtest_dsl_test_status_lt_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lt_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_lt_env = $mrtest_dsl_test_status_lt_env;
        ;
        class $mrtest_dsl_test_status_lt_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lt_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_lt_variable_env = $mrtest_dsl_test_status_lt_variable_env;
        ;
        class $mrtest_dsl_test_status_lte_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lte_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_lte_number = $mrtest_dsl_test_status_lte_number;
        ;
        class $mrtest_dsl_test_status_lte_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lte_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_lte_variable_number = $mrtest_dsl_test_status_lte_variable_number;
        ;
        class $mrtest_dsl_test_status_lte_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lte_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_lte_env = $mrtest_dsl_test_status_lte_env;
        ;
        class $mrtest_dsl_test_status_lte_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_lte_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_lte_variable_env = $mrtest_dsl_test_status_lte_variable_env;
        ;
        class $mrtest_dsl_test_status_in_array_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_array_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_array_number = $mrtest_dsl_test_status_in_array_number;
        class $mrtest_dsl_test_status_in_variable_array_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_array_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_array_number = $mrtest_dsl_test_status_in_variable_array_number;
        class $mrtest_dsl_test_status_in_array_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_array_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_array_env = $mrtest_dsl_test_status_in_array_env;
        class $mrtest_dsl_test_status_in_variable_array_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_array_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_array_env = $mrtest_dsl_test_status_in_variable_array_env;
        class $mrtest_dsl_test_status_in_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_number = $mrtest_dsl_test_status_in_variable_number;
        class $mrtest_dsl_test_status_in_number extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_number(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_number = $mrtest_dsl_test_status_in_number;
        ;
        class $mrtest_dsl_test_status_in_number_masked extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_number_masked(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_number_masked = $mrtest_dsl_test_status_in_number_masked;
        ;
        class $mrtest_dsl_test_status_in_variable_number_masked extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_number_masked(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_number_masked = $mrtest_dsl_test_status_in_variable_number_masked;
        ;
        class $mrtest_dsl_test_status_in_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_env = $mrtest_dsl_test_status_in_env;
        ;
        class $mrtest_dsl_test_status_in_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_env = $mrtest_dsl_test_status_in_variable_env;
        ;
        class $mrtest_dsl_test_status_in_range extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_range(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_range = $mrtest_dsl_test_status_in_range;
        ;
        class $mrtest_dsl_test_status_in_variable_range extends $mrtest_dsl_test {
            accept(v) {
                return v.status_in_variable_range(this);
            }
        }
        $$.$mrtest_dsl_test_status_in_variable_range = $mrtest_dsl_test_status_in_variable_range;
        ;
        class $mrtest_dsl_test_status_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.status_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_status_is_validator = $mrtest_dsl_test_status_is_validator;
        class $mrtest_dsl_test_status_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.status_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_status_is_variable_validator = $mrtest_dsl_test_status_is_variable_validator;
        class $mrtest_dsl_test_execution_time_eql_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_eql_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_eql_time = $mrtest_dsl_test_execution_time_eql_time;
        class $mrtest_dsl_test_execution_time_eql_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_eql_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_eql_variable_time = $mrtest_dsl_test_execution_time_eql_variable_time;
        class $mrtest_dsl_test_execution_time_noteql_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_noteql_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_noteql_time = $mrtest_dsl_test_execution_time_noteql_time;
        class $mrtest_dsl_test_execution_time_noteql_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_noteql_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_noteql_variable_time = $mrtest_dsl_test_execution_time_noteql_variable_time;
        class $mrtest_dsl_test_execution_time_gt_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_gt_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_gt_time = $mrtest_dsl_test_execution_time_gt_time;
        class $mrtest_dsl_test_execution_time_gt_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_gt_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_gt_variable_time = $mrtest_dsl_test_execution_time_gt_variable_time;
        class $mrtest_dsl_test_execution_time_gte_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_gte_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_gte_time = $mrtest_dsl_test_execution_time_gte_time;
        class $mrtest_dsl_test_execution_time_gte_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_gte_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_gte_variable_time = $mrtest_dsl_test_execution_time_gte_variable_time;
        class $mrtest_dsl_test_execution_time_lt_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_lt_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_lt_time = $mrtest_dsl_test_execution_time_lt_time;
        class $mrtest_dsl_test_execution_time_lt_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_lt_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_lt_variable_time = $mrtest_dsl_test_execution_time_lt_variable_time;
        class $mrtest_dsl_test_execution_time_lte_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_lte_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_lte_time = $mrtest_dsl_test_execution_time_lte_time;
        class $mrtest_dsl_test_execution_time_lte_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_lte_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_lte_variable_time = $mrtest_dsl_test_execution_time_lte_variable_time;
        class $mrtest_dsl_test_execution_time_in_time_range extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_time_range(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_time_range = $mrtest_dsl_test_execution_time_in_time_range;
        class $mrtest_dsl_test_execution_time_in_variable_time_range extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_variable_time_range(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_variable_time_range = $mrtest_dsl_test_execution_time_in_variable_time_range;
        class $mrtest_dsl_test_execution_time_in_array_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_array_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_array_time = $mrtest_dsl_test_execution_time_in_array_time;
        class $mrtest_dsl_test_execution_time_in_variable_array_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_variable_array_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_variable_array_time = $mrtest_dsl_test_execution_time_in_variable_array_time;
        class $mrtest_dsl_test_execution_time_in_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_time = $mrtest_dsl_test_execution_time_in_time;
        class $mrtest_dsl_test_execution_time_in_variable_time extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_in_variable_time(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_in_variable_time = $mrtest_dsl_test_execution_time_in_variable_time;
        class $mrtest_dsl_test_execution_time_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_is_validator = $mrtest_dsl_test_execution_time_is_validator;
        class $mrtest_dsl_test_execution_time_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.execution_time_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_execution_time_is_variable_validator = $mrtest_dsl_test_execution_time_is_variable_validator;
        class $mrtest_dsl_test_headers_contains_string extends $mrtest_dsl_test {
            accept(v) {
                return v.headers_contains_string(this);
            }
        }
        $$.$mrtest_dsl_test_headers_contains_string = $mrtest_dsl_test_headers_contains_string;
        class $mrtest_dsl_test_headers_contains_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.headers_contains_variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_headers_contains_variable_string = $mrtest_dsl_test_headers_contains_variable_string;
        class $mrtest_dsl_test_headers_contains_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.headers_contains_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_headers_contains_array_string = $mrtest_dsl_test_headers_contains_array_string;
        class $mrtest_dsl_test_headers_contains_variable_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.headers_contains_variable_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_headers_contains_variable_array_string = $mrtest_dsl_test_headers_contains_variable_array_string;
        class $mrtest_dsl_test_headers_contains_array_check extends $mrtest_dsl_test {
            accept(v) {
                return v.headers_contains_array_check(this);
            }
        }
        $$.$mrtest_dsl_test_headers_contains_array_check = $mrtest_dsl_test_headers_contains_array_check;
        class $mrtest_dsl_test_body_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.body_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_body_is_validator = $mrtest_dsl_test_body_is_validator;
        class $mrtest_dsl_test_body_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.body_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_body_is_variable_validator = $mrtest_dsl_test_body_is_variable_validator;
        class $mrtest_dsl_test_body_match_object extends $mrtest_dsl_test {
            accept(v) {
                return v.body_match_object(this);
            }
        }
        $$.$mrtest_dsl_test_body_match_object = $mrtest_dsl_test_body_match_object;
        class $mrtest_dsl_test_body_match_variable_object extends $mrtest_dsl_test {
            accept(v) {
                return v.body_match_variable_object(this);
            }
        }
        $$.$mrtest_dsl_test_body_match_variable_object = $mrtest_dsl_test_body_match_variable_object;
        class $mrtest_dsl_test_body_match_rsl extends $mrtest_dsl_test {
            accept(v) {
                return v.body_match_rsl(this);
            }
        }
        $$.$mrtest_dsl_test_body_match_rsl = $mrtest_dsl_test_body_match_rsl;
        class $mrtest_dsl_test_body_match_variable_rsl extends $mrtest_dsl_test {
            accept(v) {
                return v.body_match_variable_rsl(this);
            }
        }
        $$.$mrtest_dsl_test_body_match_variable_rsl = $mrtest_dsl_test_body_match_variable_rsl;
        class $mrtest_dsl_test_get_value_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_is_validator = $mrtest_dsl_test_get_value_is_validator;
        class $mrtest_dsl_test_get_value_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_is_variable_validator = $mrtest_dsl_test_get_value_is_variable_validator;
        class $mrtest_dsl_test_get_value_eql_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_number = $mrtest_dsl_test_get_value_eql_number;
        class $mrtest_dsl_test_get_value_eql_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_variable_number = $mrtest_dsl_test_get_value_eql_variable_number;
        class $mrtest_dsl_test_get_value_eql_bool extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_bool(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_bool = $mrtest_dsl_test_get_value_eql_bool;
        class $mrtest_dsl_test_get_value_eql_variable_bool extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_variable_bool(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_variable_bool = $mrtest_dsl_test_get_value_eql_variable_bool;
        class $mrtest_dsl_test_get_value_eql_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_string = $mrtest_dsl_test_get_value_eql_string;
        class $mrtest_dsl_test_get_value_eql_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_variable_string = $mrtest_dsl_test_get_value_eql_variable_string;
        class $mrtest_dsl_test_get_value_eql_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_env = $mrtest_dsl_test_get_value_eql_env;
        class $mrtest_dsl_test_get_value_eql_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_eql_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_eql_variable_env = $mrtest_dsl_test_get_value_eql_variable_env;
        class $mrtest_dsl_test_get_value_noteql_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_number = $mrtest_dsl_test_get_value_noteql_number;
        class $mrtest_dsl_test_get_value_noteql_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_variable_number = $mrtest_dsl_test_get_value_noteql_variable_number;
        class $mrtest_dsl_test_get_value_noteql_bool extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_bool(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_bool = $mrtest_dsl_test_get_value_noteql_bool;
        class $mrtest_dsl_test_get_value_noteql_variable_bool extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_variable_bool(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_variable_bool = $mrtest_dsl_test_get_value_noteql_variable_bool;
        class $mrtest_dsl_test_get_value_noteql_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_string = $mrtest_dsl_test_get_value_noteql_string;
        class $mrtest_dsl_test_get_value_noteql_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_variable_string = $mrtest_dsl_test_get_value_noteql_variable_string;
        class $mrtest_dsl_test_get_value_noteql_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_env = $mrtest_dsl_test_get_value_noteql_env;
        class $mrtest_dsl_test_get_value_noteql_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_variable_env = $mrtest_dsl_test_get_value_noteql_variable_env;
        class $mrtest_dsl_test_get_value_noteql_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_object = $mrtest_dsl_test_get_value_noteql_object;
        class $mrtest_dsl_test_get_value_noteql_variable_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_noteql_variable_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_noteql_variable_object = $mrtest_dsl_test_get_value_noteql_variable_object;
        class $mrtest_dsl_test_get_value_gt_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gt_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gt_number = $mrtest_dsl_test_get_value_gt_number;
        class $mrtest_dsl_test_get_value_gt_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gt_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gt_variable_number = $mrtest_dsl_test_get_value_gt_variable_number;
        class $mrtest_dsl_test_get_value_gte_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gte_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gte_number = $mrtest_dsl_test_get_value_gte_number;
        class $mrtest_dsl_test_get_value_gte_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gte_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gte_variable_number = $mrtest_dsl_test_get_value_gte_variable_number;
        class $mrtest_dsl_test_get_value_lt_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lt_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lt_number = $mrtest_dsl_test_get_value_lt_number;
        class $mrtest_dsl_test_get_value_lt_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lt_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lt_variable_number = $mrtest_dsl_test_get_value_lt_variable_number;
        class $mrtest_dsl_test_get_value_lte_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lte_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lte_number = $mrtest_dsl_test_get_value_lte_number;
        class $mrtest_dsl_test_get_value_lte_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lte_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lte_variable_number = $mrtest_dsl_test_get_value_lte_variable_number;
        class $mrtest_dsl_test_get_value_gt_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gt_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gt_env = $mrtest_dsl_test_get_value_gt_env;
        class $mrtest_dsl_test_get_value_gt_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gt_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gt_variable_env = $mrtest_dsl_test_get_value_gt_variable_env;
        class $mrtest_dsl_test_get_value_gte_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gte_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gte_env = $mrtest_dsl_test_get_value_gte_env;
        class $mrtest_dsl_test_get_value_gte_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_gte_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_gte_variable_env = $mrtest_dsl_test_get_value_gte_variable_env;
        class $mrtest_dsl_test_get_value_lt_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lt_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lt_env = $mrtest_dsl_test_get_value_lt_env;
        class $mrtest_dsl_test_get_value_lt_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lt_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lt_variable_env = $mrtest_dsl_test_get_value_lt_variable_env;
        class $mrtest_dsl_test_get_value_lte_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lte_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lte_env = $mrtest_dsl_test_get_value_lte_env;
        class $mrtest_dsl_test_get_value_lte_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_lte_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_lte_variable_env = $mrtest_dsl_test_get_value_lte_variable_env;
        class $mrtest_dsl_test_get_value_in_range extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_range(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_range = $mrtest_dsl_test_get_value_in_range;
        class $mrtest_dsl_test_get_value_in_variable_range extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_range(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_range = $mrtest_dsl_test_get_value_in_variable_range;
        class $mrtest_dsl_test_get_value_in_number_masked extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_number_masked(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_number_masked = $mrtest_dsl_test_get_value_in_number_masked;
        class $mrtest_dsl_test_get_value_in_variable_number_masked extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_number_masked(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_number_masked = $mrtest_dsl_test_get_value_in_variable_number_masked;
        class $mrtest_dsl_test_get_value_in_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_number = $mrtest_dsl_test_get_value_in_number;
        class $mrtest_dsl_test_get_value_in_variable_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_number = $mrtest_dsl_test_get_value_in_variable_number;
        class $mrtest_dsl_test_get_value_in_array_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_array_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_array_number = $mrtest_dsl_test_get_value_in_array_number;
        class $mrtest_dsl_test_get_value_in_variable_array_number extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_array_number(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_array_number = $mrtest_dsl_test_get_value_in_variable_array_number;
        class $mrtest_dsl_test_get_value_in_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_string = $mrtest_dsl_test_get_value_in_string;
        class $mrtest_dsl_test_get_value_in_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_string = $mrtest_dsl_test_get_value_in_variable_string;
        class $mrtest_dsl_test_get_value_in_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_array_string = $mrtest_dsl_test_get_value_in_array_string;
        class $mrtest_dsl_test_get_value_in_variable_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_array_string = $mrtest_dsl_test_get_value_in_variable_array_string;
        class $mrtest_dsl_test_get_value_in_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_env = $mrtest_dsl_test_get_value_in_env;
        class $mrtest_dsl_test_get_value_in_variable_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_env = $mrtest_dsl_test_get_value_in_variable_env;
        class $mrtest_dsl_test_get_value_in_array_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_array_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_array_env = $mrtest_dsl_test_get_value_in_array_env;
        class $mrtest_dsl_test_get_value_in_variable_array_env extends $mrtest_dsl_test {
            accept(v) {
                return v.get_value_in_variable_array_env(this);
            }
        }
        $$.$mrtest_dsl_test_get_value_in_variable_array_env = $mrtest_dsl_test_get_value_in_variable_array_env;
        class $mrtest_dsl_test_get_object_eql_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_eql_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_eql_object = $mrtest_dsl_test_get_object_eql_object;
        class $mrtest_dsl_test_get_object_eql_variable_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_eql_variable_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_eql_variable_object = $mrtest_dsl_test_get_object_eql_variable_object;
        class $mrtest_dsl_test_get_object_noteql_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_noteql_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_noteql_object = $mrtest_dsl_test_get_object_noteql_object;
        class $mrtest_dsl_test_get_object_noteql_variable_object extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_noteql_variable_object(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_noteql_variable_object = $mrtest_dsl_test_get_object_noteql_variable_object;
        class $mrtest_dsl_test_get_object_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_is_validator = $mrtest_dsl_test_get_object_is_validator;
        class $mrtest_dsl_test_get_object_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_is_variable_validator = $mrtest_dsl_test_get_object_is_variable_validator;
        class $mrtest_dsl_test_get_object_contains_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_contains_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_contains_string = $mrtest_dsl_test_get_object_contains_string;
        class $mrtest_dsl_test_get_object_contains_variable_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_contains_variable_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_contains_variable_string = $mrtest_dsl_test_get_object_contains_variable_string;
        class $mrtest_dsl_test_get_object_contains_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_contains_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_contains_array_string = $mrtest_dsl_test_get_object_contains_array_string;
        class $mrtest_dsl_test_get_object_contains_variable_array_string extends $mrtest_dsl_test {
            accept(v) {
                return v.get_object_contains_variable_array_string(this);
            }
        }
        $$.$mrtest_dsl_test_get_object_contains_variable_array_string = $mrtest_dsl_test_get_object_contains_variable_array_string;
        class $mrtest_dsl_test_get_array_eql_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_eql_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_eql_array = $mrtest_dsl_test_get_array_eql_array;
        class $mrtest_dsl_test_get_array_eql_variable_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_eql_variable_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_eql_variable_array = $mrtest_dsl_test_get_array_eql_variable_array;
        class $mrtest_dsl_test_get_array_noteql_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_noteql_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_noteql_array = $mrtest_dsl_test_get_array_noteql_array;
        class $mrtest_dsl_test_get_array_noteql_variable_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_noteql_variable_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_noteql_variable_array = $mrtest_dsl_test_get_array_noteql_variable_array;
        class $mrtest_dsl_test_get_array_is_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_is_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_is_validator = $mrtest_dsl_test_get_array_is_validator;
        class $mrtest_dsl_test_get_array_is_variable_validator extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_is_variable_validator(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_is_variable_validator = $mrtest_dsl_test_get_array_is_variable_validator;
        class $mrtest_dsl_test_get_array_contains_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_contains_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_contains_array = $mrtest_dsl_test_get_array_contains_array;
        class $mrtest_dsl_test_get_array_contains_variable_array extends $mrtest_dsl_test {
            accept(v) {
                return v.get_array_contains_variable_array(this);
            }
        }
        $$.$mrtest_dsl_test_get_array_contains_variable_array = $mrtest_dsl_test_get_array_contains_variable_array;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_dsl_visitor_postman extends $mrtest_dsl_visitor {
            custom_stringify = (obj, tab_offset = 1) => JSON.stringify(obj, null, 4)
                .split("\n")
                .map((line, index) => index === 0 ? line : "\t".repeat(tab_offset) + line)
                .join("\n");
            template() {
                return "";
            }
            variable_time_range(test) {
                debugger;
                return `var ${test.value.name} = {\n\tfrom_ms: ${test.value.value.from}\n\tto_ms: ${test.value.value.to}\n};\n\n`;
            }
            variable_array_number(test) {
                return `var ${test.value.name} = [\n\t${test.value.value.join(',\n\t')}\n];\n\n`;
            }
            variable_array_env(test) {
                return `var ${test.value.name} = [\n\tpm.environment.get("${test.value.value.join('"),\n\tpm.environment.get("')}")\n];\n\n`;
            }
            variable_number(test) {
                return `var ${test.value.name} = ${test.value.value};\n\n`;
            }
            variable_number_masked(test) {
                return `var ${test.value.name} = {\n\tfrom: ${test.value.value.from},\n\tto: ${this.custom_stringify(test.value.value.to)}\n};\n\n`;
            }
            variable_env(test) {
                return `var ${test.value.name} = pm.environment.get("${test.value.value}");\n\n`;
            }
            variable_range(test) {
                return `var ${test.value.name} = {\n\tfrom: ${test.value.value.from},\n\tto: ${this.custom_stringify(test.value.value.to)}\n};\n\n`;
            }
            variable_array_time(test) {
                return `var ${test.value.name} = [\n\t${test.value.value.join(',\n\t')}\n];\n\n`;
            }
            variable_time(test) {
                return `var ${test.value.name} = {\n\tvalue_ms: ${test.value.value}\n};\n\n`;
            }
            variable_array_string(test) {
                return `var ${test.value.name} = [\n\t"${test.value.value.join('",\n\t"')}"\n];\n\n`;
            }
            variable_validator(test) {
                return `var ${test.value.name} = {\n\tvalidator: ${test.value.value.name},\n\targs: ${this.custom_stringify(test.value.value.args)}\n};\n\n`;
            }
            variable_object(test) {
                return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`;
            }
            variable_array(test) {
                return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`;
            }
            variable_array_check(test) {
                return ``;
            }
            variable_bool(test) {
                return `var ${test.value.name} = ${test.value.value};\n\n`;
            }
            variable_rsl(test) {
                return `var ${test.value.name} = ${this.custom_stringify(test.value.value, 0)};\n\n`;
            }
            variable_string(test) {
                return `var ${test.value.name} = "${test.value.value}";\n\n`;
            }
            case(test) {
                return `if (pm.environment.get("${test.value}") == "+") {\t%%\n}\n\n`;
            }
            status_eql_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(${test.value});\n});\n\n`;
            }
            status_eql_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(${test.value});\n});\n\n`;
            }
            status_eql_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_eql_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.eql(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_noteql_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(${test.value});\n});\n\n`;
            }
            status_noteql_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(${test.value});\n});\n\n`;
            }
            status_noteql_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_noteql_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.not.eql(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_gt_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(${test.value});\n});\n\n`;
            }
            status_gt_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(${test.value});\n});\n\n`;
            }
            status_gt_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_gt_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.above(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_gte_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(${test.value});\n});\n\n`;
            }
            status_gte_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(${test.value});\n});\n\n`;
            }
            status_gte_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_gte_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.least(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_lt_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(${test.value});\n});\n\n`;
            }
            status_lt_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(${test.value});\n});\n\n`;
            }
            status_lt_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_lt_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.below(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_lte_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(${test.value});\n});\n\n`;
            }
            status_lte_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(${test.value});\n});\n\n`;
            }
            status_lte_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t);\n});\n\n`;
            }
            status_lte_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.at.most(\n\t\tNumber(${test.value})\n\t);\n});\n\n`;
            }
            status_in_array_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n});\n\n`;
            }
            status_in_variable_array_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf(${test.value});\n});\n\n`;
            }
            status_in_array_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\t${test.value.map((v) => 'Number(pm.environment.get("' + v + '"))').join(', \n\t\t')}\n\t]);\n});\n\n`;
            }
            status_in_variable_array_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf(\n\t\t${test.value}.map(Number)\n\t);\n});\n\n`;
            }
            status_in_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([${test.value}]);\n});\n\n`;
            }
            status_in_variable_number(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([${test.value}]);\n});\n\n`;
            }
            status_in_number_masked(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`;
            }
            status_in_variable_number_masked(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t);\n});\n\n`;
            }
            status_in_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\tNumber(pm.environment.get("${test.value}"))\n\t]);\n});\n\n`;
            }
            status_in_variable_env(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.oneOf([\n\t\tNumber(${test.value})\n\t]);\n});\n\n`;
            }
            status_in_range(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`;
            }
            status_in_variable_range(test) {
                return `pm.test("[status]", function () {\n\tpm.expect(pm.response.code).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t);\n});\n\n`;
            }
            status_is_validator(test) {
                return `pm.test("[status]", function () {\n\t${test.value.name}(pm.response.code, ${this.custom_stringify(test.value.args)})\n});\n\n`;
            }
            status_is_variable_validator(test) {
                return `pm.test("[status]", function () {\n\t${test.value}.validator(pm.response.code, ${test.value}.args)\n});\n\n`;
            }
            execution_time_eql_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.eql(${test.value});\n});\n\n`;
            }
            execution_time_eql_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.eql(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_noteql_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.not.eql(${test.value});\n});\n\n`;
            }
            execution_time_noteql_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.not.eql(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_gt_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.above(${test.value});\n});\n\n`;
            }
            execution_time_gt_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.above(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_gte_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.least(${test.value});\n});\n\n`;
            }
            execution_time_gte_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.least(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_lt_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.below(${test.value});\n});\n\n`;
            }
            execution_time_lt_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.below(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_lte_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.most(${test.value});\n});\n\n`;
            }
            execution_time_lte_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.at.most(\n\t\t${test.value}.value_ms\n\t);\n});\n\n`;
            }
            execution_time_in_time_range(test) {
                return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.within(${test.value.from}, ${test.value.to});\n});\n\n`;
            }
            execution_time_in_variable_time_range(test) {
                return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.within(\n\t\t${test.value}.from_ms,\n\t\t${test.value}.to_ms\n\t);\n});\n\n`;
            }
            execution_time_in_array_time(test) {
                return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n});\n\n`;
            }
            execution_time_in_variable_array_time(test) {
                return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf(\n\t\t${test.value}\n\t);\n});\n\n`;
            }
            execution_time_in_time(test) {
                return `pm.test("[execution-time]", function () {\n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value}\n\t]);\n});\n\n`;
            }
            execution_time_in_variable_time(test) {
                return `pm.test("[execution-time]", function () { \n\tpm.expect(pm.response.responseTime).to.be.oneOf([\n\t\t${test.value}.value_ms\n\t]);\n});\n\n`;
            }
            execution_time_is_validator(test) {
                return `pm.test("[execution-time]", function () {\n\t${test.value.name}(pm.response.responseTime, ${this.custom_stringify(test.value.args)})\n});\n\n`;
            }
            execution_time_is_variable_validator(test) {
                return `pm.test("[execution-time]", function () {\n\t${test.value}.validator(\n\t\tpm.response.responseTime,\n\t\t${test.value}.args\n\t)\n});\n\n`;
            }
            headers_contains_string(test) {
                return `pm.test("[headers]", function () { \n\tpm.expect(pm.response).to.have.header("${test.value}");\n});\n\n`;
            }
            headers_contains_variable_string(test) {
                return `pm.test("[headers]", function () { \n\tpm.expect(pm.response).to.have.header(${test.value});\n});\n\n`;
            }
            headers_contains_array_string(test) {
                let headers_tests = [];
                test.value.forEach((header) => {
                    headers_tests.push(`\tpm.expect(pm.response).to.have.header("${header}");\n`);
                });
                return `pm.test("[headers]", function () { \n${headers_tests.join('')}});\n\n`;
            }
            headers_contains_variable_array_string(test) {
                return `pm.test("[headers]", function () {\n\t${test.value}.forEach(header => {\n\t\tpm.expect(pm.response).to.have.header(header)\n\t}\n});\n\n`;
            }
            headers_contains_array_check(test) {
                let headers_tests = [];
                test.value.forEach((header) => {
                    switch (header.operator) {
                        case $mrtest_operator_eql:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.eql(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.string) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql("${header.string}");\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.eql(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_noteql:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.not.eql(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.string) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql("${header.string}");\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.not.eql(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_gt:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.above(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.above(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.above(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_gte:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.least(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.least(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.least(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_lt:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.below(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.below(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.below(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_lte:
                            if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.at.most(${header.number});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.most(\n\t\tpm.environment.get("${header.env}")\n\t);\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.at.most(${header.variable});\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        case $mrtest_operator_in:
                            if (header.array_number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t${header.array_number.join(', \n\t\t')}\n\t]);\n`);
                            }
                            else if (header.array_env) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf([\n\t\t${header.array_env.map(v => 'pm.environment.get("' + v + '")').join(', \n\t\t')}\n\t]);\n`);
                            }
                            else if (header.number) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t${header.number}\n\t]);\n`);
                            }
                            else if (header.number_masked) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.within(${header.number_masked.from}, ${header.number_masked.to});\n`);
                            }
                            else if (header.env) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\tpm.environment.get("${header.env}")\n\t]);\n`);
                            }
                            else if (header.variable) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf(${header.variable});\n`);
                            }
                            else if (header.range) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.within(${header.range.from}, ${header.range.to});\n`);
                            }
                            else if (header.array_string) {
                                headers_tests.push(`\tpm.expect(pm.response.headers.get("${header.inspectee}")).to.be.oneOf([\n\t\t${header.array_string.map(v => '"' + v + '"').join(', \n\t\t')}\n\t]);\n`);
                            }
                            else if (header.string) {
                                headers_tests.push(`\tpm.expect(\n\t\tNumber(pm.response.headers.get("${header.inspectee}"))\n\t).to.be.oneOf([\n\t\t"${header.string}"\n\t]);\n`);
                            }
                            else {
                                headers_tests.push(`\t// Не найдена проверка для этого типа с оператором ${header.operator.name}\n`);
                            }
                            break;
                        default:
                            headers_tests.push(`\t// Не найдена проверка для оператора ${header.operator.name}\n`);
                    }
                });
                return `pm.test("[headers]", function () {\n${headers_tests.join('')}})\n\n`;
            }
            body_is_validator(test) {
                return `pm.test("[body]", function () {\n\t${test.value.name}(pm.response.json(), ${this.custom_stringify(test.value.args)})\n});\n\n`;
            }
            body_is_variable_validator(test) {
                return `pm.test("[body]", function () {\n\t${test.value}.validator(pm.response.json(), ${test.value}.args)\n});\n\n`;
            }
            body_match_object(test) {
                return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(\n\t\t${this.custom_stringify(test.value, 2)}\n\t);\n});\n\n`;
            }
            body_match_variable_object(test) {
                return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(${test.value});\n});\n\n`;
            }
            body_match_rsl(test) {
                return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(\n\t\t${this.custom_stringify(test.value, 2)}\n\t);\n});\n\n`;
            }
            body_match_variable_rsl(test) {
                return `pm.test("[body]", function () {\n\tpm.expect(pm.response).to.have.jsonSchema(${test.value});\n});\n\n`;
            }
            get_template(test) {
                return `pm.test("[get]", function () {\n\t%%\n});\n\n`;
            }
            get_value_is_validator(test) {
                return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`;
            }
            get_value_is_variable_validator(test) {
                return `${test.value}.validator(test, ${test.value}.args)\n`;
            }
            get_value_eql_number(test) {
                return `pm.expect(Number(test)).to.be.eql(${test.value})\n`;
            }
            get_value_eql_variable_number(test) {
                return `pm.expect(test).to.be.eql(${test.value})\n`;
            }
            get_value_eql_bool(test) {
                return `pm.expect(test).to.be.eql(${test.value})\n`;
            }
            get_value_eql_variable_bool(test) {
                return `pm.expect(test).to.be.eql(${test.value})\n`;
            }
            get_value_eql_string(test) {
                return `pm.expect(test).to.be.eql("${test.value}")\n`;
            }
            get_value_eql_variable_string(test) {
                return `pm.expect(test).to.be.eql(${test.value})\n`;
            }
            get_value_eql_env(test) {
                return `pm.expect(test).to.be.eql(\n\t\tpm.environment.get("${test.value}")\n\t)\n`;
            }
            get_value_eql_variable_env(test) {
                return `pm.expect(test).to.be.eql(${test.value})\n`;
            }
            get_value_noteql_number(test) {
                return `pm.expect(Number(test)).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_variable_number(test) {
                return `pm.expect(Number(test)).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_bool(test) {
                return `pm.expect(test).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_variable_bool(test) {
                return `pm.expect(test).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_string(test) {
                return `pm.expect(test).to.not.eql("${test.value}")\n`;
            }
            get_value_noteql_variable_string(test) {
                return `pm.expect(test).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_env(test) {
                return `pm.expect(test).to.not.eql(\n\t\tpm.environment.get("${test.value}")\n\t)\n`;
            }
            get_value_noteql_variable_env(test) {
                return `pm.expect(test).to.not.eql(${test.value})\n`;
            }
            get_value_noteql_object(test) {
                return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_value_noteql_variable_object(test) {
                return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_value_gt_number(test) {
                return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`;
            }
            get_value_gt_variable_number(test) {
                return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`;
            }
            get_value_gte_number(test) {
                return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`;
            }
            get_value_gte_variable_number(test) {
                return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`;
            }
            get_value_lt_number(test) {
                return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`;
            }
            get_value_lt_variable_number(test) {
                return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`;
            }
            get_value_lte_number(test) {
                return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`;
            }
            get_value_lte_variable_number(test) {
                return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`;
            }
            get_value_gt_env(test) {
                return `pm.expect(Number(test)).to.be.at.above(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`;
            }
            get_value_gt_variable_env(test) {
                return `pm.expect(Number(test)).to.be.at.above(${test.value})\n`;
            }
            get_value_gte_env(test) {
                return `pm.expect(Number(test)).to.be.at.least(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`;
            }
            get_value_gte_variable_env(test) {
                return `pm.expect(Number(test)).to.be.at.least(${test.value})\n`;
            }
            get_value_lt_env(test) {
                return `pm.expect(Number(test)).to.be.at.below(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`;
            }
            get_value_lt_variable_env(test) {
                return `pm.expect(Number(test)).to.be.at.below(${test.value})\n`;
            }
            get_value_lte_env(test) {
                return `pm.expect(Number(test)).to.be.at.most(\n\t\tNumber(pm.environment.get("${test.value}"))\n\t)\n`;
            }
            get_value_lte_variable_env(test) {
                return `pm.expect(Number(test)).to.be.at.most(${test.value})\n`;
            }
            get_value_in_range(test) {
                return `pm.expect(Number(test)).to.be.within(${test.value.from}, ${test.value.to})\n`;
            }
            get_value_in_variable_range(test) {
                return `pm.expect(Number(test)).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t)\n`;
            }
            get_value_in_number_masked(test) {
                return `pm.expect(Number(test)).to.be.within(${test.value.from}, ${test.value.to})\n`;
            }
            get_value_in_variable_number_masked(test) {
                return `pm.expect(Number(test)).to.be.within(\n\t\t${test.value}.from,\n\t\t${test.value}.to\n\t)\n`;
            }
            get_value_in_number(test) {
                return `pm.expect(Number(test)).to.be.oneOf([${test.value}]);\n`;
            }
            get_value_in_variable_number(test) {
                return `pm.expect(Number(test)).to.be.oneOf([${test.value}]);\n`;
            }
            get_value_in_array_number(test) {
                return `pm.expect(Number(test)).to.be.oneOf([\n\t\t${test.value.join(', \n\t\t')}\n\t]);\n`;
            }
            get_value_in_variable_array_number(test) {
                return `pm.expect(Number(test)).to.be.oneOf(${test.value});\n`;
            }
            get_value_in_string(test) {
                return `pm.expect(test).to.be.oneOf(["${test.value}"]);\n`;
            }
            get_value_in_variable_string(test) {
                return `pm.expect(test).to.be.oneOf([${test.value}]);\n`;
            }
            get_value_in_array_string(test) {
                return `pm.expect(test).to.be.oneOf([\n\t\t"${test.value.join('", \n\t\t"')}"\n\t]);\n`;
            }
            get_value_in_variable_array_string(test) {
                return `pm.expect(test).to.be.oneOf(${test.value});\n`;
            }
            get_value_in_env(test) {
                return `pm.expect(test).to.be.oneOf([\n\t\tpm.environment.get("${test.value}")\n\t]);\n`;
            }
            get_value_in_variable_env(test) {
                return `pm.expect(test).to.be.oneOf([${test.value}]);\n`;
            }
            get_value_in_array_env(test) {
                return `pm.expect(test).to.be.oneOf([\n\t\tpm.environment.get("${test.value.join('"), \n\t\tpm.environment.get("')}")\n\t]);\n`;
            }
            get_value_in_variable_array_env(test) {
                return `pm.expect(test).to.be.oneOf(${test.value});\n`;
            }
            get_object_eql_object(test) {
                return `pm.expect(test).to.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_object_eql_variable_object(test) {
                return `pm.expect(test).to.eql(${test.value});\n`;
            }
            get_object_noteql_object(test) {
                return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_object_noteql_variable_object(test) {
                return `pm.expect(test).to.not.eql(${test.value});\n`;
            }
            get_object_is_validator(test) {
                return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`;
            }
            get_object_is_variable_validator(test) {
                return `${test.value}.validator(test, ${test.value}.args)\n`;
            }
            get_object_contains_array_string(test) {
                return `pm.expect(test).to.have.all.keys(\n\t\t"${test.value.join('",\n\t\t"')}"\n\t);\n`;
            }
            get_object_contains_variable_array_string(test) {
                return `pm.expect(test).to.have.all.keys(...${test.value});\n`;
            }
            get_object_contains_string(test) {
                return `pm.expect(test).to.have.all.keys("${test.value}");\n`;
            }
            get_object_contains_variable_string(test) {
                return `pm.expect(test).to.have.all.keys(${test.value});\n`;
            }
            get_array_eql_array(test) {
                return `pm.expect(test).to.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_array_eql_variable_array(test) {
                return `pm.expect(test).to.eql(${test.value});\n`;
            }
            get_array_noteql_array(test) {
                return `pm.expect(test).to.not.eql(${this.custom_stringify(test.value)});\n`;
            }
            get_array_noteql_variable_array(test) {
                return `pm.expect(test).to.not.eql(${test.value});\n`;
            }
            get_array_is_validator(test) {
                return `${test.value.name}(test, ${this.custom_stringify(test.value.args)})\n`;
            }
            get_array_is_variable_validator(test) {
                return `${test.value}.validator(test, ${test.value}.args)\n`;
            }
            get_array_contains_array(test) {
                return `pm.expect(test).to.have.members(${this.custom_stringify(test.value)});\n`;
            }
            get_array_contains_variable_array(test) {
                return `pm.expect(test).to.have.members(${test.value});\n`;
            }
        }
        $$.$mrtest_dsl_visitor_postman = $mrtest_dsl_visitor_postman;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
const expression_registry = {};
function print_source(source, comment_literal) {
    if (($.$$.$mol_state_local.value("print_source") ?? true) == true) {
        return source.split('\n').map(line => {
            return `${comment_literal}\t${line}`;
        }).join('\n') + '\n';
    }
    else {
        return "";
    }
}
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_dsl {
            tests = {
                "status": {
                    "$mrtest_operator_eql": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_eql_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_eql_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_eql_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_eql_variable_env,
                        }
                    },
                    "$mrtest_operator_noteql": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_noteql_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_noteql_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_noteql_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_noteql_variable_env,
                        }
                    },
                    "$mrtest_operator_gt": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_gt_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_gt_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_gt_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_gt_variable_env,
                        }
                    },
                    "$mrtest_operator_gte": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_gte_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_gte_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_gte_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_gte_variable_env,
                        }
                    },
                    "$mrtest_operator_lt": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_gt_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_gt_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_lt_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_lt_variable_env,
                        }
                    },
                    "$mrtest_operator_lte": {
                        "$mrtest_type_number": $mrtest_dsl_test_status_lte_number,
                        "$mrtest_type_env": $mrtest_dsl_test_status_lte_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_status_lte_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_status_lte_variable_env,
                        }
                    },
                    "$mrtest_operator_in": {
                        "$mrtest_type_array_number": $mrtest_dsl_test_status_in_array_number,
                        "$mrtest_type_array_env": $mrtest_dsl_test_status_in_array_env,
                        "$mrtest_type_number": $mrtest_dsl_test_status_in_number,
                        "$mrtest_type_number_masked": $mrtest_dsl_test_status_in_number_masked,
                        "$mrtest_type_env": $mrtest_dsl_test_status_in_env,
                        "$mrtest_type_range": $mrtest_dsl_test_status_in_range,
                        "variables": {
                            "$mrtest_type_array_number": $mrtest_dsl_test_status_in_variable_array_number,
                            "$mrtest_type_array_env": $mrtest_dsl_test_status_in_variable_array_env,
                            "$mrtest_type_number": $mrtest_dsl_test_status_in_variable_number,
                            "$mrtest_type_number_masked": $mrtest_dsl_test_status_in_variable_number_masked,
                            "$mrtest_type_env": $mrtest_dsl_test_status_in_variable_env,
                            "$mrtest_type_range": $mrtest_dsl_test_status_in_variable_range,
                        }
                    },
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_status_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_status_is_variable_validator,
                        }
                    }
                },
                "execution-time": {
                    "$mrtest_operator_eql": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_eql_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_eql_variable_time
                        }
                    },
                    "$mrtest_operator_noteql": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_noteql_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_noteql_variable_time
                        }
                    },
                    "$mrtest_operator_gt": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_gt_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_gt_variable_time
                        }
                    },
                    "$mrtest_operator_gte": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_gte_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_gte_variable_time
                        }
                    },
                    "$mrtest_operator_lt": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_lt_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_lt_variable_time
                        }
                    },
                    "$mrtest_operator_lte": {
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_lte_time,
                        "variables": {
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_lte_variable_time
                        }
                    },
                    "$mrtest_operator_in": {
                        "$mrtest_type_time_range": $mrtest_dsl_test_execution_time_in_time_range,
                        "$mrtest_type_array_time": $mrtest_dsl_test_execution_time_in_array_time,
                        "$mrtest_type_time": $mrtest_dsl_test_execution_time_in_time,
                        "variables": {
                            "$mrtest_type_time_range": $mrtest_dsl_test_execution_time_in_variable_time_range,
                            "$mrtest_type_array_time": $mrtest_dsl_test_execution_time_in_variable_array_time,
                            "$mrtest_type_time": $mrtest_dsl_test_execution_time_in_variable_time
                        }
                    },
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_execution_time_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_execution_time_is_variable_validator
                        }
                    }
                },
                "headers": {
                    "$mrtest_operator_contains": {
                        "$mrtest_type_string": $mrtest_dsl_test_headers_contains_string,
                        "$mrtest_type_array_string": $mrtest_dsl_test_headers_contains_array_string,
                        "$mrtest_type_array_check": $mrtest_dsl_test_headers_contains_array_check,
                        "variables": {
                            "$mrtest_type_string": $mrtest_dsl_test_headers_contains_variable_string,
                            "$mrtest_type_array_string": $mrtest_dsl_test_headers_contains_variable_array_string,
                        }
                    }
                },
                "body": {
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_body_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_body_is_variable_validator,
                        }
                    },
                    "$mrtest_operator_match": {
                        "$mrtest_type_object": $mrtest_dsl_test_body_match_object,
                        "$mrtest_type_rsl": $mrtest_dsl_test_body_match_rsl,
                        "variables": {
                            "$mrtest_type_object": $mrtest_dsl_test_body_match_variable_object,
                            "$mrtest_type_rsl": $mrtest_dsl_test_body_match_variable_rsl,
                        }
                    }
                },
                "get_value": {
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_get_value_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_get_value_is_variable_validator
                        }
                    },
                    "$mrtest_operator_eql": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_eql_number,
                        "$mrtest_type_bool": $mrtest_dsl_test_get_value_eql_bool,
                        "$mrtest_type_string": $mrtest_dsl_test_get_value_eql_string,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_eql_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_eql_variable_number,
                            "$mrtest_type_bool": $mrtest_dsl_test_get_value_eql_variable_bool,
                            "$mrtest_type_string": $mrtest_dsl_test_get_value_eql_variable_string,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_eql_variable_env,
                        }
                    },
                    "$mrtest_operator_noteql": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_noteql_number,
                        "$mrtest_type_bool": $mrtest_dsl_test_get_value_noteql_bool,
                        "$mrtest_type_string": $mrtest_dsl_test_get_value_noteql_string,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_noteql_env,
                        "$mrtest_type_object": $mrtest_dsl_test_get_value_noteql_object,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_noteql_variable_number,
                            "$mrtest_type_bool": $mrtest_dsl_test_get_value_noteql_variable_bool,
                            "$mrtest_type_string": $mrtest_dsl_test_get_value_noteql_variable_string,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_noteql_variable_env,
                            "$mrtest_type_object": $mrtest_dsl_test_get_value_noteql_variable_object,
                        }
                    },
                    "$mrtest_operator_gt": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_gt_number,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_gt_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_gt_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_gt_variable_env,
                        }
                    },
                    "$mrtest_operator_gte": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_gte_number,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_gte_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_gte_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_gte_variable_env,
                        }
                    },
                    "$mrtest_operator_lt": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_lt_number,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_lt_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_lt_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_lt_variable_env,
                        }
                    },
                    "$mrtest_operator_lte": {
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_lte_number,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_lte_env,
                        "variables": {
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_lte_variable_number,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_lte_variable_env,
                        }
                    },
                    "$mrtest_operator_in": {
                        "$mrtest_type_range": $mrtest_dsl_test_get_value_in_range,
                        "$mrtest_type_number_masked": $mrtest_dsl_test_get_value_in_number_masked,
                        "$mrtest_type_number": $mrtest_dsl_test_get_value_in_number,
                        "$mrtest_type_array_number": $mrtest_dsl_test_get_value_in_array_number,
                        "$mrtest_type_string": $mrtest_dsl_test_get_value_in_string,
                        "$mrtest_type_array_string": $mrtest_dsl_test_get_value_in_array_string,
                        "$mrtest_type_env": $mrtest_dsl_test_get_value_in_env,
                        "$mrtest_type_array_env": $mrtest_dsl_test_get_value_in_array_env,
                        "variables": {
                            "$mrtest_type_range": $mrtest_dsl_test_get_value_in_variable_range,
                            "$mrtest_type_number_masked": $mrtest_dsl_test_get_value_in_variable_number_masked,
                            "$mrtest_type_number": $mrtest_dsl_test_get_value_in_variable_number,
                            "$mrtest_type_array_number": $mrtest_dsl_test_get_value_in_variable_array_number,
                            "$mrtest_type_string": $mrtest_dsl_test_get_value_in_variable_string,
                            "$mrtest_type_array_string": $mrtest_dsl_test_get_value_in_variable_array_string,
                            "$mrtest_type_env": $mrtest_dsl_test_get_value_in_variable_env,
                            "$mrtest_type_array_env": $mrtest_dsl_test_get_value_in_variable_array_env,
                        }
                    }
                },
                "get_array": {
                    "$mrtest_operator_eql": {
                        "$mrtest_type_array": $mrtest_dsl_test_get_array_eql_array,
                        "variables": {
                            "$mrtest_type_array": $mrtest_dsl_test_get_array_eql_variable_array,
                        }
                    },
                    "$mrtest_operator_noteql": {
                        "$mrtest_type_array": $mrtest_dsl_test_get_array_noteql_array,
                        "variables": {
                            "$mrtest_type_array": $mrtest_dsl_test_get_array_noteql_variable_array,
                        }
                    },
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_get_array_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_get_array_is_variable_validator,
                        }
                    },
                    "$mrtest_operator_contains": {
                        "$mrtest_type_array": $mrtest_dsl_test_get_array_contains_array,
                        "variables": {
                            "$mrtest_type_array": $mrtest_dsl_test_get_array_contains_variable_array,
                        }
                    }
                },
                "get_object": {
                    "$mrtest_operator_eql": {
                        "$mrtest_type_object": $mrtest_dsl_test_get_object_eql_object,
                        "variables": {
                            "$mrtest_type_object": $mrtest_dsl_test_get_object_eql_variable_object,
                        }
                    },
                    "$mrtest_operator_noteql": {
                        "$mrtest_type_object": $mrtest_dsl_test_get_object_noteql_object,
                        "variables": {
                            "$mrtest_type_object": $mrtest_dsl_test_get_object_noteql_variable_object,
                        }
                    },
                    "$mrtest_operator_is": {
                        "$mrtest_type_validator": $mrtest_dsl_test_get_object_is_validator,
                        "variables": {
                            "$mrtest_type_validator": $mrtest_dsl_test_get_object_is_variable_validator,
                        }
                    },
                    "$mrtest_operator_contains": {
                        "$mrtest_type_array_string": $mrtest_dsl_test_get_object_contains_array_string,
                        "$mrtest_type_string": $mrtest_dsl_test_get_object_contains_string,
                        "variables": {
                            "$mrtest_type_array_string": $mrtest_dsl_test_get_object_contains_variable_array_string,
                            "$mrtest_type_string": $mrtest_dsl_test_get_object_contains_variable_string,
                        }
                    }
                },
                "variable": {
                    "$mrtest_type_time_range": $mrtest_dsl_test_variable_time_range,
                    "$mrtest_type_array_number": $mrtest_dsl_test_variable_array_number,
                    "$mrtest_type_array_env": $mrtest_dsl_test_variable_array_env,
                    "$mrtest_type_number": $mrtest_dsl_test_variable_number,
                    "$mrtest_type_number_masked": $mrtest_dsl_test_variable_number_masked,
                    "$mrtest_type_env": $mrtest_dsl_test_variable_env,
                    "$mrtest_type_range": $mrtest_dsl_test_variable_range,
                    "$mrtest_type_array_time": $mrtest_dsl_test_variable_array_time,
                    "$mrtest_type_time": $mrtest_dsl_test_variable_time,
                    "$mrtest_type_array_string": $mrtest_dsl_test_variable_array_string,
                    "$mrtest_type_validator": $mrtest_dsl_test_variable_validator,
                    "$mrtest_type_object": $mrtest_dsl_test_variable_object,
                    "$mrtest_type_array": $mrtest_dsl_test_variable_array,
                    "$mrtest_type_bool": $mrtest_dsl_test_variable_bool,
                    "$mrtest_type_rsl": $mrtest_dsl_test_variable_rsl,
                    "$mrtest_type_string": $mrtest_dsl_test_variable_string,
                }
            };
            variables = {};
            compile(source) {
                let preprocessed_source = this.preprocess(source);
                if (preprocessed_source == '') {
                    return preprocessed_source;
                }
                let dsl_tree = $.$$.$mol_tree2_from_string(`${preprocessed_source}\n`);
                let target = this.get_target(dsl_tree);
                const target_visitors = {
                    'postman': new $mrtest_dsl_visitor_postman()
                };
                const visitor = target_visitors[target.name];
                let validators = this.extract_validators(source);
                let visitor_validators = this.get_validators(target.name);
                let result = "";
                validators.forEach(validator => {
                    result += visitor_validators[validator] ?? "";
                });
                for (const kid of target.kids) {
                    result += this.parse(kid, visitor);
                }
                return result.trim();
            }
            extract_validators(source) {
                let validators = new Set();
                source.match(/\@\w+/g)?.forEach(validator => {
                    validators.add(validator.slice(1));
                });
                return [...validators];
            }
            get_validators(target_name) {
                let validators = {};
                const key = `${target_name}-validators`;
                let validators_ids = $.$$.$mol_state_local.value(key) ?? [];
                for (const validator_id of validators_ids) {
                    const validator_key = `${target_name}-validators-${validator_id}`;
                    let validator = $.$$.$mol_state_local.value(validator_key);
                    if (validator && validator.title && validator.code) {
                        validators[validator.title] = validator.code + (validator.code ? '\n\n' : '');
                    }
                }
                return validators;
            }
            parse(tree, visitor) {
                if (this.is_variable(tree)) {
                    return this.parse_variable(tree, visitor);
                }
                if (this.is_expression(tree)) {
                    return this.parse_expression(tree, visitor);
                }
                if (this.is_case(tree)) {
                    return this.parse_case(tree, visitor);
                }
                if (this.is_get(tree, visitor)) {
                    return this.parse_get(tree, visitor);
                }
                return "";
            }
            is_expression(tree) {
                if (tree.type.startsWith('[') &&
                    tree.type.endsWith(']') &&
                    tree.kids[0] && tree.kids[0].kids[0]) {
                    return true;
                }
                return false;
            }
            parse_expression(tree, visitor) {
                const response_element = tree.type.slice(1, -1);
                const operator = $mrtest_operators[tree.kids[0].type];
                for (const type_ of $mrtest_types) {
                    const type__ = new type_();
                    if (type__.is_type(tree.kids[0].kids)) {
                        const value = type__.parse(tree.kids[0].kids);
                        if (!operator) {
                            return `// Не найден оператор: ${tree.kids[0].type}`;
                        }
                        if (!this.tests[response_element][operator.name]) {
                            return `// Элемент ответа [${response_element}] не поддерживает оператор ${operator.name}`;
                        }
                        let test = this.tests[response_element][operator.name][type_.name];
                        if (type_.name == "$mrtest_type_variable") {
                            let variable_type = this.variables[value].type;
                            test = this.tests[response_element][operator.name]["variables"][variable_type];
                        }
                        if (!test) {
                            return `// Не найден тест для типа ${type_.name}`;
                        }
                        return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + new test(value).accept(visitor);
                    }
                }
                return "// Не найдено";
            }
            is_case(tree) {
                if (tree.type == "case" && tree.kids && tree.kids[0].type.startsWith("$")) {
                    return true;
                }
                else {
                    return false;
                }
            }
            parse_case(tree, visitor) {
                const tab = (value) => value.split("\n")
                    .map((line, index) => index === 0 ? line : "\t" + line)
                    .join("\n");
                let [case_start, case_end] = new $mrtest_dsl_test_case(tree.kids[0].type.slice(1)).accept(visitor).split('%%');
                let body = "";
                for (const kid of tree.kids[0].kids) {
                    body += '\n\t' + tab(this.parse(kid, visitor).slice(0, -2)).trimStart() + '\n';
                }
                return case_start + body.trimEnd() + case_end;
            }
            is_get(tree, visitor) {
                if ((tree.type == "get" || tree.type == "get[]" || tree.type == "get{}") && tree.kids.length && tree.kids[0].value) {
                    return true;
                }
                else {
                    return false;
                }
            }
            parse_get(tree, visitor) {
                const raw = tree.kids[0].value;
                let node_path = "";
                let key = "";
                let index = "";
                let is_key = false;
                let is_index = false;
                let quoted = false;
                let brackates_stack = [];
                for (let i = 0; i < raw.length; i++) {
                    if (raw[i] == "[" && brackates_stack.length == 0 && !is_key) {
                        if (!isNaN(Number(raw.slice(i + 1, raw.slice(i).search(']') + i)))) {
                            node_path += "[";
                            is_index = true;
                        }
                        else {
                            if (raw[i + 1] == '"' && raw[raw.slice(i + 2).search(']') + i + 1]) {
                                quoted = true;
                                if (!isNaN(Number(raw.slice(i + 2, raw.slice(i + 2).search(']') + i + 1)))) {
                                    node_path += "[";
                                    is_index = true;
                                }
                                else {
                                    node_path += '[';
                                    is_key = true;
                                }
                            }
                            else {
                                node_path += '["';
                                is_key = true;
                            }
                        }
                    }
                    else if (raw[i] == "]" && brackates_stack.length == 0) {
                        if (is_key) {
                            if (raw[i - 1] == '\\') {
                                key += ']';
                            }
                            else {
                                if (quoted) {
                                    node_path += key + ']';
                                    quoted = false;
                                }
                                else {
                                    node_path += key + '"]';
                                }
                                key = "";
                                is_key = false;
                            }
                        }
                        else if (is_index) {
                            node_path += index + ']';
                            index = "";
                            is_index = false;
                            quoted = false;
                        }
                    }
                    else {
                        if (raw[i] == '[' && raw[i - 1] != '\\') {
                            brackates_stack.push('[');
                        }
                        if (raw[i] == ']' && raw[i - 1] != '\\') {
                            if (brackates_stack[brackates_stack.length - 1] == '[') {
                                brackates_stack.pop();
                            }
                        }
                        if (is_key) {
                            key += raw[i];
                        }
                        else if (is_index) {
                            index += raw[i];
                        }
                    }
                }
                node_path = node_path.replaceAll('\\[', '[');
                node_path = node_path.replaceAll('\\]', ']');
                let get_value_start = "";
                let get_value_end = "";
                let checks = [];
                for (const check of tree.kids[0].kids) {
                    const operator = $mrtest_operators[check.type];
                    for (const type_ of $mrtest_types) {
                        const type__ = new type_();
                        if (type__.is_type(check.kids)) {
                            const value = type__.parse(check.kids);
                            if (!operator) {
                                checks.push(`// Не найден оператор: ${check.type}\n`);
                                break;
                            }
                            let get_type = tree.type == "get" ? "get_value" : (tree.type == "get[]" ? "get_array" : (tree.type == "get{}" ? "get_object" : ""));
                            if (!this.tests[get_type][operator.name]) {
                                if (get_type == "get_array") {
                                    checks.push(`// Списки не поддерживают оператор ${operator.name}\n`);
                                    break;
                                }
                                else if (get_type == "get_object") {
                                    checks.push(`// Объекты не поддерживают оператор ${operator.name}\n`);
                                    break;
                                }
                                else {
                                    checks.push(`// Числа и строки не поддерживают оператор ${operator.name}\n`);
                                    break;
                                }
                            }
                            let test;
                            test = this.tests[get_type][operator.name][type_.name];
                            if (type_.name == "$mrtest_type_variable") {
                                let variable_type = this.variables[value].type;
                                test = this.tests[get_type][operator.name]["variables"][variable_type];
                            }
                            if (!test) {
                                checks.push(`// Не найден тест для типа ${type_.name}\n`);
                                break;
                            }
                            [get_value_start, get_value_end] = visitor.get_template(test).split('%%');
                            checks.push(new test(value).accept(visitor));
                            break;
                        }
                    }
                }
                return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + `var test = pm.response.json()${node_path}\n\n` + get_value_start + checks.join('\t').trim() + get_value_end;
            }
            is_variable(tree) {
                if (tree.type && tree.kids[0].type == "=" && tree.kids[0].kids[0]) {
                    return true;
                }
                else {
                    return false;
                }
            }
            parse_variable(tree, visitor) {
                let variable;
                for (const type_ of $mrtest_types) {
                    const type__ = new type_();
                    if (type__.is_type(tree.kids[0].kids)) {
                        const value = type__.parse(tree.kids[0].kids);
                        variable = {
                            name: tree.type,
                            value: value
                        };
                        this.variables[variable.name] = {
                            type: type_.name,
                            value: variable.value
                        };
                        const test = this.tests["variable"][type_.name];
                        if (!test) {
                            return `// Невозможно создать переменную с типом ${type_.name}\n\n`;
                        }
                        return print_source($$.$mol_tree2_to_string(tree).trim(), '//') + new test(variable).accept(visitor);
                    }
                }
                return '';
            }
            preprocess(source) {
                let result = source;
                result = source.split('\n').map(line => {
                    if (!line.trimStart().startsWith('--')) {
                        let result_line = line;
                        if (result_line.includes('--') && !result_line.includes('\\')) {
                            return result_line.slice(0, line.indexOf('--'));
                        }
                        return result_line;
                    }
                }).join('\n');
                while (result.includes('\n\n')) {
                    result = result.replace('\n\n', '\n');
                }
                result = result.trim();
                return result;
            }
            get_target(tree) {
                let impossible_to_recognize_target = new Error("Невозможно определить таргет");
                try {
                    if (tree.kids[0].type == '=') {
                        let target = tree.kids[0].kids[0];
                        return {
                            "name": target.type,
                            "kids": target.kids
                        };
                    }
                    else {
                        throw impossible_to_recognize_target;
                    }
                }
                catch {
                    throw impossible_to_recognize_target;
                }
            }
        }
        $$.$mrtest_dsl = $mrtest_dsl;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline_web() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                ;
                self.skipWaiting();
            });
            self.addEventListener('activate', (event) => {
                ;
                self.clients.claim();
                $$.$mol_log3_done({
                    place: '$mol_offline',
                    message: 'Activated',
                });
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET')
                    return;
                if (!/^https?:/.test(request.url))
                    return;
                if (/\?/.test(request.url))
                    return;
                if (request.cache === 'no-store')
                    return;
                const fetch_data = () => fetch(request).then(response => {
                    if (response.status !== 200)
                        return response;
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(request, response)));
                    return response.clone();
                });
                const fresh = request.cache === 'force-cache' ? null : fetch_data();
                if (fresh)
                    event.waitUntil(fresh);
                event.respondWith(caches.match(request).then(cached => request.cache === 'no-cache' || request.cache === 'reload'
                    ? (cached
                        ? fresh
                            .then(actual => {
                            if (actual.status === cached.status)
                                return actual;
                            throw new Error(`${actual.status}${actual.statusText ? ` ${actual.statusText}` : ''}`, { cause: actual });
                        })
                            .catch((err) => {
                            const cloned = cached.clone();
                            const message = `${err.cause instanceof Response ? '' : '500 '}${err.message} $mol_offline fallback to cache`;
                            cloned.headers.set('$mol_offline_remote_status', message);
                            return cloned;
                        })
                        : fresh)
                    : (cached || fresh || fetch_data())));
            });
            self.addEventListener('beforeinstallprompt', (event) => event.prompt());
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js').then(reg => {
            });
        }
    }
    $.$mol_offline_web = $mol_offline_web;
    $.$mol_offline = $mol_offline_web;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
var $node = $node || {} ; $node[ "/mrtest/mrtest.svg" ] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc0IiBoZWlnaHQ9IjYzMiIgdmlld0JveD0iMCAwIDM3NCA2MzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04OC4xODE4IDUxMi43MjdDNzYuMTgxOCA1MTIuNzI3IDY1Ljg3ODggNTA4LjQ4NSA1Ny4yNzI3IDUwMEM0OC43ODc5IDQ5MS4zOTQgNDQuNTQ1NSA0ODEuMDkxIDQ0LjU0NTUgNDY5LjA5MUM0NC41NDU1IDQ1Ny4yMTIgNDguNzg3OSA0NDcuMDMgNTcuMjcyNyA0MzguNTQ1QzY1Ljg3ODggNDMwLjA2MSA3Ni4xODE4IDQyNS44MTggODguMTgxOCA0MjUuODE4Qzk5LjgxODIgNDI1LjgxOCAxMTAgNDMwLjA2MSAxMTguNzI3IDQzOC41NDVDMTI3LjQ1NSA0NDcuMDMgMTMxLjgxOCA0NTcuMjEyIDEzMS44MTggNDY5LjA5MUMxMzEuODE4IDQ3Ny4wOTEgMTI5Ljc1OCA0ODQuNDI0IDEyNS42MzYgNDkxLjA5MUMxMjEuNjM2IDQ5Ny42MzYgMTE2LjM2NCA1MDIuOTA5IDEwOS44MTggNTA2LjkwOUMxMDMuMjczIDUxMC43ODggOTYuMDYwNiA1MTIuNzI3IDg4LjE4MTggNTEyLjcyN1pNODguMTgxOCAzMTcuMDkxQzc2LjE4MTggMzE3LjA5MSA2NS44Nzg4IDMxMi44NDggNTcuMjcyNyAzMDQuMzY0QzQ4Ljc4NzkgMjk1Ljg3OSA0NC41NDU1IDI4NS41NzYgNDQuNTQ1NSAyNzMuNDU1QzQ0LjU0NTUgMjYxLjU3NiA0OC43ODc5IDI1MS40NTUgNTcuMjcyNyAyNDMuMDkxQzY1Ljg3ODggMjM0LjYwNiA3Ni4xODE4IDIzMC4zNjQgODguMTgxOCAyMzAuMzY0Qzk5LjgxODIgMjMwLjM2NCAxMTAgMjM0LjYwNiAxMTguNzI3IDI0My4wOTFDMTI3LjQ1NSAyNTEuNDU1IDEzMS44MTggMjYxLjU3NiAxMzEuODE4IDI3My40NTVDMTMxLjgxOCAyODEuNTc2IDEyOS43NTggMjg4Ljk3IDEyNS42MzYgMjk1LjYzNkMxMjEuNjM2IDMwMi4xODIgMTE2LjM2NCAzMDcuMzk0IDEwOS44MTggMzExLjI3M0MxMDMuMjczIDMxNS4xNTIgOTYuMDYwNiAzMTcuMDkxIDg4LjE4MTggMzE3LjA5MVpNMTgwLjMxOCAzNjAuMzY0VjMyMy44MThDMjAxLjI4OCAzMjMuODE4IDIxNS44MzMgMzE5LjYzNiAyMjMuOTU1IDMxMS4yNzNDMjMyLjA3NiAzMDIuOTA5IDIzNi4xMzYgMjg5LjM5NCAyMzYuMTM2IDI3MC43MjdWMjMwLjU0NUMyMzYuMTM2IDIwOC4xMjEgMjM5LjIyNyAxOTAuMTgyIDI0NS40MDkgMTc2LjcyN0MyNTEuNzEyIDE2My4xNTEgMjYwLjQzOSAxNTIuOTA5IDI3MS41OTEgMTQ2QzI4Mi44NjQgMTM5LjA5MSAyOTYuMTk3IDEzNC40ODUgMzExLjU5MSAxMzIuMTgyQzMyNi45ODUgMTI5Ljg3OSAzNDMuODMzIDEyOC43MjcgMzYyLjEzNiAxMjguNzI3VjE4Ni41NDVDMzQ3LjgzMyAxODYuNTQ1IDMzNi45MjQgMTg4LjQyNCAzMjkuNDA5IDE5Mi4xODJDMzIyLjAxNSAxOTUuODE4IDMxNi45ODUgMjAxLjUxNSAzMTQuMzE4IDIwOS4yNzNDMzExLjY1MiAyMTYuOTA5IDMxMC4zMTggMjI2LjYwNiAzMTAuMzE4IDIzOC4zNjRWMjkxLjQ1NUMzMTAuMzE4IDMwMC42NjcgMzA4LjYyMSAzMDkuNDU1IDMwNS4yMjcgMzE3LjgxOEMzMDEuODMzIDMyNi4wNjEgMjk1LjUzIDMzMy4zOTQgMjg2LjMxOCAzMzkuODE4QzI3Ny4xMDYgMzQ2LjEyMSAyNjMuOTU1IDM1MS4xNTIgMjQ2Ljg2NCAzNTQuOTA5QzIyOS43NzMgMzU4LjU0NSAyMDcuNTkxIDM2MC4zNjQgMTgwLjMxOCAzNjAuMzY0Wk0zNjIuMTM2IDU4OC45MDlDMzQzLjgzMyA1ODguOTA5IDMyNi45ODUgNTg3Ljc1OCAzMTEuNTkxIDU4NS40NTVDMjk2LjE5NyA1ODMuMTUyIDI4Mi44NjQgNTc4LjU0NSAyNzEuNTkxIDU3MS42MzZDMjYwLjQzOSA1NjQuNzI3IDI1MS43MTIgNTU0LjQ4NSAyNDUuNDA5IDU0MC45MDlDMjM5LjIyNyA1MjcuNDU1IDIzNi4xMzYgNTA5LjUxNSAyMzYuMTM2IDQ4Ny4wOTFWNDQ2LjcyN0MyMzYuMTM2IDQyOC4wNjEgMjMyLjA3NiA0MTQuNTQ1IDIyMy45NTUgNDA2LjE4MkMyMTUuODMzIDM5Ny44MTggMjAxLjI4OCAzOTMuNjM2IDE4MC4zMTggMzkzLjYzNlYzNTcuMDkxQzIwNy41OTEgMzU3LjA5MSAyMjkuNzczIDM1OC45NyAyNDYuODY0IDM2Mi43MjdDMjYzLjk1NSAzNjYuMzY0IDI3Ny4xMDYgMzcxLjM5NCAyODYuMzE4IDM3Ny44MThDMjk1LjUzIDM4NC4xMjEgMzAxLjgzMyAzOTEuNDU1IDMwNS4yMjcgMzk5LjgxOEMzMDguNjIxIDQwOC4wNjEgMzEwLjMxOCA0MTYuODQ4IDMxMC4zMTggNDI2LjE4MlY0NzkuMjczQzMxMC4zMTggNDkwLjkwOSAzMTEuNjUyIDUwMC41NDUgMzE0LjMxOCA1MDguMTgyQzMxNi45ODUgNTE1LjkzOSAzMjIuMDE1IDUyMS42MzYgMzI5LjQwOSA1MjUuMjczQzMzNi45MjQgNTI5LjAzIDM0Ny44MzMgNTMwLjkwOSAzNjIuMTM2IDUzMC45MDlWNTg4LjkwOVpNMTgwLjMxOCAzOTMuNjM2VjMyMy44MThIMjQ1LjU5MVYzOTMuNjM2SDE4MC4zMThaIiBmaWxsPSIjMUUxRTFFIi8+CjxwYXRoIGQ9Ik04Mi4xODE4IDUwNi43MjdDNzAuMTgxOCA1MDYuNzI3IDU5Ljg3ODggNTAyLjQ4NSA1MS4yNzI3IDQ5NEM0Mi43ODc5IDQ4NS4zOTQgMzguNTQ1NSA0NzUuMDkxIDM4LjU0NTUgNDYzLjA5MUMzOC41NDU1IDQ1MS4yMTIgNDIuNzg3OSA0NDEuMDMgNTEuMjcyNyA0MzIuNTQ1QzU5Ljg3ODggNDI0LjA2MSA3MC4xODE4IDQxOS44MTggODIuMTgxOCA0MTkuODE4QzkzLjgxODIgNDE5LjgxOCAxMDQgNDI0LjA2MSAxMTIuNzI3IDQzMi41NDVDMTIxLjQ1NSA0NDEuMDMgMTI1LjgxOCA0NTEuMjEyIDEyNS44MTggNDYzLjA5MUMxMjUuODE4IDQ3MS4wOTEgMTIzLjc1OCA0NzguNDI0IDExOS42MzYgNDg1LjA5MUMxMTUuNjM2IDQ5MS42MzYgMTEwLjM2NCA0OTYuOTA5IDEwMy44MTggNTAwLjkwOUM5Ny4yNzI3IDUwNC43ODggOTAuMDYwNiA1MDYuNzI3IDgyLjE4MTggNTA2LjcyN1pNODIuMTgxOCAzMTEuMDkxQzcwLjE4MTggMzExLjA5MSA1OS44Nzg4IDMwNi44NDggNTEuMjcyNyAyOTguMzY0QzQyLjc4NzkgMjg5Ljg3OSAzOC41NDU1IDI3OS41NzYgMzguNTQ1NSAyNjcuNDU1QzM4LjU0NTUgMjU1LjU3NiA0Mi43ODc5IDI0NS40NTUgNTEuMjcyNyAyMzcuMDkxQzU5Ljg3ODggMjI4LjYwNiA3MC4xODE4IDIyNC4zNjQgODIuMTgxOCAyMjQuMzY0QzkzLjgxODIgMjI0LjM2NCAxMDQgMjI4LjYwNiAxMTIuNzI3IDIzNy4wOTFDMTIxLjQ1NSAyNDUuNDU1IDEyNS44MTggMjU1LjU3NiAxMjUuODE4IDI2Ny40NTVDMTI1LjgxOCAyNzUuNTc2IDEyMy43NTggMjgyLjk3IDExOS42MzYgMjg5LjYzNkMxMTUuNjM2IDI5Ni4xODIgMTEwLjM2NCAzMDEuMzk0IDEwMy44MTggMzA1LjI3M0M5Ny4yNzI3IDMwOS4xNTIgOTAuMDYwNiAzMTEuMDkxIDgyLjE4MTggMzExLjA5MVpNMTc0LjMxOCAzNTQuMzY0VjMxNy44MThDMTk1LjI4OCAzMTcuODE4IDIwOS44MzMgMzEzLjYzNiAyMTcuOTU1IDMwNS4yNzNDMjI2LjA3NiAyOTYuOTA5IDIzMC4xMzYgMjgzLjM5NCAyMzAuMTM2IDI2NC43MjdWMjI0LjU0NUMyMzAuMTM2IDIwMi4xMjEgMjMzLjIyNyAxODQuMTgyIDIzOS40MDkgMTcwLjcyN0MyNDUuNzEyIDE1Ny4xNTEgMjU0LjQzOSAxNDYuOTA5IDI2NS41OTEgMTQwQzI3Ni44NjQgMTMzLjA5MSAyOTAuMTk3IDEyOC40ODUgMzA1LjU5MSAxMjYuMTgyQzMyMC45ODUgMTIzLjg3OSAzMzcuODMzIDEyMi43MjcgMzU2LjEzNiAxMjIuNzI3VjE4MC41NDVDMzQxLjgzMyAxODAuNTQ1IDMzMC45MjQgMTgyLjQyNCAzMjMuNDA5IDE4Ni4xODJDMzE2LjAxNSAxODkuODE4IDMxMC45ODUgMTk1LjUxNSAzMDguMzE4IDIwMy4yNzNDMzA1LjY1MiAyMTAuOTA5IDMwNC4zMTggMjIwLjYwNiAzMDQuMzE4IDIzMi4zNjRWMjg1LjQ1NUMzMDQuMzE4IDI5NC42NjcgMzAyLjYyMSAzMDMuNDU1IDI5OS4yMjcgMzExLjgxOEMyOTUuODMzIDMyMC4wNjEgMjg5LjUzIDMyNy4zOTQgMjgwLjMxOCAzMzMuODE4QzI3MS4xMDYgMzQwLjEyMSAyNTcuOTU1IDM0NS4xNTIgMjQwLjg2NCAzNDguOTA5QzIyMy43NzMgMzUyLjU0NSAyMDEuNTkxIDM1NC4zNjQgMTc0LjMxOCAzNTQuMzY0Wk0zNTYuMTM2IDU4Mi45MDlDMzM3LjgzMyA1ODIuOTA5IDMyMC45ODUgNTgxLjc1OCAzMDUuNTkxIDU3OS40NTVDMjkwLjE5NyA1NzcuMTUyIDI3Ni44NjQgNTcyLjU0NSAyNjUuNTkxIDU2NS42MzZDMjU0LjQzOSA1NTguNzI3IDI0NS43MTIgNTQ4LjQ4NSAyMzkuNDA5IDUzNC45MDlDMjMzLjIyNyA1MjEuNDU1IDIzMC4xMzYgNTAzLjUxNSAyMzAuMTM2IDQ4MS4wOTFWNDQwLjcyN0MyMzAuMTM2IDQyMi4wNjEgMjI2LjA3NiA0MDguNTQ1IDIxNy45NTUgNDAwLjE4MkMyMDkuODMzIDM5MS44MTggMTk1LjI4OCAzODcuNjM2IDE3NC4zMTggMzg3LjYzNlYzNTEuMDkxQzIwMS41OTEgMzUxLjA5MSAyMjMuNzczIDM1Mi45NyAyNDAuODY0IDM1Ni43MjdDMjU3Ljk1NSAzNjAuMzY0IDI3MS4xMDYgMzY1LjM5NCAyODAuMzE4IDM3MS44MThDMjg5LjUzIDM3OC4xMjEgMjk1LjgzMyAzODUuNDU1IDI5OS4yMjcgMzkzLjgxOEMzMDIuNjIxIDQwMi4wNjEgMzA0LjMxOCA0MTAuODQ4IDMwNC4zMTggNDIwLjE4MlY0NzMuMjczQzMwNC4zMTggNDg0LjkwOSAzMDUuNjUyIDQ5NC41NDUgMzA4LjMxOCA1MDIuMTgyQzMxMC45ODUgNTA5LjkzOSAzMTYuMDE1IDUxNS42MzYgMzIzLjQwOSA1MTkuMjczQzMzMC45MjQgNTIzLjAzIDM0MS44MzMgNTI0LjkwOSAzNTYuMTM2IDUyNC45MDlWNTgyLjkwOVpNMTc0LjMxOCAzODcuNjM2VjMxNy44MThIMjM5LjU5MVYzODcuNjM2SDE3NC4zMThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzYuMTgxOCA1MDAuNzI3QzY0LjE4MTggNTAwLjcyNyA1My44Nzg4IDQ5Ni40ODUgNDUuMjcyNyA0ODhDMzYuNzg3OSA0NzkuMzk0IDMyLjU0NTUgNDY5LjA5MSAzMi41NDU1IDQ1Ny4wOTFDMzIuNTQ1NSA0NDUuMjEyIDM2Ljc4NzkgNDM1LjAzIDQ1LjI3MjcgNDI2LjU0NUM1My44Nzg4IDQxOC4wNjEgNjQuMTgxOCA0MTMuODE4IDc2LjE4MTggNDEzLjgxOEM4Ny44MTgyIDQxMy44MTggOTggNDE4LjA2MSAxMDYuNzI3IDQyNi41NDVDMTE1LjQ1NSA0MzUuMDMgMTE5LjgxOCA0NDUuMjEyIDExOS44MTggNDU3LjA5MUMxMTkuODE4IDQ2NS4wOTEgMTE3Ljc1OCA0NzIuNDI0IDExMy42MzYgNDc5LjA5MUMxMDkuNjM2IDQ4NS42MzYgMTA0LjM2NCA0OTAuOTA5IDk3LjgxODIgNDk0LjkwOUM5MS4yNzI3IDQ5OC43ODggODQuMDYwNiA1MDAuNzI3IDc2LjE4MTggNTAwLjcyN1pNNzYuMTgxOCAzMDUuMDkxQzY0LjE4MTggMzA1LjA5MSA1My44Nzg4IDMwMC44NDggNDUuMjcyNyAyOTIuMzY0QzM2Ljc4NzkgMjgzLjg3OSAzMi41NDU1IDI3My41NzYgMzIuNTQ1NSAyNjEuNDU1QzMyLjU0NTUgMjQ5LjU3NiAzNi43ODc5IDIzOS40NTUgNDUuMjcyNyAyMzEuMDkxQzUzLjg3ODggMjIyLjYwNiA2NC4xODE4IDIxOC4zNjQgNzYuMTgxOCAyMTguMzY0Qzg3LjgxODIgMjE4LjM2NCA5OCAyMjIuNjA2IDEwNi43MjcgMjMxLjA5MUMxMTUuNDU1IDIzOS40NTUgMTE5LjgxOCAyNDkuNTc2IDExOS44MTggMjYxLjQ1NUMxMTkuODE4IDI2OS41NzYgMTE3Ljc1OCAyNzYuOTcgMTEzLjYzNiAyODMuNjM2QzEwOS42MzYgMjkwLjE4MiAxMDQuMzY0IDI5NS4zOTQgOTcuODE4MiAyOTkuMjczQzkxLjI3MjcgMzAzLjE1MiA4NC4wNjA2IDMwNS4wOTEgNzYuMTgxOCAzMDUuMDkxWk0xNjguMzE4IDM0OC4zNjRWMzExLjgxOEMxODkuMjg4IDMxMS44MTggMjAzLjgzMyAzMDcuNjM2IDIxMS45NTUgMjk5LjI3M0MyMjAuMDc2IDI5MC45MDkgMjI0LjEzNiAyNzcuMzk0IDIyNC4xMzYgMjU4LjcyN1YyMTguNTQ1QzIyNC4xMzYgMTk2LjEyMSAyMjcuMjI3IDE3OC4xODIgMjMzLjQwOSAxNjQuNzI3QzIzOS43MTIgMTUxLjE1MSAyNDguNDM5IDE0MC45MDkgMjU5LjU5MSAxMzRDMjcwLjg2NCAxMjcuMDkxIDI4NC4xOTcgMTIyLjQ4NSAyOTkuNTkxIDEyMC4xODJDMzE0Ljk4NSAxMTcuODc5IDMzMS44MzMgMTE2LjcyNyAzNTAuMTM2IDExNi43MjdWMTc0LjU0NUMzMzUuODMzIDE3NC41NDUgMzI0LjkyNCAxNzYuNDI0IDMxNy40MDkgMTgwLjE4MkMzMTAuMDE1IDE4My44MTggMzA0Ljk4NSAxODkuNTE1IDMwMi4zMTggMTk3LjI3M0MyOTkuNjUyIDIwNC45MDkgMjk4LjMxOCAyMTQuNjA2IDI5OC4zMTggMjI2LjM2NFYyNzkuNDU1QzI5OC4zMTggMjg4LjY2NyAyOTYuNjIxIDI5Ny40NTUgMjkzLjIyNyAzMDUuODE4QzI4OS44MzMgMzE0LjA2MSAyODMuNTMgMzIxLjM5NCAyNzQuMzE4IDMyNy44MThDMjY1LjEwNiAzMzQuMTIxIDI1MS45NTUgMzM5LjE1MiAyMzQuODY0IDM0Mi45MDlDMjE3Ljc3MyAzNDYuNTQ1IDE5NS41OTEgMzQ4LjM2NCAxNjguMzE4IDM0OC4zNjRaTTM1MC4xMzYgNTc2LjkwOUMzMzEuODMzIDU3Ni45MDkgMzE0Ljk4NSA1NzUuNzU4IDI5OS41OTEgNTczLjQ1NUMyODQuMTk3IDU3MS4xNTIgMjcwLjg2NCA1NjYuNTQ1IDI1OS41OTEgNTU5LjYzNkMyNDguNDM5IDU1Mi43MjcgMjM5LjcxMiA1NDIuNDg1IDIzMy40MDkgNTI4LjkwOUMyMjcuMjI3IDUxNS40NTUgMjI0LjEzNiA0OTcuNTE1IDIyNC4xMzYgNDc1LjA5MVY0MzQuNzI3QzIyNC4xMzYgNDE2LjA2MSAyMjAuMDc2IDQwMi41NDUgMjExLjk1NSAzOTQuMTgyQzIwMy44MzMgMzg1LjgxOCAxODkuMjg4IDM4MS42MzYgMTY4LjMxOCAzODEuNjM2VjM0NS4wOTFDMTk1LjU5MSAzNDUuMDkxIDIxNy43NzMgMzQ2Ljk3IDIzNC44NjQgMzUwLjcyN0MyNTEuOTU1IDM1NC4zNjQgMjY1LjEwNiAzNTkuMzk0IDI3NC4zMTggMzY1LjgxOEMyODMuNTMgMzcyLjEyMSAyODkuODMzIDM3OS40NTUgMjkzLjIyNyAzODcuODE4QzI5Ni42MjEgMzk2LjA2MSAyOTguMzE4IDQwNC44NDggMjk4LjMxOCA0MTQuMTgyVjQ2Ny4yNzNDMjk4LjMxOCA0NzguOTA5IDI5OS42NTIgNDg4LjU0NSAzMDIuMzE4IDQ5Ni4xODJDMzA0Ljk4NSA1MDMuOTM5IDMxMC4wMTUgNTA5LjYzNiAzMTcuNDA5IDUxMy4yNzNDMzI0LjkyNCA1MTcuMDMgMzM1LjgzMyA1MTguOTA5IDM1MC4xMzYgNTE4LjkwOVY1NzYuOTA5Wk0xNjguMzE4IDM4MS42MzZWMzExLjgxOEgyMzMuNTkxVjM4MS42MzZIMTY4LjMxOFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzYpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMV82IiB4MT0iMTgxIiB5MT0iMCIgeDI9IjE4MSIgeTI9IjYyMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMTQ0NDE3IiBzdG9wLWNvbG9yPSIjNzhDRkVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJGNUY2RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest extends $.$mrtest {
            source_page_body() {
                if (this.selected_langauge() == "mrtest") {
                    return [this.Source()];
                }
                else if (this.selected_langauge() == "postman") {
                    return [this.Source_postman()];
                }
                else {
                    return [];
                }
            }
            source_code(next) {
                return this.$.$mol_state_local.value('source_code', next) ?? '';
            }
            output_code(next) {
                this.$.$$.$mol_state_local.value('called');
                let compiler = new this.$.$mrtest_dsl();
                return compiler.compile(this.source_code());
            }
            result_to_copy() {
                return this.output_code();
            }
            pages() {
                return [
                    this.Menu(),
                    this.Gap('left'),
                    this.Source_page(),
                    this.Output_page(),
                    this.Gap('right')
                ];
            }
            need_print_source(next) {
                return this.$.$$.$mol_state_local.value("print_source", next) ?? true;
            }
            new_id() {
                return Math.max(1, 1 + Math.max(...this.validators_ids()));
            }
            add_validator(next) {
                var title = '';
                var id = this.new_id();
                var task = { title, code: '' };
                this.validator(id, task);
                this.validators_ids([...this.validators_ids(), id]);
            }
            validators_list() {
                return this.validators_ids().map(id => this.Validator(id));
            }
            validator(id, next) {
                const key = this.state_key(`${this.selected_langauge()}-validators-${id}`);
                if (next === void 0) {
                    return this.$.$mol_state_local.value(key) || { title: '', code: '' };
                }
                this.$.$mol_state_local.value(key, next);
                return next || null;
            }
            validators_ids(next) {
                return this.$.$mol_state_local.value(this.state_key(`${this.selected_langauge()}-validators`), next) || [];
            }
            validator_delete(id, next) {
                const key = this.state_key(`${this.selected_langauge()}-validators-${id}`);
                this.$.$mol_state_local.value(key, null);
                let validators = this.$.$mol_state_local.value(this.state_key(`${this.selected_langauge()}-validators`)) || [];
                validators = validators.filter((obj) => obj != id);
                this.$.$mol_state_local.value(this.state_key(`${this.selected_langauge()}-validators`), validators);
            }
            validator_title(id, next) {
                this.$.$$.$mol_state_local.value('called', next);
                const key = this.state_key(`${this.selected_langauge()}-validators-${id}`);
                let validator = this.$.$$.$mol_state_local.value(key);
                validator.title = next ?? validator.title;
                this.$.$$.$mol_state_local.value(key, validator);
                return validator.title ?? '';
            }
            validator_source(id, next) {
                this.$.$$.$mol_state_local.value('called', next);
                const key = this.state_key(`${this.selected_langauge()}-validators-${id}`);
                let validator = this.$.$$.$mol_state_local.value(key);
                validator.code = next ?? validator.code;
                this.$.$$.$mol_state_local.value(key, validator);
                return validator.code ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "source_page_body", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "source_code", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "output_code", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "result_to_copy", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "need_print_source", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "new_id", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "add_validator", null);
        __decorate([
            $mol_mem
        ], $mrtest.prototype, "validators_list", null);
        __decorate([
            $mol_mem_key
        ], $mrtest.prototype, "validator_title", null);
        __decorate([
            $mol_mem_key
        ], $mrtest.prototype, "validator_source", null);
        $$.$mrtest = $mrtest;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mrtest/mrtest.view.css", "[mrtest_output_page],\n[mrtest_source_page] {\n\tflex-grow: 0;\n\tflex-basis: 800px;\n\tmargin: 0 auto;\n}\n\n[mrtest_menu] {\n\tflex-grow: 0;\n\tflex-basis: 320px;\n}\n\n[mrtest_validator] {\n\tmargin-bottom: var(--mol_gap_block);\n}\n\n[mrtest_validator_title_row] {\n\tpadding: 3px 0;\n\tgap: 3px;\n}\n\n:root {\n\t--mol_theme_hue: 195deg;\n\t--mol_theme_hue_spread: 90deg;\n}\n\n:root, [mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: 2;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tbackground: none;\n}\n\n\n[mol_view_error] {\n\tcolor: black !important;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_operator {
        }
        $$.$mrtest_operator = $mrtest_operator;
        class $mrtest_operator_eql extends $mrtest_operator {
        }
        $$.$mrtest_operator_eql = $mrtest_operator_eql;
        class $mrtest_operator_noteql extends $mrtest_operator {
        }
        $$.$mrtest_operator_noteql = $mrtest_operator_noteql;
        class $mrtest_operator_gt extends $mrtest_operator {
        }
        $$.$mrtest_operator_gt = $mrtest_operator_gt;
        class $mrtest_operator_gte extends $mrtest_operator {
        }
        $$.$mrtest_operator_gte = $mrtest_operator_gte;
        class $mrtest_operator_lt extends $mrtest_operator {
        }
        $$.$mrtest_operator_lt = $mrtest_operator_lt;
        class $mrtest_operator_lte extends $mrtest_operator {
        }
        $$.$mrtest_operator_lte = $mrtest_operator_lte;
        class $mrtest_operator_in extends $mrtest_operator {
        }
        $$.$mrtest_operator_in = $mrtest_operator_in;
        class $mrtest_operator_contains extends $mrtest_operator {
        }
        $$.$mrtest_operator_contains = $mrtest_operator_contains;
        class $mrtest_operator_is extends $mrtest_operator {
        }
        $$.$mrtest_operator_is = $mrtest_operator_is;
        class $mrtest_operator_match extends $mrtest_operator {
        }
        $$.$mrtest_operator_match = $mrtest_operator_match;
        $$.$mrtest_operators = {
            "==": $mrtest_operator_eql,
            "!=": $mrtest_operator_noteql,
            ">": $mrtest_operator_gt,
            ">=": $mrtest_operator_gte,
            "<": $mrtest_operator_lt,
            "<=": $mrtest_operator_lte,
            "in": $mrtest_operator_in,
            "contains": $mrtest_operator_contains,
            "is": $mrtest_operator_is,
            "match": $mrtest_operator_match,
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_json(tree) {
        if (!tree.type) {
            if (tree.kids.every(kid => !kid.type))
                return tree.text();
            if (tree.kids.length !== 1)
                this.$mol_fail(new Error(`Multiple json root at ${tree.span}`));
            return this.$mol_tree2_to_json(tree.kids[0]);
        }
        if (tree.type === '-')
            return undefined;
        if (tree.type === 'true')
            return true;
        if (tree.type === 'false')
            return false;
        if (tree.type === 'null')
            return null;
        if (tree.type === '*') {
            const obj = {};
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                const key = kid.type || kid.clone(kid.kids.slice(0, -1)).text();
                const val = this.$mol_tree2_to_json(kid.kids[kid.kids.length - 1]);
                if (val !== undefined)
                    obj[key] = val;
            }
            return obj;
        }
        if (tree.type === '/') {
            const res = [];
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                var val = this.$mol_tree2_to_json(kid);
                if (val !== undefined)
                    res.push(val);
            }
            return res;
        }
        const numb = Number(tree.type);
        if (!Number.isNaN(numb) || tree.type === 'NaN')
            return numb;
        this.$mol_fail(new Error(`Unknown json type (${tree.type}) at ${tree.span}`));
    }
    $.$mol_tree2_to_json = $mol_tree2_to_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $mrtest_tql_get(query = "", tree2) {
            let result = tree2.kids;
            let cursor_index = 0;
            for (let i = 0; i < query.length; i++) {
                if (query[i] == ">") {
                    try {
                        result = result[cursor_index].kids;
                    }
                    catch (e) {
                        return undefined;
                    }
                    cursor_index = 0;
                }
                else if (query[i] == "+") {
                    cursor_index++;
                }
                else {
                    return undefined;
                }
            }
            return result[cursor_index];
        }
        $$.$mrtest_tql_get = $mrtest_tql_get;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_rsl {
            transform(tree, initial = true) {
                if (tree === undefined || (!tree.type && !tree.value)) {
                    return $.$$.$mol_tree2_from_string("\n");
                }
                if (initial && tree.type == "string") {
                    let result = {
                        "type": "string"
                    };
                    if ($mrtest_tql_get("", tree)) {
                        if ($mrtest_tql_get("", tree).type == "*") {
                            result = { ...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)) };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
                if (initial && tree.type == "number") {
                    let result = {
                        "type": "number"
                    };
                    if ($mrtest_tql_get("", tree)) {
                        if ($mrtest_tql_get("", tree).type == "*") {
                            result = { ...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)) };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
                if (initial && tree.type == "integer") {
                    let result = {
                        "type": "integer"
                    };
                    if ($mrtest_tql_get("", tree)) {
                        if ($mrtest_tql_get("", tree).type == "*") {
                            result = { ...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)) };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
                if (initial && tree.type == "boolean") {
                    let result = {
                        "type": "boolean"
                    };
                    if ($mrtest_tql_get("", tree)) {
                        if ($mrtest_tql_get("", tree).type == "*") {
                            result = { ...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)) };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
                if (initial && tree.type == "null") {
                    let result = {
                        "type": "null"
                    };
                    if ($mrtest_tql_get("", tree)) {
                        if ($mrtest_tql_get("", tree).type == "*") {
                            result = { ...result, ...$.$$.$mol_tree2_to_json($mrtest_tql_get("", tree)) };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
                if (tree.type == "object") {
                    let nested_node = $mrtest_tql_get("", tree);
                    let result = {
                        "type": "object"
                    };
                    let meta = {};
                    let meta_properties = {};
                    if (nested_node) {
                        let properties = {};
                        let pluses_count = 0;
                        while (nested_node) {
                            if (nested_node.type == "*") {
                                meta = $.$$.$mol_tree2_to_json(nested_node);
                            }
                            else if (nested_node.type == "**") {
                                nested_node = nested_node.struct("*", nested_node.kids);
                                meta_properties = $.$$.$mol_tree2_to_json(nested_node);
                            }
                            else {
                                properties = { ...properties, ...$.$$.$mol_tree2_to_json(this.transform(nested_node, false)) };
                            }
                            nested_node = $mrtest_tql_get("+".repeat(pluses_count), tree);
                            pluses_count++;
                        }
                        properties = { ...properties, ...meta_properties };
                        result.properties = properties;
                    }
                    result = { ...result, ...meta };
                    return $mol_tree2_from_json(result);
                }
                else if (tree.type == "array") {
                    let nested_node = $mrtest_tql_get("", tree);
                    let result = {
                        "type": "array"
                    };
                    let meta = {};
                    let meta_items = {};
                    if (nested_node) {
                        let items = [];
                        let pluses_count = 1;
                        while (nested_node) {
                            if (nested_node.type == "*") {
                                meta = $.$$.$mol_tree2_to_json(nested_node);
                            }
                            else if (nested_node.type == "**") {
                                nested_node = nested_node.struct("*", nested_node.kids);
                                meta_items = $.$$.$mol_tree2_to_json(nested_node);
                            }
                            else {
                                items.push($.$$.$mol_tree2_to_json(this.transform(nested_node, false)));
                            }
                            nested_node = $mrtest_tql_get("+".repeat(pluses_count), tree);
                            pluses_count++;
                        }
                        items.push(meta_items);
                        result.items = items;
                    }
                    result = { ...result, ...meta };
                    return $mol_tree2_from_json(result);
                }
                else {
                    let nested_node = $mrtest_tql_get(">", tree);
                    let result = {};
                    let property = tree.type;
                    let type = $mrtest_tql_get("", tree)?.type ?? "string";
                    if (type.slice(-1) == "?") {
                        type = type.slice(0, -1) + ",null";
                    }
                    if (type.includes(",")) {
                        type = type.split(",");
                    }
                    let meta = {};
                    if ($mrtest_tql_get(">", tree)?.type == "*") {
                        meta = { ...$.$$.$mol_tree2_to_json($mrtest_tql_get(">", tree)) };
                    }
                    result[property] = {
                        "type": type
                    };
                    result[property] = { ...result[property], ...meta };
                    if (nested_node) {
                        if (type.includes("object")) {
                            let properties = {};
                            let pluses_count = 1;
                            let meta = {};
                            let meta_properties = {};
                            while (nested_node) {
                                if (nested_node.type == "*") {
                                    meta = $.$$.$mol_tree2_to_json(nested_node);
                                }
                                else if (nested_node.type == "**") {
                                    nested_node = nested_node.struct("*", nested_node.kids);
                                    meta_properties = $.$$.$mol_tree2_to_json(nested_node);
                                }
                                else {
                                    properties = { ...properties, ...$.$$.$mol_tree2_to_json(this.transform(nested_node, false)) };
                                }
                                nested_node = $mrtest_tql_get(">" + "+".repeat(pluses_count), tree);
                                pluses_count++;
                            }
                            properties = { ...properties, ...meta_properties };
                            result[property].properties = properties;
                            result[property] = { ...result[property], ...meta };
                        }
                        if (type.includes("array")) {
                            let items = [];
                            let pluses_count = 1;
                            let meta = {};
                            let meta_items = {};
                            while (nested_node) {
                                if (nested_node.type == "*") {
                                    meta = $.$$.$mol_tree2_to_json(nested_node);
                                }
                                else if (nested_node.type == "**") {
                                    nested_node = nested_node.struct("*", nested_node.kids);
                                    meta_items = $.$$.$mol_tree2_to_json(nested_node);
                                }
                                else {
                                    items.push($.$$.$mol_tree2_to_json(this.transform(nested_node, false)));
                                }
                                nested_node = $mrtest_tql_get(">" + "+".repeat(pluses_count), tree);
                                pluses_count++;
                            }
                            items.push(meta_items);
                            result[property].items = items;
                            result[property] = { ...result[property], ...meta };
                        }
                    }
                    return $mol_tree2_from_json(result);
                }
            }
        }
        $$.$mrtest_rsl = $mrtest_rsl;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mrtest_type {
        }
        $$.$mrtest_type = $mrtest_type;
        class $mrtest_type_number extends $mrtest_type {
            is_type(value) {
                return !isNaN(Number(value[0].type)) && value[0].type != '';
            }
            parse(value) {
                return Number(value[0].type);
            }
        }
        $$.$mrtest_type_number = $mrtest_type_number;
        class $mrtest_type_number_masked extends $mrtest_type {
            is_type(value) {
                return !isNaN(Number(value[0].type.replaceAll('x', '0'))) && value[0].type != '';
            }
            parse(value) {
                return {
                    from: Number(value[0].type.replaceAll('x', '0')),
                    to: Number(value[0].type.replaceAll('x', '9'))
                };
            }
        }
        $$.$mrtest_type_number_masked = $mrtest_type_number_masked;
        class $mrtest_type_string extends $mrtest_type {
            is_type(value) {
                return true;
            }
            parse(value) {
                return value[0].type || value[0].value;
            }
        }
        $$.$mrtest_type_string = $mrtest_type_string;
        class $mrtest_type_env extends $mrtest_type {
            is_type(value) {
                return value[0].type.startsWith('$');
            }
            parse(value) {
                return value[0].type.slice(1);
            }
        }
        $$.$mrtest_type_env = $mrtest_type_env;
        class $mrtest_type_array_number extends $mrtest_type {
            is_type(value) {
                return value.length > 1 && value.every(node => !isNaN(Number(node.type)) && node.type != '');
            }
            parse(value) {
                return value.map(kid => {
                    return kid.type;
                });
            }
        }
        $$.$mrtest_type_array_number = $mrtest_type_array_number;
        class $mrtest_type_array_string extends $mrtest_type {
            is_type(value) {
                return value.length > 1 && value.every(node => node.type != '' || node.value != '') && !value.every(node => node.kids.length);
            }
            parse(value) {
                return value.map(kid => {
                    return kid.type || kid.value;
                });
            }
        }
        $$.$mrtest_type_array_string = $mrtest_type_array_string;
        class $mrtest_type_array_env extends $mrtest_type {
            is_type(value) {
                return value.length > 1 && value.every(node => node.type.startsWith('$'));
            }
            parse(value) {
                return value.map(kid => {
                    return kid.type.slice(1);
                });
            }
        }
        $$.$mrtest_type_array_env = $mrtest_type_array_env;
        class $mrtest_type_range extends $mrtest_type {
            range_regexp = /(\d+)\.\.(\d+)/;
            is_type(value) {
                return this.range_regexp.test(value[0].type);
            }
            parse(value) {
                return {
                    from: Number(value[0].type.match(this.range_regexp)[1]),
                    to: Number(value[0].type.match(this.range_regexp)[2]),
                };
            }
        }
        $$.$mrtest_type_range = $mrtest_type_range;
        class $mrtest_type_time extends $mrtest_type {
            time_regexp = /^(\d+)([s|m|ms]{1,2})$/;
            is_type(value) {
                return !!this.time_regexp.test(value[0].type);
            }
            parse(value) {
                const unit = value[0].type.match(this.time_regexp)[2];
                let time_value = Number(value[0].type.match(this.time_regexp)[1]);
                switch (unit) {
                    case "s":
                        time_value *= 1000;
                        break;
                    case "m":
                        time_value *= 1000 * 60;
                        break;
                }
                return time_value;
            }
        }
        $$.$mrtest_type_time = $mrtest_type_time;
        class $mrtest_type_time_range extends $mrtest_type {
            time_regexp = /^(\d+)([s|m|ms]{1,2})$/;
            time_range_regexp = /^((\d+)([s|m|ms]+)?)\.\.((\d+)([s|m|ms]{1,2}))$/;
            is_type(value) {
                return !!this.time_range_regexp.test(value[0].type);
            }
            parse(value) {
                const left_value = value[0].type.match(this.time_range_regexp)[1];
                const right_value = value[0].type.match(this.time_range_regexp)[4];
                const left_value_time = this.parse_time(left_value);
                const right_value_time = this.parse_time(right_value);
                if (right_value_time) {
                    if (left_value_time) {
                        return {
                            from: Number(this.convert_to_ms(left_value_time.value, left_value_time.unit)),
                            to: this.convert_to_ms(right_value_time.value, right_value_time.unit)
                        };
                    }
                    else {
                        return {
                            from: Number(this.convert_to_ms(Number(left_value), right_value_time.unit)),
                            to: this.convert_to_ms(right_value_time.value, right_value_time.unit)
                        };
                    }
                }
            }
            parse_time(value) {
                let unit = value.match(this.time_regexp);
                let time_value = value.match(this.time_regexp);
                if (!time_value) {
                    time_value = Number(value);
                }
                else {
                    time_value = Number(time_value[1]);
                }
                if (!unit) {
                    return null;
                }
                unit = unit[2];
                return {
                    'value': time_value,
                    'unit': unit
                };
            }
            convert_to_ms(value, unit) {
                switch (unit) {
                    case "s":
                        value *= 1000;
                        break;
                    case "m":
                        value *= 1000 * 60;
                        break;
                }
                return value;
            }
        }
        $$.$mrtest_type_time_range = $mrtest_type_time_range;
        class $mrtest_type_array_time extends $mrtest_type {
            time_regexp = /^(\d+)([s|m|ms]{1,2})$/;
            is_type(value) {
                return value.length > 1 && value.every(node => !!this.time_regexp.test(node.type));
            }
            parse(value) {
                return value.map(kid => {
                    const unit = kid.type.match(this.time_regexp)[2];
                    let time_value = Number(kid.type.match(this.time_regexp)[1]);
                    switch (unit) {
                        case "s":
                            time_value *= 1000;
                            break;
                        case "m":
                            time_value *= 1000 * 60;
                            break;
                    }
                    return time_value;
                });
            }
        }
        $$.$mrtest_type_array_time = $mrtest_type_array_time;
        class $mrtest_type_validator extends $mrtest_type {
            is_type(value) {
                return value[0].type.startsWith('@');
            }
            parse(value) {
                let args = [];
                for (const arg of value[0].kids) {
                    if (arg.type == "/" || arg.type == "*") {
                        args.push(($$.$mol_tree2_to_json(arg)));
                    }
                    else {
                        if (!isNaN(Number(arg.type)) && arg.type != '') {
                            args.push(Number(arg.type));
                        }
                        else {
                            args.push(arg.type || arg.value);
                        }
                    }
                }
                return {
                    "name": value[0].type.slice(1),
                    "args": args
                };
            }
        }
        $$.$mrtest_type_validator = $mrtest_type_validator;
        class $mrtest_type_array_check extends $mrtest_type {
            is_type(value) {
                if (value[0].kids[0] && value[0].kids[0].kids[0]) {
                    return true;
                }
                return false;
            }
            parse(value) {
                let checks = [];
                for (const check of value) {
                    if (check && check.kids.length && check.kids.every(kid => kid.kids.length)) {
                        const inspectee = check.type || check.value;
                        const operator = $mrtest_operators[check.kids[0].type];
                        let result_check = null;
                        for (const type_ of $$.$mrtest_types) {
                            const type__ = new type_();
                            if (type__.is_type(check.kids[0].kids)) {
                                const value = type__.parse(check.kids[0].kids);
                                switch (type_.name) {
                                    case "$mrtest_type_array_number":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'array_number': value
                                        };
                                        break;
                                    case "$mrtest_type_array_env":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'array_env': value
                                        };
                                        break;
                                    case "$mrtest_type_number":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'number': value
                                        };
                                        break;
                                    case "$mrtest_type_number_masked":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'number_masked': value
                                        };
                                        break;
                                    case "$mrtest_type_env":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'env': value
                                        };
                                        break;
                                    case "$mrtest_type_variable":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'variable': value
                                        };
                                        break;
                                    case "$mrtest_type_range":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'range': value
                                        };
                                        break;
                                    case "$mrtest_type_array_string":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'array_string': value
                                        };
                                        break;
                                    case "$mrtest_type_string":
                                        result_check = {
                                            inspectee: inspectee,
                                            operator: operator,
                                            'string': value
                                        };
                                        break;
                                }
                            }
                            if (result_check) {
                                checks.push(result_check);
                                break;
                            }
                        }
                    }
                }
                return checks;
            }
        }
        $$.$mrtest_type_array_check = $mrtest_type_array_check;
        class $mrtest_type_bool extends $mrtest_type {
            is_type(value) {
                return value[0].type == "false" || value[0].type == "true";
            }
            parse(value) {
                return value[0].type == "true";
            }
        }
        $$.$mrtest_type_bool = $mrtest_type_bool;
        class $mrtest_type_object extends $mrtest_type {
            is_type(value) {
                return value[0].type == "*";
            }
            parse(value) {
                return $$.$mol_tree2_to_json(value[0]);
            }
        }
        $$.$mrtest_type_object = $mrtest_type_object;
        class $mrtest_type_array extends $mrtest_type {
            is_type(value) {
                return value[0].type == "/";
            }
            parse(value) {
                return $$.$mol_tree2_to_json(value[0]);
            }
        }
        $$.$mrtest_type_array = $mrtest_type_array;
        class $mrtest_type_variable extends $mrtest_type {
            is_type(value) {
                return value[0].type.startsWith('*') && value[0].type != "*";
            }
            parse(value) {
                return value[0].type.slice(1);
            }
        }
        $$.$mrtest_type_variable = $mrtest_type_variable;
        class $mrtest_type_rsl extends $mrtest_type {
            is_type(value) {
                return value[0].type == "#";
            }
            parse(value) {
                return $$.$mol_tree2_to_json(new $mrtest_rsl().transform(value[0].kids[0]));
            }
        }
        $$.$mrtest_type_rsl = $mrtest_type_rsl;
        $$.$mrtest_types = [
            $mrtest_type_rsl,
            $mrtest_type_time_range,
            $mrtest_type_array_number,
            $mrtest_type_array_env,
            $mrtest_type_number,
            $mrtest_type_number_masked,
            $mrtest_type_env,
            $mrtest_type_variable,
            $mrtest_type_range,
            $mrtest_type_array_time,
            $mrtest_type_time,
            $mrtest_type_array_string,
            $mrtest_type_validator,
            $mrtest_type_object,
            $mrtest_type_array,
            $mrtest_type_array_check,
            $mrtest_type_bool,
            $mrtest_type_string,
        ];
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));


//# sourceMappingURL=web.js.map
