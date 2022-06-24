var getUsdModule = (function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return function (getUsdModule, depPath, maxSupportedMemoryGrowth) {
    getUsdModule = getUsdModule || {};

    function GROWABLE_HEAP_I8() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAP8;
    }
    function GROWABLE_HEAP_U8() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAPU8;
    }
    function GROWABLE_HEAP_I16() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAP16;
    }
    function GROWABLE_HEAP_U16() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAPU16;
    }
    function GROWABLE_HEAP_I32() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAP32;
    }
    function GROWABLE_HEAP_U32() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAPU32;
    }
    function GROWABLE_HEAP_F32() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAPF32;
    }
    function GROWABLE_HEAP_F64() {
      if (wasmMemory.buffer != buffer) {
        updateGlobalBufferAndViews(wasmMemory.buffer);
      }
      return HEAPF64;
    }
    var Module = typeof getUsdModule !== 'undefined' ? getUsdModule : {};
    var readyPromiseResolve, readyPromiseReject;
    Module['ready'] = new Promise(function (resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
      Object.defineProperty(Module['ready'], '_main', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_main', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_end')) {
      Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_stack_get_end', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_get_free')) {
      Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_stack_get_free', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_init')) {
      Object.defineProperty(Module['ready'], '_emscripten_stack_init', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_stack_init', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {
      Object.defineProperty(Module['ready'], '_stackSave', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_stackSave', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {
      Object.defineProperty(Module['ready'], '_stackRestore', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_stackRestore', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {
      Object.defineProperty(Module['ready'], '_stackAlloc', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_stackAlloc', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
      Object.defineProperty(Module['ready'], '___wasm_call_ctors', {
        configurable: true,
        get: function () {
          abort(
            'You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '___wasm_call_ctors', {
        configurable: true,
        set: function () {
          abort(
            'You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_fflush')) {
      Object.defineProperty(Module['ready'], '_fflush', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_fflush', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
      Object.defineProperty(Module['ready'], '___errno_location', {
        configurable: true,
        get: function () {
          abort(
            'You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '___errno_location', {
        configurable: true,
        set: function () {
          abort(
            'You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___emscripten_pthread_data_constructor')) {
      Object.defineProperty(Module['ready'], '___emscripten_pthread_data_constructor', {
        configurable: true,
        get: function () {
          abort(
            'You are getting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '___emscripten_pthread_data_constructor', {
        configurable: true,
        set: function () {
          abort(
            'You are setting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '___pthread_tsd_run_dtors')) {
      Object.defineProperty(Module['ready'], '___pthread_tsd_run_dtors', {
        configurable: true,
        get: function () {
          abort(
            'You are getting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '___pthread_tsd_run_dtors', {
        configurable: true,
        set: function () {
          abort(
            'You are setting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__emscripten_call_on_thread')) {
      Object.defineProperty(Module['ready'], '__emscripten_call_on_thread', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__emscripten_call_on_thread', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__emscripten_do_dispatch_to_thread')) {
      Object.defineProperty(Module['ready'], '__emscripten_do_dispatch_to_thread', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __emscripten_do_dispatch_to_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__emscripten_do_dispatch_to_thread', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __emscripten_do_dispatch_to_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__emscripten_main_thread_futex')) {
      Object.defineProperty(Module['ready'], '__emscripten_main_thread_futex', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __emscripten_main_thread_futex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__emscripten_main_thread_futex', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __emscripten_main_thread_futex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__emscripten_thread_init')) {
      Object.defineProperty(Module['ready'], '__emscripten_thread_init', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__emscripten_thread_init', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_futex_wake')) {
      Object.defineProperty(Module['ready'], '_emscripten_futex_wake', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_futex_wake', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_get_global_libc')) {
      Object.defineProperty(Module['ready'], '_emscripten_get_global_libc', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_get_global_libc', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_main_browser_thread_id')) {
      Object.defineProperty(Module['ready'], '_emscripten_main_browser_thread_id', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_main_browser_thread_id', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_main_thread_process_queued_calls')) {
      Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_register_main_browser_thread_id')) {
      Object.defineProperty(Module['ready'], '_emscripten_register_main_browser_thread_id', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_register_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_register_main_browser_thread_id', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_register_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_run_in_main_runtime_thread_js')) {
      Object.defineProperty(Module['ready'], '_emscripten_run_in_main_runtime_thread_js', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_run_in_main_runtime_thread_js on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_run_in_main_runtime_thread_js', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_run_in_main_runtime_thread_js on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_stack_set_limits')) {
      Object.defineProperty(Module['ready'], '_emscripten_stack_set_limits', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_stack_set_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_stack_set_limits', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_stack_set_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_sync_run_in_main_thread_2')) {
      Object.defineProperty(Module['ready'], '_emscripten_sync_run_in_main_thread_2', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_sync_run_in_main_thread_2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_sync_run_in_main_thread_2', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_sync_run_in_main_thread_2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_sync_run_in_main_thread_4')) {
      Object.defineProperty(Module['ready'], '_emscripten_sync_run_in_main_thread_4', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_sync_run_in_main_thread_4 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_sync_run_in_main_thread_4', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_sync_run_in_main_thread_4 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_tls_init')) {
      Object.defineProperty(Module['ready'], '_emscripten_tls_init', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_emscripten_tls_init', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_pthread_self')) {
      Object.defineProperty(Module['ready'], '_pthread_self', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_pthread_self', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_memalign')) {
      Object.defineProperty(Module['ready'], '_memalign', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_memalign', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], 'establishStackSpace')) {
      Object.defineProperty(Module['ready'], 'establishStackSpace', {
        configurable: true,
        get: function () {
          abort(
            'You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], 'establishStackSpace', {
        configurable: true,
        set: function () {
          abort(
            'You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], 'invokeEntryPoint')) {
      Object.defineProperty(Module['ready'], 'invokeEntryPoint', {
        configurable: true,
        get: function () {
          abort(
            'You are getting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], 'invokeEntryPoint', {
        configurable: true,
        set: function () {
          abort(
            'You are setting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], 'getNoExitRuntime')) {
      Object.defineProperty(Module['ready'], 'getNoExitRuntime', {
        configurable: true,
        get: function () {
          abort(
            'You are getting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], 'getNoExitRuntime', {
        configurable: true,
        set: function () {
          abort(
            'You are setting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
      Object.defineProperty(Module['ready'], '_malloc', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_malloc', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
      Object.defineProperty(Module['ready'], '_free', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_free', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
      Object.defineProperty(Module['ready'], '_setThrew', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_setThrew', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_tzname')) {
      Object.defineProperty(Module['ready'], '__get_tzname', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__get_tzname', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_daylight')) {
      Object.defineProperty(Module['ready'], '__get_daylight', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__get_daylight', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_timezone')) {
      Object.defineProperty(Module['ready'], '__get_timezone', {
        configurable: true,
        get: function () {
          abort(
            'You are getting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '__get_timezone', {
        configurable: true,
        set: function () {
          abort(
            'You are setting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], '_memset')) {
      Object.defineProperty(Module['ready'], '_memset', {
        configurable: true,
        get: function () {
          abort(
            'You are getting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], '_memset', {
        configurable: true,
        set: function () {
          abort(
            'You are setting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
      Object.defineProperty(Module['ready'], 'onRuntimeInitialized', {
        configurable: true,
        get: function () {
          abort(
            'You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
      Object.defineProperty(Module['ready'], 'onRuntimeInitialized', {
        configurable: true,
        set: function () {
          abort(
            'You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js',
          );
        },
      });
    }
    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;
    (function () {
      var loadPackage = function (metadata) {
        var PACKAGE_PATH;
        if (typeof window === 'object') {
          PACKAGE_PATH = window['encodeURIComponent'](
            window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) +
              '/',
          );
        } else if (typeof location !== 'undefined') {
          PACKAGE_PATH = encodeURIComponent(
            location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/',
          );
        } else {
          throw 'using preloaded data can only be done on a web page or in a web worker';
        }
        var PACKAGE_NAME = 'emHdBindings.data';
        var REMOTE_PACKAGE_BASE = depPath === undefined ? 'emHdBindings.data' : depPath + '/' + 'emHdBindings.data';
        if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
          Module['locateFile'] = Module['locateFilePackage'];
          err(
            'warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)',
          );
        }
        var REMOTE_PACKAGE_NAME = Module['locateFile']
          ? Module['locateFile'](REMOTE_PACKAGE_BASE, '')
          : REMOTE_PACKAGE_BASE;
        var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
        var PACKAGE_UUID = metadata['package_uuid'];
        function fetchRemotePackage(packageName, packageSize, callback, errback) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', packageName, true);
          xhr.responseType = 'arraybuffer';
          xhr.onprogress = function (event) {
            var url = packageName;
            var size = packageSize;
            if (event.total) size = event.total;
            if (event.loaded) {
              if (!xhr.addedTotal) {
                xhr.addedTotal = true;
                if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
                Module.dataFileDownloads[url] = { loaded: event.loaded, total: size };
              } else {
                Module.dataFileDownloads[url].loaded = event.loaded;
              }
              var total = 0;
              var loaded = 0;
              var num = 0;
              for (var download in Module.dataFileDownloads) {
                var data = Module.dataFileDownloads[download];
                total += data.total;
                loaded += data.loaded;
                num++;
              }
              total = Math.ceil((total * Module.expectedDataFileDownloads) / num);
              if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
            } else if (!Module.dataFileDownloads) {
              if (Module['setStatus']) Module['setStatus']('Downloading data...');
            }
          };
          xhr.onerror = function (event) {
            throw new Error('NetworkError for: ' + packageName);
          };
          xhr.onload = function (event) {
            if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) {
              var packageData = xhr.response;
              callback(packageData);
            } else {
              throw new Error(xhr.statusText + ' : ' + xhr.responseURL);
            }
          };
          xhr.send(null);
        }
        function handleError(error) {
          console.error('package error:', error);
        }
        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage']
          ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE)
          : null;
        if (!fetched)
          fetchRemotePackage(
            REMOTE_PACKAGE_NAME,
            REMOTE_PACKAGE_SIZE,
            function (data) {
              if (fetchedCallback) {
                fetchedCallback(data);
                fetchedCallback = null;
              } else {
                fetched = data;
              }
            },
            handleError,
          );
        function runWithFS() {
          function assert(check, msg) {
            if (!check) throw msg + new Error().stack;
          }
          Module['FS_createPath']('/', 'usd', true, true);
          Module['FS_createPath']('/usd', 'usdShade', true, true);
          Module['FS_createPath']('/usd/usdShade', 'resources', true, true);
          Module['FS_createPath']('/usd/usdShade/resources', 'usdShade', true, true);
          Module['FS_createPath']('/usd', 'sdf', true, true);
          Module['FS_createPath']('/usd/sdf', 'resources', true, true);
          Module['FS_createPath']('/usd', 'hd', true, true);
          Module['FS_createPath']('/usd/hd', 'resources', true, true);
          Module['FS_createPath']('/usd', 'usdHydra', true, true);
          Module['FS_createPath']('/usd/usdHydra', 'resources', true, true);
          Module['FS_createPath']('/usd/usdHydra/resources', 'shaders', true, true);
          Module['FS_createPath']('/usd', 'usdShaders', true, true);
          Module['FS_createPath']('/usd/usdShaders', 'resources', true, true);
          Module['FS_createPath']('/usd/usdShaders/resources', 'shaders', true, true);
          Module['FS_createPath']('/usd', 'usdImaging', true, true);
          Module['FS_createPath']('/usd/usdImaging', 'resources', true, true);
          Module['FS_createPath']('/usd', 'usd', true, true);
          Module['FS_createPath']('/usd/usd', 'resources', true, true);
          Module['FS_createPath']('/usd/usd/resources', 'usd', true, true);
          Module['FS_createPath']('/usd/usd/resources', 'codegenTemplates', true, true);
          Module['FS_createPath']('/usd', 'usdLux', true, true);
          Module['FS_createPath']('/usd/usdLux', 'resources', true, true);
          Module['FS_createPath']('/usd/usdLux/resources', 'usdLux', true, true);
          Module['FS_createPath']('/usd', 'ar', true, true);
          Module['FS_createPath']('/usd/ar', 'resources', true, true);
          Module['FS_createPath']('/usd', 'usdGeom', true, true);
          Module['FS_createPath']('/usd/usdGeom', 'resources', true, true);
          Module['FS_createPath']('/usd/usdGeom/resources', 'usdGeom', true, true);
          Module['FS_createPath']('/usd', 'ndr', true, true);
          Module['FS_createPath']('/usd/ndr', 'resources', true, true);
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function (mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function () {},
            onload: function () {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function (byteArray) {
              var that = this;
              Module['FS_createDataFile'](this.name, null, byteArray, true, true, true);
              Module['removeRunDependency']('fp ' + that.name);
              this.requests[this.name] = null;
            },
          };
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
          }
          function processPackageData(arrayBuffer) {
            assert(arrayBuffer, 'Loading data file failed.');
            assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
            var byteArray = new Uint8Array(arrayBuffer);
            DataRequest.prototype.byteArray = byteArray;
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
            Module['removeRunDependency']('datafile_emHdBindings.data');
          }
          Module['addRunDependency']('datafile_emHdBindings.data');
          if (!Module.preloadResults) Module.preloadResults = {};
          Module.preloadResults[PACKAGE_NAME] = { fromCache: false };
          if (fetched) {
            processPackageData(fetched);
            fetched = null;
          } else {
            fetchedCallback = processPackageData;
          }
        }
        if (Module['calledRun']) {
          runWithFS();
        } else {
          if (!Module['preRun']) Module['preRun'] = [];
          Module['preRun'].push(runWithFS);
        }
      };
      loadPackage({
        files: [
          { filename: '/usd/usdShade/resources/plugInfo.json', start: 0, end: 5883, audio: 0 },
          { filename: '/usd/usdShade/resources/generatedSchema.usda', start: 5883, end: 21418, audio: 0 },
          { filename: '/usd/usdShade/resources/usdShade/schema.usda', start: 21418, end: 48023, audio: 0 },
          { filename: '/usd/sdf/resources/plugInfo.json', start: 48023, end: 49119, audio: 0 },
          { filename: '/usd/hd/resources/plugInfo.json', start: 49119, end: 49344, audio: 0 },
          { filename: '/usd/usdHydra/resources/plugInfo.json', start: 49344, end: 50013, audio: 0 },
          { filename: '/usd/usdHydra/resources/shaders/shaderDefs.usda', start: 50013, end: 56770, audio: 0 },
          { filename: '/usd/usdHydra/resources/shaders/empty.glslfx', start: 56770, end: 57993, audio: 0 },
          { filename: '/usd/usdShaders/resources/plugInfo.json', start: 57993, end: 58672, audio: 0 },
          { filename: '/usd/usdShaders/resources/shaders/shaderDefs.usda', start: 58672, end: 72539, audio: 0 },
          { filename: '/usd/usdShaders/resources/shaders/previewSurface.glslfx', start: 72539, end: 87461, audio: 0 },
          { filename: '/usd/usdShaders/resources/shaders/uvTexture.glslfx', start: 87461, end: 88684, audio: 0 },
          { filename: '/usd/usdShaders/resources/shaders/primvarReader.glslfx', start: 88684, end: 89907, audio: 0 },
          { filename: '/usd/usdShaders/resources/shaders/transform2d.glslfx', start: 89907, end: 91130, audio: 0 },
          { filename: '/usd/usdImaging/resources/plugInfo.json', start: 91130, end: 100628, audio: 0 },
          { filename: '/usd/usd/resources/plugInfo.json', start: 100628, end: 105715, audio: 0 },
          { filename: '/usd/usd/resources/generatedSchema.usda', start: 105715, end: 120099, audio: 0 },
          { filename: '/usd/usd/resources/usd/schema.usda', start: 120099, end: 137280, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/api.h', start: 137280, end: 139382, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/plugInfo.json', start: 139382, end: 139739, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/schemaClass.cpp', start: 139739, end: 152174, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/schemaClass.h', start: 152174, end: 168823, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/tokens.cpp', start: 168823, end: 170411, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/tokens.h', start: 170411, end: 173666, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/wrapSchemaClass.cpp', start: 173666, end: 182369, audio: 0 },
          { filename: '/usd/usd/resources/codegenTemplates/wrapTokens.cpp', start: 182369, end: 184890, audio: 0 },
          { filename: '/usd/usdLux/resources/plugInfo.json', start: 184890, end: 193813, audio: 0 },
          { filename: '/usd/usdLux/resources/generatedSchema.usda', start: 193813, end: 258264, audio: 0 },
          { filename: '/usd/usdLux/resources/usdLux/schema.usda', start: 258264, end: 291619, audio: 0 },
          { filename: '/usd/ar/resources/plugInfo.json', start: 291619, end: 292208, audio: 0 },
          { filename: '/usd/usdGeom/resources/plugInfo.json', start: 292208, end: 306584, audio: 0 },
          { filename: '/usd/usdGeom/resources/generatedSchema.usda', start: 306584, end: 513706, audio: 0 },
          { filename: '/usd/usdGeom/resources/usdGeom/schema.usda', start: 513706, end: 628051, audio: 0 },
          { filename: '/usd/ndr/resources/plugInfo.json', start: 628051, end: 628625, audio: 0 },
          { filename: '/usd/plugInfo.json', start: 628625, end: 628676, audio: 0 },
        ],
        remote_package_size: 628676,
        package_uuid: '803e30af-c896-4a6d-bcdc-a98f8618141e',
      });
    })();
    var necessaryPreJSTasks = Module['preRun'].slice();
    Module = Module || {};
    Module.getFile = async (filePath, fileName) => {
      let isNode = false;
      if (typeof module !== 'undefined' && module.exports) {
        isNode = true;
      }
      let usdFile;
      if (isNode) {
        const fs = require('fs');
        usdFile = fs.readFileSync(filePath);
      } else {
        usdFile = await new Promise((resolve, reject) => {
          let req = new XMLHttpRequest();
          req.open('GET', filePath, true);
          req.responseType = 'arraybuffer';
          req.onload = function (oEvent) {
            let arrayBuffer = req.response;
            if (arrayBuffer) {
              resolve(arrayBuffer);
            } else {
              reject();
            }
          };
          req.send(null);
        });
      }
      Module.FS.createDataFile('/', fileName, new Uint8Array(usdFile), true, true, true);
    };
    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach(function (task) {
      if (Module['preRun'].indexOf(task) < 0)
        throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var arguments_ = [];
    var thisProgram = './this.program';
    var quit_ = function (status, toThrow) {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === 'object';
    ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
    ENVIRONMENT_IS_NODE =
      typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    if (Module['ENVIRONMENT']) {
      throw new Error(
        'Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)',
      );
    }
    var ENVIRONMENT_IS_PTHREAD = Module['ENVIRONMENT_IS_PTHREAD'] || false;
    if (ENVIRONMENT_IS_PTHREAD) {
      buffer = Module['buffer'];
    }
    var scriptDirectory = '';
    function locateFile(path) {
      if (Module['locateFile']) {
        return Module['locateFile'](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = require('path').dirname(scriptDirectory) + '/';
      } else {
        scriptDirectory = __dirname + '/';
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS) nodeFS = require('fs');
        if (!nodePath) nodePath = require('path');
        filename = nodePath['normalize'](filename);
        return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
      };
      readBinary = function readBinary(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process['argv'].length > 1) {
        thisProgram = process['argv'][1].replace(/\\/g, '/');
      }
      arguments_ = process['argv'].slice(2);
      process['on']('uncaughtException', function (ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process['on']('unhandledRejection', abort);
      quit_ = function (status) {
        process['exit'](status);
      };
      Module['inspect'] = function () {
        return '[Emscripten Module object]';
      };
      var nodeWorkerThreads;
      try {
        nodeWorkerThreads = require('worker_threads');
      } catch (e) {
        console.error(
          'The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?',
        );
        throw e;
      }
      global.Worker = nodeWorkerThreads.Worker;
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != 'undefined') {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary(f) {
        var data;
        if (typeof readbuffer === 'function') {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, 'binary');
        assert(typeof data === 'object');
        return data;
      };
      if (typeof scriptArgs != 'undefined') {
        arguments_ = scriptArgs;
      } else if (typeof arguments != 'undefined') {
        arguments_ = arguments;
      }
      if (typeof quit === 'function') {
        quit_ = function (status) {
          quit(status);
        };
      }
      if (typeof print !== 'undefined') {
        if (typeof console === 'undefined') console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== 'undefined' ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== 'undefined' && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf('blob:') !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/') + 1);
      } else {
        scriptDirectory = '';
      }
      if (ENVIRONMENT_IS_NODE) {
        read_ = function shell_read(filename, binary) {
          if (!nodeFS) nodeFS = require('fs');
          if (!nodePath) nodePath = require('path');
          filename = nodePath['normalize'](filename);
          return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
        };
        readBinary = function readBinary(filename) {
          var ret = read_(filename, true);
          if (!ret.buffer) {
            ret = new Uint8Array(ret);
          }
          assert(ret.buffer);
          return ret;
        };
      } else {
        read_ = function shell_read(url) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function readBinary(url) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.responseType = 'arraybuffer';
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function readAsync(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'arraybuffer';
          xhr.onload = function xhr_onload() {
            if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = function (title) {
        document.title = title;
      };
    } else {
      throw new Error('environment detection error');
    }
    if (ENVIRONMENT_IS_NODE) {
      if (typeof performance === 'undefined') {
        global.performance = require('perf_hooks').performance;
      }
    }
    var out = Module['print'] || console.log.bind(console);
    var err = Module['printErr'] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module['arguments']) arguments_ = Module['arguments'];
    if (!Object.getOwnPropertyDescriptor(Module, 'arguments'))
      Object.defineProperty(Module, 'arguments', {
        configurable: true,
        get: function () {
          abort(
            'Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (Module['thisProgram']) thisProgram = Module['thisProgram'];
    if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram'))
      Object.defineProperty(Module, 'thisProgram', {
        configurable: true,
        get: function () {
          abort(
            'Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (Module['quit']) quit_ = Module['quit'];
    if (!Object.getOwnPropertyDescriptor(Module, 'quit'))
      Object.defineProperty(Module, 'quit', {
        configurable: true,
        get: function () {
          abort(
            'Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    assert(
      typeof Module['memoryInitializerPrefixURL'] === 'undefined',
      'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead',
    );
    assert(
      typeof Module['pthreadMainPrefixURL'] === 'undefined',
      'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead',
    );
    assert(
      typeof Module['cdInitializerPrefixURL'] === 'undefined',
      'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead',
    );
    assert(
      typeof Module['filePackagePrefixURL'] === 'undefined',
      'Module.filePackagePrefixURL option was removed, use Module.locateFile instead',
    );
    assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
    assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
    assert(
      typeof Module['readBinary'] === 'undefined',
      'Module.readBinary option was removed (modify readBinary in JS)',
    );
    assert(
      typeof Module['setWindowTitle'] === 'undefined',
      'Module.setWindowTitle option was removed (modify setWindowTitle in JS)',
    );
    assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
    if (!Object.getOwnPropertyDescriptor(Module, 'read'))
      Object.defineProperty(Module, 'read', {
        configurable: true,
        get: function () {
          abort(
            'Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (!Object.getOwnPropertyDescriptor(Module, 'readAsync'))
      Object.defineProperty(Module, 'readAsync', {
        configurable: true,
        get: function () {
          abort(
            'Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (!Object.getOwnPropertyDescriptor(Module, 'readBinary'))
      Object.defineProperty(Module, 'readBinary', {
        configurable: true,
        get: function () {
          abort(
            'Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle'))
      Object.defineProperty(Module, 'setWindowTitle', {
        configurable: true,
        get: function () {
          abort(
            'Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    assert(
      ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER || ENVIRONMENT_IS_NODE,
      'Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)',
    );
    var STACK_ALIGN = 16;
    function alignMemory(size, factor) {
      if (!factor) factor = STACK_ALIGN;
      return Math.ceil(size / factor) * factor;
    }
    function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    }
    function convertJsFunctionToWasm(func, sig) {
      if (typeof WebAssembly.Function === 'function') {
        var typeNames = { i: 'i32', j: 'i64', f: 'f32', d: 'f64' };
        var type = { parameters: [], results: sig[0] == 'v' ? [] : [typeNames[sig[0]]] };
        for (var i = 1; i < sig.length; ++i) {
          type.parameters.push(typeNames[sig[i]]);
        }
        return new WebAssembly.Function(type, func);
      }
      var typeSection = [1, 0, 1, 96];
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = { i: 127, j: 126, f: 125, d: 124 };
      typeSection.push(sigParam.length);
      for (var i = 0; i < sigParam.length; ++i) {
        typeSection.push(typeCodes[sigParam[i]]);
      }
      if (sigRet == 'v') {
        typeSection.push(0);
      } else {
        typeSection = typeSection.concat([1, typeCodes[sigRet]]);
      }
      typeSection[1] = typeSection.length - 2;
      var bytes = new Uint8Array(
        [0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]),
      );
      var module = new WebAssembly.Module(bytes);
      var instance = new WebAssembly.Instance(module, { e: { f: func } });
      var wrappedFunc = instance.exports['f'];
      return wrappedFunc;
    }
    var freeTableIndexes = [];
    var functionsInTableMap;
    function getEmptyTableSlot() {
      if (freeTableIndexes.length) {
        return freeTableIndexes.pop();
      }
      try {
        wasmTable.grow(1);
      } catch (err) {
        if (!(err instanceof RangeError)) {
          throw err;
        }
        throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
      }
      return wasmTable.length - 1;
    }
    function addFunctionWasm(func, sig) {
      if (!functionsInTableMap) {
        functionsInTableMap = new WeakMap();
        for (var i = 0; i < wasmTable.length; i++) {
          var item = wasmTable.get(i);
          if (item) {
            functionsInTableMap.set(item, i);
          }
        }
      }
      if (functionsInTableMap.has(func)) {
        return functionsInTableMap.get(func);
      }
      var ret = getEmptyTableSlot();
      try {
        wasmTable.set(ret, func);
      } catch (err) {
        if (!(err instanceof TypeError)) {
          throw err;
        }
        assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);
        var wrapped = convertJsFunctionToWasm(func, sig);
        wasmTable.set(ret, wrapped);
      }
      functionsInTableMap.set(func, ret);
      return ret;
    }
    var tempRet0 = 0;
    var setTempRet0 = function (value) {
      tempRet0 = value;
    };
    var Atomics_load = Atomics.load;
    var Atomics_store = Atomics.store;
    var Atomics_compareExchange = Atomics.compareExchange;
    var wasmBinary;
    if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
    if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary'))
      Object.defineProperty(Module, 'wasmBinary', {
        configurable: true,
        get: function () {
          abort(
            'Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    var noExitRuntime;
    if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
    if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime'))
      Object.defineProperty(Module, 'noExitRuntime', {
        configurable: true,
        get: function () {
          abort(
            'Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    if (typeof WebAssembly !== 'object') {
      abort('no native wasm support detected');
    }
    var wasmMemory;
    var wasmModule;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort('Assertion failed: ' + text);
      }
    }
    function getCFunc(ident) {
      var func = Module['_' + ident];
      assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
      return func;
    }
    function ccall(ident, returnType, argTypes, args, opts) {
      var toC = {
        string: function (str) {
          var ret = 0;
          if (str !== null && str !== undefined && str !== 0) {
            var len = (str.length << 2) + 1;
            ret = stackAlloc(len);
            stringToUTF8(str, ret, len);
          }
          return ret;
        },
        array: function (arr) {
          var ret = stackAlloc(arr.length);
          writeArrayToMemory(arr, ret);
          return ret;
        },
      };
      function convertReturnValue(ret) {
        if (returnType === 'string') return UTF8ToString(ret);
        if (returnType === 'boolean') return Boolean(ret);
        return ret;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      assert(returnType !== 'array', 'Return type should not be "array".');
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func.apply(null, cArgs);
      ret = convertReturnValue(ret);
      if (stack !== 0) stackRestore(stack);
      return ret;
    }
    var ALLOC_STACK = 1;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      idx >>>= 0;
      var endIdx = idx + maxBytesToRead;
      var str = '';
      while (!(idx >= endIdx)) {
        var u0 = heap[idx++ >>> 0];
        if (!u0) return str;
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heap[idx++ >>> 0] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode(((u0 & 31) << 6) | u1);
          continue;
        }
        var u2 = heap[idx++ >>> 0] & 63;
        if ((u0 & 240) == 224) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 248) != 240)
            warnOnce(
              'Invalid UTF-8 leading byte 0x' +
                u0.toString(16) +
                ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!',
            );
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++ >>> 0] & 63);
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      ptr >>>= 0;
      return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : '';
    }
    function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
      outIdx >>>= 0;
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = (65536 + ((u & 1023) << 10)) | (u1 & 1023);
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++ >>> 0] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++ >>> 0] = 192 | (u >> 6);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++ >>> 0] = 224 | (u >> 12);
          heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u >= 2097152)
            warnOnce(
              'Invalid Unicode code point 0x' +
                u.toString(16) +
                ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).',
            );
          heap[outIdx++ >>> 0] = 240 | (u >> 18);
          heap[outIdx++ >>> 0] = 128 | ((u >> 12) & 63);
          heap[outIdx++ >>> 0] = 128 | ((u >> 6) & 63);
          heap[outIdx++ >>> 0] = 128 | (u & 63);
        }
      }
      heap[outIdx >>> 0] = 0;
      return outIdx - startIdx;
    }
    function stringToUTF8(str, outPtr, maxBytesToWrite) {
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
    }
    function lengthBytesUTF8(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) u = (65536 + ((u & 1023) << 10)) | (str.charCodeAt(++i) & 1023);
        if (u <= 127) ++len;
        else if (u <= 2047) len += 2;
        else if (u <= 65535) len += 3;
        else len += 4;
      }
      return len;
    }
    function UTF16ToString(ptr, maxBytesToRead) {
      assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
      var str = '';
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = GROWABLE_HEAP_I16()[(ptr + i * 2) >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    }
    function stringToUTF16(str, outPtr, maxBytesToWrite) {
      assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF16(str) {
      return str.length * 2;
    }
    function UTF32ToString(ptr, maxBytesToRead) {
      assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
      var i = 0;
      var str = '';
      while (!(i >= maxBytesToRead / 4)) {
        var utf32 = GROWABLE_HEAP_I32()[(ptr + i * 4) >> 2];
        if (utf32 == 0) break;
        ++i;
        if (utf32 >= 65536) {
          var ch = utf32 - 65536;
          str += String.fromCharCode(55296 | (ch >> 10), 56320 | (ch & 1023));
        } else {
          str += String.fromCharCode(utf32);
        }
      }
      return str;
    }
    function stringToUTF32(str, outPtr, maxBytesToWrite) {
      outPtr >>>= 0;
      assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
      assert(
        typeof maxBytesToWrite == 'number',
        'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!',
      );
      if (maxBytesToWrite === undefined) {
        maxBytesToWrite = 2147483647;
      }
      if (maxBytesToWrite < 4) return 0;
      var startPtr = outPtr;
      var endPtr = startPtr + maxBytesToWrite - 4;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) {
          var trailSurrogate = str.charCodeAt(++i);
          codeUnit = (65536 + ((codeUnit & 1023) << 10)) | (trailSurrogate & 1023);
        }
        GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
        outPtr += 4;
        if (outPtr + 4 > endPtr) break;
      }
      GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
      return outPtr - startPtr;
    }
    function lengthBytesUTF32(str) {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var codeUnit = str.charCodeAt(i);
        if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
        len += 4;
      }
      return len;
    }
    function writeArrayToMemory(array, buffer) {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)');
      GROWABLE_HEAP_I8().set(array, buffer);
    }
    function writeAsciiToMemory(str, buffer, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        assert((str.charCodeAt(i) === str.charCodeAt(i)) & 255);
        GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0;
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - (x % multiple);
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module['HEAP8'] = HEAP8 = new Int8Array(buf);
      Module['HEAP16'] = HEAP16 = new Int16Array(buf);
      Module['HEAP32'] = HEAP32 = new Int32Array(buf);
      Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
      Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
      Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
      Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
      Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
    }
    var TOTAL_STACK = 5242880;
    if (Module['TOTAL_STACK'])
      assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime');
    var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;
    if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY'))
      Object.defineProperty(Module, 'INITIAL_MEMORY', {
        configurable: true,
        get: function () {
          abort(
            'Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)',
          );
        },
      });
    assert(
      INITIAL_MEMORY >= TOTAL_STACK,
      'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')',
    );
    assert(
      typeof Int32Array !== 'undefined' &&
        typeof Float64Array !== 'undefined' &&
        Int32Array.prototype.subarray !== undefined &&
        Int32Array.prototype.set !== undefined,
      'JS engine does not provide full typed array support',
    );
    if (ENVIRONMENT_IS_PTHREAD) {
      wasmMemory = Module['wasmMemory'];
      buffer = Module['buffer'];
    } else {
      if (Module['wasmMemory']) {
        wasmMemory = Module['wasmMemory'];
      } else {
        wasmMemory = new WebAssembly.Memory({
          initial: INITIAL_MEMORY / 65536,
          maximum: (maxSupportedMemoryGrowth === undefined ? 4294967296 : maxSupportedMemoryGrowth) / 65536,
          shared: true,
        });
        if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
          err(
            'requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag',
          );
          if (ENVIRONMENT_IS_NODE) {
            console.log(
              '(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)',
            );
          }
          throw Error('bad memory');
        }
      }
    }
    if (wasmMemory) {
      buffer = wasmMemory.buffer;
    }
    INITIAL_MEMORY = buffer.byteLength;
    assert(INITIAL_MEMORY % 65536 === 0);
    updateGlobalBufferAndViews(buffer);
    var wasmTable;
    function writeStackCookie() {
      var max = _emscripten_stack_get_end();
      assert((max & 3) == 0);
      GROWABLE_HEAP_U32()[(max >> 2) + 1] = 34821223;
      GROWABLE_HEAP_U32()[(max >> 2) + 2] = 2310721022;
      GROWABLE_HEAP_I32()[0] = 1668509029;
    }
    function checkStackCookie() {
      if (ABORT) return;
      var max = _emscripten_stack_get_end();
      var cookie1 = GROWABLE_HEAP_U32()[(max >> 2) + 1];
      var cookie2 = GROWABLE_HEAP_U32()[(max >> 2) + 2];
      if (cookie1 != 34821223 || cookie2 != 2310721022) {
        abort(
          'Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' +
            cookie2.toString(16) +
            ' ' +
            cookie1.toString(16),
        );
      }
      if (GROWABLE_HEAP_I32()[0] !== 1668509029)
        abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
    }
    (function () {
      var h16 = new Int16Array(1);
      var h8 = new Int8Array(h16.buffer);
      h16[0] = 25459;
      if (h8[0] !== 115 || h8[1] !== 99) throw 'Runtime error: expected the system to be little-endian!';
    })();
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATEXIT__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    if (ENVIRONMENT_IS_PTHREAD) runtimeInitialized = true;
    function preRun() {
      if (ENVIRONMENT_IS_PTHREAD) return;
      if (Module['preRun']) {
        if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
        while (Module['preRun'].length) {
          addOnPreRun(Module['preRun'].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      checkStackCookie();
      assert(!runtimeInitialized);
      runtimeInitialized = true;
      if (!Module['noFSInit'] && !FS.init.initialized) FS.init();
      TTY.init();
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      checkStackCookie();
      if (ENVIRONMENT_IS_PTHREAD) return;
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      checkStackCookie();
      if (ENVIRONMENT_IS_PTHREAD) return;
      runtimeExited = true;
    }
    function postRun() {
      checkStackCookie();
      if (ENVIRONMENT_IS_PTHREAD) return;
      if (Module['postRun']) {
        if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
        while (Module['postRun'].length) {
          addOnPostRun(Module['postRun'].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    assert(
      Math.imul,
      'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );
    assert(
      Math.fround,
      'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );
    assert(
      Math.clz32,
      'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );
    assert(
      Math.trunc,
      'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill',
    );
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    var runDependencyTracking = {};
    function getUniqueRunDependency(id) {
      var orig = id;
      while (1) {
        if (!runDependencyTracking[id]) return id;
        id = orig + Math.random();
      }
    }
    function addRunDependency(id) {
      assert(!ENVIRONMENT_IS_PTHREAD, 'addRunDependency cannot be used in a pthread worker');
      runDependencies++;
      if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
      }
      if (id) {
        assert(!runDependencyTracking[id]);
        runDependencyTracking[id] = 1;
        if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
          runDependencyWatcher = setInterval(function () {
            if (ABORT) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
              return;
            }
            var shown = false;
            for (var dep in runDependencyTracking) {
              if (!shown) {
                shown = true;
                err('still waiting on run dependencies:');
              }
              err('dependency: ' + dep);
            }
            if (shown) {
              err('(end of list)');
            }
          }, 1e4);
        }
      } else {
        err('warning: run dependency added without ID');
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module['monitorRunDependencies']) {
        Module['monitorRunDependencies'](runDependencies);
      }
      if (id) {
        assert(runDependencyTracking[id]);
        delete runDependencyTracking[id];
      } else {
        err('warning: run dependency removed without ID');
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module['preloadedImages'] = {};
    Module['preloadedAudios'] = {};
    function abort(what) {
      if (Module['onAbort']) {
        Module['onAbort'](what);
      }
      if (ENVIRONMENT_IS_PTHREAD) console.error('Pthread aborting at ' + new Error().stack);
      what += '';
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      var output = 'abort(' + what + ') at ' + stackTrace();
      what = output;
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    function hasPrefix(str, prefix) {
      return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
    }
    var dataURIPrefix = 'data:application/octet-stream;base64,';
    function isDataURI(filename) {
      return hasPrefix(filename, dataURIPrefix);
    }
    var fileURIPrefix = 'file://';
    function isFileURI(filename) {
      return hasPrefix(filename, fileURIPrefix);
    }
    function createExportWrapper(name, fixedasm) {
      return function () {
        var displayName = name;
        var asm = fixedasm;
        if (!fixedasm) {
          asm = Module['asm'];
        }
        assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
        assert(
          !runtimeExited,
          'native function `' +
            displayName +
            '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)',
        );
        if (!asm[name]) {
          assert(asm[name], 'exported native function `' + displayName + '` not found');
        }
        return asm[name].apply(null, arguments);
      };
    }
    var wasmBinaryFile = 'emHdBindings.wasm';
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        } else {
          throw 'both async and sync fetching of the wasm failed';
        }
      } catch (err) {
        abort(err);
      }
    }
    function getBinaryPromise() {
      if (
        !wasmBinary &&
        (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) &&
        typeof fetch === 'function' &&
        !isFileURI(wasmBinaryFile)
      ) {
        return fetch(wasmBinaryFile, { credentials: 'same-origin' })
          .then(function (response) {
            if (!response['ok']) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response['arrayBuffer']();
          })
          .catch(function () {
            return getBinary(wasmBinaryFile);
          });
      }
      return Promise.resolve().then(function () {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { env: asmLibraryArg, wasi_snapshot_preview1: asmLibraryArg };
      function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module['asm'] = exports;
        wasmTable = Module['asm']['__indirect_function_table'];
        assert(wasmTable, 'table not found in wasm exports');
        wasmModule = module;
        if (!ENVIRONMENT_IS_PTHREAD) {
          var numWorkersToLoad = PThread.unusedWorkers.length;
          PThread.unusedWorkers.forEach(function (w) {
            PThread.loadWasmModuleToWorker(w, function () {
              if (!--numWorkersToLoad) removeRunDependency('wasm-instantiate');
            });
          });
        }
      }
      if (!ENVIRONMENT_IS_PTHREAD) {
        addRunDependency('wasm-instantiate');
      }
      var trueModule = Module;
      function receiveInstantiatedSource(output) {
        assert(
          Module === trueModule,
          'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?',
        );
        trueModule = null;
        receiveInstance(output['instance'], output['module']);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise()
          .then(function (binary) {
            return WebAssembly.instantiate(binary, info);
          })
          .then(receiver, function (reason) {
            err('failed to asynchronously prepare wasm: ' + reason);
            abort(reason);
          });
      }
      function instantiateAsync() {
        if (
          !wasmBinary &&
          typeof WebAssembly.instantiateStreaming === 'function' &&
          !isDataURI(wasmBinaryFile) &&
          !isFileURI(wasmBinaryFile) &&
          typeof fetch === 'function'
        ) {
          return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function (reason) {
              err('wasm streaming compile failed: ' + reason);
              err('falling back to ArrayBuffer instantiation');
              return instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module['instantiateWasm']) {
        try {
          var exports = Module['instantiateWasm'](info, receiveInstance);
          return exports;
        } catch (e) {
          err('Module.instantiateWasm callback failed with error: ' + e);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    var tempDouble;
    var tempI64;
    var ASM_CONSTS = {
      1313712: function () {
        throw 'Canceled!';
      },
      1313962: function ($0, $1) {
        setTimeout(function () {
          __emscripten_do_dispatch_to_thread($0, $1);
        }, 0);
      },
    };
    function downloadJS(data, filenamedata) {
      const text = UTF8ToString(data);
      const filename = UTF8ToString(filenamedata);
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    function initPthreadsJS() {
      PThread.initRuntime();
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module);
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }
    function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }
    function demangleAll(text) {
      var regex = /\b_Z[\w\d_]+/g;
      return text.replace(regex, function (x) {
        var y = demangle(x);
        return x === y ? x : y + ' [' + x + ']';
      });
    }
    var ERRNO_CODES = {
      EPERM: 63,
      ENOENT: 44,
      ESRCH: 71,
      EINTR: 27,
      EIO: 29,
      ENXIO: 60,
      E2BIG: 1,
      ENOEXEC: 45,
      EBADF: 8,
      ECHILD: 12,
      EAGAIN: 6,
      EWOULDBLOCK: 6,
      ENOMEM: 48,
      EACCES: 2,
      EFAULT: 21,
      ENOTBLK: 105,
      EBUSY: 10,
      EEXIST: 20,
      EXDEV: 75,
      ENODEV: 43,
      ENOTDIR: 54,
      EISDIR: 31,
      EINVAL: 28,
      ENFILE: 41,
      EMFILE: 33,
      ENOTTY: 59,
      ETXTBSY: 74,
      EFBIG: 22,
      ENOSPC: 51,
      ESPIPE: 70,
      EROFS: 69,
      EMLINK: 34,
      EPIPE: 64,
      EDOM: 18,
      ERANGE: 68,
      ENOMSG: 49,
      EIDRM: 24,
      ECHRNG: 106,
      EL2NSYNC: 156,
      EL3HLT: 107,
      EL3RST: 108,
      ELNRNG: 109,
      EUNATCH: 110,
      ENOCSI: 111,
      EL2HLT: 112,
      EDEADLK: 16,
      ENOLCK: 46,
      EBADE: 113,
      EBADR: 114,
      EXFULL: 115,
      ENOANO: 104,
      EBADRQC: 103,
      EBADSLT: 102,
      EDEADLOCK: 16,
      EBFONT: 101,
      ENOSTR: 100,
      ENODATA: 116,
      ETIME: 117,
      ENOSR: 118,
      ENONET: 119,
      ENOPKG: 120,
      EREMOTE: 121,
      ENOLINK: 47,
      EADV: 122,
      ESRMNT: 123,
      ECOMM: 124,
      EPROTO: 65,
      EMULTIHOP: 36,
      EDOTDOT: 125,
      EBADMSG: 9,
      ENOTUNIQ: 126,
      EBADFD: 127,
      EREMCHG: 128,
      ELIBACC: 129,
      ELIBBAD: 130,
      ELIBSCN: 131,
      ELIBMAX: 132,
      ELIBEXEC: 133,
      ENOSYS: 52,
      ENOTEMPTY: 55,
      ENAMETOOLONG: 37,
      ELOOP: 32,
      EOPNOTSUPP: 138,
      EPFNOSUPPORT: 139,
      ECONNRESET: 15,
      ENOBUFS: 42,
      EAFNOSUPPORT: 5,
      EPROTOTYPE: 67,
      ENOTSOCK: 57,
      ENOPROTOOPT: 50,
      ESHUTDOWN: 140,
      ECONNREFUSED: 14,
      EADDRINUSE: 3,
      ECONNABORTED: 13,
      ENETUNREACH: 40,
      ENETDOWN: 38,
      ETIMEDOUT: 73,
      EHOSTDOWN: 142,
      EHOSTUNREACH: 23,
      EINPROGRESS: 26,
      EALREADY: 7,
      EDESTADDRREQ: 17,
      EMSGSIZE: 35,
      EPROTONOSUPPORT: 66,
      ESOCKTNOSUPPORT: 137,
      EADDRNOTAVAIL: 4,
      ENETRESET: 39,
      EISCONN: 30,
      ENOTCONN: 53,
      ETOOMANYREFS: 141,
      EUSERS: 136,
      EDQUOT: 19,
      ESTALE: 72,
      ENOTSUP: 138,
      ENOMEDIUM: 148,
      EILSEQ: 25,
      EOVERFLOW: 61,
      ECANCELED: 11,
      ENOTRECOVERABLE: 56,
      EOWNERDEAD: 62,
      ESTRPIPE: 135,
    };
    function _emscripten_futex_wake(addr, count) {
      if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & (3 != 0) || count < 0) return -28;
      if (count == 0) return 0;
      if (count >= 2147483647) count = Infinity;
      assert(__emscripten_main_thread_futex > 0);
      var mainThreadWaitAddress = Atomics.load(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2);
      var mainThreadWoken = 0;
      if (mainThreadWaitAddress == addr) {
        assert(!ENVIRONMENT_IS_WEB);
        var loadedAddr = Atomics.compareExchange(
          GROWABLE_HEAP_I32(),
          __emscripten_main_thread_futex >> 2,
          mainThreadWaitAddress,
          0,
        );
        if (loadedAddr == mainThreadWaitAddress) {
          --count;
          mainThreadWoken = 1;
          if (count <= 0) return 1;
        }
      }
      var ret = Atomics.notify(GROWABLE_HEAP_I32(), addr >> 2, count);
      if (ret >= 0) return ret + mainThreadWoken;
      throw 'Atomics.notify returned an unexpected value ' + ret;
    }
    Module['_emscripten_futex_wake'] = _emscripten_futex_wake;
    function killThread(pthread_ptr) {
      if (ENVIRONMENT_IS_PTHREAD)
        throw 'Internal Error! killThread() can only ever be called from main application thread!';
      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in killThread!';
      GROWABLE_HEAP_I32()[(pthread_ptr + 12) >> 2] = 0;
      var pthread = PThread.pthreads[pthread_ptr];
      pthread.worker.terminate();
      PThread.freeThreadData(pthread);
      PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
      pthread.worker.pthread = undefined;
    }
    function cancelThread(pthread_ptr) {
      if (ENVIRONMENT_IS_PTHREAD)
        throw 'Internal Error! cancelThread() can only ever be called from main application thread!';
      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in cancelThread!';
      var pthread = PThread.pthreads[pthread_ptr];
      pthread.worker.postMessage({ cmd: 'cancel' });
    }
    function cleanupThread(pthread_ptr) {
      if (ENVIRONMENT_IS_PTHREAD)
        throw 'Internal Error! cleanupThread() can only ever be called from main application thread!';
      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in cleanupThread!';
      GROWABLE_HEAP_I32()[(pthread_ptr + 12) >> 2] = 0;
      var pthread = PThread.pthreads[pthread_ptr];
      if (pthread) {
        var worker = pthread.worker;
        PThread.returnWorkerToPool(worker);
      }
    }
    var PThread = {
      unusedWorkers: [],
      runningWorkers: [],
      initMainThreadBlock: function () {
        assert(!ENVIRONMENT_IS_PTHREAD);
        var pthreadPoolSize = 2;
        for (var i = 0; i < pthreadPoolSize; ++i) {
          PThread.allocateUnusedWorker();
        }
      },
      initRuntime: function () {
        var tb = _malloc(228);
        for (var i = 0; i < 228 / 4; ++i) GROWABLE_HEAP_U32()[tb / 4 + i] = 0;
        GROWABLE_HEAP_I32()[(tb + 12) >> 2] = tb;
        var headPtr = tb + 152;
        GROWABLE_HEAP_I32()[headPtr >> 2] = headPtr;
        var tlsMemory = _malloc(512);
        for (var i = 0; i < 128; ++i) GROWABLE_HEAP_U32()[tlsMemory / 4 + i] = 0;
        Atomics.store(GROWABLE_HEAP_U32(), (tb + 100) >> 2, tlsMemory);
        Atomics.store(GROWABLE_HEAP_U32(), (tb + 40) >> 2, tb);
        __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1);
        _emscripten_register_main_browser_thread_id(tb);
      },
      initWorker: function () {
        readyPromiseResolve(Module);
      },
      pthreads: {},
      threadExitHandlers: [],
      setThreadStatus: function () {},
      runExitHandlers: function () {
        while (PThread.threadExitHandlers.length > 0) {
          PThread.threadExitHandlers.pop()();
        }
        if (ENVIRONMENT_IS_PTHREAD && _pthread_self()) ___pthread_tsd_run_dtors();
      },
      threadExit: function (exitCode) {
        var tb = _pthread_self();
        if (tb) {
          err('Pthread 0x' + tb.toString(16) + ' exited.');
          Atomics.store(GROWABLE_HEAP_U32(), (tb + 4) >> 2, exitCode);
          Atomics.store(GROWABLE_HEAP_U32(), (tb + 0) >> 2, 1);
          Atomics.store(GROWABLE_HEAP_U32(), (tb + 56) >> 2, 1);
          Atomics.store(GROWABLE_HEAP_U32(), (tb + 60) >> 2, 0);
          PThread.runExitHandlers();
          _emscripten_futex_wake(tb + 0, 2147483647);
          __emscripten_thread_init(0, 0, 0);
          if (ENVIRONMENT_IS_PTHREAD) {
            postMessage({ cmd: 'exit' });
          }
        }
      },
      threadCancel: function () {
        PThread.runExitHandlers();
        var tb = _pthread_self();
        Atomics.store(GROWABLE_HEAP_U32(), (tb + 4) >> 2, -1);
        Atomics.store(GROWABLE_HEAP_U32(), (tb + 0) >> 2, 1);
        _emscripten_futex_wake(tb + 0, 2147483647);
        __emscripten_thread_init(0, 0, 0);
        postMessage({ cmd: 'cancelDone' });
      },
      terminateAllThreads: function () {
        for (var t in PThread.pthreads) {
          var pthread = PThread.pthreads[t];
          if (pthread && pthread.worker) {
            PThread.returnWorkerToPool(pthread.worker);
          }
        }
        PThread.pthreads = {};
        for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
          var worker = PThread.unusedWorkers[i];
          assert(!worker.pthread);
          worker.terminate();
        }
        PThread.unusedWorkers = [];
        for (var i = 0; i < PThread.runningWorkers.length; ++i) {
          var worker = PThread.runningWorkers[i];
          var pthread = worker.pthread;
          assert(pthread, 'This Worker should have a pthread it is executing');
          PThread.freeThreadData(pthread);
          worker.terminate();
        }
        PThread.runningWorkers = [];
      },
      freeThreadData: function (pthread) {
        if (!pthread) return;
        if (pthread.threadInfoStruct) {
          var tlsMemory = GROWABLE_HEAP_I32()[(pthread.threadInfoStruct + 100) >> 2];
          GROWABLE_HEAP_I32()[(pthread.threadInfoStruct + 100) >> 2] = 0;
          _free(tlsMemory);
          _free(pthread.threadInfoStruct);
        }
        pthread.threadInfoStruct = 0;
        if (pthread.allocatedOwnStack && pthread.stackBase) _free(pthread.stackBase);
        pthread.stackBase = 0;
        if (pthread.worker) pthread.worker.pthread = null;
      },
      returnWorkerToPool: function (worker) {
        delete PThread.pthreads[worker.pthread.thread];
        PThread.unusedWorkers.push(worker);
        PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
        PThread.freeThreadData(worker.pthread);
        worker.pthread = undefined;
      },
      receiveObjectTransfer: function (data) {},
      loadWasmModuleToWorker: function (worker, onFinishedLoading) {
        worker.onmessage = function (e) {
          var d = e['data'];
          var cmd = d['cmd'];
          if (worker.pthread) PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
          if (d['targetThread'] && d['targetThread'] != _pthread_self()) {
            var thread = PThread.pthreads[d.targetThread];
            if (thread) {
              thread.worker.postMessage(e.data, d['transferList']);
            } else {
              console.error(
                'Internal error! Worker sent a message "' +
                  cmd +
                  '" to target pthread ' +
                  d['targetThread'] +
                  ', but that thread no longer exists!',
              );
            }
            PThread.currentProxiedOperationCallerThread = undefined;
            return;
          }
          if (cmd === 'processQueuedMainThreadWork') {
            _emscripten_main_thread_process_queued_calls();
          } else if (cmd === 'spawnThread') {
            spawnThread(e.data);
          } else if (cmd === 'cleanupThread') {
            cleanupThread(d['thread']);
          } else if (cmd === 'killThread') {
            killThread(d['thread']);
          } else if (cmd === 'cancelThread') {
            cancelThread(d['thread']);
          } else if (cmd === 'loaded') {
            worker.loaded = true;
            if (onFinishedLoading) onFinishedLoading(worker);
            if (worker.runPthread) {
              worker.runPthread();
              delete worker.runPthread;
            }
          } else if (cmd === 'print') {
            out('Thread ' + d['threadId'] + ': ' + d['text']);
          } else if (cmd === 'printErr') {
            err('Thread ' + d['threadId'] + ': ' + d['text']);
          } else if (cmd === 'alert') {
            alert('Thread ' + d['threadId'] + ': ' + d['text']);
          } else if (cmd === 'exit') {
            var detached = worker.pthread && Atomics.load(GROWABLE_HEAP_U32(), (worker.pthread.thread + 64) >> 2);
            if (detached) {
              PThread.returnWorkerToPool(worker);
            }
          } else if (cmd === 'exitProcess') {
            err('exitProcess requested by worker');
            try {
              exit(d['returnCode']);
            } catch (e) {
              if (e instanceof ExitStatus) return;
              throw e;
            }
          } else if (cmd === 'cancelDone') {
            PThread.returnWorkerToPool(worker);
          } else if (cmd === 'objectTransfer') {
            PThread.receiveObjectTransfer(e.data);
          } else if (e.data.target === 'setimmediate') {
            worker.postMessage(e.data);
          } else {
            err('worker sent an unknown command ' + cmd);
          }
          PThread.currentProxiedOperationCallerThread = undefined;
        };
        worker.onerror = function (e) {
          err('pthread sent an error! ' + e.filename + ':' + e.lineno + ': ' + e.message);
        };
        if (ENVIRONMENT_IS_NODE) {
          worker.on('message', function (data) {
            worker.onmessage({ data: data });
          });
          worker.on('error', function (data) {
            worker.onerror(data);
          });
          worker.on('exit', function (data) {});
        }
        assert(wasmMemory instanceof WebAssembly.Memory, 'WebAssembly memory should have been loaded by now!');
        assert(wasmModule instanceof WebAssembly.Module, 'WebAssembly Module should have been loaded by now!');
        worker.postMessage({
          cmd: 'load',
          urlOrBlob: Module['mainScriptUrlOrBlob'] || _scriptDir,
          wasmMemory: wasmMemory,
          wasmModule: wasmModule,
        });
      },
      allocateUnusedWorker: function () {
        var pthreadMainJs = locateFile('emHdBindings.worker.js');
        PThread.unusedWorkers.push(new Worker(pthreadMainJs));
      },
      getNewWorker: function () {
        if (PThread.unusedWorkers.length == 0) {
          PThread.allocateUnusedWorker();
          PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
        }
        if (PThread.unusedWorkers.length > 0) return PThread.unusedWorkers.pop();
        else return null;
      },
      busySpinWait: function (msecs) {
        var t = performance.now() + msecs;
        while (performance.now() < t) {}
      },
    };
    function establishStackSpace(stackTop, stackMax) {
      _emscripten_stack_set_limits(stackTop, stackMax);
      stackRestore(stackTop);
      writeStackCookie();
    }
    Module['establishStackSpace'] = establishStackSpace;
    function getNoExitRuntime() {
      return noExitRuntime;
    }
    Module['getNoExitRuntime'] = getNoExitRuntime;
    function invokeEntryPoint(ptr, arg) {
      return wasmTable.get(ptr)(arg);
    }
    Module['invokeEntryPoint'] = invokeEntryPoint;
    function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        try {
          throw new Error();
        } catch (e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }
    function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }
    function ___assert_fail(condition, filename, line, func) {
      abort(
        'Assertion failed: ' +
          UTF8ToString(condition) +
          ', at: ' +
          [
            filename ? UTF8ToString(filename) : 'unknown filename',
            line,
            func ? UTF8ToString(func) : 'unknown function',
          ],
      );
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function () {
        var t = process['hrtime']();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else if (ENVIRONMENT_IS_PTHREAD) {
      _emscripten_get_now = function () {
        return performance.now() - Module['__performance_now_clock_drift'];
      };
    } else if (typeof dateNow !== 'undefined') {
      _emscripten_get_now = dateNow;
    } else
      _emscripten_get_now = function () {
        return performance.now();
      };
    var _emscripten_get_now_is_monotonic = true;
    function setErrNo(value) {
      GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
      return value;
    }
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      GROWABLE_HEAP_I32()[tp >> 2] = (now / 1e3) | 0;
      GROWABLE_HEAP_I32()[(tp + 4) >> 2] = ((now % 1e3) * 1e3 * 1e3) | 0;
      return 0;
    }
    function ___clock_gettime(a0, a1) {
      return _clock_gettime(a0, a1);
    }
    var ExceptionInfoAttrs = {
      DESTRUCTOR_OFFSET: 0,
      REFCOUNT_OFFSET: 4,
      TYPE_OFFSET: 8,
      CAUGHT_OFFSET: 12,
      RETHROWN_OFFSET: 13,
      SIZE: 16,
    };
    function ___cxa_allocate_exception(size) {
      return _malloc(size + ExceptionInfoAttrs.SIZE) + ExceptionInfoAttrs.SIZE;
    }
    function _atexit(func, arg) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, func, arg);
    }
    function ___cxa_atexit(a0, a1) {
      return _atexit(a0, a1);
    }
    function _pthread_cleanup_push(routine, arg) {
      PThread.threadExitHandlers.push(function () {
        wasmTable.get(routine)(arg);
      });
    }
    function ___cxa_thread_atexit(a0, a1) {
      return _pthread_cleanup_push(a0, a1);
    }
    function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - ExceptionInfoAttrs.SIZE;
      this.set_type = function (type) {
        GROWABLE_HEAP_I32()[(this.ptr + ExceptionInfoAttrs.TYPE_OFFSET) >> 2] = type;
      };
      this.get_type = function () {
        return GROWABLE_HEAP_I32()[(this.ptr + ExceptionInfoAttrs.TYPE_OFFSET) >> 2];
      };
      this.set_destructor = function (destructor) {
        GROWABLE_HEAP_I32()[(this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET) >> 2] = destructor;
      };
      this.get_destructor = function () {
        return GROWABLE_HEAP_I32()[(this.ptr + ExceptionInfoAttrs.DESTRUCTOR_OFFSET) >> 2];
      };
      this.set_refcount = function (refcount) {
        GROWABLE_HEAP_I32()[(this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2] = refcount;
      };
      this.set_caught = function (caught) {
        caught = caught ? 1 : 0;
        GROWABLE_HEAP_I8()[(this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET) >> 0] = caught;
      };
      this.get_caught = function () {
        return GROWABLE_HEAP_I8()[(this.ptr + ExceptionInfoAttrs.CAUGHT_OFFSET) >> 0] != 0;
      };
      this.set_rethrown = function (rethrown) {
        rethrown = rethrown ? 1 : 0;
        GROWABLE_HEAP_I8()[(this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET) >> 0] = rethrown;
      };
      this.get_rethrown = function () {
        return GROWABLE_HEAP_I8()[(this.ptr + ExceptionInfoAttrs.RETHROWN_OFFSET) >> 0] != 0;
      };
      this.init = function (type, destructor) {
        this.set_type(type);
        this.set_destructor(destructor);
        this.set_refcount(0);
        this.set_caught(false);
        this.set_rethrown(false);
      };
      this.add_ref = function () {
        Atomics.add(GROWABLE_HEAP_I32(), (this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2, 1);
      };
      this.release_ref = function () {
        var prev = Atomics.sub(GROWABLE_HEAP_I32(), (this.ptr + ExceptionInfoAttrs.REFCOUNT_OFFSET) >> 2, 1);
        assert(prev > 0);
        return prev === 1;
      };
    }
    var exceptionLast = 0;
    var uncaughtExceptionCount = 0;
    function ___cxa_throw(ptr, type, destructor) {
      var info = new ExceptionInfo(ptr);
      info.init(type, destructor);
      exceptionLast = ptr;
      uncaughtExceptionCount++;
      throw (
        ptr +
        ' - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.'
      );
    }
    var PATH = {
      splitPath: function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
      normalizeArray: function (parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
      normalize: function (path) {
        var isAbsolute = path.charAt(0) === '/',
          trailingSlash = path.substr(-1) === '/';
        path = PATH.normalizeArray(
          path.split('/').filter(function (p) {
            return !!p;
          }),
          !isAbsolute,
        ).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
      dirname: function (path) {
        var result = PATH.splitPath(path),
          root = result[0],
          dir = result[1];
        if (!root && !dir) {
          return '.';
        }
        if (dir) {
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
      basename: function (path) {
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, '');
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash + 1);
      },
      extname: function (path) {
        return PATH.splitPath(path)[3];
      },
      join: function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },
      join2: function (l, r) {
        return PATH.normalize(l + '/' + r);
      },
    };
    function getRandomDevice() {
      if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
        var randomBuffer = new Uint8Array(1);
        return function () {
          crypto.getRandomValues(randomBuffer);
          return randomBuffer[0];
        };
      } else if (ENVIRONMENT_IS_NODE) {
        try {
          var crypto_module = require('crypto');
          return function () {
            return crypto_module['randomBytes'](1)[0];
          };
        } catch (e) {}
      }
      return function () {
        abort(
          'no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };',
        );
      };
    }
    var PATH_FS = {
      resolve: function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = i >= 0 ? arguments[i] : FS.cwd();
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return '';
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        resolvedPath = PATH.normalizeArray(
          resolvedPath.split('/').filter(function (p) {
            return !!p;
          }),
          !resolvedAbsolute,
        ).join('/');
        return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
      },
      relative: function (from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
    };
    var TTY = {
      ttys: [],
      init: function () {},
      shutdown: function () {},
      register: function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
      stream_ops: {
        open: function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
        close: function (stream) {
          stream.tty.ops.flush(stream.tty);
        },
        flush: function (stream) {
          stream.tty.ops.flush(stream.tty);
        },
        read: function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset + i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
        write: function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        },
      },
      default_tty_ops: {
        get_char: function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch (e) {
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else if (typeof window != 'undefined' && typeof window.prompt == 'function') {
              result = window.prompt('Input: ');
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },
        put_char: function (tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        flush: function (tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
      },
      default_tty1_ops: {
        put_char: function (tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
        flush: function (tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
      },
    };
    function mmapAlloc(size) {
      var alignedSize = alignMemory(size, 16384);
      var ptr = _malloc(alignedSize);
      while (size < alignedSize) GROWABLE_HEAP_I8()[ptr + size++] = 0;
      return ptr;
    }
    var MEMFS = {
      ops_table: null,
      mount: function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 511, 0);
      },
      createNode: function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink,
              },
              stream: { llseek: MEMFS.stream_ops.llseek },
            },
            file: {
              node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync,
              },
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink,
              },
              stream: {},
            },
            chrdev: {
              node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr },
              stream: FS.chrdev_stream_ops,
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0;
          node.contents = null;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },
      getFileDataAsRegularArray: function (node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr;
        }
        return node.contents;
      },
      getFileDataAsTypedArray: function (node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents);
      },
      expandFileStorage: function (node, newCapacity) {
        newCapacity >>>= 0;
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        return;
      },
      resizeFileStorage: function (node, newSize) {
        newSize >>>= 0;
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null;
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize);
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
          }
          node.usedBytes = newSize;
          return;
        }
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },
      node_ops: {
        getattr: function (node) {
          var attr = {};
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
        setattr: function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
        lookup: function (parent, name) {
          throw FS.genericErrors[44];
        },
        mknod: function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
        rename: function (old_node, new_dir, new_name) {
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {}
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },
        unlink: function (parent, name) {
          delete parent.contents[name];
        },
        rmdir: function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },
        readdir: function (node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
        symlink: function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
          node.link = oldpath;
          return node;
        },
        readlink: function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
      },
      stream_ops: {
        read: function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) {
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
        write: function (stream, buffer, offset, length, position, canOwn) {
          assert(!(buffer instanceof ArrayBuffer));
          if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
            canOwn = false;
          }
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
          if (buffer.subarray && (!node.contents || node.contents.subarray)) {
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) {
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) {
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
          MEMFS.expandFileStorage(node, position + length);
          if (node.contents.subarray && buffer.subarray) {
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
              node.contents[position + i] = buffer[offset + i];
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
        llseek: function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
        allocate: function (stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
        mmap: function (stream, address, length, position, prot, flags) {
          assert(address === 0);
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          if (!(flags & 2) && contents.buffer === buffer) {
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            ptr >>>= 0;
            GROWABLE_HEAP_I8().set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },
        msync: function (stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            return 0;
          }
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          return 0;
        },
      },
    };
    var ERRNO_MESSAGES = {
      0: 'Success',
      1: 'Arg list too long',
      2: 'Permission denied',
      3: 'Address already in use',
      4: 'Address not available',
      5: 'Address family not supported by protocol family',
      6: 'No more processes',
      7: 'Socket already connected',
      8: 'Bad file number',
      9: 'Trying to read unreadable message',
      10: 'Mount device busy',
      11: 'Operation canceled',
      12: 'No children',
      13: 'Connection aborted',
      14: 'Connection refused',
      15: 'Connection reset by peer',
      16: 'File locking deadlock error',
      17: 'Destination address required',
      18: 'Math arg out of domain of func',
      19: 'Quota exceeded',
      20: 'File exists',
      21: 'Bad address',
      22: 'File too large',
      23: 'Host is unreachable',
      24: 'Identifier removed',
      25: 'Illegal byte sequence',
      26: 'Connection already in progress',
      27: 'Interrupted system call',
      28: 'Invalid argument',
      29: 'I/O error',
      30: 'Socket is already connected',
      31: 'Is a directory',
      32: 'Too many symbolic links',
      33: 'Too many open files',
      34: 'Too many links',
      35: 'Message too long',
      36: 'Multihop attempted',
      37: 'File or path name too long',
      38: 'Network interface is not configured',
      39: 'Connection reset by network',
      40: 'Network is unreachable',
      41: 'Too many open files in system',
      42: 'No buffer space available',
      43: 'No such device',
      44: 'No such file or directory',
      45: 'Exec format error',
      46: 'No record locks available',
      47: 'The link has been severed',
      48: 'Not enough core',
      49: 'No message of desired type',
      50: 'Protocol not available',
      51: 'No space left on device',
      52: 'Function not implemented',
      53: 'Socket is not connected',
      54: 'Not a directory',
      55: 'Directory not empty',
      56: 'State not recoverable',
      57: 'Socket operation on non-socket',
      59: 'Not a typewriter',
      60: 'No such device or address',
      61: 'Value too large for defined data type',
      62: 'Previous owner died',
      63: 'Not super-user',
      64: 'Broken pipe',
      65: 'Protocol error',
      66: 'Unknown protocol',
      67: 'Protocol wrong type for socket',
      68: 'Math result not representable',
      69: 'Read only file system',
      70: 'Illegal seek',
      71: 'No such process',
      72: 'Stale file handle',
      73: 'Connection timed out',
      74: 'Text file busy',
      75: 'Cross-device link',
      100: 'Device not a stream',
      101: 'Bad font file fmt',
      102: 'Invalid slot',
      103: 'Invalid request code',
      104: 'No anode',
      105: 'Block device required',
      106: 'Channel number out of range',
      107: 'Level 3 halted',
      108: 'Level 3 reset',
      109: 'Link number out of range',
      110: 'Protocol driver not attached',
      111: 'No CSI structure available',
      112: 'Level 2 halted',
      113: 'Invalid exchange',
      114: 'Invalid request descriptor',
      115: 'Exchange full',
      116: 'No data (for no delay io)',
      117: 'Timer expired',
      118: 'Out of streams resources',
      119: 'Machine is not on the network',
      120: 'Package not installed',
      121: 'The object is remote',
      122: 'Advertise error',
      123: 'Srmount error',
      124: 'Communication error on send',
      125: 'Cross mount point (not really error)',
      126: 'Given log. name not unique',
      127: 'f.d. invalid for this operation',
      128: 'Remote address changed',
      129: 'Can   access a needed shared lib',
      130: 'Accessing a corrupted shared lib',
      131: '.lib section in a.out corrupted',
      132: 'Attempting to link in too many libs',
      133: 'Attempting to exec a shared library',
      135: 'Streams pipe error',
      136: 'Too many users',
      137: 'Socket type not supported',
      138: 'Not supported',
      139: 'Protocol family not supported',
      140: "Can't send after socket shutdown",
      141: 'Too many references',
      142: 'Host is down',
      148: 'No medium (in tape drive)',
      156: 'Level 2 not synchronized',
    };
    var FS = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: '/',
      initialized: false,
      ignorePermissions: true,
      trackingDelegate: {},
      tracking: { openFlags: { READ: 1, WRITE: 2 } },
      ErrnoError: null,
      genericErrors: {},
      filesystems: null,
      syncFSRequests: 0,
      lookupPath: function (path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path) return { path: '', node: null };
        var defaults = { follow_mount: true, recurse_count: 0 };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
        if (opts.recurse_count > 8) {
          throw new FS.ErrnoError(32);
        }
        var parts = PATH.normalizeArray(
          path.split('/').filter(function (p) {
            return !!p;
          }),
          false,
        );
        var current = FS.root;
        var current_path = '/';
        for (var i = 0; i < parts.length; i++) {
          var islast = i === parts.length - 1;
          if (islast && opts.parent) {
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },
      getPath: function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length - 1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },
      hashName: function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
      hashAddNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
      hashRemoveNode: function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
      lookupNode: function (parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        return FS.lookup(parent, name);
      },
      createNode: function (parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
        FS.hashAddNode(node);
        return node;
      },
      destroyNode: function (node) {
        FS.hashRemoveNode(node);
      },
      isRoot: function (node) {
        return node === node.parent;
      },
      isMountpoint: function (node) {
        return !!node.mounted;
      },
      isFile: function (mode) {
        return (mode & 61440) === 32768;
      },
      isDir: function (mode) {
        return (mode & 61440) === 16384;
      },
      isLink: function (mode) {
        return (mode & 61440) === 40960;
      },
      isChrdev: function (mode) {
        return (mode & 61440) === 8192;
      },
      isBlkdev: function (mode) {
        return (mode & 61440) === 24576;
      },
      isFIFO: function (mode) {
        return (mode & 61440) === 4096;
      },
      isSocket: function (mode) {
        return (mode & 49152) === 49152;
      },
      flagModes: { r: 0, 'r+': 2, w: 577, 'w+': 578, a: 1089, 'a+': 1090 },
      modeStringToFlags: function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },
      flagsToPermissionString: function (flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if (flag & 512) {
          perms += 'w';
        }
        return perms;
      },
      nodePermissions: function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
      mayLookup: function (dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
      mayCreate: function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {}
        return FS.nodePermissions(dir, 'wx');
      },
      mayDelete: function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
      mayOpen: function (node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || flags & 512) {
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
      MAX_OPEN_FDS: 4096,
      nextfd: function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
      getStream: function (fd) {
        return FS.streams[fd];
      },
      createStream: function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function () {};
          FS.FSStream.prototype = {
            object: {
              get: function () {
                return this.node;
              },
              set: function (val) {
                this.node = val;
              },
            },
            isRead: {
              get: function () {
                return (this.flags & 2097155) !== 1;
              },
            },
            isWrite: {
              get: function () {
                return (this.flags & 2097155) !== 0;
              },
            },
            isAppend: {
              get: function () {
                return this.flags & 1024;
              },
            },
          };
        }
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
      closeStream: function (fd) {
        FS.streams[fd] = null;
      },
      chrdev_stream_ops: {
        open: function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          stream.stream_ops = device.stream_ops;
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
        llseek: function () {
          throw new FS.ErrnoError(70);
        },
      },
      major: function (dev) {
        return dev >> 8;
      },
      minor: function (dev) {
        return dev & 255;
      },
      makedev: function (ma, mi) {
        return (ma << 8) | mi;
      },
      registerDevice: function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
      getDevice: function (dev) {
        return FS.devices[dev];
      },
      getMounts: function (mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
          var m = check.pop();
          mounts.push(m);
          check.push.apply(check, m.mounts);
        }
        return mounts;
      },
      syncfs: function (populate, callback) {
        if (typeof populate === 'function') {
          callback = populate;
          populate = false;
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
          err(
            'warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work',
          );
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        }
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
      mount: function (type, opts, mountpoint) {
        if (typeof type === 'string') {
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
          mountpoint = lookup.path;
          node = lookup.node;
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
        var mount = { type: type, opts: opts, mountpoint: mountpoint, mounts: [] };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          node.mounted = mount;
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
        return mountRoot;
      },
      unmount: function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
          while (current) {
            var next = current.name_next;
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
            current = next;
          }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
      lookup: function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
      mknod: function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
      create: function (path, mode) {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
      mkdir: function (path, mode) {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
      mkdirTree: function (path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
        }
      },
      mkdev: function (path, mode, dev) {
        if (typeof dev === 'undefined') {
          dev = mode;
          mode = 438;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
      symlink: function (oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
      rename: function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {}
        if (old_node === new_node) {
          return;
        }
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch (e) {
          err(
            "FS.trackingDelegate['willMovePath']('" +
              old_path +
              "', '" +
              new_path +
              "') threw an exception: " +
              e.message,
          );
        }
        FS.hashRemoveNode(old_node);
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch (e) {
          err(
            "FS.trackingDelegate['onMovePath']('" +
              old_path +
              "', '" +
              new_path +
              "') threw an exception: " +
              e.message,
          );
        }
      },
      rmdir: function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readdir: function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
      unlink: function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch (e) {
          err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch (e) {
          err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
        }
      },
      readlink: function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
      stat: function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
      lstat: function (path) {
        return FS.stat(path, true);
      },
      chmod: function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { mode: (mode & 4095) | (node.mode & ~4095), timestamp: Date.now() });
      },
      lchmod: function (path, mode) {
        FS.chmod(path, mode, true);
      },
      fchmod: function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },
      chown: function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, { timestamp: Date.now() });
      },
      lchown: function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
      fchown: function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },
      truncate: function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
      },
      ftruncate: function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
      utime: function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
      },
      open: function (path, flags, mode, fd_start, fd_end) {
        if (path === '') {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 : mode;
        if (flags & 64) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
            node = lookup.node;
          } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
          if (node) {
            if (flags & 128) {
              throw new FS.ErrnoError(20);
            }
          } else {
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        if (flags & 512) {
          FS.truncate(node, 0);
        }
        flags &= ~(128 | 512 | 131072);
        var stream = FS.createStream(
          {
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false,
          },
          fd_start,
          fd_end,
        );
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err('FS.trackingDelegate error on read file: ' + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch (e) {
          err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
        }
        return stream;
      },
      close: function (stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null;
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
      isClosed: function (stream) {
        return stream.fd === null;
      },
      llseek: function (stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
      read: function (stream, buffer, offset, length, position) {
        offset >>>= 0;
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
      write: function (stream, buffer, offset, length, position, canOwn) {
        offset >>>= 0;
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch (e) {
          err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
        }
        return bytesWritten;
      },
      allocate: function (stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
      mmap: function (stream, address, length, position, prot, flags) {
        address >>>= 0;
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },
      msync: function (stream, buffer, offset, length, mmapFlags) {
        offset >>>= 0;
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
      munmap: function (stream) {
        return 0;
      },
      ioctl: function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
      readFile: function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
      writeFile: function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
      cwd: function () {
        return FS.currentPath;
      },
      chdir: function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
      createDefaultDirectories: function () {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
      createDefaultDevices: function () {
        FS.mkdir('/dev');
        FS.registerDevice(FS.makedev(1, 3), {
          read: function () {
            return 0;
          },
          write: function (stream, buffer, offset, length, pos) {
            return length;
          },
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
      createSpecialDirectories: function () {
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount(
          {
            mount: function () {
              var node = FS.createNode('/proc/self', 'fd', 16384 | 511, 73);
              node.node_ops = {
                lookup: function (parent, name) {
                  var fd = +name;
                  var stream = FS.getStream(fd);
                  if (!stream) throw new FS.ErrnoError(8);
                  var ret = {
                    parent: null,
                    mount: { mountpoint: 'fake' },
                    node_ops: {
                      readlink: function () {
                        return stream.path;
                      },
                    },
                  };
                  ret.parent = ret;
                  return ret;
                },
              };
              return node;
            },
          },
          {},
          '/proc/self/fd',
        );
      },
      createStandardStreams: function () {
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },
      ensureErrnoError: function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = function (errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
          if (this.stack) {
            Object.defineProperty(this, 'stack', { value: new Error().stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(function (code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },
      staticInit: function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = { MEMFS: MEMFS };
      },
      init: function (input, output, error) {
        assert(
          !FS.init.initialized,
          'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)',
        );
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
        FS.createStandardStreams();
      },
      quit: function () {
        FS.init.initialized = false;
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
      getMode: function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },
      findObject: function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },
      analyzePath: function (path, dontResolveLastLink) {
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {}
        var ret = {
          isRoot: false,
          exists: false,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: false,
          parentPath: null,
          parentObject: null,
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        }
        return ret;
      },
      createPath: function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {}
          parent = current;
        }
        return current;
      },
      createFile: function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
      createDataFile: function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },
      createDevice: function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
          open: function (stream) {
            stream.seekable = false;
          },
          close: function (stream) {
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function (stream, buffer, offset, length, pos) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset + i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function (stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset + i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          },
        });
        return FS.mkdev(path, mode, dev);
      },
      forceLoadFile: function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error(
            'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
          );
        } else if (read_) {
          try {
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },
      createLazyFile: function (parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize) | 0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
            throw new Error("Couldn't load " + url + '. Status: ' + xhr.status);
          var datalength = Number(xhr.getResponseHeader('Content-length'));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader('Accept-Ranges')) && header === 'bytes';
          var usesGzip = (header = xhr.getResponseHeader('Content-Encoding')) && header === 'gzip';
          var chunkSize = 1024 * 1024;
          if (!hasByteServing) chunkSize = datalength;
          var doXHR = function (from, to) {
            if (from > to) throw new Error('invalid range (' + from + ', ' + to + ') or no bytes requested!');
            if (to > datalength - 1) throw new Error('only ' + datalength + ' bytes available! programmer error!');
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader('Range', 'bytes=' + from + '-' + to);
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
            xhr.send(null);
            if (!((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304))
              throw new Error("Couldn't load " + url + '. Status: ' + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(xhr.response || []);
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          };
          var lazyArray = this;
          lazyArray.setDataGetter(function (chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray.chunks[chunkNum] === 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] === 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out('LazyFiles on gzip forces download of the whole file when length is accessed');
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER)
            throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              },
            },
            chunkSize: {
              get: function () {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              },
            },
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        Object.defineProperties(node, {
          usedBytes: {
            get: function () {
              return this.contents.length;
            },
          },
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function (key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length) return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },
      createPreloadedFile: function (
        parent,
        name,
        url,
        canRead,
        canWrite,
        onload,
        onerror,
        dontCreateFile,
        canOwn,
        preFinish,
      ) {
        Browser.init();
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname);
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function (plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function () {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(
            url,
            function (byteArray) {
              processData(byteArray);
            },
            onerror,
          );
        } else {
          processData(url);
        }
      },
      indexedDB: function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },
      DB_NAME: function () {
        return 'EM_FS_' + window.location.pathname;
      },
      DB_VERSION: 20,
      DB_STORE_NAME: 'FILE_DATA',
      saveFilesToDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0,
            fail = 0,
            total = paths.length;
          function finish() {
            if (fail == 0) onload();
            else onerror();
          }
          paths.forEach(function (path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() {
              ok++;
              if (ok + fail == total) finish();
            };
            putRequest.onerror = function putRequest_onerror() {
              fail++;
              if (ok + fail == total) finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      loadFilesFromDB: function (paths, onload, onerror) {
        onload = onload || function () {};
        onerror = onerror || function () {};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch (e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0,
            fail = 0,
            total = paths.length;
          function finish() {
            if (fail == 0) onload();
            else onerror();
          }
          paths.forEach(function (path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() {
              fail++;
              if (ok + fail == total) finish();
            };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },
      absolutePath: function () {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
      createFolder: function () {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
      createLink: function () {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
      joinPath: function () {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
      mmapAlloc: function () {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },
      standardizePath: function () {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      },
    };
    var SYSCALLS = {
      mappings: {},
      DEFAULT_POLLMASK: 5,
      umask: 511,
      calculateAt: function (dirfd, path) {
        if (path[0] !== '/') {
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },
      doStat: function (func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            return -54;
          }
          throw e;
        }
        GROWABLE_HEAP_I32()[buf >> 2] = stat.dev;
        GROWABLE_HEAP_I32()[(buf + 4) >> 2] = 0;
        GROWABLE_HEAP_I32()[(buf + 8) >> 2] = stat.ino;
        GROWABLE_HEAP_I32()[(buf + 12) >> 2] = stat.mode;
        GROWABLE_HEAP_I32()[(buf + 16) >> 2] = stat.nlink;
        GROWABLE_HEAP_I32()[(buf + 20) >> 2] = stat.uid;
        GROWABLE_HEAP_I32()[(buf + 24) >> 2] = stat.gid;
        GROWABLE_HEAP_I32()[(buf + 28) >> 2] = stat.rdev;
        GROWABLE_HEAP_I32()[(buf + 32) >> 2] = 0;
        (tempI64 = [
          stat.size >>> 0,
          ((tempDouble = stat.size),
          +Math.abs(tempDouble) >= 1
            ? tempDouble > 0
              ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
              : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
            : 0),
        ]),
          (GROWABLE_HEAP_I32()[(buf + 40) >> 2] = tempI64[0]),
          (GROWABLE_HEAP_I32()[(buf + 44) >> 2] = tempI64[1]);
        GROWABLE_HEAP_I32()[(buf + 48) >> 2] = 4096;
        GROWABLE_HEAP_I32()[(buf + 52) >> 2] = stat.blocks;
        GROWABLE_HEAP_I32()[(buf + 56) >> 2] = (stat.atime.getTime() / 1e3) | 0;
        GROWABLE_HEAP_I32()[(buf + 60) >> 2] = 0;
        GROWABLE_HEAP_I32()[(buf + 64) >> 2] = (stat.mtime.getTime() / 1e3) | 0;
        GROWABLE_HEAP_I32()[(buf + 68) >> 2] = 0;
        GROWABLE_HEAP_I32()[(buf + 72) >> 2] = (stat.ctime.getTime() / 1e3) | 0;
        GROWABLE_HEAP_I32()[(buf + 76) >> 2] = 0;
        (tempI64 = [
          stat.ino >>> 0,
          ((tempDouble = stat.ino),
          +Math.abs(tempDouble) >= 1
            ? tempDouble > 0
              ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
              : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
            : 0),
        ]),
          (GROWABLE_HEAP_I32()[(buf + 80) >> 2] = tempI64[0]),
          (GROWABLE_HEAP_I32()[(buf + 84) >> 2] = tempI64[1]);
        return 0;
      },
      doMsync: function (addr, stream, len, flags, offset) {
        var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
      doMkdir: function (path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === '/') path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0;
      },
      doMknod: function (path, mode, dev) {
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },
      doReadlink: function (path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = GROWABLE_HEAP_I8()[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        GROWABLE_HEAP_I8()[buf + len] = endChar;
        return len;
      },
      doAccess: function (path, amode) {
        if (amode & ~7) {
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },
      doDup: function (path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },
      doReadv: function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = GROWABLE_HEAP_I32()[(iov + i * 8) >> 2];
          var len = GROWABLE_HEAP_I32()[(iov + (i * 8 + 4)) >> 2];
          var curr = FS.read(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break;
        }
        return ret;
      },
      doWritev: function (stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = GROWABLE_HEAP_I32()[(iov + i * 8) >> 2];
          var len = GROWABLE_HEAP_I32()[(iov + (i * 8 + 4)) >> 2];
          var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },
      varargs: undefined,
      get: function () {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = GROWABLE_HEAP_I32()[(SYSCALLS.varargs - 4) >> 2];
        return ret;
      },
      getStr: function (ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
      getStreamFromFD: function (fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },
      get64: function (low, high) {
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },
    };
    function ___sys_access(path, amode) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, path, amode);
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doAccess(path, amode);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_chmod(path, mode) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, path, mode);
      try {
        path = SYSCALLS.getStr(path);
        FS.chmod(path, mode);
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_fadvise64_64(fd, offset, len, advice) {
      return 0;
    }
    function ___sys_fchmod(fd, mode) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, fd, mode);
      try {
        FS.fchmod(fd, mode);
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_fcntl64(fd, cmd, varargs) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, fd, cmd, varargs);
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = SYSCALLS.get();
            if (arg < 0) {
              return -28;
            }
            var newStream;
            newStream = FS.open(stream.path, stream.flags, 0, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = SYSCALLS.get();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = SYSCALLS.get();
            var offset = 0;
            GROWABLE_HEAP_I16()[(arg + offset) >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            setErrNo(28);
            return -1;
          default: {
            return -28;
          }
        }
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_fstat64(fd, buf) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, fd, buf);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_fstatat64(dirfd, path, buf, flags) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(7, 1, dirfd, path, buf, flags);
      try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        flags = flags & ~256;
        assert(!flags, flags);
        path = SYSCALLS.calculateAt(dirfd, path);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_getcwd(buf, size) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(8, 1, buf, size);
      try {
        if (size === 0) return -28;
        var cwd = FS.cwd();
        var cwdLengthInBytes = lengthBytesUTF8(cwd);
        if (size < cwdLengthInBytes + 1) return -68;
        stringToUTF8(cwd, buf, size);
        return buf;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_getdents64(fd, dirp, count) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(9, 1, fd, dirp, count);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if (!stream.getdents) {
          stream.getdents = FS.readdir(stream.path);
        }
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
          var id;
          var type;
          var name = stream.getdents[idx];
          if (name[0] === '.') {
            id = 1;
            type = 4;
          } else {
            var child = FS.lookupNode(stream.node, name);
            id = child.id;
            type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
          }
          (tempI64 = [
            id >>> 0,
            ((tempDouble = id),
            +Math.abs(tempDouble) >= 1
              ? tempDouble > 0
                ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
              : 0),
          ]),
            (GROWABLE_HEAP_I32()[(dirp + pos) >> 2] = tempI64[0]),
            (GROWABLE_HEAP_I32()[(dirp + pos + 4) >> 2] = tempI64[1]);
          (tempI64 = [
            ((idx + 1) * struct_size) >>> 0,
            ((tempDouble = (idx + 1) * struct_size),
            +Math.abs(tempDouble) >= 1
              ? tempDouble > 0
                ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
                : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
              : 0),
          ]),
            (GROWABLE_HEAP_I32()[(dirp + pos + 8) >> 2] = tempI64[0]),
            (GROWABLE_HEAP_I32()[(dirp + pos + 12) >> 2] = tempI64[1]);
          GROWABLE_HEAP_I16()[(dirp + pos + 16) >> 1] = 280;
          GROWABLE_HEAP_I8()[(dirp + pos + 18) >> 0] = type;
          stringToUTF8(name, dirp + pos + 19, 256);
          pos += struct_size;
          idx += 1;
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_getpid() {
      return 42;
    }
    function ___sys_getrusage(who, usage) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(10, 1, who, usage);
      try {
        _memset(usage, 0, 136);
        GROWABLE_HEAP_I32()[usage >> 2] = 1;
        GROWABLE_HEAP_I32()[(usage + 4) >> 2] = 2;
        GROWABLE_HEAP_I32()[(usage + 8) >> 2] = 3;
        GROWABLE_HEAP_I32()[(usage + 12) >> 2] = 4;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_ioctl(fd, op, varargs) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(11, 1, fd, op, varargs);
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509:
          case 21505: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21519: {
            if (!stream.tty) return -59;
            var argp = SYSCALLS.get();
            GROWABLE_HEAP_I32()[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -59;
            return -28;
          }
          case 21531: {
            var argp = SYSCALLS.get();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21524: {
            if (!stream.tty) return -59;
            return 0;
          }
          default:
            abort('bad ioctl syscall ' + op);
        }
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_lstat64(path, buf) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(12, 1, path, buf);
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_madvise1(addr, length, advice) {
      return 0;
    }
    function ___sys_mkdir(path, mode) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(13, 1, path, mode);
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doMkdir(path, mode);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function syscallMmap2(addr, len, prot, flags, fd, off) {
      off <<= 12;
      var ptr;
      var allocated = false;
      if ((flags & 16) !== 0 && addr % 16384 !== 0) {
        return -28;
      }
      if ((flags & 32) !== 0) {
        ptr = _memalign(16384, len);
        if (!ptr) return -48;
        _memset(ptr, 0, len);
        allocated = true;
      } else {
        var info = FS.getStream(fd);
        if (!info) return -8;
        var res = FS.mmap(info, addr, len, off, prot, flags);
        ptr = res.ptr;
        allocated = res.allocated;
      }
      ptr >>>= 0;
      SYSCALLS.mappings[ptr] = {
        malloc: ptr,
        len: len,
        allocated: allocated,
        fd: fd,
        prot: prot,
        flags: flags,
        offset: off,
      };
      return ptr;
    }
    function ___sys_mmap2(addr, len, prot, flags, fd, off) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(14, 1, addr, len, prot, flags, fd, off);
      try {
        return syscallMmap2(addr, len, prot, flags, fd, off);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_mprotect(addr, len, size) {
      return 0;
    }
    function syscallMunmap(addr, len) {
      addr >>>= 0;
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }
    function ___sys_munmap(addr, len) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(15, 1, addr, len);
      try {
        return syscallMunmap(addr, len);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_open(path, flags, varargs) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(16, 1, path, flags, varargs);
      SYSCALLS.varargs = varargs;
      try {
        var pathname = SYSCALLS.getStr(path);
        var mode = varargs ? SYSCALLS.get() : 0;
        var stream = FS.open(pathname, flags, mode);
        return stream.fd;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_readlink(path, buf, bufsize) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(17, 1, path, buf, bufsize);
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doReadlink(path, buf, bufsize);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_rename(old_path, new_path) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(18, 1, old_path, new_path);
      try {
        old_path = SYSCALLS.getStr(old_path);
        new_path = SYSCALLS.getStr(new_path);
        FS.rename(old_path, new_path);
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_setsid() {
      return 0;
    }
    function ___sys_stat64(path, buf) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(19, 1, path, buf);
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_uname(buf) {
      try {
        if (!buf) return -21;
        var layout = {
          __size__: 390,
          domainname: 325,
          machine: 260,
          nodename: 65,
          release: 130,
          sysname: 0,
          version: 195,
        };
        var copyString = function (element, value) {
          var offset = layout[element];
          writeAsciiToMemory(value, buf + offset);
        };
        copyString('sysname', 'Emscripten');
        copyString('nodename', 'emscripten');
        copyString('release', '1.0');
        copyString('version', '#1');
        copyString('machine', 'x86-JS');
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function ___sys_wait4(pid, wstart, options, rusage) {
      try {
        abort('cannot wait on child processes');
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return -e.errno;
      }
    }
    function getShiftFromSize(size) {
      switch (size) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError('Unknown type size: ' + size);
      }
    }
    function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
        codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }
    var embind_charCodes = undefined;
    function readLatin1String(ptr) {
      var ret = '';
      var c = ptr;
      while (GROWABLE_HEAP_U8()[c]) {
        ret += embind_charCodes[GROWABLE_HEAP_U8()[c++]];
      }
      return ret;
    }
    var awaitingDependencies = {};
    var registeredTypes = {};
    var typeDependencies = {};
    var char_0 = 48;
    var char_9 = 57;
    function makeLegalFunctionName(name) {
      if (undefined === name) {
        return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
        return '_' + name;
      } else {
        return name;
      }
    }
    function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      return new Function(
        'body',
        'return function ' +
          name +
          '() {\n' +
          '    "use strict";' +
          '    return body.apply(this, arguments);\n' +
          '};\n',
      )(body);
    }
    function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function (message) {
        this.name = errorName;
        this.message = message;
        var stack = new Error(message).stack;
        if (stack !== undefined) {
          this.stack = this.toString() + '\n' + stack.replace(/^Error(:[^\n]*)?\n/, '');
        }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function () {
        if (this.message === undefined) {
          return this.name;
        } else {
          return this.name + ': ' + this.message;
        }
      };
      return errorClass;
    }
    var BindingError = undefined;
    function throwBindingError(message) {
      throw new BindingError(message);
    }
    var InternalError = undefined;
    function throwInternalError(message) {
      throw new InternalError(message);
    }
    function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function (type) {
        typeDependencies[type] = dependentTypes;
      });
      function onComplete(typeConverters) {
        var myTypeConverters = getTypeConverters(typeConverters);
        if (myTypeConverters.length !== myTypes.length) {
          throwInternalError('Mismatched type converter count');
        }
        for (var i = 0; i < myTypes.length; ++i) {
          registerType(myTypes[i], myTypeConverters[i]);
        }
      }
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function (dt, i) {
        if (registeredTypes.hasOwnProperty(dt)) {
          typeConverters[i] = registeredTypes[dt];
        } else {
          unregisteredTypes.push(dt);
          if (!awaitingDependencies.hasOwnProperty(dt)) {
            awaitingDependencies[dt] = [];
          }
          awaitingDependencies[dt].push(function () {
            typeConverters[i] = registeredTypes[dt];
            ++registered;
            if (registered === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          });
        }
      });
      if (0 === unregisteredTypes.length) {
        onComplete(typeConverters);
      }
    }
    function registerType(rawType, registeredInstance, options) {
      options = options || {};
      if (!('argPackAdvance' in registeredInstance)) {
        throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
      var name = registeredInstance.name;
      if (!rawType) {
        throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
        if (options.ignoreDuplicateRegistrations) {
          return;
        } else {
          throwBindingError("Cannot register type '" + name + "' twice");
        }
      }
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
      if (awaitingDependencies.hasOwnProperty(rawType)) {
        var callbacks = awaitingDependencies[rawType];
        delete awaitingDependencies[rawType];
        callbacks.forEach(function (cb) {
          cb();
        });
      }
    }
    function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: function (wt) {
          return !!wt;
        },
        toWireType: function (destructors, o) {
          return o ? trueValue : falseValue;
        },
        argPackAdvance: 8,
        readValueFromPointer: function (pointer) {
          var heap;
          if (size === 1) {
            heap = GROWABLE_HEAP_I8();
          } else if (size === 2) {
            heap = GROWABLE_HEAP_I16();
          } else if (size === 4) {
            heap = GROWABLE_HEAP_I32();
          } else {
            throw new TypeError('Unknown boolean type size: ' + name);
          }
          return this['fromWireType'](heap[pointer >>> shift]);
        },
        destructorFunction: null,
      });
    }
    function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
        return false;
      }
      if (!(other instanceof ClassHandle)) {
        return false;
      }
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
      while (leftClass.baseClass) {
        left = leftClass.upcast(left);
        leftClass = leftClass.baseClass;
      }
      while (rightClass.baseClass) {
        right = rightClass.upcast(right);
        rightClass = rightClass.baseClass;
      }
      return leftClass === rightClass && left === right;
    }
    function shallowCopyInternalPointer(o) {
      return {
        count: o.count,
        deleteScheduled: o.deleteScheduled,
        preservePointerOnDelete: o.preservePointerOnDelete,
        ptr: o.ptr,
        ptrType: o.ptrType,
        smartPtr: o.smartPtr,
        smartPtrType: o.smartPtrType,
      };
    }
    function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
    }
    var finalizationGroup = false;
    function detachFinalizer(handle) {}
    function runDestructor($$) {
      if ($$.smartPtr) {
        $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
        $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }
    function releaseClassHandle($$) {
      $$.count.value -= 1;
      var toDelete = 0 === $$.count.value;
      if (toDelete) {
        runDestructor($$);
      }
    }
    function attachFinalizer(handle) {
      if ('undefined' === typeof FinalizationGroup) {
        attachFinalizer = function (handle) {
          return handle;
        };
        return handle;
      }
      finalizationGroup = new FinalizationGroup(function (iter) {
        for (var result = iter.next(); !result.done; result = iter.next()) {
          var $$ = result.value;
          if (!$$.ptr) {
            console.warn('object already deleted: ' + $$.ptr);
          } else {
            releaseClassHandle($$);
          }
        }
      });
      attachFinalizer = function (handle) {
        finalizationGroup.register(handle, handle.$$, handle.$$);
        return handle;
      };
      detachFinalizer = function (handle) {
        finalizationGroup.unregister(handle.$$);
      };
      return attachFinalizer(handle);
    }
    function ClassHandle_clone() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.preservePointerOnDelete) {
        this.$$.count.value += 1;
        return this;
      } else {
        var clone = attachFinalizer(
          Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }),
        );
        clone.$$.count.value += 1;
        clone.$$.deleteScheduled = false;
        return clone;
      }
    }
    function ClassHandle_delete() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError('Object already scheduled for deletion');
      }
      detachFinalizer(this);
      releaseClassHandle(this.$$);
      if (!this.$$.preservePointerOnDelete) {
        this.$$.smartPtr = undefined;
        this.$$.ptr = undefined;
      }
    }
    function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
    var delayFunction = undefined;
    var deletionQueue = [];
    function flushPendingDeletes() {
      while (deletionQueue.length) {
        var obj = deletionQueue.pop();
        obj.$$.deleteScheduled = false;
        obj['delete']();
      }
    }
    function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
        throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
        throwBindingError('Object already scheduled for deletion');
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }
    function init_ClassHandle() {
      ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
      ClassHandle.prototype['clone'] = ClassHandle_clone;
      ClassHandle.prototype['delete'] = ClassHandle_delete;
      ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
      ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
    }
    function ClassHandle() {}
    var registeredPointers = {};
    function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
        var prevFunc = proto[methodName];
        proto[methodName] = function () {
          if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
            throwBindingError(
              "Function '" +
                humanName +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ') - expects one of (' +
                proto[methodName].overloadTable +
                ')!',
            );
          }
          return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
        };
        proto[methodName].overloadTable = [];
        proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }
    function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
        if (
          undefined === numArguments ||
          (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])
        ) {
          throwBindingError("Cannot register public name '" + name + "' twice");
        }
        ensureOverloadTable(Module, name, name);
        if (Module.hasOwnProperty(numArguments)) {
          throwBindingError(
            'Cannot register multiple overloads of a function with the same number of arguments (' +
              numArguments +
              ')!',
          );
        }
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        if (undefined !== numArguments) {
          Module[name].numArguments = numArguments;
        }
      }
    }
    function RegisteredClass(
      name,
      constructor,
      instancePrototype,
      rawDestructor,
      baseClass,
      getActualType,
      upcast,
      downcast,
    ) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
    function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
        if (!ptrClass.upcast) {
          throwBindingError(
            'Expected null or instance of ' + desiredClass.name + ', got an instance of ' + ptrClass.name,
          );
        }
        ptr = ptrClass.upcast(ptr);
        ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }
    function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function genericPointerToWireType(destructors, handle) {
      var ptr;
      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }
        if (this.isSmartPointer) {
          ptr = this.rawConstructor();
          if (destructors !== null) {
            destructors.push(this.rawDestructor, ptr);
          }
          return ptr;
        } else {
          return 0;
        }
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
        throwBindingError(
          'Cannot convert argument of type ' +
            (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) +
            ' to parameter type ' +
            this.name,
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      if (this.isSmartPointer) {
        if (undefined === handle.$$.smartPtr) {
          throwBindingError('Passing raw pointer to smart pointer is illegal');
        }
        switch (this.sharingPolicy) {
          case 0:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              throwBindingError(
                'Cannot convert argument of type ' +
                  (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) +
                  ' to parameter type ' +
                  this.name,
              );
            }
            break;
          case 1:
            ptr = handle.$$.smartPtr;
            break;
          case 2:
            if (handle.$$.smartPtrType === this) {
              ptr = handle.$$.smartPtr;
            } else {
              var clonedHandle = handle['clone']();
              ptr = this.rawShare(
                ptr,
                __emval_register(function () {
                  clonedHandle['delete']();
                }),
              );
              if (destructors !== null) {
                destructors.push(this.rawDestructor, ptr);
              }
            }
            break;
          default:
            throwBindingError('Unsupporting sharing policy');
        }
      }
      return ptr;
    }
    function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
        if (this.isReference) {
          throwBindingError('null is not a valid ' + this.name);
        }
        return 0;
      }
      if (!handle.$$) {
        throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
        throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (handle.$$.ptrType.isConst) {
        throwBindingError(
          'Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name,
        );
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
    function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](GROWABLE_HEAP_U32()[pointer >> 2]);
    }
    function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
        ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
    function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
        this.rawDestructor(ptr);
      }
    }
    function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
        handle['delete']();
      }
    }
    function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
        return ptr;
      }
      if (undefined === desiredClass.baseClass) {
        return null;
      }
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
        return null;
      }
      return desiredClass.downcast(rv);
    }
    function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
    function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
        if (registeredInstances.hasOwnProperty(k)) {
          rv.push(registeredInstances[k]);
        }
      }
      return rv;
    }
    function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
        delayFunction(flushPendingDeletes);
      }
    }
    function init_embind() {
      Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
      Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
      Module['flushPendingDeletes'] = flushPendingDeletes;
      Module['setDelayFunction'] = setDelayFunction;
    }
    var registeredInstances = {};
    function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
        throwBindingError('ptr should not be undefined');
      }
      while (class_.baseClass) {
        ptr = class_.upcast(ptr);
        class_ = class_.baseClass;
      }
      return ptr;
    }
    function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
    function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
        throwInternalError('makeClassHandle requires ptr and ptrType');
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
        throwInternalError('Both smartPtrType and smartPtr must be specified');
      }
      record.count = { value: 1 };
      return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
    }
    function RegisteredPointer_fromWireType(ptr) {
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
        this.destructor(ptr);
        return null;
      }
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
        if (0 === registeredInstance.$$.count.value) {
          registeredInstance.$$.ptr = rawPointer;
          registeredInstance.$$.smartPtr = ptr;
          return registeredInstance['clone']();
        } else {
          var rv = registeredInstance['clone']();
          this.destructor(ptr);
          return rv;
        }
      }
      function makeDefaultHandle() {
        if (this.isSmartPointer) {
          return makeClassHandle(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: rawPointer,
            smartPtrType: this,
            smartPtr: ptr,
          });
        } else {
          return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr: ptr });
        }
      }
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
        return makeDefaultHandle.call(this);
      }
      var toType;
      if (this.isConst) {
        toType = registeredPointerRecord.constPointerType;
      } else {
        toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
      if (dp === null) {
        return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
        return makeClassHandle(toType.registeredClass.instancePrototype, {
          ptrType: toType,
          ptr: dp,
          smartPtrType: this,
          smartPtr: ptr,
        });
      } else {
        return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
      }
    }
    function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype['argPackAdvance'] = 8;
      RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
      RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
    }
    function RegisteredPointer(
      name,
      registeredClass,
      isReference,
      isConst,
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor,
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
        if (isConst) {
          this['toWireType'] = constNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        } else {
          this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
          this.destructorFunction = null;
        }
      } else {
        this['toWireType'] = genericPointerToWireType;
      }
    }
    function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
        throwInternalError('Replacing nonexistant public symbol');
      }
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
        Module[name].overloadTable[numArguments] = value;
      } else {
        Module[name] = value;
        Module[name].argCount = numArguments;
      }
    }
    function dynCallLegacy(sig, ptr, args) {
      assert('dynCall_' + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
      if (args && args.length) {
        assert(args.length === sig.substring(1).replace(/j/g, '--').length);
      } else {
        assert(sig.length == 1);
      }
      if (args && args.length) {
        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
      }
      return Module['dynCall_' + sig].call(null, ptr);
    }
    function dynCall(sig, ptr, args) {
      if (sig.indexOf('j') != -1) {
        return dynCallLegacy(sig, ptr, args);
      }
      assert(wasmTable.get(ptr), 'missing table entry in dynCall: ' + ptr);
      return wasmTable.get(ptr).apply(null, args);
    }
    function getDynCaller(sig, ptr) {
      assert(sig.indexOf('j') >= 0, 'getDynCaller should only be called with i64 sigs');
      var argCache = [];
      return function () {
        argCache.length = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
          argCache[i] = arguments[i];
        }
        return dynCall(sig, ptr, argCache);
      };
    }
    function embind__requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
      function makeDynCaller() {
        if (signature.indexOf('j') != -1) {
          return getDynCaller(signature, rawFunction);
        }
        return wasmTable.get(rawFunction);
      }
      var fp = makeDynCaller();
      if (typeof fp !== 'function') {
        throwBindingError('unknown function pointer with signature ' + signature + ': ' + rawFunction);
      }
      return fp;
    }
    var UnboundTypeError = undefined;
    function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }
    function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
        if (seen[type]) {
          return;
        }
        if (registeredTypes[type]) {
          return;
        }
        if (typeDependencies[type]) {
          typeDependencies[type].forEach(visit);
          return;
        }
        unboundTypes.push(type);
        seen[type] = true;
      }
      types.forEach(visit);
      throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
    }
    function __embind_register_class(
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor,
    ) {
      name = readLatin1String(name);
      getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
        upcast = embind__requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
        downcast = embind__requireFunction(downcastSignature, downcast);
      }
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
      exposePublicSymbol(legalFunctionName, function () {
        throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
      });
      whenDependentTypesAreResolved(
        [rawType, rawPointerType, rawConstPointerType],
        baseClassRawType ? [baseClassRawType] : [],
        function (base) {
          base = base[0];
          var baseClass;
          var basePrototype;
          if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
          } else {
            basePrototype = ClassHandle.prototype;
          }
          var constructor = createNamedFunction(legalFunctionName, function () {
            if (Object.getPrototypeOf(this) !== instancePrototype) {
              throw new BindingError("Use 'new' to construct " + name);
            }
            if (undefined === registeredClass.constructor_body) {
              throw new BindingError(name + ' has no accessible constructor');
            }
            var body = registeredClass.constructor_body[arguments.length];
            if (undefined === body) {
              throw new BindingError(
                'Tried to invoke ctor of ' +
                  name +
                  ' with invalid number of parameters (' +
                  arguments.length +
                  ') - expected (' +
                  Object.keys(registeredClass.constructor_body).toString() +
                  ') parameters instead!',
              );
            }
            return body.apply(this, arguments);
          });
          var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
          constructor.prototype = instancePrototype;
          var registeredClass = new RegisteredClass(
            name,
            constructor,
            instancePrototype,
            rawDestructor,
            baseClass,
            getActualType,
            upcast,
            downcast,
          );
          var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
          var pointerConverter = new RegisteredPointer(name + '*', registeredClass, false, false, false);
          var constPointerConverter = new RegisteredPointer(name + ' const*', registeredClass, false, true, false);
          registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
          replacePublicSymbol(legalFunctionName, constructor);
          return [referenceConverter, pointerConverter, constPointerConverter];
        },
      );
    }
    function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
        throw new TypeError('new_ called with constructor type ' + typeof constructor + ' which is not a function');
      }
      var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function () {});
      dummy.prototype = constructor.prototype;
      var obj = new dummy();
      var r = constructor.apply(obj, argumentList);
      return r instanceof Object ? r : obj;
    }
    function runDestructors(destructors) {
      while (destructors.length) {
        var ptr = destructors.pop();
        var del = destructors.pop();
        del(ptr);
      }
    }
    function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      var argCount = argTypes.length;
      if (argCount < 2) {
        throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
      var isClassMethodFunc = argTypes[1] !== null && classType !== null;
      var needsDestructorStack = false;
      for (var i = 1; i < argTypes.length; ++i) {
        if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
          needsDestructorStack = true;
          break;
        }
      }
      var returns = argTypes[0].name !== 'void';
      var argsList = '';
      var argsListWired = '';
      for (var i = 0; i < argCount - 2; ++i) {
        argsList += (i !== 0 ? ', ' : '') + 'arg' + i;
        argsListWired += (i !== 0 ? ', ' : '') + 'arg' + i + 'Wired';
      }
      var invokerFnBody =
        'return function ' +
        makeLegalFunctionName(humanName) +
        '(' +
        argsList +
        ') {\n' +
        'if (arguments.length !== ' +
        (argCount - 2) +
        ') {\n' +
        "throwBindingError('function " +
        humanName +
        " called with ' + arguments.length + ' arguments, expected " +
        (argCount - 2) +
        " args!');\n" +
        '}\n';
      if (needsDestructorStack) {
        invokerFnBody += 'var destructors = [];\n';
      }
      var dtorStack = needsDestructorStack ? 'destructors' : 'null';
      var args1 = ['throwBindingError', 'invoker', 'fn', 'runDestructors', 'retType', 'classParam'];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
      if (isClassMethodFunc) {
        invokerFnBody += 'var thisWired = classParam.toWireType(' + dtorStack + ', this);\n';
      }
      for (var i = 0; i < argCount - 2; ++i) {
        invokerFnBody +=
          'var arg' +
          i +
          'Wired = argType' +
          i +
          '.toWireType(' +
          dtorStack +
          ', arg' +
          i +
          '); // ' +
          argTypes[i + 2].name +
          '\n';
        args1.push('argType' + i);
        args2.push(argTypes[i + 2]);
      }
      if (isClassMethodFunc) {
        argsListWired = 'thisWired' + (argsListWired.length > 0 ? ', ' : '') + argsListWired;
      }
      invokerFnBody +=
        (returns ? 'var rv = ' : '') + 'invoker(fn' + (argsListWired.length > 0 ? ', ' : '') + argsListWired + ');\n';
      if (needsDestructorStack) {
        invokerFnBody += 'runDestructors(destructors);\n';
      } else {
        for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
          var paramName = i === 1 ? 'thisWired' : 'arg' + (i - 2) + 'Wired';
          if (argTypes[i].destructorFunction !== null) {
            invokerFnBody += paramName + '_dtor(' + paramName + '); // ' + argTypes[i].name + '\n';
            args1.push(paramName + '_dtor');
            args2.push(argTypes[i].destructorFunction);
          }
        }
      }
      if (returns) {
        invokerFnBody += 'var ret = retType.fromWireType(rv);\n' + 'return ret;\n';
      } else {
      }
      invokerFnBody += '}\n';
      args1.push(invokerFnBody);
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }
    function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
        array.push(GROWABLE_HEAP_I32()[(firstElement >> 2) + i]);
      }
      return array;
    }
    function __embind_register_class_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      rawInvoker,
      fn,
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + '.' + methodName;
        function unboundTypesHandler() {
          throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
        }
        var proto = classType.registeredClass.constructor;
        if (undefined === proto[methodName]) {
          unboundTypesHandler.argCount = argCount - 1;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 1] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
          var func = craftInvokerFunction(humanName, invokerArgsArray, null, rawInvoker, fn);
          if (undefined === proto[methodName].overloadTable) {
            func.argCount = argCount - 1;
            proto[methodName] = func;
          } else {
            proto[methodName].overloadTable[argCount - 1] = func;
          }
          return [];
        });
        return [];
      });
    }
    function validateThis(this_, classType, humanName) {
      if (!(this_ instanceof Object)) {
        throwBindingError(humanName + ' with invalid "this": ' + this_);
      }
      if (!(this_ instanceof classType.registeredClass.constructor)) {
        throwBindingError(humanName + ' incompatible with "this" of type ' + this_.constructor.name);
      }
      if (!this_.$$.ptr) {
        throwBindingError('cannot call emscripten binding method ' + humanName + ' on deleted object');
      }
      return upcastPointer(this_.$$.ptr, this_.$$.ptrType.registeredClass, classType.registeredClass);
    }
    function __embind_register_class_class_property(
      rawClassType,
      fieldName,
      rawFieldType,
      rawFieldPtr,
      getterSignature,
      getter,
      setterSignature,
      setter,
    ) {
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + '.' + fieldName;
        var desc = {
          get: function () {
            throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [rawFieldType]);
          },
          enumerable: true,
          configurable: true,
        };
        if (setter) {
          desc.set = function () {
            throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [rawFieldType]);
          };
        } else {
          desc.set = function (v) {
            throwBindingError(humanName + ' is a read-only property');
          };
        }
        Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
        whenDependentTypesAreResolved([], [rawFieldType], function (fieldType) {
          fieldType = fieldType[0];
          var desc = {
            get: function () {
              return fieldType['fromWireType'](getter(rawFieldPtr));
            },
            enumerable: true,
          };
          if (setter) {
            setter = embind__requireFunction(setterSignature, setter);
            desc.set = function (v) {
              var destructors = [];
              setter(rawFieldPtr, fieldType['toWireType'](destructors, v));
              runDestructors(destructors);
            };
          }
          Object.defineProperty(classType.registeredClass.constructor, fieldName, desc);
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_constructor(
      rawClassType,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      invoker,
      rawConstructor,
    ) {
      assert(argCount > 0);
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = embind__requireFunction(invokerSignature, invoker);
      var args = [rawConstructor];
      var destructors = [];
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = 'constructor ' + classType.name;
        if (undefined === classType.registeredClass.constructor_body) {
          classType.registeredClass.constructor_body = [];
        }
        if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
          throw new BindingError(
            'Cannot register multiple constructors with identical number of parameters (' +
              (argCount - 1) +
              ") for class '" +
              classType.name +
              "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
          );
        }
        classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
          throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
        };
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
            if (arguments.length !== argCount - 1) {
              throwBindingError(
                humanName + ' called with ' + arguments.length + ' arguments, expected ' + (argCount - 1),
              );
            }
            destructors.length = 0;
            args.length = argCount;
            for (var i = 1; i < argCount; ++i) {
              args[i] = argTypes[i]['toWireType'](destructors, arguments[i - 1]);
            }
            var ptr = invoker.apply(null, args);
            runDestructors(destructors);
            return argTypes[0]['fromWireType'](ptr);
          };
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual,
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
      whenDependentTypesAreResolved([], [rawClassType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + '.' + methodName;
        if (isPureVirtual) {
          classType.registeredClass.pureVirtualFunctions.push(methodName);
        }
        function unboundTypesHandler() {
          throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
        }
        var proto = classType.registeredClass.instancePrototype;
        var method = proto[methodName];
        if (
          undefined === method ||
          (undefined === method.overloadTable &&
            method.className !== classType.name &&
            method.argCount === argCount - 2)
        ) {
          unboundTypesHandler.argCount = argCount - 2;
          unboundTypesHandler.className = classType.name;
          proto[methodName] = unboundTypesHandler;
        } else {
          ensureOverloadTable(proto, methodName, humanName);
          proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        }
        whenDependentTypesAreResolved([], rawArgTypes, function (argTypes) {
          var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
          if (undefined === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
          } else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
          }
          return [];
        });
        return [];
      });
    }
    function __embind_register_class_property(
      classType,
      fieldName,
      getterReturnType,
      getterSignature,
      getter,
      getterContext,
      setterArgumentType,
      setterSignature,
      setter,
      setterContext,
    ) {
      fieldName = readLatin1String(fieldName);
      getter = embind__requireFunction(getterSignature, getter);
      whenDependentTypesAreResolved([], [classType], function (classType) {
        classType = classType[0];
        var humanName = classType.name + '.' + fieldName;
        var desc = {
          get: function () {
            throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [
              getterReturnType,
              setterArgumentType,
            ]);
          },
          enumerable: true,
          configurable: true,
        };
        if (setter) {
          desc.set = function () {
            throwUnboundTypeError('Cannot access ' + humanName + ' due to unbound types', [
              getterReturnType,
              setterArgumentType,
            ]);
          };
        } else {
          desc.set = function (v) {
            throwBindingError(humanName + ' is a read-only property');
          };
        }
        Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
        whenDependentTypesAreResolved(
          [],
          setter ? [getterReturnType, setterArgumentType] : [getterReturnType],
          function (types) {
            var getterReturnType = types[0];
            var desc = {
              get: function () {
                var ptr = validateThis(this, classType, humanName + ' getter');
                return getterReturnType['fromWireType'](getter(getterContext, ptr));
              },
              enumerable: true,
            };
            if (setter) {
              setter = embind__requireFunction(setterSignature, setter);
              var setterArgumentType = types[1];
              desc.set = function (v) {
                var ptr = validateThis(this, classType, humanName + ' setter');
                var destructors = [];
                setter(setterContext, ptr, setterArgumentType['toWireType'](destructors, v));
                runDestructors(destructors);
              };
            }
            Object.defineProperty(classType.registeredClass.instancePrototype, fieldName, desc);
            return [];
          },
        );
        return [];
      });
    }
    var emval_free_list = [];
    var emval_handle_array = [{}, { value: undefined }, { value: null }, { value: true }, { value: false }];
    function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
        emval_handle_array[handle] = undefined;
        emval_free_list.push(handle);
      }
    }
    function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          ++count;
        }
      }
      return count;
    }
    function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
        if (emval_handle_array[i] !== undefined) {
          return emval_handle_array[i];
        }
      }
      return null;
    }
    function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }
    function __emval_register(value) {
      switch (value) {
        case undefined: {
          return 1;
        }
        case null: {
          return 2;
        }
        case true: {
          return 3;
        }
        case false: {
          return 4;
        }
        default: {
          var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
          emval_handle_array[handle] = { refcount: 1, value: value };
          return handle;
        }
      }
    }
    function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: function (handle) {
          var rv = emval_handle_array[handle].value;
          __emval_decref(handle);
          return rv;
        },
        toWireType: function (destructors, value) {
          return __emval_register(value);
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: null,
      });
    }
    function enumReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return function (pointer) {
            var heap = signed ? GROWABLE_HEAP_I8() : GROWABLE_HEAP_U8();
            return this['fromWireType'](heap[pointer >>> 0]);
          };
        case 1:
          return function (pointer) {
            var heap = signed ? GROWABLE_HEAP_I16() : GROWABLE_HEAP_U16();
            return this['fromWireType'](heap[pointer >>> 1]);
          };
        case 2:
          return function (pointer) {
            var heap = signed ? GROWABLE_HEAP_I32() : GROWABLE_HEAP_U32();
            return this['fromWireType'](heap[pointer >>> 2]);
          };
        default:
          throw new TypeError('Unknown integer type: ' + name);
      }
    }
    function __embind_register_enum(rawType, name, size, isSigned) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      function ctor() {}
      ctor.values = {};
      registerType(rawType, {
        name: name,
        constructor: ctor,
        fromWireType: function (c) {
          return this.constructor.values[c];
        },
        toWireType: function (destructors, c) {
          return c.value;
        },
        argPackAdvance: 8,
        readValueFromPointer: enumReadValueFromPointer(name, shift, isSigned),
        destructorFunction: null,
      });
      exposePublicSymbol(name, ctor);
    }
    function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
        throwBindingError(humanName + ' has unknown type ' + getTypeName(rawType));
      }
      return impl;
    }
    function __embind_register_enum_value(rawEnumType, name, enumValue) {
      var enumType = requireRegisteredType(rawEnumType, 'enum');
      name = readLatin1String(name);
      var Enum = enumType.constructor;
      var Value = Object.create(enumType.constructor.prototype, {
        value: { value: enumValue },
        constructor: { value: createNamedFunction(enumType.name + '_' + name, function () {}) },
      });
      Enum.values[enumValue] = Value;
      Enum[name] = Value;
    }
    function _embind_repr(v) {
      if (v === null) {
        return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
        return v.toString();
      } else {
        return '' + v;
      }
    }
    function floatReadValueFromPointer(name, shift) {
      switch (shift) {
        case 2:
          return function (pointer) {
            return this['fromWireType'](GROWABLE_HEAP_F32()[pointer >> 2]);
          };
        case 3:
          return function (pointer) {
            return this['fromWireType'](GROWABLE_HEAP_F64()[pointer >> 3]);
          };
        default:
          throw new TypeError('Unknown float type: ' + name);
      }
    }
    function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
        name: name,
        fromWireType: function (value) {
          return value;
        },
        toWireType: function (destructors, value) {
          if (typeof value !== 'number' && typeof value !== 'boolean') {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          return value;
        },
        argPackAdvance: 8,
        readValueFromPointer: floatReadValueFromPointer(name, shift),
        destructorFunction: null,
      });
    }
    function __embind_register_function(name, argCount, rawArgTypesAddr, signature, rawInvoker, fn) {
      var argTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      name = readLatin1String(name);
      rawInvoker = embind__requireFunction(signature, rawInvoker);
      exposePublicSymbol(
        name,
        function () {
          throwUnboundTypeError('Cannot call ' + name + ' due to unbound types', argTypes);
        },
        argCount - 1,
      );
      whenDependentTypesAreResolved([], argTypes, function (argTypes) {
        var invokerArgsArray = [argTypes[0], null].concat(argTypes.slice(1));
        replacePublicSymbol(name, craftInvokerFunction(name, invokerArgsArray, null, rawInvoker, fn), argCount - 1);
        return [];
      });
    }
    function integerReadValueFromPointer(name, shift, signed) {
      switch (shift) {
        case 0:
          return signed
            ? function readS8FromPointer(pointer) {
                return GROWABLE_HEAP_I8()[pointer];
              }
            : function readU8FromPointer(pointer) {
                return GROWABLE_HEAP_U8()[pointer];
              };
        case 1:
          return signed
            ? function readS16FromPointer(pointer) {
                return GROWABLE_HEAP_I16()[pointer >> 1];
              }
            : function readU16FromPointer(pointer) {
                return GROWABLE_HEAP_U16()[pointer >> 1];
              };
        case 2:
          return signed
            ? function readS32FromPointer(pointer) {
                return GROWABLE_HEAP_I32()[pointer >> 2];
              }
            : function readU32FromPointer(pointer) {
                return GROWABLE_HEAP_U32()[pointer >> 2];
              };
        default:
          throw new TypeError('Unknown integer type: ' + name);
      }
    }
    function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) {
        maxRange = 4294967295;
      }
      var shift = getShiftFromSize(size);
      var fromWireType = function (value) {
        return value;
      };
      if (minRange === 0) {
        var bitshift = 32 - 8 * size;
        fromWireType = function (value) {
          return (value << bitshift) >>> bitshift;
        };
      }
      var isUnsignedType = name.indexOf('unsigned') != -1;
      registerType(primitiveType, {
        name: name,
        fromWireType: fromWireType,
        toWireType: function (destructors, value) {
          if (typeof value !== 'number' && typeof value !== 'boolean') {
            throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
          }
          if (value < minRange || value > maxRange) {
            throw new TypeError(
              'Passing a number "' +
                _embind_repr(value) +
                '" from JS side to C/C++ side to an argument of type "' +
                name +
                '", which is outside the valid range [' +
                minRange +
                ', ' +
                maxRange +
                ']!',
            );
          }
          return isUnsignedType ? value >>> 0 : value | 0;
        },
        argPackAdvance: 8,
        readValueFromPointer: integerReadValueFromPointer(name, shift, minRange !== 0),
        destructorFunction: null,
      });
    }
    function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
        Int8Array,
        Uint8Array,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array,
      ];
      var TA = typeMapping[dataTypeIndex];
      function decodeMemoryView(handle) {
        handle = handle >> 2;
        var heap = GROWABLE_HEAP_U32();
        var size = heap[handle >>> 0];
        var data = heap[(handle + 1) >>> 0];
        return new TA(buffer, data, size);
      }
      name = readLatin1String(name);
      registerType(
        rawType,
        { name: name, fromWireType: decodeMemoryView, argPackAdvance: 8, readValueFromPointer: decodeMemoryView },
        { ignoreDuplicateRegistrations: true },
      );
    }
    function __embind_register_smart_ptr(
      rawType,
      rawPointeeType,
      name,
      sharingPolicy,
      getPointeeSignature,
      rawGetPointee,
      constructorSignature,
      rawConstructor,
      shareSignature,
      rawShare,
      destructorSignature,
      rawDestructor,
    ) {
      name = readLatin1String(name);
      rawGetPointee = embind__requireFunction(getPointeeSignature, rawGetPointee);
      rawConstructor = embind__requireFunction(constructorSignature, rawConstructor);
      rawShare = embind__requireFunction(shareSignature, rawShare);
      rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
      whenDependentTypesAreResolved([rawType], [rawPointeeType], function (pointeeType) {
        pointeeType = pointeeType[0];
        var registeredPointer = new RegisteredPointer(
          name,
          pointeeType.registeredClass,
          false,
          false,
          true,
          pointeeType,
          sharingPolicy,
          rawGetPointee,
          rawConstructor,
          rawShare,
          rawDestructor,
        );
        return [registeredPointer];
      });
    }
    function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      var stdStringIsUTF8 = name === 'std::string';
      registerType(rawType, {
        name: name,
        fromWireType: function (value) {
          var length = GROWABLE_HEAP_U32()[value >> 2];
          var str;
          if (stdStringIsUTF8) {
            var decodeStartPtr = value + 4;
            for (var i = 0; i <= length; ++i) {
              var currentBytePtr = value + 4 + i;
              if (i == length || GROWABLE_HEAP_U8()[currentBytePtr] == 0) {
                var maxRead = currentBytePtr - decodeStartPtr;
                var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                if (str === undefined) {
                  str = stringSegment;
                } else {
                  str += String.fromCharCode(0);
                  str += stringSegment;
                }
                decodeStartPtr = currentBytePtr + 1;
              }
            }
          } else {
            var a = new Array(length);
            for (var i = 0; i < length; ++i) {
              a[i] = String.fromCharCode(GROWABLE_HEAP_U8()[value + 4 + i]);
            }
            str = a.join('');
          }
          _free(value);
          return str;
        },
        toWireType: function (destructors, value) {
          if (value instanceof ArrayBuffer) {
            value = new Uint8Array(value);
          }
          var getLength;
          var valueIsOfTypeString = typeof value === 'string';
          if (
            !(
              valueIsOfTypeString ||
              value instanceof Uint8Array ||
              value instanceof Uint8ClampedArray ||
              value instanceof Int8Array
            )
          ) {
            throwBindingError('Cannot pass non-string to std::string');
          }
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            getLength = function () {
              return lengthBytesUTF8(value);
            };
          } else {
            getLength = function () {
              return value.length;
            };
          }
          var length = getLength();
          var ptr = _malloc(4 + length + 1);
          ptr >>>= 0;
          GROWABLE_HEAP_U32()[ptr >> 2] = length;
          if (stdStringIsUTF8 && valueIsOfTypeString) {
            stringToUTF8(value, ptr + 4, length + 1);
          } else {
            if (valueIsOfTypeString) {
              for (var i = 0; i < length; ++i) {
                var charCode = value.charCodeAt(i);
                if (charCode > 255) {
                  _free(ptr);
                  throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                }
                GROWABLE_HEAP_U8()[ptr + 4 + i] = charCode;
              }
            } else {
              for (var i = 0; i < length; ++i) {
                GROWABLE_HEAP_U8()[ptr + 4 + i] = value[i];
              }
            }
          }
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr);
        },
      });
    }
    function __embind_register_std_wstring(rawType, charSize, name) {
      name = readLatin1String(name);
      var decodeString, encodeString, getHeap, lengthBytesUTF, shift;
      if (charSize === 2) {
        decodeString = UTF16ToString;
        encodeString = stringToUTF16;
        lengthBytesUTF = lengthBytesUTF16;
        getHeap = function () {
          return GROWABLE_HEAP_U16();
        };
        shift = 1;
      } else if (charSize === 4) {
        decodeString = UTF32ToString;
        encodeString = stringToUTF32;
        lengthBytesUTF = lengthBytesUTF32;
        getHeap = function () {
          return GROWABLE_HEAP_U32();
        };
        shift = 2;
      }
      registerType(rawType, {
        name: name,
        fromWireType: function (value) {
          var length = GROWABLE_HEAP_U32()[value >> 2];
          var HEAP = getHeap();
          var str;
          var decodeStartPtr = value + 4;
          for (var i = 0; i <= length; ++i) {
            var currentBytePtr = value + 4 + i * charSize;
            if (i == length || HEAP[currentBytePtr >>> shift] == 0) {
              var maxReadBytes = currentBytePtr - decodeStartPtr;
              var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
              if (str === undefined) {
                str = stringSegment;
              } else {
                str += String.fromCharCode(0);
                str += stringSegment;
              }
              decodeStartPtr = currentBytePtr + charSize;
            }
          }
          _free(value);
          return str;
        },
        toWireType: function (destructors, value) {
          if (!(typeof value === 'string')) {
            throwBindingError('Cannot pass non-string to C++ string type ' + name);
          }
          var length = lengthBytesUTF(value);
          var ptr = _malloc(4 + length + charSize);
          ptr >>>= 0;
          GROWABLE_HEAP_U32()[ptr >> 2] = length >> shift;
          encodeString(value, ptr + 4, length + charSize);
          if (destructors !== null) {
            destructors.push(_free, ptr);
          }
          return ptr;
        },
        argPackAdvance: 8,
        readValueFromPointer: simpleReadValueFromPointer,
        destructorFunction: function (ptr) {
          _free(ptr);
        },
      });
    }
    function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
        isVoid: true,
        name: name,
        argPackAdvance: 0,
        fromWireType: function () {
          return undefined;
        },
        toWireType: function (destructors, o) {
          return undefined;
        },
      });
    }
    function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {
      if (targetThreadId == mainThreadId) {
        postMessage({ cmd: 'processQueuedMainThreadWork' });
      } else if (ENVIRONMENT_IS_PTHREAD) {
        postMessage({ targetThread: targetThreadId, cmd: 'processThreadQueue' });
      } else {
        var pthread = PThread.pthreads[targetThreadId];
        var worker = pthread && pthread.worker;
        if (!worker) {
          err('Cannot send message to thread with ID ' + targetThreadId + ', unknown thread ID!');
          return;
        }
        worker.postMessage({ cmd: 'processThreadQueue' });
      }
      return 1;
    }
    function requireHandle(handle) {
      if (!handle) {
        throwBindingError('Cannot use deleted val. handle = ' + handle);
      }
      return emval_handle_array[handle].value;
    }
    function __emval_as(handle, returnType, destructorsRef) {
      handle = requireHandle(handle);
      returnType = requireRegisteredType(returnType, 'emval::as');
      var destructors = [];
      var rd = __emval_register(destructors);
      GROWABLE_HEAP_I32()[destructorsRef >> 2] = rd;
      return returnType['toWireType'](destructors, handle);
    }
    function __emval_lookupTypes(argCount, argTypes) {
      var a = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        a[i] = requireRegisteredType(GROWABLE_HEAP_I32()[(argTypes >> 2) + i], 'parameter ' + i);
      }
      return a;
    }
    function __emval_call(handle, argCount, argTypes, argv) {
      handle = requireHandle(handle);
      var types = __emval_lookupTypes(argCount, argTypes);
      var args = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
        var type = types[i];
        args[i] = type['readValueFromPointer'](argv);
        argv += type['argPackAdvance'];
      }
      var rv = handle.apply(undefined, args);
      return __emval_register(rv);
    }
    function __emval_allocateDestructors(destructorsRef) {
      var destructors = [];
      GROWABLE_HEAP_I32()[destructorsRef >> 2] = __emval_register(destructors);
      return destructors;
    }
    var emval_symbols = {};
    function getStringOrSymbol(address) {
      var symbol = emval_symbols[address];
      if (symbol === undefined) {
        return readLatin1String(address);
      } else {
        return symbol;
      }
    }
    var emval_methodCallers = [];
    function __emval_call_method(caller, handle, methodName, destructorsRef, args) {
      caller = emval_methodCallers[caller];
      handle = requireHandle(handle);
      methodName = getStringOrSymbol(methodName);
      return caller(handle, methodName, __emval_allocateDestructors(destructorsRef), args);
    }
    function __emval_call_void_method(caller, handle, methodName, args) {
      caller = emval_methodCallers[caller];
      handle = requireHandle(handle);
      methodName = getStringOrSymbol(methodName);
      caller(handle, methodName, null, args);
    }
    function __emval_equals(first, second) {
      first = requireHandle(first);
      second = requireHandle(second);
      return first == second;
    }
    function emval_get_global() {
      if (typeof globalThis === 'object') {
        return globalThis;
      }
      return (function () {
        return Function;
      })()('return this')();
    }
    function __emval_get_global(name) {
      if (name === 0) {
        return __emval_register(emval_get_global());
      } else {
        name = getStringOrSymbol(name);
        return __emval_register(emval_get_global()[name]);
      }
    }
    function __emval_addMethodCaller(caller) {
      var id = emval_methodCallers.length;
      emval_methodCallers.push(caller);
      return id;
    }
    function __emval_get_method_caller(argCount, argTypes) {
      var types = __emval_lookupTypes(argCount, argTypes);
      var retType = types[0];
      var signatureName =
        retType.name +
        '_$' +
        types
          .slice(1)
          .map(function (t) {
            return t.name;
          })
          .join('_') +
        '$';
      var params = ['retType'];
      var args = [retType];
      var argsList = '';
      for (var i = 0; i < argCount - 1; ++i) {
        argsList += (i !== 0 ? ', ' : '') + 'arg' + i;
        params.push('argType' + i);
        args.push(types[1 + i]);
      }
      var functionName = makeLegalFunctionName('methodCaller_' + signatureName);
      var functionBody = 'return function ' + functionName + '(handle, name, destructors, args) {\n';
      var offset = 0;
      for (var i = 0; i < argCount - 1; ++i) {
        functionBody +=
          '    var arg' + i + ' = argType' + i + '.readValueFromPointer(args' + (offset ? '+' + offset : '') + ');\n';
        offset += types[i + 1]['argPackAdvance'];
      }
      functionBody += '    var rv = handle[name](' + argsList + ');\n';
      for (var i = 0; i < argCount - 1; ++i) {
        if (types[i + 1]['deleteObject']) {
          functionBody += '    argType' + i + '.deleteObject(arg' + i + ');\n';
        }
      }
      if (!retType.isVoid) {
        functionBody += '    return retType.toWireType(destructors, rv);\n';
      }
      functionBody += '};\n';
      params.push(functionBody);
      var invokerFunction = new_(Function, params).apply(null, args);
      return __emval_addMethodCaller(invokerFunction);
    }
    function __emval_get_property(handle, key) {
      handle = requireHandle(handle);
      key = requireHandle(key);
      return __emval_register(handle[key]);
    }
    function __emval_incref(handle) {
      if (handle > 4) {
        emval_handle_array[handle].refcount += 1;
      }
    }
    function __emval_instanceof(object, constructor) {
      object = requireHandle(object);
      constructor = requireHandle(constructor);
      return object instanceof constructor;
    }
    function __emval_new_array() {
      return __emval_register([]);
    }
    function __emval_new_cstring(v) {
      return __emval_register(getStringOrSymbol(v));
    }
    function __emval_new_object() {
      return __emval_register({});
    }
    function __emval_run_destructors(handle) {
      var destructors = emval_handle_array[handle].value;
      runDestructors(destructors);
      __emval_decref(handle);
    }
    function __emval_set_property(handle, key, value) {
      handle = requireHandle(handle);
      key = requireHandle(key);
      value = requireHandle(value);
      handle[key] = value;
    }
    function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, '_emval_take_value');
      var v = type['readValueFromPointer'](argv);
      return __emval_register(v);
    }
    function __emval_typeof(handle) {
      handle = requireHandle(handle);
      return __emval_register(typeof handle);
    }
    function _exit(status) {
      exit(status);
    }
    function __exit(a0) {
      return _exit(a0);
    }
    function _abort() {
      abort();
    }
    var __sigalrm_handler = 0;
    function _alarm(seconds) {
      setTimeout(function () {
        if (__sigalrm_handler) wasmTable.get(__sigalrm_handler)(0);
      }, seconds * 1e3);
    }
    function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      var args = readAsmConstArgs(sigPtr, argbuf);
      return ASM_CONSTS[code].apply(null, args);
    }
    function _emscripten_check_blocking_allowed() {
      if (ENVIRONMENT_IS_NODE) return;
      if (ENVIRONMENT_IS_WORKER) return;
      warnOnce(
        'Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread',
      );
    }
    function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {}
    function _emscripten_set_main_loop_timing(mode, value) {
      Browser.mainLoop.timingMode = mode;
      Browser.mainLoop.timingValue = value;
      if (!Browser.mainLoop.func) {
        console.error(
          'emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.',
        );
        return 1;
      }
      if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
          setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
        };
        Browser.mainLoop.method = 'timeout';
      } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      } else if (mode == 2) {
        if (typeof setImmediate === 'undefined') {
          var setImmediates = [];
          var emscriptenMainLoopMessageId = 'setimmediate';
          var Browser_setImmediate_messageHandler = function (event) {
            if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
              event.stopPropagation();
              setImmediates.shift()();
            }
          };
          addEventListener('message', Browser_setImmediate_messageHandler, true);
          setImmediate = function Browser_emulated_setImmediate(func) {
            setImmediates.push(func);
            if (ENVIRONMENT_IS_WORKER) {
              if (Module['setImmediates'] === undefined) Module['setImmediates'] = [];
              Module['setImmediates'].push(func);
              postMessage({ target: emscriptenMainLoopMessageId });
            } else postMessage(emscriptenMainLoopMessageId, '*');
          };
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
          setImmediate(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'immediate';
      }
      return 0;
    }
    function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
      noExitRuntime = true;
      assert(
        !Browser.mainLoop.func,
        'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.',
      );
      Browser.mainLoop.func = browserIterationFunc;
      Browser.mainLoop.arg = arg;
      var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              next = next + 0.5;
              Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms');
          Browser.mainLoop.updateStatus();
          if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
        Browser.mainLoop.currentFrameNumber = (Browser.mainLoop.currentFrameNumber + 1) | 0;
        if (
          Browser.mainLoop.timingMode == 1 &&
          Browser.mainLoop.timingValue > 1 &&
          Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0
        ) {
          Browser.mainLoop.scheduler();
          return;
        } else if (Browser.mainLoop.timingMode == 0) {
          Browser.mainLoop.tickStartTime = _emscripten_get_now();
        }
        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
          warnOnce(
            'Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!',
          );
          Browser.mainLoop.method = '';
        }
        Browser.mainLoop.runIter(browserIterationFunc);
        checkStackCookie();
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) return;
        if (typeof SDL === 'object' && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler();
      };
      if (!noSetTiming) {
        if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps);
        else _emscripten_set_main_loop_timing(1, 1);
        Browser.mainLoop.scheduler();
      }
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    }
    var Browser = {
      mainLoop: {
        scheduler: null,
        method: '',
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause: function () {
          Browser.mainLoop.scheduler = null;
          Browser.mainLoop.currentlyRunningMainloop++;
        },
        resume: function () {
          Browser.mainLoop.currentlyRunningMainloop++;
          var timingMode = Browser.mainLoop.timingMode;
          var timingValue = Browser.mainLoop.timingValue;
          var func = Browser.mainLoop.func;
          Browser.mainLoop.func = null;
          setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
          _emscripten_set_main_loop_timing(timingMode, timingValue);
          Browser.mainLoop.scheduler();
        },
        updateStatus: function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        },
        runIter: function (func) {
          if (ABORT) return;
          if (Module['preMainLoop']) {
            var preRet = Module['preMainLoop']();
            if (preRet === false) {
              return;
            }
          }
          try {
            func();
          } catch (e) {
            if (e instanceof ExitStatus) {
              return;
            } else if (e == 'unwind') {
              return;
            } else {
              if (e && typeof e === 'object' && e.stack) err('exception thrown: ' + [e, e.stack]);
              throw e;
            }
          }
          if (Module['postMainLoop']) Module['postMainLoop']();
        },
      },
      isFullscreen: false,
      pointerLock: false,
      moduleContextCreatedCallbacks: [],
      workers: [],
      init: function () {
        if (!Module['preloadPlugins']) Module['preloadPlugins'] = [];
        if (Browser.initted) return;
        Browser.initted = true;
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch (e) {
          Browser.hasBlobConstructor = false;
          console.log('warning: no blob constructor, cannot create blobs with mimetypes');
        }
        Browser.BlobBuilder =
          typeof MozBlobBuilder != 'undefined'
            ? MozBlobBuilder
            : typeof WebKitBlobBuilder != 'undefined'
            ? WebKitBlobBuilder
            : !Browser.hasBlobConstructor
            ? console.log('warning: no BlobBuilder')
            : null;
        Browser.URLObject = typeof window != 'undefined' ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log(
            'warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.',
          );
          Module.noImageDecoding = true;
        }
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) {
                b = new Blob([new Uint8Array(byteArray).buffer], { type: Browser.getMimetype(name) });
              }
            } catch (e) {
              warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append(new Uint8Array(byteArray).buffer);
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module['preloadedImages'][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module['preloadedAudios'][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module['preloadedAudios'][name] = new Audio();
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch (e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b);
            assert(typeof url == 'string', 'createObjectURL must return a url as a string');
            var audio = new Audio();
            audio.addEventListener(
              'canplaythrough',
              function () {
                finish(audio);
              },
              false,
            );
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits - 6)) & 63;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar & 3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar & 15) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio);
            };
            audio.src = url;
            Browser.safeSetTimeout(function () {
              finish(audio);
            }, 1e4);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
        function pointerLockChange() {
          Browser.pointerLock =
            document['pointerLockElement'] === Module['canvas'] ||
            document['mozPointerLockElement'] === Module['canvas'] ||
            document['webkitPointerLockElement'] === Module['canvas'] ||
            document['msPointerLockElement'] === Module['canvas'];
        }
        var canvas = Module['canvas'];
        if (canvas) {
          canvas.requestPointerLock =
            canvas['requestPointerLock'] ||
            canvas['mozRequestPointerLock'] ||
            canvas['webkitRequestPointerLock'] ||
            canvas['msRequestPointerLock'] ||
            function () {};
          canvas.exitPointerLock =
            document['exitPointerLock'] ||
            document['mozExitPointerLock'] ||
            document['webkitExitPointerLock'] ||
            document['msExitPointerLock'] ||
            function () {};
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
          if (Module['elementPointerLock']) {
            canvas.addEventListener(
              'click',
              function (ev) {
                if (!Browser.pointerLock && Module['canvas'].requestPointerLock) {
                  Module['canvas'].requestPointerLock();
                  ev.preventDefault();
                }
              },
              false,
            );
          }
        }
      },
      createContext: function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
          var contextAttributes = { antialias: false, alpha: false, majorVersion: 1 };
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
          if (typeof GL !== 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
        if (!ctx) return null;
        if (setInModule) {
          if (!useWebGL)
            assert(
              typeof GLctx === 'undefined',
              'cannot set in module if GLctx is used, but we are a non-GL context that would replace it',
            );
          Module.ctx = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function (callback) {
            callback();
          });
          Browser.init();
        }
        return ctx;
      },
      destroyContext: function (canvas, useWebGL, setInModule) {},
      fullscreenHandlersInstalled: false,
      lockPointer: undefined,
      resizeCanvas: undefined,
      requestFullscreen: function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
        var canvas = Module['canvas'];
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if (
            (document['fullscreenElement'] ||
              document['mozFullScreenElement'] ||
              document['msFullscreenElement'] ||
              document['webkitFullscreenElement'] ||
              document['webkitCurrentFullScreenElement']) === canvasContainer
          ) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullscreen);
          if (Module['onFullscreen']) Module['onFullscreen'](Browser.isFullscreen);
        }
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
        var canvasContainer = document.createElement('div');
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen =
          canvasContainer['requestFullscreen'] ||
          canvasContainer['mozRequestFullScreen'] ||
          canvasContainer['msRequestFullscreen'] ||
          (canvasContainer['webkitRequestFullscreen']
            ? function () {
                canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
              }
            : null) ||
          (canvasContainer['webkitRequestFullScreen']
            ? function () {
                canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']);
              }
            : null);
        canvasContainer.requestFullscreen();
      },
      requestFullScreen: function () {
        abort('Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)');
      },
      exitFullscreen: function () {
        if (!Browser.isFullscreen) {
          return false;
        }
        var CFS =
          document['exitFullscreen'] ||
          document['cancelFullScreen'] ||
          document['mozCancelFullScreen'] ||
          document['msExitFullscreen'] ||
          document['webkitCancelFullScreen'] ||
          function () {};
        CFS.apply(document, []);
        return true;
      },
      nextRAF: 0,
      fakeRequestAnimationFrame: function (func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
          Browser.nextRAF = now + 1e3 / 60;
        } else {
          while (now + 2 >= Browser.nextRAF) {
            Browser.nextRAF += 1e3 / 60;
          }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay);
      },
      requestAnimationFrame: function (func) {
        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func);
      },
      safeCallback: function (func) {
        return function () {
          if (!ABORT) return func.apply(null, arguments);
        };
      },
      allowAsyncCallbacks: true,
      queuedAsyncCallbacks: [],
      pauseAsyncCallbacks: function () {
        Browser.allowAsyncCallbacks = false;
      },
      resumeAsyncCallbacks: function () {
        Browser.allowAsyncCallbacks = true;
        if (Browser.queuedAsyncCallbacks.length > 0) {
          var callbacks = Browser.queuedAsyncCallbacks;
          Browser.queuedAsyncCallbacks = [];
          callbacks.forEach(function (func) {
            func();
          });
        }
      },
      safeRequestAnimationFrame: function (func) {
        return Browser.requestAnimationFrame(function () {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          } else {
            Browser.queuedAsyncCallbacks.push(func);
          }
        });
      },
      safeSetTimeout: function (func, timeout) {
        noExitRuntime = true;
        return setTimeout(function () {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          } else {
            Browser.queuedAsyncCallbacks.push(func);
          }
        }, timeout);
      },
      safeSetInterval: function (func, timeout) {
        noExitRuntime = true;
        return setInterval(function () {
          if (ABORT) return;
          if (Browser.allowAsyncCallbacks) {
            func();
          }
        }, timeout);
      },
      getMimetype: function (name) {
        return {
          jpg: 'image/jpeg',
          jpeg: 'image/jpeg',
          png: 'image/png',
          bmp: 'image/bmp',
          ogg: 'audio/ogg',
          wav: 'audio/wav',
          mp3: 'audio/mpeg',
        }[name.substr(name.lastIndexOf('.') + 1)];
      },
      getUserMedia: function (func) {
        if (!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] || navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },
      getMovementX: function (event) {
        return event['movementX'] || event['mozMovementX'] || event['webkitMovementX'] || 0;
      },
      getMovementY: function (event) {
        return event['movementY'] || event['mozMovementY'] || event['webkitMovementY'] || 0;
      },
      getMouseWheelDelta: function (event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY;
            switch (event.deltaMode) {
              case 0:
                delta /= 100;
                break;
              case 1:
                delta /= 3;
                break;
              case 2:
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },
      mouseX: 0,
      mouseY: 0,
      mouseMovementX: 0,
      mouseMovementY: 0,
      touches: {},
      lastTouches: {},
      calculateMouseEvent: function (event) {
        if (Browser.pointerLock) {
          if (event.type != 'mousemove' && 'mozMovementX' in event) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          if (typeof SDL != 'undefined') {
            Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
            Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
            Browser.mouseX += Browser.mouseMovementX;
            Browser.mouseY += Browser.mouseMovementY;
          }
        } else {
          var rect = Module['canvas'].getBoundingClientRect();
          var cw = Module['canvas'].width;
          var ch = Module['canvas'].height;
          var scrollX = typeof window.scrollX !== 'undefined' ? window.scrollX : window.pageXOffset;
          var scrollY = typeof window.scrollY !== 'undefined' ? window.scrollY : window.pageYOffset;
          assert(
            typeof scrollX !== 'undefined' && typeof scrollY !== 'undefined',
            'Unable to retrieve scroll position, mouse positions likely broken.',
          );
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return;
            }
            var adjustedX = touch.pageX - (scrollX + rect.left);
            var adjustedY = touch.pageY - (scrollY + rect.top);
            adjustedX = adjustedX * (cw / rect.width);
            adjustedY = adjustedY * (ch / rect.height);
            var coords = { x: adjustedX, y: adjustedY };
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              if (!last) last = coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
          var x = event.pageX - (scrollX + rect.left);
          var y = event.pageY - (scrollY + rect.top);
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },
      asyncLoad: function (url, onload, onerror, noRunDep) {
        var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
        readAsync(
          url,
          function (arrayBuffer) {
            assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
            onload(new Uint8Array(arrayBuffer));
            if (dep) removeRunDependency(dep);
          },
          function (event) {
            if (onerror) {
              onerror();
            } else {
              throw 'Loading data file "' + url + '" failed.';
            }
          },
        );
        if (dep) addRunDependency(dep);
      },
      resizeListeners: [],
      updateResizeListeners: function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function (listener) {
          listener(canvas.width, canvas.height);
        });
      },
      setCanvasSize: function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
      windowedWidth: 0,
      windowedHeight: 0,
      setFullscreenCanvasSize: function () {
        if (typeof SDL != 'undefined') {
          var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
          flags = flags | 8388608;
          GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },
      setWindowedCanvasSize: function () {
        if (typeof SDL != 'undefined') {
          var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
          flags = flags & ~8388608;
          GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags;
        }
        Browser.updateCanvasDimensions(Module['canvas']);
        Browser.updateResizeListeners();
      },
      updateCanvasDimensions: function (canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w / h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (
          (document['fullscreenElement'] ||
            document['mozFullScreenElement'] ||
            document['msFullscreenElement'] ||
            document['webkitFullscreenElement'] ||
            document['webkitCurrentFullScreenElement']) === canvas.parentNode &&
          typeof screen != 'undefined'
        ) {
          var factor = Math.min(screen.width / w, screen.height / h);
          w = Math.round(w * factor);
          h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width != w) canvas.width = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty('width');
            canvas.style.removeProperty('height');
          }
        } else {
          if (canvas.width != wNative) canvas.width = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty('width', w + 'px', 'important');
              canvas.style.setProperty('height', h + 'px', 'important');
            } else {
              canvas.style.removeProperty('width');
              canvas.style.removeProperty('height');
            }
          }
        }
      },
      wgetRequests: {},
      nextWgetRequestHandle: 0,
      getNextWgetRequestHandle: function () {
        var handle = Browser.nextWgetRequestHandle;
        Browser.nextWgetRequestHandle++;
        return handle;
      },
    };
    function _emscripten_force_exit(status) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(20, 1, status);
      warnOnce(
        'emscripten_force_exit cannot actually shut down the runtime, as the build does not have EXIT_RUNTIME set',
      );
      noExitRuntime = false;
      exit(status);
    }
    function _emscripten_futex_wait(addr, val, timeout) {
      if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & (3 != 0)) return -28;
      if (!ENVIRONMENT_IS_WEB) {
        var ret = Atomics.wait(GROWABLE_HEAP_I32(), addr >> 2, val, timeout);
        if (ret === 'timed-out') return -73;
        if (ret === 'not-equal') return -6;
        if (ret === 'ok') return 0;
        throw 'Atomics.wait returned an unexpected value ' + ret;
      } else {
        if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
          return -6;
        }
        var tNow = performance.now();
        var tEnd = tNow + timeout;
        assert(__emscripten_main_thread_futex > 0);
        var lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr);
        assert(lastAddr == 0);
        while (1) {
          tNow = performance.now();
          if (tNow > tEnd) {
            lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
            assert(lastAddr == addr || lastAddr == 0);
            return -73;
          }
          lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
          assert(lastAddr == addr || lastAddr == 0);
          if (lastAddr == 0) {
            break;
          }
          _emscripten_main_thread_process_queued_calls();
          if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
            return -6;
          }
          lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr);
          assert(lastAddr == 0);
        }
        return 0;
      }
    }
    function _emscripten_memcpy_big(dest, src, num) {
      GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
    }
    function _emscripten_proxy_to_main_thread_js(index, sync) {
      var numCallArgs = arguments.length - 2;
      if (numCallArgs > 20 - 1)
        throw (
          'emscripten_proxy_to_main_thread_js: Too many arguments ' +
          numCallArgs +
          ' to proxied function idx=' +
          index +
          ', maximum supported is ' +
          (20 - 1) +
          '!'
        );
      var stack = stackSave();
      var serializedNumCallArgs = numCallArgs;
      var args = stackAlloc(serializedNumCallArgs * 8);
      var b = args >> 3;
      for (var i = 0; i < numCallArgs; i++) {
        var arg = arguments[2 + i];
        GROWABLE_HEAP_F64()[b + i] = arg;
      }
      var ret = _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync);
      stackRestore(stack);
      return ret;
    }
    var _emscripten_receive_on_main_thread_js_callArgs = [];
    var readAsmConstArgsArray = [];
    function readAsmConstArgs(sigPtr, buf) {
      assert(Array.isArray(readAsmConstArgsArray));
      assert(buf % 16 == 0);
      readAsmConstArgsArray.length = 0;
      var ch;
      buf >>= 2;
      while ((ch = GROWABLE_HEAP_U8()[sigPtr++])) {
        assert(ch === 100 || ch === 102 || ch === 105);
        var double = ch < 105;
        if (double && buf & 1) buf++;
        readAsmConstArgsArray.push(double ? GROWABLE_HEAP_F64()[buf++ >> 1] : GROWABLE_HEAP_I32()[buf]);
        ++buf;
      }
      return readAsmConstArgsArray;
    }
    function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
      _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
      var b = args >> 3;
      for (var i = 0; i < numCallArgs; i++) {
        _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i];
      }
      var isEmAsmConst = index < 0;
      var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
      assert(func.length == numCallArgs, 'Call args mismatch in emscripten_receive_on_main_thread_js');
      return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
    }
    function _emscripten_get_heap_size() {
      return GROWABLE_HEAP_U8().length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
        console.error(
          'emscripten_realloc_buffer: Attempted to grow heap from ' +
            buffer.byteLength +
            ' bytes to ' +
            size +
            ' bytes, but got error: ' +
            e,
        );
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      if (requestedSize <= oldSize) {
        return false;
      }
      var maxHeapSize = 4294967296;
      if (requestedSize > maxHeapSize) {
        err(
          'Cannot enlarge memory, asked to go up to ' +
            requestedSize +
            ' bytes, but the limit is ' +
            maxHeapSize +
            ' bytes!',
        );
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      err('Failed to grow the heap from ' + oldSize + ' bytes to ' + newSize + ' bytes, not enough memory!');
      return false;
    }
    var JSEvents = {
      inEventHandler: 0,
      removeAllEventListeners: function () {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
          JSEvents._removeHandler(i);
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = [];
      },
      registerRemoveEventListeners: function () {
        if (!JSEvents.removeEventListenersRegistered) {
          __ATEXIT__.push(JSEvents.removeAllEventListeners);
          JSEvents.removeEventListenersRegistered = true;
        }
      },
      deferredCalls: [],
      deferCall: function (targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        for (var i in JSEvents.deferredCalls) {
          var call = JSEvents.deferredCalls[i];
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({ targetFunction: targetFunction, precedence: precedence, argsList: argsList });
        JSEvents.deferredCalls.sort(function (x, y) {
          return x.precedence < y.precedence;
        });
      },
      removeDeferredCalls: function (targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
            JSEvents.deferredCalls.splice(i, 1);
            --i;
          }
        }
      },
      canPerformEventHandlerRequests: function () {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },
      runDeferredCalls: function () {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
          var call = JSEvents.deferredCalls[i];
          JSEvents.deferredCalls.splice(i, 1);
          --i;
          call.targetFunction.apply(null, call.argsList);
        }
      },
      eventHandlers: [],
      removeAllHandlersOnTarget: function (target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (
            JSEvents.eventHandlers[i].target == target &&
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)
          ) {
            JSEvents._removeHandler(i--);
          }
        }
      },
      _removeHandler: function (i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },
      registerOrRemoveHandler: function (eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
          ++JSEvents.inEventHandler;
          JSEvents.currentEventHandler = eventHandler;
          JSEvents.runDeferredCalls();
          eventHandler.handlerFunc(event);
          JSEvents.runDeferredCalls();
          --JSEvents.inEventHandler;
        };
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = jsEventHandler;
          eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
          JSEvents.registerRemoveEventListeners();
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (
              JSEvents.eventHandlers[i].target == eventHandler.target &&
              JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString
            ) {
              JSEvents._removeHandler(i--);
            }
          }
        }
      },
      queueEventHandlerOnThread_iiii: function (targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
        var stackTop = stackSave();
        var varargs = stackAlloc(12);
        GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
        GROWABLE_HEAP_I32()[(varargs + 4) >> 2] = eventData;
        GROWABLE_HEAP_I32()[(varargs + 8) >> 2] = userData;
        __emscripten_call_on_thread(0, targetThread, 637534208, eventHandlerFunc, eventData, varargs);
        stackRestore(stackTop);
      },
      getTargetThreadForEventCallback: function (targetThread) {
        switch (targetThread) {
          case 1:
            return 0;
          case 2:
            return PThread.currentProxiedOperationCallerThread;
          default:
            return targetThread;
        }
      },
      getNodeNameForTarget: function (target) {
        if (!target) return '';
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return target && target.nodeName ? target.nodeName : '';
      },
      fullscreenEnabled: function () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
      },
    };
    function stringToNewUTF8(jsString) {
      var length = lengthBytesUTF8(jsString) + 1;
      var cString = _malloc(length);
      stringToUTF8(jsString, cString, length);
      return cString;
    }
    function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {
      var stackTop = stackSave();
      var varargs = stackAlloc(12);
      var targetCanvasPtr = 0;
      if (targetCanvas) {
        targetCanvasPtr = stringToNewUTF8(targetCanvas);
      }
      GROWABLE_HEAP_I32()[varargs >> 2] = targetCanvasPtr;
      GROWABLE_HEAP_I32()[(varargs + 4) >> 2] = width;
      GROWABLE_HEAP_I32()[(varargs + 8) >> 2] = height;
      __emscripten_call_on_thread(0, targetThread, 657457152, 0, targetCanvasPtr, varargs);
      stackRestore(stackTop);
    }
    function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {
      targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : '';
      _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height);
    }
    function maybeCStringToJsString(cString) {
      return cString > 2 ? UTF8ToString(cString) : cString;
    }
    var specialHTMLTargets = [
      0,
      typeof document !== 'undefined' ? document : 0,
      typeof window !== 'undefined' ? window : 0,
    ];
    function findEventTarget(target) {
      target = maybeCStringToJsString(target);
      var domElement =
        specialHTMLTargets[target] || (typeof document !== 'undefined' ? document.querySelector(target) : undefined);
      return domElement;
    }
    function findCanvasEventTarget(target) {
      return findEventTarget(target);
    }
    function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      if (canvas.canvasSharedPtr) {
        GROWABLE_HEAP_I32()[canvas.canvasSharedPtr >> 2] = width;
        GROWABLE_HEAP_I32()[(canvas.canvasSharedPtr + 4) >> 2] = height;
      }
      if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {
        if (canvas.offscreenCanvas) canvas = canvas.offscreenCanvas;
        var autoResizeViewport = false;
        if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
          var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
          autoResizeViewport =
            prevViewport[0] === 0 &&
            prevViewport[1] === 0 &&
            prevViewport[2] === canvas.width &&
            prevViewport[3] === canvas.height;
        }
        canvas.width = width;
        canvas.height = height;
        if (autoResizeViewport) {
          canvas.GLctxObject.GLctx.viewport(0, 0, width, height);
        }
      } else if (canvas.canvasSharedPtr) {
        var targetThread = GROWABLE_HEAP_I32()[(canvas.canvasSharedPtr + 8) >> 2];
        _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);
        return 1;
      } else {
        return -4;
      }
      return 0;
    }
    function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(21, 1, target, width, height);
      return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
    }
    function _emscripten_set_canvas_element_size(target, width, height) {
      var canvas = findCanvasEventTarget(target);
      if (canvas) {
        return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
      } else {
        return _emscripten_set_canvas_element_size_main_thread(target, width, height);
      }
    }
    function _emscripten_set_current_thread_status(newStatus) {}
    function __webgl_enable_ANGLE_instanced_arrays(ctx) {
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      if (ext) {
        ctx['vertexAttribDivisor'] = function (index, divisor) {
          ext['vertexAttribDivisorANGLE'](index, divisor);
        };
        ctx['drawArraysInstanced'] = function (mode, first, count, primcount) {
          ext['drawArraysInstancedANGLE'](mode, first, count, primcount);
        };
        ctx['drawElementsInstanced'] = function (mode, count, type, indices, primcount) {
          ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount);
        };
        return 1;
      }
    }
    function __webgl_enable_OES_vertex_array_object(ctx) {
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = function () {
          return ext['createVertexArrayOES']();
        };
        ctx['deleteVertexArray'] = function (vao) {
          ext['deleteVertexArrayOES'](vao);
        };
        ctx['bindVertexArray'] = function (vao) {
          ext['bindVertexArrayOES'](vao);
        };
        ctx['isVertexArray'] = function (vao) {
          return ext['isVertexArrayOES'](vao);
        };
        return 1;
      }
    }
    function __webgl_enable_WEBGL_draw_buffers(ctx) {
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = function (n, bufs) {
          ext['drawBuffersWEBGL'](n, bufs);
        };
        return 1;
      }
    }
    function __webgl_enable_WEBGL_multi_draw(ctx) {
      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
    }
    var GL = {
      counter: 1,
      buffers: [],
      programs: [],
      framebuffers: [],
      renderbuffers: [],
      textures: [],
      uniforms: [],
      shaders: [],
      vaos: [],
      contexts: {},
      offscreenCanvases: {},
      timerQueriesEXT: [],
      programInfos: {},
      stringCache: {},
      unpackAlignment: 4,
      recordError: function recordError(errorCode) {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },
      getNewId: function (table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },
      getSource: function (shader, count, string, length) {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? GROWABLE_HEAP_I32()[(length + i * 4) >> 2] : -1;
          source += UTF8ToString(GROWABLE_HEAP_I32()[(string + i * 4) >> 2], len < 0 ? undefined : len);
        }
        return source;
      },
      createContext: function (canvas, webGLContextAttributes) {
        var ctx = canvas.getContext('webgl', webGLContextAttributes);
        if (!ctx) return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle;
      },
      registerContext: function (ctx, webGLContextAttributes) {
        var handle = _malloc(8);
        GROWABLE_HEAP_I32()[(handle + 4) >> 2] = _pthread_self();
        var context = {
          handle: handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx,
        };
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (
          typeof webGLContextAttributes.enableExtensionsByDefault === 'undefined' ||
          webGLContextAttributes.enableExtensionsByDefault
        ) {
          GL.initExtensions(context);
        }
        return handle;
      },
      makeContextCurrent: function (contextHandle) {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx);
      },
      getContext: function (contextHandle) {
        return GL.contexts[contextHandle];
      },
      deleteContext: function (contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
        if (typeof JSEvents === 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
          GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        _free(GL.contexts[contextHandle].handle);
        GL.contexts[contextHandle] = null;
      },
      initExtensions: function (context) {
        if (!context) context = GL.currentContext;
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        __webgl_enable_ANGLE_instanced_arrays(GLctx);
        __webgl_enable_OES_vertex_array_object(GLctx);
        __webgl_enable_WEBGL_draw_buffers(GLctx);
        GLctx.disjointTimerQueryExt = GLctx.getExtension('EXT_disjoint_timer_query');
        __webgl_enable_WEBGL_multi_draw(GLctx);
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function (ext) {
          if (ext.indexOf('lose_context') < 0 && ext.indexOf('debug') < 0) {
            GLctx.getExtension(ext);
          }
        });
      },
      populateUniformTable: function (program) {
        var p = GL.programs[program];
        var ptable = (GL.programInfos[program] = {
          uniforms: {},
          maxUniformLength: 0,
          maxAttributeLength: -1,
          maxUniformBlockNameLength: -1,
        });
        var utable = ptable.uniforms;
        var numUniforms = GLctx.getProgramParameter(p, 35718);
        for (var i = 0; i < numUniforms; ++i) {
          var u = GLctx.getActiveUniform(p, i);
          var name = u.name;
          ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length + 1);
          if (name.slice(-1) == ']') {
            name = name.slice(0, name.lastIndexOf('['));
          }
          var loc = GLctx.getUniformLocation(p, name);
          if (loc) {
            var id = GL.getNewId(GL.uniforms);
            utable[name] = [u.size, id];
            GL.uniforms[id] = loc;
            for (var j = 1; j < u.size; ++j) {
              var n = name + '[' + j + ']';
              loc = GLctx.getUniformLocation(p, n);
              id = GL.getNewId(GL.uniforms);
              GL.uniforms[id] = loc;
            }
          }
        }
      },
    };
    var __emscripten_webgl_power_preferences = ['default', 'low-power', 'high-performance'];
    function _emscripten_webgl_do_create_context(target, attributes) {
      assert(attributes);
      var a = attributes >> 2;
      var powerPreference = GROWABLE_HEAP_I32()[a + (24 >> 2)];
      var contextAttributes = {
        alpha: !!GROWABLE_HEAP_I32()[a + (0 >> 2)],
        depth: !!GROWABLE_HEAP_I32()[a + (4 >> 2)],
        stencil: !!GROWABLE_HEAP_I32()[a + (8 >> 2)],
        antialias: !!GROWABLE_HEAP_I32()[a + (12 >> 2)],
        premultipliedAlpha: !!GROWABLE_HEAP_I32()[a + (16 >> 2)],
        preserveDrawingBuffer: !!GROWABLE_HEAP_I32()[a + (20 >> 2)],
        powerPreference: __emscripten_webgl_power_preferences[powerPreference],
        failIfMajorPerformanceCaveat: !!GROWABLE_HEAP_I32()[a + (28 >> 2)],
        majorVersion: GROWABLE_HEAP_I32()[a + (32 >> 2)],
        minorVersion: GROWABLE_HEAP_I32()[a + (36 >> 2)],
        enableExtensionsByDefault: GROWABLE_HEAP_I32()[a + (40 >> 2)],
        explicitSwapControl: GROWABLE_HEAP_I32()[a + (44 >> 2)],
        proxyContextToMainThread: GROWABLE_HEAP_I32()[a + (48 >> 2)],
        renderViaOffscreenBackBuffer: GROWABLE_HEAP_I32()[a + (52 >> 2)],
      };
      var canvas = findCanvasEventTarget(target);
      if (!canvas) {
        return 0;
      }
      if (contextAttributes.explicitSwapControl) {
        return 0;
      }
      var contextHandle = GL.createContext(canvas, contextAttributes);
      return contextHandle;
    }
    function _emscripten_webgl_create_context(a0, a1) {
      return _emscripten_webgl_do_create_context(a0, a1);
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || './this.program';
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang =
          ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') +
          '.UTF-8';
        var env = {
          USER: 'web_user',
          LOGNAME: 'web_user',
          PATH: '/',
          PWD: '/',
          HOME: '/home/web_user',
          LANG: lang,
          _: getExecutableName(),
        };
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    function _environ_get(__environ, environ_buf) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(22, 1, __environ, environ_buf);
      try {
        var bufSize = 0;
        getEnvStrings().forEach(function (string, i) {
          var ptr = environ_buf + bufSize;
          GROWABLE_HEAP_I32()[(__environ + i * 4) >> 2] = ptr;
          writeAsciiToMemory(string, ptr);
          bufSize += string.length + 1;
        });
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(23, 1, penviron_count, penviron_buf_size);
      try {
        var strings = getEnvStrings();
        GROWABLE_HEAP_I32()[penviron_count >> 2] = strings.length;
        var bufSize = 0;
        strings.forEach(function (string) {
          bufSize += string.length + 1;
        });
        GROWABLE_HEAP_I32()[penviron_buf_size >> 2] = bufSize;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _execve(path, argv, envp) {
      setErrNo(45);
      return -1;
    }
    function _fd_close(fd) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(24, 1, fd);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_fdstat_get(fd, pbuf) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(25, 1, fd, pbuf);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
        GROWABLE_HEAP_I8()[pbuf >> 0] = type;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_pread(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(26, 1, fd, iov, iovcnt, offset_low, offset_high, pnum);
      try {
        assert(!offset_high, 'offsets over 2^32 not yet supported');
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt, offset_low);
        GROWABLE_HEAP_I32()[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_pwrite(fd, iov, iovcnt, offset_low, offset_high, pnum) {
      if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(27, 1, fd, iov, iovcnt, offset_low, offset_high, pnum);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        assert(!offset_high, 'offsets over 2^32 not yet supported');
        var num = SYSCALLS.doWritev(stream, iov, iovcnt, offset_low);
        GROWABLE_HEAP_I32()[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_read(fd, iov, iovcnt, pnum) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(28, 1, fd, iov, iovcnt, pnum);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        GROWABLE_HEAP_I32()[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      if (ENVIRONMENT_IS_PTHREAD)
        return _emscripten_proxy_to_main_thread_js(29, 1, fd, offset_low, offset_high, whence, newOffset);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var HIGH_OFFSET = 4294967296;
        var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
        var DOUBLE_LIMIT = 9007199254740992;
        if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
          return -61;
        }
        FS.llseek(stream, offset, whence);
        (tempI64 = [
          stream.position >>> 0,
          ((tempDouble = stream.position),
          +Math.abs(tempDouble) >= 1
            ? tempDouble > 0
              ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0
              : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0
            : 0),
        ]),
          (GROWABLE_HEAP_I32()[newOffset >> 2] = tempI64[0]),
          (GROWABLE_HEAP_I32()[(newOffset + 4) >> 2] = tempI64[1]);
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(30, 1, fd, iov, iovcnt, pnum);
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doWritev(stream, iov, iovcnt);
        GROWABLE_HEAP_I32()[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
        return e.errno;
      }
    }
    function _fork() {
      setErrNo(6);
      return -1;
    }
    function _kill(pid, sig) {
      err('Calling stub instead of kill()');
      setErrNo(ERRNO_CODES.EPERM);
      return -1;
    }
    function _pthread_cleanup_pop(execute) {
      var routine = PThread.threadExitHandlers.pop();
      if (execute) routine();
    }
    function spawnThread(threadParams) {
      if (ENVIRONMENT_IS_PTHREAD)
        throw 'Internal Error! spawnThread() can only ever be called from main application thread!';
      var worker = PThread.getNewWorker();
      if (worker.pthread !== undefined) throw 'Internal error!';
      if (!threadParams.pthread_ptr) throw 'Internal error, no pthread ptr!';
      PThread.runningWorkers.push(worker);
      var tlsMemory = _malloc(128 * 4);
      for (var i = 0; i < 128; ++i) {
        GROWABLE_HEAP_I32()[(tlsMemory + i * 4) >> 2] = 0;
      }
      var stackHigh = threadParams.stackBase + threadParams.stackSize;
      var pthread = (PThread.pthreads[threadParams.pthread_ptr] = {
        worker: worker,
        stackBase: threadParams.stackBase,
        stackSize: threadParams.stackSize,
        allocatedOwnStack: threadParams.allocatedOwnStack,
        thread: threadParams.pthread_ptr,
        threadInfoStruct: threadParams.pthread_ptr,
      });
      var tis = pthread.threadInfoStruct >> 2;
      Atomics.store(GROWABLE_HEAP_U32(), tis + (0 >> 2), 0);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (4 >> 2), 0);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (8 >> 2), 0);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (64 >> 2), threadParams.detached);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (100 >> 2), tlsMemory);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (44 >> 2), 0);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (40 >> 2), pthread.threadInfoStruct);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (80 >> 2), threadParams.stackSize);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (76 >> 2), stackHigh);
      Atomics.store(GROWABLE_HEAP_U32(), tis + (104 >> 2), threadParams.stackSize);
      Atomics.store(GROWABLE_HEAP_U32(), tis + ((104 + 8) >> 2), stackHigh);
      Atomics.store(GROWABLE_HEAP_U32(), tis + ((104 + 12) >> 2), threadParams.detached);
      Atomics.store(GROWABLE_HEAP_U32(), tis + ((104 + 20) >> 2), threadParams.schedPolicy);
      Atomics.store(GROWABLE_HEAP_U32(), tis + ((104 + 24) >> 2), threadParams.schedPrio);
      var global_libc = _emscripten_get_global_libc();
      var global_locale = global_libc + 40;
      Atomics.store(GROWABLE_HEAP_U32(), tis + (172 >> 2), global_locale);
      worker.pthread = pthread;
      var msg = {
        cmd: 'run',
        start_routine: threadParams.startRoutine,
        arg: threadParams.arg,
        threadInfoStruct: threadParams.pthread_ptr,
        stackBase: threadParams.stackBase,
        stackSize: threadParams.stackSize,
      };
      worker.runPthread = function () {
        msg.time = performance.now();
        worker.postMessage(msg, threadParams.transferList);
      };
      if (worker.loaded) {
        worker.runPthread();
        delete worker.runPthread;
      }
    }
    function _pthread_getschedparam(thread, policy, schedparam) {
      if (!policy && !schedparam) return ERRNO_CODES.EINVAL;
      if (!thread) {
        err('pthread_getschedparam called with a null thread pointer!');
        return ERRNO_CODES.ESRCH;
      }
      var self = GROWABLE_HEAP_I32()[(thread + 12) >> 2];
      if (self !== thread) {
        err(
          'pthread_getschedparam attempted on thread ' +
            thread +
            ', which does not point to a valid thread, or does not exist anymore!',
        );
        return ERRNO_CODES.ESRCH;
      }
      var schedPolicy = Atomics.load(GROWABLE_HEAP_U32(), (thread + 104 + 20) >> 2);
      var schedPrio = Atomics.load(GROWABLE_HEAP_U32(), (thread + 104 + 24) >> 2);
      if (policy) GROWABLE_HEAP_I32()[policy >> 2] = schedPolicy;
      if (schedparam) GROWABLE_HEAP_I32()[schedparam >> 2] = schedPrio;
      return 0;
    }
    function _pthread_create(pthread_ptr, attr, start_routine, arg) {
      if (typeof SharedArrayBuffer === 'undefined') {
        err('Current environment does not support SharedArrayBuffer, pthreads are not available!');
        return 6;
      }
      if (!pthread_ptr) {
        err('pthread_create called with a null thread pointer!');
        return 28;
      }
      var transferList = [];
      var error = 0;
      if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
        return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg);
      }
      if (error) return error;
      var stackSize = 0;
      var stackBase = 0;
      var detached = 0;
      var schedPolicy = 0;
      var schedPrio = 0;
      if (attr && attr != -1) {
        stackSize = GROWABLE_HEAP_I32()[attr >> 2];
        stackSize += 81920;
        stackBase = GROWABLE_HEAP_I32()[(attr + 8) >> 2];
        detached = GROWABLE_HEAP_I32()[(attr + 12) >> 2] !== 0;
        var inheritSched = GROWABLE_HEAP_I32()[(attr + 16) >> 2] === 0;
        if (inheritSched) {
          var prevSchedPolicy = GROWABLE_HEAP_I32()[(attr + 20) >> 2];
          var prevSchedPrio = GROWABLE_HEAP_I32()[(attr + 24) >> 2];
          var parentThreadPtr = PThread.currentProxiedOperationCallerThread
            ? PThread.currentProxiedOperationCallerThread
            : _pthread_self();
          _pthread_getschedparam(parentThreadPtr, attr + 20, attr + 24);
          schedPolicy = GROWABLE_HEAP_I32()[(attr + 20) >> 2];
          schedPrio = GROWABLE_HEAP_I32()[(attr + 24) >> 2];
          GROWABLE_HEAP_I32()[(attr + 20) >> 2] = prevSchedPolicy;
          GROWABLE_HEAP_I32()[(attr + 24) >> 2] = prevSchedPrio;
        } else {
          schedPolicy = GROWABLE_HEAP_I32()[(attr + 20) >> 2];
          schedPrio = GROWABLE_HEAP_I32()[(attr + 24) >> 2];
        }
      } else {
        stackSize = 2097152;
      }
      var allocatedOwnStack = stackBase == 0;
      if (allocatedOwnStack) {
        stackBase = _memalign(16, stackSize);
      } else {
        stackBase -= stackSize;
        assert(stackBase > 0);
      }
      var threadInfoStruct = _malloc(228);
      for (var i = 0; i < 228 >> 2; ++i) GROWABLE_HEAP_U32()[(threadInfoStruct >> 2) + i] = 0;
      GROWABLE_HEAP_I32()[pthread_ptr >> 2] = threadInfoStruct;
      GROWABLE_HEAP_I32()[(threadInfoStruct + 12) >> 2] = threadInfoStruct;
      var headPtr = threadInfoStruct + 152;
      GROWABLE_HEAP_I32()[headPtr >> 2] = headPtr;
      var threadParams = {
        stackBase: stackBase,
        stackSize: stackSize,
        allocatedOwnStack: allocatedOwnStack,
        schedPolicy: schedPolicy,
        schedPrio: schedPrio,
        detached: detached,
        startRoutine: start_routine,
        pthread_ptr: threadInfoStruct,
        arg: arg,
        transferList: transferList,
      };
      if (ENVIRONMENT_IS_PTHREAD) {
        threadParams.cmd = 'spawnThread';
        postMessage(threadParams, transferList);
      } else {
        spawnThread(threadParams);
      }
      return 0;
    }
    function _pthread_detach(thread) {
      if (!thread) {
        err('pthread_detach attempted on a null thread pointer!');
        return ERRNO_CODES.ESRCH;
      }
      var self = GROWABLE_HEAP_I32()[(thread + 12) >> 2];
      if (self !== thread) {
        err(
          'pthread_detach attempted on thread ' +
            thread +
            ', which does not point to a valid thread, or does not exist anymore!',
        );
        return ERRNO_CODES.ESRCH;
      }
      var wasDetached = Atomics.compareExchange(GROWABLE_HEAP_U32(), (thread + 64) >> 2, 0, 2);
      return wasDetached ? ERRNO_CODES.EINVAL : 0;
    }
    function __pthread_testcancel_js() {
      if (!ENVIRONMENT_IS_PTHREAD) return;
      var tb = _pthread_self();
      if (!tb) return;
      var cancelDisabled = Atomics.load(GROWABLE_HEAP_U32(), (tb + 56) >> 2);
      if (cancelDisabled) return;
      var canceled = Atomics.load(GROWABLE_HEAP_U32(), (tb + 0) >> 2);
      if (canceled == 2) throw 'Canceled!';
    }
    function __emscripten_do_pthread_join(thread, status, block) {
      if (!thread) {
        err('pthread_join attempted on a null thread pointer!');
        return ERRNO_CODES.ESRCH;
      }
      if (ENVIRONMENT_IS_PTHREAD && _pthread_self() == thread) {
        err('PThread ' + thread + ' is attempting to join to itself!');
        return ERRNO_CODES.EDEADLK;
      } else if (!ENVIRONMENT_IS_PTHREAD && _emscripten_main_browser_thread_id() == thread) {
        err('Main thread ' + thread + ' is attempting to join to itself!');
        return ERRNO_CODES.EDEADLK;
      }
      var self = GROWABLE_HEAP_I32()[(thread + 12) >> 2];
      if (self !== thread) {
        err(
          'pthread_join attempted on thread ' +
            thread +
            ', which does not point to a valid thread, or does not exist anymore!',
        );
        return ERRNO_CODES.ESRCH;
      }
      var detached = Atomics.load(GROWABLE_HEAP_U32(), (thread + 64) >> 2);
      if (detached) {
        err('Attempted to join thread ' + thread + ', which was already detached!');
        return ERRNO_CODES.EINVAL;
      }
      if (block) {
        _emscripten_check_blocking_allowed();
      }
      for (;;) {
        var threadStatus = Atomics.load(GROWABLE_HEAP_U32(), (thread + 0) >> 2);
        if (threadStatus == 1) {
          var threadExitCode = Atomics.load(GROWABLE_HEAP_U32(), (thread + 4) >> 2);
          if (status) GROWABLE_HEAP_I32()[status >> 2] = threadExitCode;
          Atomics.store(GROWABLE_HEAP_U32(), (thread + 64) >> 2, 1);
          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);
          else postMessage({ cmd: 'cleanupThread', thread: thread });
          return 0;
        }
        if (!block) {
          return ERRNO_CODES.EBUSY;
        }
        __pthread_testcancel_js();
        if (!ENVIRONMENT_IS_PTHREAD) _emscripten_main_thread_process_queued_calls();
        _emscripten_futex_wait(thread + 0, threadStatus, ENVIRONMENT_IS_PTHREAD ? 100 : 1);
      }
    }
    function _pthread_join(thread, status) {
      return __emscripten_do_pthread_join(thread, status, true);
    }
    function _setTempRet0($i) {
      setTempRet0($i | 0);
    }
    function _sigaction(signum, act, oldact) {
      err('Calling stub instead of sigaction()');
      return 0;
    }
    function _sigemptyset(set) {
      GROWABLE_HEAP_I32()[set >> 2] = 0;
      return 0;
    }
    function __isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {}
      return sum;
    }
    var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
          days -= daysInCurrentMonth - newDate.getDate() + 1;
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth + 1);
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear() + 1);
          }
        } else {
          newDate.setDate(newDate.getDate() + days);
          return newDate;
        }
      }
      return newDate;
    }
    function _strftime(s, maxsize, format, tm) {
      var tm_zone = GROWABLE_HEAP_I32()[(tm + 40) >> 2];
      var date = {
        tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
        tm_min: GROWABLE_HEAP_I32()[(tm + 4) >> 2],
        tm_hour: GROWABLE_HEAP_I32()[(tm + 8) >> 2],
        tm_mday: GROWABLE_HEAP_I32()[(tm + 12) >> 2],
        tm_mon: GROWABLE_HEAP_I32()[(tm + 16) >> 2],
        tm_year: GROWABLE_HEAP_I32()[(tm + 20) >> 2],
        tm_wday: GROWABLE_HEAP_I32()[(tm + 24) >> 2],
        tm_yday: GROWABLE_HEAP_I32()[(tm + 28) >> 2],
        tm_isdst: GROWABLE_HEAP_I32()[(tm + 32) >> 2],
        tm_gmtoff: GROWABLE_HEAP_I32()[(tm + 36) >> 2],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : '',
      };
      var pattern = UTF8ToString(format);
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',
        '%D': '%m/%d/%y',
        '%F': '%Y-%m-%d',
        '%h': '%b',
        '%r': '%I:%M:%S %p',
        '%R': '%H:%M',
        '%T': '%H:%M:%S',
        '%x': '%m/%d/%y',
        '%X': '%H:%M:%S',
        '%Ec': '%c',
        '%EC': '%C',
        '%Ex': '%m/%d/%y',
        '%EX': '%H:%M:%S',
        '%Ey': '%y',
        '%EY': '%Y',
        '%Od': '%d',
        '%Oe': '%e',
        '%OH': '%H',
        '%OI': '%I',
        '%Om': '%m',
        '%OM': '%M',
        '%OS': '%S',
        '%Ou': '%u',
        '%OU': '%U',
        '%OV': '%V',
        '%Ow': '%w',
        '%OW': '%W',
        '%Oy': '%y',
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : value || '';
        while (str.length < digits) {
          str = character[0] + str;
        }
        return str;
      }
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : value > 0 ? 1 : 0;
        }
        var compare;
        if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
            compare = sgn(date1.getDate() - date2.getDate());
          }
        }
        return compare;
      }
      function getFirstWeekStartDate(janFourth) {
        switch (janFourth.getDay()) {
          case 0:
            return new Date(janFourth.getFullYear() - 1, 11, 29);
          case 1:
            return janFourth;
          case 2:
            return new Date(janFourth.getFullYear(), 0, 3);
          case 3:
            return new Date(janFourth.getFullYear(), 0, 2);
          case 4:
            return new Date(janFourth.getFullYear(), 0, 1);
          case 5:
            return new Date(janFourth.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(janFourth.getFullYear() - 1, 11, 30);
        }
      }
      function getWeekBasedYear(date) {
        var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
        var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
        var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
        var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
        var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
        if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
          if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
            return thisDate.getFullYear() + 1;
          } else {
            return thisDate.getFullYear();
          }
        } else {
          return thisDate.getFullYear() - 1;
        }
      }
      var EXPANSION_RULES_2 = {
        '%a': function (date) {
          return WEEKDAYS[date.tm_wday].substring(0, 3);
        },
        '%A': function (date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function (date) {
          return MONTHS[date.tm_mon].substring(0, 3);
        },
        '%B': function (date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function (date) {
          var year = date.tm_year + 1900;
          return leadingNulls((year / 100) | 0, 2);
        },
        '%d': function (date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function (date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function (date) {
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function (date) {
          return getWeekBasedYear(date);
        },
        '%H': function (date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function (date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function (date) {
          return leadingNulls(
            date.tm_mday +
              __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1),
            3,
          );
        },
        '%m': function (date) {
          return leadingNulls(date.tm_mon + 1, 2);
        },
        '%M': function (date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function () {
          return '\n';
        },
        '%p': function (date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function (date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function () {
          return '\t';
        },
        '%u': function (date) {
          return date.tm_wday || 7;
        },
        '%U': function (date) {
          var janFirst = new Date(date.tm_year + 1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstSunday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(
                __isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
                endDate.getMonth() - 1,
              ) - 31;
            var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
            var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstSunday, janFirst) === 0 ? '01' : '00';
        },
        '%V': function (date) {
          var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
          var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            return '53';
          }
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            return '01';
          }
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
            daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
          } else {
            daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference / 7), 2);
        },
        '%w': function (date) {
          return date.tm_wday;
        },
        '%W': function (date) {
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday =
            janFirst.getDay() === 1
              ? janFirst
              : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
          var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth =
              __arraySum(
                __isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR,
                endDate.getMonth() - 1,
              ) - 31;
            var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
            var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
            return leadingNulls(Math.ceil(days / 7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01' : '00';
        },
        '%y': function (date) {
          return (date.tm_year + 1900).toString().substring(2);
        },
        '%Y': function (date) {
          return date.tm_year + 1900;
        },
        '%z': function (date) {
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          off = (off / 60) * 100 + (off % 60);
          return (ahead ? '+' : '-') + String('0000' + off).slice(-4);
        },
        '%Z': function (date) {
          return date.tm_zone;
        },
        '%%': function () {
          return '%';
        },
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
      writeArrayToMemory(bytes, s);
      return bytes.length - 1;
    }
    function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm);
    }
    function _sysconf(name) {
      if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(31, 1, name);
      switch (name) {
        case 30:
          return 16384;
        case 85:
          var maxHeapSize = 4294967296;
          return maxHeapSize / 16384;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
        case 79:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0:
          return 2097152;
        case 3:
          return 65536;
        case 28:
          return 32768;
        case 44:
          return 32767;
        case 75:
          return 16384;
        case 39:
          return 1e3;
        case 89:
          return 700;
        case 71:
          return 256;
        case 40:
          return 255;
        case 2:
          return 100;
        case 180:
          return 64;
        case 25:
          return 20;
        case 5:
          return 16;
        case 6:
          return 6;
        case 73:
          return 4;
        case 84: {
          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;
          return 1;
        }
      }
      setErrNo(28);
      return -1;
    }
    function _time(ptr) {
      var ret = (Date.now() / 1e3) | 0;
      if (ptr) {
        GROWABLE_HEAP_I32()[ptr >> 2] = ret;
      }
      return ret;
    }
    if (!ENVIRONMENT_IS_PTHREAD) PThread.initMainThreadBlock();
    var FSNode = function (parent, name, mode, rdev) {
      if (!parent) {
        parent = this;
      }
      this.parent = parent;
      this.mount = parent.mount;
      this.mounted = null;
      this.id = FS.nextInode++;
      this.name = name;
      this.mode = mode;
      this.node_ops = {};
      this.stream_ops = {};
      this.rdev = rdev;
    };
    var readMode = 292 | 73;
    var writeMode = 146;
    Object.defineProperties(FSNode.prototype, {
      read: {
        get: function () {
          return (this.mode & readMode) === readMode;
        },
        set: function (val) {
          val ? (this.mode |= readMode) : (this.mode &= ~readMode);
        },
      },
      write: {
        get: function () {
          return (this.mode & writeMode) === writeMode;
        },
        set: function (val) {
          val ? (this.mode |= writeMode) : (this.mode &= ~writeMode);
        },
      },
      isFolder: {
        get: function () {
          return FS.isDir(this.mode);
        },
      },
      isDevice: {
        get: function () {
          return FS.isChrdev(this.mode);
        },
      },
    });
    FS.FSNode = FSNode;
    FS.staticInit();
    Module['FS_createPath'] = FS.createPath;
    Module['FS_createDataFile'] = FS.createDataFile;
    Module['FS_createPreloadedFile'] = FS.createPreloadedFile;
    Module['FS_createLazyFile'] = FS.createLazyFile;
    Module['FS_createDevice'] = FS.createDevice;
    Module['FS_unlink'] = FS.unlink;
    embind_init_charCodes();
    BindingError = Module['BindingError'] = extendError(Error, 'BindingError');
    InternalError = Module['InternalError'] = extendError(Error, 'InternalError');
    init_ClassHandle();
    init_RegisteredPointer();
    init_embind();
    UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');
    init_emval();
    Module['requestFullscreen'] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
      Browser.requestFullscreen(lockPointer, resizeCanvas);
    };
    Module['requestFullScreen'] = function Module_requestFullScreen() {
      Browser.requestFullScreen();
    };
    Module['requestAnimationFrame'] = function Module_requestAnimationFrame(func) {
      Browser.requestAnimationFrame(func);
    };
    Module['setCanvasSize'] = function Module_setCanvasSize(width, height, noUpdates) {
      Browser.setCanvasSize(width, height, noUpdates);
    };
    Module['pauseMainLoop'] = function Module_pauseMainLoop() {
      Browser.mainLoop.pause();
    };
    Module['resumeMainLoop'] = function Module_resumeMainLoop() {
      Browser.mainLoop.resume();
    };
    Module['getUserMedia'] = function Module_getUserMedia() {
      Browser.getUserMedia();
    };
    Module['createContext'] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
      return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
    };
    var GLctx;
    var proxiedFunctionTable = [
      null,
      _atexit,
      ___sys_access,
      ___sys_chmod,
      ___sys_fchmod,
      ___sys_fcntl64,
      ___sys_fstat64,
      ___sys_fstatat64,
      ___sys_getcwd,
      ___sys_getdents64,
      ___sys_getrusage,
      ___sys_ioctl,
      ___sys_lstat64,
      ___sys_mkdir,
      ___sys_mmap2,
      ___sys_munmap,
      ___sys_open,
      ___sys_readlink,
      ___sys_rename,
      ___sys_stat64,
      _emscripten_force_exit,
      _emscripten_set_canvas_element_size_main_thread,
      _environ_get,
      _environ_sizes_get,
      _fd_close,
      _fd_fdstat_get,
      _fd_pread,
      _fd_pwrite,
      _fd_read,
      _fd_seek,
      _fd_write,
      _sysconf,
    ];
    var ASSERTIONS = true;
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    }
    if (!ENVIRONMENT_IS_PTHREAD)
      __ATINIT__.push({
        func: function () {
          ___wasm_call_ctors();
        },
      });
    var asmLibraryArg = {
      __assert_fail: ___assert_fail,
      __clock_gettime: ___clock_gettime,
      __cxa_allocate_exception: ___cxa_allocate_exception,
      __cxa_atexit: ___cxa_atexit,
      __cxa_thread_atexit: ___cxa_thread_atexit,
      __cxa_throw: ___cxa_throw,
      __sys_access: ___sys_access,
      __sys_chmod: ___sys_chmod,
      __sys_fadvise64_64: ___sys_fadvise64_64,
      __sys_fchmod: ___sys_fchmod,
      __sys_fcntl64: ___sys_fcntl64,
      __sys_fstat64: ___sys_fstat64,
      __sys_fstatat64: ___sys_fstatat64,
      __sys_getcwd: ___sys_getcwd,
      __sys_getdents64: ___sys_getdents64,
      __sys_getpid: ___sys_getpid,
      __sys_getrusage: ___sys_getrusage,
      __sys_ioctl: ___sys_ioctl,
      __sys_lstat64: ___sys_lstat64,
      __sys_madvise1: ___sys_madvise1,
      __sys_mkdir: ___sys_mkdir,
      __sys_mmap2: ___sys_mmap2,
      __sys_mprotect: ___sys_mprotect,
      __sys_munmap: ___sys_munmap,
      __sys_open: ___sys_open,
      __sys_readlink: ___sys_readlink,
      __sys_rename: ___sys_rename,
      __sys_setsid: ___sys_setsid,
      __sys_stat64: ___sys_stat64,
      __sys_uname: ___sys_uname,
      __sys_wait4: ___sys_wait4,
      _embind_register_bool: __embind_register_bool,
      _embind_register_class: __embind_register_class,
      _embind_register_class_class_function: __embind_register_class_class_function,
      _embind_register_class_class_property: __embind_register_class_class_property,
      _embind_register_class_constructor: __embind_register_class_constructor,
      _embind_register_class_function: __embind_register_class_function,
      _embind_register_class_property: __embind_register_class_property,
      _embind_register_emval: __embind_register_emval,
      _embind_register_enum: __embind_register_enum,
      _embind_register_enum_value: __embind_register_enum_value,
      _embind_register_float: __embind_register_float,
      _embind_register_function: __embind_register_function,
      _embind_register_integer: __embind_register_integer,
      _embind_register_memory_view: __embind_register_memory_view,
      _embind_register_smart_ptr: __embind_register_smart_ptr,
      _embind_register_std_string: __embind_register_std_string,
      _embind_register_std_wstring: __embind_register_std_wstring,
      _embind_register_void: __embind_register_void,
      _emscripten_notify_thread_queue: __emscripten_notify_thread_queue,
      _emval_as: __emval_as,
      _emval_call: __emval_call,
      _emval_call_method: __emval_call_method,
      _emval_call_void_method: __emval_call_void_method,
      _emval_decref: __emval_decref,
      _emval_equals: __emval_equals,
      _emval_get_global: __emval_get_global,
      _emval_get_method_caller: __emval_get_method_caller,
      _emval_get_property: __emval_get_property,
      _emval_incref: __emval_incref,
      _emval_instanceof: __emval_instanceof,
      _emval_new_array: __emval_new_array,
      _emval_new_cstring: __emval_new_cstring,
      _emval_new_object: __emval_new_object,
      _emval_run_destructors: __emval_run_destructors,
      _emval_set_property: __emval_set_property,
      _emval_take_value: __emval_take_value,
      _emval_typeof: __emval_typeof,
      _exit: __exit,
      abort: _abort,
      alarm: _alarm,
      atexit: _atexit,
      clock_gettime: _clock_gettime,
      downloadJS: downloadJS,
      emscripten_asm_const_int: _emscripten_asm_const_int,
      emscripten_check_blocking_allowed: _emscripten_check_blocking_allowed,
      emscripten_conditional_set_current_thread_status: _emscripten_conditional_set_current_thread_status,
      emscripten_force_exit: _emscripten_force_exit,
      emscripten_futex_wait: _emscripten_futex_wait,
      emscripten_futex_wake: _emscripten_futex_wake,
      emscripten_get_now: _emscripten_get_now,
      emscripten_memcpy_big: _emscripten_memcpy_big,
      emscripten_receive_on_main_thread_js: _emscripten_receive_on_main_thread_js,
      emscripten_resize_heap: _emscripten_resize_heap,
      emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size,
      emscripten_set_current_thread_status: _emscripten_set_current_thread_status,
      emscripten_webgl_create_context: _emscripten_webgl_create_context,
      environ_get: _environ_get,
      environ_sizes_get: _environ_sizes_get,
      execve: _execve,
      exit: _exit,
      fd_close: _fd_close,
      fd_fdstat_get: _fd_fdstat_get,
      fd_pread: _fd_pread,
      fd_pwrite: _fd_pwrite,
      fd_read: _fd_read,
      fd_seek: _fd_seek,
      fd_write: _fd_write,
      fork: _fork,
      initPthreadsJS: initPthreadsJS,
      kill: _kill,
      memory: wasmMemory || Module['wasmMemory'],
      pthread_cleanup_pop: _pthread_cleanup_pop,
      pthread_cleanup_push: _pthread_cleanup_push,
      pthread_create: _pthread_create,
      pthread_detach: _pthread_detach,
      pthread_join: _pthread_join,
      setTempRet0: _setTempRet0,
      sigaction: _sigaction,
      sigemptyset: _sigemptyset,
      strftime_l: _strftime_l,
      sysconf: _sysconf,
      time: _time,
    };
    var asm = createWasm();
    var ___wasm_call_ctors = (Module['___wasm_call_ctors'] = createExportWrapper('__wasm_call_ctors'));
    var _malloc = (Module['_malloc'] = createExportWrapper('malloc'));
    var _free = (Module['_free'] = createExportWrapper('free'));
    var ___em_js__downloadJS = (Module['___em_js__downloadJS'] = createExportWrapper('__em_js__downloadJS'));
    var _fflush = (Module['_fflush'] = createExportWrapper('fflush'));
    var ___errno_location = (Module['___errno_location'] = createExportWrapper('__errno_location'));
    var _pthread_self = (Module['_pthread_self'] = createExportWrapper('pthread_self'));
    var _memset = (Module['_memset'] = createExportWrapper('memset'));
    var ___getTypeName = (Module['___getTypeName'] = createExportWrapper('__getTypeName'));
    var ___embind_register_native_and_builtin_types = (Module['___embind_register_native_and_builtin_types'] =
      createExportWrapper('__embind_register_native_and_builtin_types'));
    var _emscripten_get_global_libc = (Module['_emscripten_get_global_libc'] =
      createExportWrapper('emscripten_get_global_libc'));
    var ___em_js__initPthreadsJS = (Module['___em_js__initPthreadsJS'] =
      createExportWrapper('__em_js__initPthreadsJS'));
    var ___emscripten_pthread_data_constructor = (Module['___emscripten_pthread_data_constructor'] =
      createExportWrapper('__emscripten_pthread_data_constructor'));
    var __get_tzname = (Module['__get_tzname'] = createExportWrapper('_get_tzname'));
    var __get_daylight = (Module['__get_daylight'] = createExportWrapper('_get_daylight'));
    var __get_timezone = (Module['__get_timezone'] = createExportWrapper('_get_timezone'));
    var ___pthread_tsd_run_dtors = (Module['___pthread_tsd_run_dtors'] =
      createExportWrapper('__pthread_tsd_run_dtors'));
    var _emscripten_main_thread_process_queued_calls = (Module['_emscripten_main_thread_process_queued_calls'] =
      createExportWrapper('emscripten_main_thread_process_queued_calls'));
    var _emscripten_register_main_browser_thread_id = (Module['_emscripten_register_main_browser_thread_id'] =
      createExportWrapper('emscripten_register_main_browser_thread_id'));
    var _emscripten_main_browser_thread_id = (Module['_emscripten_main_browser_thread_id'] = createExportWrapper(
      'emscripten_main_browser_thread_id',
    ));
    var __emscripten_do_dispatch_to_thread = (Module['__emscripten_do_dispatch_to_thread'] = createExportWrapper(
      '_emscripten_do_dispatch_to_thread',
    ));
    var _emscripten_sync_run_in_main_thread_2 = (Module['_emscripten_sync_run_in_main_thread_2'] = createExportWrapper(
      'emscripten_sync_run_in_main_thread_2',
    ));
    var _emscripten_sync_run_in_main_thread_4 = (Module['_emscripten_sync_run_in_main_thread_4'] = createExportWrapper(
      'emscripten_sync_run_in_main_thread_4',
    ));
    var _emscripten_run_in_main_runtime_thread_js = (Module['_emscripten_run_in_main_runtime_thread_js'] =
      createExportWrapper('emscripten_run_in_main_runtime_thread_js'));
    var __emscripten_call_on_thread = (Module['__emscripten_call_on_thread'] =
      createExportWrapper('_emscripten_call_on_thread'));
    var _emscripten_stack_get_end = (Module['_emscripten_stack_get_end'] = function () {
      return (_emscripten_stack_get_end = Module['_emscripten_stack_get_end'] =
        Module['asm']['emscripten_stack_get_end']).apply(null, arguments);
    });
    var _emscripten_tls_init = (Module['_emscripten_tls_init'] = createExportWrapper('emscripten_tls_init'));
    var __emscripten_thread_init = (Module['__emscripten_thread_init'] =
      createExportWrapper('_emscripten_thread_init'));
    var stackSave = (Module['stackSave'] = createExportWrapper('stackSave'));
    var stackRestore = (Module['stackRestore'] = createExportWrapper('stackRestore'));
    var stackAlloc = (Module['stackAlloc'] = createExportWrapper('stackAlloc'));
    var _emscripten_stack_init = (Module['_emscripten_stack_init'] = function () {
      return (_emscripten_stack_init = Module['_emscripten_stack_init'] = Module['asm']['emscripten_stack_init']).apply(
        null,
        arguments,
      );
    });
    var _emscripten_stack_set_limits = (Module['_emscripten_stack_set_limits'] = function () {
      return (_emscripten_stack_set_limits = Module['_emscripten_stack_set_limits'] =
        Module['asm']['emscripten_stack_set_limits']).apply(null, arguments);
    });
    var _emscripten_stack_get_free = (Module['_emscripten_stack_get_free'] = function () {
      return (_emscripten_stack_get_free = Module['_emscripten_stack_get_free'] =
        Module['asm']['emscripten_stack_get_free']).apply(null, arguments);
    });
    var _setThrew = (Module['_setThrew'] = createExportWrapper('setThrew'));
    var _memalign = (Module['_memalign'] = createExportWrapper('memalign'));
    var dynCall_viijii = (Module['dynCall_viijii'] = createExportWrapper('dynCall_viijii'));
    var dynCall_ji = (Module['dynCall_ji'] = createExportWrapper('dynCall_ji'));
    var dynCall_jii = (Module['dynCall_jii'] = createExportWrapper('dynCall_jii'));
    var dynCall_jiji = (Module['dynCall_jiji'] = createExportWrapper('dynCall_jiji'));
    var dynCall_iiiiij = (Module['dynCall_iiiiij'] = createExportWrapper('dynCall_iiiiij'));
    var dynCall_iiiiijj = (Module['dynCall_iiiiijj'] = createExportWrapper('dynCall_iiiiijj'));
    var dynCall_iiiiiijj = (Module['dynCall_iiiiiijj'] = createExportWrapper('dynCall_iiiiiijj'));
    var __emscripten_main_thread_futex = (Module['__emscripten_main_thread_futex'] = 3824704);
    if (!Object.getOwnPropertyDescriptor(Module, 'intArrayFromString'))
      Module['intArrayFromString'] = function () {
        abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'intArrayToString'))
      Module['intArrayToString'] = function () {
        abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ccall'))
      Module['ccall'] = function () {
        abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'cwrap'))
      Module['cwrap'] = function () {
        abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setValue'))
      Module['setValue'] = function () {
        abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getValue'))
      Module['getValue'] = function () {
        abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'allocate'))
      Module['allocate'] = function () {
        abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UTF8ArrayToString'))
      Module['UTF8ArrayToString'] = function () {
        abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UTF8ToString'))
      Module['UTF8ToString'] = function () {
        abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToUTF8Array'))
      Module['stringToUTF8Array'] = function () {
        abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToUTF8'))
      Module['stringToUTF8'] = function () {
        abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'lengthBytesUTF8'))
      Module['lengthBytesUTF8'] = function () {
        abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stackTrace'))
      Module['stackTrace'] = function () {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addOnPreRun'))
      Module['addOnPreRun'] = function () {
        abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addOnInit'))
      Module['addOnInit'] = function () {
        abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addOnPreMain'))
      Module['addOnPreMain'] = function () {
        abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addOnExit'))
      Module['addOnExit'] = function () {
        abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addOnPostRun'))
      Module['addOnPostRun'] = function () {
        abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeStringToMemory'))
      Module['writeStringToMemory'] = function () {
        abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeArrayToMemory'))
      Module['writeArrayToMemory'] = function () {
        abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeAsciiToMemory'))
      Module['writeAsciiToMemory'] = function () {
        abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['addRunDependency'] = addRunDependency;
    Module['removeRunDependency'] = removeRunDependency;
    if (!Object.getOwnPropertyDescriptor(Module, 'FS_createFolder'))
      Module['FS_createFolder'] = function () {
        abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['FS_createPath'] = FS.createPath;
    Module['FS_createDataFile'] = FS.createDataFile;
    Module['FS_createPreloadedFile'] = FS.createPreloadedFile;
    Module['FS_createLazyFile'] = FS.createLazyFile;
    if (!Object.getOwnPropertyDescriptor(Module, 'FS_createLink'))
      Module['FS_createLink'] = function () {
        abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['FS_createDevice'] = FS.createDevice;
    Module['FS_unlink'] = FS.unlink;
    if (!Object.getOwnPropertyDescriptor(Module, 'getLEB'))
      Module['getLEB'] = function () {
        abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getFunctionTables'))
      Module['getFunctionTables'] = function () {
        abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'alignFunctionTables'))
      Module['alignFunctionTables'] = function () {
        abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registerFunctions'))
      Module['registerFunctions'] = function () {
        abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'addFunction'))
      Module['addFunction'] = function () {
        abort("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'removeFunction'))
      Module['removeFunction'] = function () {
        abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getFuncWrapper'))
      Module['getFuncWrapper'] = function () {
        abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'prettyPrint'))
      Module['prettyPrint'] = function () {
        abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'makeBigInt'))
      Module['makeBigInt'] = function () {
        abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'dynCall'))
      Module['dynCall'] = function () {
        abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getCompilerSetting'))
      Module['getCompilerSetting'] = function () {
        abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'print'))
      Module['print'] = function () {
        abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'printErr'))
      Module['printErr'] = function () {
        abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getTempRet0'))
      Module['getTempRet0'] = function () {
        abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setTempRet0'))
      Module['setTempRet0'] = function () {
        abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'callMain'))
      Module['callMain'] = function () {
        abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'abort'))
      Module['abort'] = function () {
        abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToNewUTF8'))
      Module['stringToNewUTF8'] = function () {
        abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setFileTime'))
      Module['setFileTime'] = function () {
        abort("'setFileTime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emscripten_realloc_buffer'))
      Module['emscripten_realloc_buffer'] = function () {
        abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ENV'))
      Module['ENV'] = function () {
        abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ERRNO_CODES'))
      Module['ERRNO_CODES'] = function () {
        abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ERRNO_MESSAGES'))
      Module['ERRNO_MESSAGES'] = function () {
        abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setErrNo'))
      Module['setErrNo'] = function () {
        abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'DNS'))
      Module['DNS'] = function () {
        abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getHostByName'))
      Module['getHostByName'] = function () {
        abort("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GAI_ERRNO_MESSAGES'))
      Module['GAI_ERRNO_MESSAGES'] = function () {
        abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'Protocols'))
      Module['Protocols'] = function () {
        abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'Sockets'))
      Module['Sockets'] = function () {
        abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getRandomDevice'))
      Module['getRandomDevice'] = function () {
        abort("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'traverseStack'))
      Module['traverseStack'] = function () {
        abort("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UNWIND_CACHE'))
      Module['UNWIND_CACHE'] = function () {
        abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'withBuiltinMalloc'))
      Module['withBuiltinMalloc'] = function () {
        abort("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'readAsmConstArgsArray'))
      Module['readAsmConstArgsArray'] = function () {
        abort("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'readAsmConstArgs'))
      Module['readAsmConstArgs'] = function () {
        abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'mainThreadEM_ASM'))
      Module['mainThreadEM_ASM'] = function () {
        abort("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'jstoi_q'))
      Module['jstoi_q'] = function () {
        abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'jstoi_s'))
      Module['jstoi_s'] = function () {
        abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getExecutableName'))
      Module['getExecutableName'] = function () {
        abort("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'listenOnce'))
      Module['listenOnce'] = function () {
        abort("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'autoResumeAudioContext'))
      Module['autoResumeAudioContext'] = function () {
        abort("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'dynCallLegacy'))
      Module['dynCallLegacy'] = function () {
        abort("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getDynCaller'))
      Module['getDynCaller'] = function () {
        abort("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'dynCall'))
      Module['dynCall'] = function () {
        abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'callRuntimeCallbacks'))
      Module['callRuntimeCallbacks'] = function () {
        abort("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'abortStackOverflow'))
      Module['abortStackOverflow'] = function () {
        abort("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'reallyNegative'))
      Module['reallyNegative'] = function () {
        abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'unSign'))
      Module['unSign'] = function () {
        abort("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'reSign'))
      Module['reSign'] = function () {
        abort("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'formatString'))
      Module['formatString'] = function () {
        abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'PATH'))
      Module['PATH'] = function () {
        abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'PATH_FS'))
      Module['PATH_FS'] = function () {
        abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SYSCALLS'))
      Module['SYSCALLS'] = function () {
        abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'syscallMmap2'))
      Module['syscallMmap2'] = function () {
        abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'syscallMunmap'))
      Module['syscallMunmap'] = function () {
        abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'JSEvents'))
      Module['JSEvents'] = function () {
        abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'specialHTMLTargets'))
      Module['specialHTMLTargets'] = function () {
        abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'maybeCStringToJsString'))
      Module['maybeCStringToJsString'] = function () {
        abort("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'findEventTarget'))
      Module['findEventTarget'] = function () {
        abort("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'findCanvasEventTarget'))
      Module['findCanvasEventTarget'] = function () {
        abort("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'polyfillSetImmediate'))
      Module['polyfillSetImmediate'] = function () {
        abort("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'demangle'))
      Module['demangle'] = function () {
        abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'demangleAll'))
      Module['demangleAll'] = function () {
        abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'jsStackTrace'))
      Module['jsStackTrace'] = function () {
        abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stackTrace'))
      Module['stackTrace'] = function () {
        abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getEnvStrings'))
      Module['getEnvStrings'] = function () {
        abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'checkWasiClock'))
      Module['checkWasiClock'] = function () {
        abort("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeI53ToI64'))
      Module['writeI53ToI64'] = function () {
        abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeI53ToI64Clamped'))
      Module['writeI53ToI64Clamped'] = function () {
        abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeI53ToI64Signaling'))
      Module['writeI53ToI64Signaling'] = function () {
        abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeI53ToU64Clamped'))
      Module['writeI53ToU64Clamped'] = function () {
        abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeI53ToU64Signaling'))
      Module['writeI53ToU64Signaling'] = function () {
        abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'readI53FromI64'))
      Module['readI53FromI64'] = function () {
        abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'readI53FromU64'))
      Module['readI53FromU64'] = function () {
        abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'convertI32PairToI53'))
      Module['convertI32PairToI53'] = function () {
        abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'convertU32PairToI53'))
      Module['convertU32PairToI53'] = function () {
        abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'uncaughtExceptionCount'))
      Module['uncaughtExceptionCount'] = function () {
        abort("'uncaughtExceptionCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'exceptionLast'))
      Module['exceptionLast'] = function () {
        abort("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'exceptionCaught'))
      Module['exceptionCaught'] = function () {
        abort("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ExceptionInfoAttrs'))
      Module['ExceptionInfoAttrs'] = function () {
        abort("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ExceptionInfo'))
      Module['ExceptionInfo'] = function () {
        abort("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'CatchInfo'))
      Module['CatchInfo'] = function () {
        abort("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'exception_addRef'))
      Module['exception_addRef'] = function () {
        abort("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'exception_decRef'))
      Module['exception_decRef'] = function () {
        abort("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'Browser'))
      Module['Browser'] = function () {
        abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'funcWrappers'))
      Module['funcWrappers'] = function () {
        abort("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getFuncWrapper'))
      Module['getFuncWrapper'] = function () {
        abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setMainLoop'))
      Module['setMainLoop'] = function () {
        abort("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'tempFixedLengthArray'))
      Module['tempFixedLengthArray'] = function () {
        abort("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'miniTempWebGLFloatBuffers'))
      Module['miniTempWebGLFloatBuffers'] = function () {
        abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'heapObjectForWebGLType'))
      Module['heapObjectForWebGLType'] = function () {
        abort("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'heapAccessShiftForWebGLHeap'))
      Module['heapAccessShiftForWebGLHeap'] = function () {
        abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GL'))
      Module['GL'] = function () {
        abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emscriptenWebGLGet'))
      Module['emscriptenWebGLGet'] = function () {
        abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'computeUnpackAlignedImageSize'))
      Module['computeUnpackAlignedImageSize'] = function () {
        abort(
          "'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emscriptenWebGLGetTexPixelData'))
      Module['emscriptenWebGLGetTexPixelData'] = function () {
        abort(
          "'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emscriptenWebGLGetUniform'))
      Module['emscriptenWebGLGetUniform'] = function () {
        abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emscriptenWebGLGetVertexAttrib'))
      Module['emscriptenWebGLGetVertexAttrib'] = function () {
        abort(
          "'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'writeGLArray'))
      Module['writeGLArray'] = function () {
        abort("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['FS'] = FS;
    if (!Object.getOwnPropertyDescriptor(Module, 'mmapAlloc'))
      Module['mmapAlloc'] = function () {
        abort("'mmapAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'MEMFS'))
      Module['MEMFS'] = function () {
        abort("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'TTY'))
      Module['TTY'] = function () {
        abort("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'PIPEFS'))
      Module['PIPEFS'] = function () {
        abort("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SOCKFS'))
      Module['SOCKFS'] = function () {
        abort("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'AL'))
      Module['AL'] = function () {
        abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SDL_unicode'))
      Module['SDL_unicode'] = function () {
        abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SDL_ttfContext'))
      Module['SDL_ttfContext'] = function () {
        abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SDL_audio'))
      Module['SDL_audio'] = function () {
        abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SDL'))
      Module['SDL'] = function () {
        abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'SDL_gfx'))
      Module['SDL_gfx'] = function () {
        abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GLUT'))
      Module['GLUT'] = function () {
        abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'EGL'))
      Module['EGL'] = function () {
        abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GLFW_Window'))
      Module['GLFW_Window'] = function () {
        abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GLFW'))
      Module['GLFW'] = function () {
        abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'GLEW'))
      Module['GLEW'] = function () {
        abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'IDBStore'))
      Module['IDBStore'] = function () {
        abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'runAndAbortIfError'))
      Module['runAndAbortIfError'] = function () {
        abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_handle_array'))
      Module['emval_handle_array'] = function () {
        abort("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_free_list'))
      Module['emval_free_list'] = function () {
        abort("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_symbols'))
      Module['emval_symbols'] = function () {
        abort("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'init_emval'))
      Module['init_emval'] = function () {
        abort("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'count_emval_handles'))
      Module['count_emval_handles'] = function () {
        abort("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'get_first_emval'))
      Module['get_first_emval'] = function () {
        abort("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getStringOrSymbol'))
      Module['getStringOrSymbol'] = function () {
        abort("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'requireHandle'))
      Module['requireHandle'] = function () {
        abort("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_newers'))
      Module['emval_newers'] = function () {
        abort("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'craftEmvalAllocator'))
      Module['craftEmvalAllocator'] = function () {
        abort("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_get_global'))
      Module['emval_get_global'] = function () {
        abort("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'emval_methodCallers'))
      Module['emval_methodCallers'] = function () {
        abort("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'InternalError'))
      Module['InternalError'] = function () {
        abort("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'BindingError'))
      Module['BindingError'] = function () {
        abort("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UnboundTypeError'))
      Module['UnboundTypeError'] = function () {
        abort("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'PureVirtualError'))
      Module['PureVirtualError'] = function () {
        abort("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'init_embind'))
      Module['init_embind'] = function () {
        abort("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'throwInternalError'))
      Module['throwInternalError'] = function () {
        abort("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'throwBindingError'))
      Module['throwBindingError'] = function () {
        abort("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'throwUnboundTypeError'))
      Module['throwUnboundTypeError'] = function () {
        abort("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ensureOverloadTable'))
      Module['ensureOverloadTable'] = function () {
        abort("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'exposePublicSymbol'))
      Module['exposePublicSymbol'] = function () {
        abort("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'replacePublicSymbol'))
      Module['replacePublicSymbol'] = function () {
        abort("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'extendError'))
      Module['extendError'] = function () {
        abort("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'createNamedFunction'))
      Module['createNamedFunction'] = function () {
        abort("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registeredInstances'))
      Module['registeredInstances'] = function () {
        abort("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getBasestPointer'))
      Module['getBasestPointer'] = function () {
        abort("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registerInheritedInstance'))
      Module['registerInheritedInstance'] = function () {
        abort("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'unregisterInheritedInstance'))
      Module['unregisterInheritedInstance'] = function () {
        abort("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getInheritedInstance'))
      Module['getInheritedInstance'] = function () {
        abort("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getInheritedInstanceCount'))
      Module['getInheritedInstanceCount'] = function () {
        abort("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getLiveInheritedInstances'))
      Module['getLiveInheritedInstances'] = function () {
        abort("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registeredTypes'))
      Module['registeredTypes'] = function () {
        abort("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'awaitingDependencies'))
      Module['awaitingDependencies'] = function () {
        abort("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'typeDependencies'))
      Module['typeDependencies'] = function () {
        abort("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registeredPointers'))
      Module['registeredPointers'] = function () {
        abort("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'registerType'))
      Module['registerType'] = function () {
        abort("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'whenDependentTypesAreResolved'))
      Module['whenDependentTypesAreResolved'] = function () {
        abort(
          "'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'embind_charCodes'))
      Module['embind_charCodes'] = function () {
        abort("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'embind_init_charCodes'))
      Module['embind_init_charCodes'] = function () {
        abort("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'readLatin1String'))
      Module['readLatin1String'] = function () {
        abort("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getTypeName'))
      Module['getTypeName'] = function () {
        abort("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'heap32VectorToArray'))
      Module['heap32VectorToArray'] = function () {
        abort("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'requireRegisteredType'))
      Module['requireRegisteredType'] = function () {
        abort("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getShiftFromSize'))
      Module['getShiftFromSize'] = function () {
        abort("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'integerReadValueFromPointer'))
      Module['integerReadValueFromPointer'] = function () {
        abort("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'enumReadValueFromPointer'))
      Module['enumReadValueFromPointer'] = function () {
        abort("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'floatReadValueFromPointer'))
      Module['floatReadValueFromPointer'] = function () {
        abort("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'simpleReadValueFromPointer'))
      Module['simpleReadValueFromPointer'] = function () {
        abort("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'runDestructors'))
      Module['runDestructors'] = function () {
        abort("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'new_'))
      Module['new_'] = function () {
        abort("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'craftInvokerFunction'))
      Module['craftInvokerFunction'] = function () {
        abort("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'embind__requireFunction'))
      Module['embind__requireFunction'] = function () {
        abort("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'tupleRegistrations'))
      Module['tupleRegistrations'] = function () {
        abort("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'structRegistrations'))
      Module['structRegistrations'] = function () {
        abort("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'genericPointerToWireType'))
      Module['genericPointerToWireType'] = function () {
        abort("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'constNoSmartPtrRawPointerToWireType'))
      Module['constNoSmartPtrRawPointerToWireType'] = function () {
        abort(
          "'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'nonConstNoSmartPtrRawPointerToWireType'))
      Module['nonConstNoSmartPtrRawPointerToWireType'] = function () {
        abort(
          "'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'init_RegisteredPointer'))
      Module['init_RegisteredPointer'] = function () {
        abort("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredPointer'))
      Module['RegisteredPointer'] = function () {
        abort("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredPointer_getPointee'))
      Module['RegisteredPointer_getPointee'] = function () {
        abort(
          "'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredPointer_destructor'))
      Module['RegisteredPointer_destructor'] = function () {
        abort(
          "'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredPointer_deleteObject'))
      Module['RegisteredPointer_deleteObject'] = function () {
        abort(
          "'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredPointer_fromWireType'))
      Module['RegisteredPointer_fromWireType'] = function () {
        abort(
          "'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)",
        );
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'runDestructor'))
      Module['runDestructor'] = function () {
        abort("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'releaseClassHandle'))
      Module['releaseClassHandle'] = function () {
        abort("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'finalizationGroup'))
      Module['finalizationGroup'] = function () {
        abort("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'detachFinalizer_deps'))
      Module['detachFinalizer_deps'] = function () {
        abort("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'detachFinalizer'))
      Module['detachFinalizer'] = function () {
        abort("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'attachFinalizer'))
      Module['attachFinalizer'] = function () {
        abort("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'makeClassHandle'))
      Module['makeClassHandle'] = function () {
        abort("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'init_ClassHandle'))
      Module['init_ClassHandle'] = function () {
        abort("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle'))
      Module['ClassHandle'] = function () {
        abort("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle_isAliasOf'))
      Module['ClassHandle_isAliasOf'] = function () {
        abort("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'throwInstanceAlreadyDeleted'))
      Module['throwInstanceAlreadyDeleted'] = function () {
        abort("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle_clone'))
      Module['ClassHandle_clone'] = function () {
        abort("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle_delete'))
      Module['ClassHandle_delete'] = function () {
        abort("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'deletionQueue'))
      Module['deletionQueue'] = function () {
        abort("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle_isDeleted'))
      Module['ClassHandle_isDeleted'] = function () {
        abort("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'ClassHandle_deleteLater'))
      Module['ClassHandle_deleteLater'] = function () {
        abort("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'flushPendingDeletes'))
      Module['flushPendingDeletes'] = function () {
        abort("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'delayFunction'))
      Module['delayFunction'] = function () {
        abort("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'setDelayFunction'))
      Module['setDelayFunction'] = function () {
        abort("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'RegisteredClass'))
      Module['RegisteredClass'] = function () {
        abort("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'shallowCopyInternalPointer'))
      Module['shallowCopyInternalPointer'] = function () {
        abort("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'downcastPointer'))
      Module['downcastPointer'] = function () {
        abort("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'upcastPointer'))
      Module['upcastPointer'] = function () {
        abort("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'validateThis'))
      Module['validateThis'] = function () {
        abort("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'char_0'))
      Module['char_0'] = function () {
        abort("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'char_9'))
      Module['char_9'] = function () {
        abort("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'makeLegalFunctionName'))
      Module['makeLegalFunctionName'] = function () {
        abort("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['PThread'] = PThread;
    if (!Object.getOwnPropertyDescriptor(Module, 'killThread'))
      Module['killThread'] = function () {
        abort("'killThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'cleanupThread'))
      Module['cleanupThread'] = function () {
        abort("'cleanupThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'cancelThread'))
      Module['cancelThread'] = function () {
        abort("'cancelThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'spawnThread'))
      Module['spawnThread'] = function () {
        abort("'spawnThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'establishStackSpace'))
      Module['establishStackSpace'] = function () {
        abort("'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'getNoExitRuntime'))
      Module['getNoExitRuntime'] = function () {
        abort("'getNoExitRuntime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'invokeEntryPoint'))
      Module['invokeEntryPoint'] = function () {
        abort("'invokeEntryPoint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'resetPrototype'))
      Module['resetPrototype'] = function () {
        abort("'resetPrototype' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'warnOnce'))
      Module['warnOnce'] = function () {
        abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stackSave'))
      Module['stackSave'] = function () {
        abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stackRestore'))
      Module['stackRestore'] = function () {
        abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stackAlloc'))
      Module['stackAlloc'] = function () {
        abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'AsciiToString'))
      Module['AsciiToString'] = function () {
        abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToAscii'))
      Module['stringToAscii'] = function () {
        abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UTF16ToString'))
      Module['UTF16ToString'] = function () {
        abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToUTF16'))
      Module['stringToUTF16'] = function () {
        abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'lengthBytesUTF16'))
      Module['lengthBytesUTF16'] = function () {
        abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'UTF32ToString'))
      Module['UTF32ToString'] = function () {
        abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'stringToUTF32'))
      Module['stringToUTF32'] = function () {
        abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'lengthBytesUTF32'))
      Module['lengthBytesUTF32'] = function () {
        abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'allocateUTF8'))
      Module['allocateUTF8'] = function () {
        abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    if (!Object.getOwnPropertyDescriptor(Module, 'allocateUTF8OnStack'))
      Module['allocateUTF8OnStack'] = function () {
        abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
      };
    Module['writeStackCookie'] = writeStackCookie;
    Module['checkStackCookie'] = checkStackCookie;
    Module['PThread'] = PThread;
    Module['wasmMemory'] = wasmMemory;
    Module['ExitStatus'] = ExitStatus;
    if (!Object.getOwnPropertyDescriptor(Module, 'ALLOC_NORMAL'))
      Object.defineProperty(Module, 'ALLOC_NORMAL', {
        configurable: true,
        get: function () {
          abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        },
      });
    if (!Object.getOwnPropertyDescriptor(Module, 'ALLOC_STACK'))
      Object.defineProperty(Module, 'ALLOC_STACK', {
        configurable: true,
        get: function () {
          abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
        },
      });
    var calledRun;
    function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      _emscripten_stack_init();
      writeStackCookie();
      preRun();
      if (runDependencies > 0) return;
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module['calledRun'] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();
        assert(
          !Module['_main'],
          'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]',
        );
        postRun();
      }
      if (Module['setStatus']) {
        Module['setStatus']('Running...');
        setTimeout(function () {
          setTimeout(function () {
            Module['setStatus']('');
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
      checkStackCookie();
    }
    Module['run'] = run;
    function checkUnflushedContent() {
      var oldOut = out;
      var oldErr = err;
      var has = false;
      out = err = function (x) {
        has = true;
      };
      try {
        var flush = Module['_fflush'];
        if (flush) flush(0);
        ['stdout', 'stderr'].forEach(function (name) {
          var info = FS.analyzePath('/dev/' + name);
          if (!info) return;
          var stream = info.object;
          var rdev = stream.rdev;
          var tty = TTY.ttys[rdev];
          if (tty && tty.output && tty.output.length) {
            has = true;
          }
        });
      } catch (e) {}
      out = oldOut;
      err = oldErr;
      if (has) {
        warnOnce(
          'stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.',
        );
      }
    }
    function exit(status, implicit) {
      checkUnflushedContent();
      if (implicit && noExitRuntime && status === 0) {
        return;
      }
      if (!implicit) {
        if (ENVIRONMENT_IS_PTHREAD) {
          err('Pthread 0x' + _pthread_self().toString(16) + ' called exit(), posting exitProcess.');
          postMessage({ cmd: 'exitProcess', returnCode: status });
          throw new ExitStatus(status);
        } else {
          err('main thead called exit: noExitRuntime=' + noExitRuntime);
        }
      }
      if (noExitRuntime) {
        if (!implicit) {
          var msg =
            'program exited (with status: ' +
            status +
            '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
          readyPromiseReject(msg);
          err(msg);
        }
      } else {
        PThread.terminateAllThreads();
        EXITSTATUS = status;
        exitRuntime();
        if (Module['onExit']) Module['onExit'](status);
        ABORT = true;
      }
      quit_(status, new ExitStatus(status));
    }
    if (Module['preInit']) {
      if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
      while (Module['preInit'].length > 0) {
        Module['preInit'].pop()();
      }
    }
    noExitRuntime = !ENVIRONMENT_IS_PTHREAD;
    if (!ENVIRONMENT_IS_PTHREAD) {
      run();
    } else {
      PThread.initWorker();
    }

    return getUsdModule.ready;
  };
})();
if (typeof exports === 'object' && typeof module === 'object') module.exports = getUsdModule;
else if (typeof define === 'function' && define['amd'])
  define([], function () {
    return getUsdModule;
  });
else if (typeof exports === 'object') exports['getUsdModule'] = getUsdModule;
