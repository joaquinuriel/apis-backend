var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to =
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true,
      });
  return to;
};
var __commonJS = (cb, mod) => () => (
  mod || cb((mod = { exports: {} }).exports, mod), mod.exports
);
var __require = (id) => {
  return import.meta.require(id);
};

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  var Lo = function (e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  };
  var $o = function (e) {
    return e;
  };
  var qo = function (...e) {
    return (t) => t;
  };
  var Ko = function (e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  };
  var li = function (e, t) {
    return t ? `${t}.${e}` : e;
  };
  var Ju = function (e) {
    let t = (0, Wr.default)(e),
      r = Object.assign(
        (...n) => (
          (t.log = r.log),
          n.length !== 0 && Yt.push([e, ...n]),
          Yt.length > Gu && Yt.shift(),
          t("", ...n)
        ),
        t,
      );
    return r;
  };
  var ts = function (e = 7500) {
    let t = Yt.map((r) =>
      r.map((n) => (typeof n == "string" ? n : JSON.stringify(n))).join(" "),
    ).join(`
`);
    return t.length < e ? t : t.slice(-e);
  };
  var rs = function () {
    Yt.length = 0;
  };
  var $ = function (e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"),
      n = `\x1B[${e}m`,
      i = `\x1B[${t}m`;
    return function (o) {
      return !Hu.enabled || o == null
        ? o
        : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  };
  var hi = function () {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && as.default.existsSync(e)) && process.arch === "ia32")
      throw new Error(
        'The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)',
      );
  };
  var xi = function (e, t) {
    let r = t === "url";
    return e.includes("windows")
      ? r
        ? "query_engine.dll.node"
        : `query_engine-${e}.dll.node`
      : e.includes("darwin")
        ? r
          ? `${Yr}.dylib.node`
          : `${Yr}-${e}.dylib.node`
        : r
          ? `${Yr}.so.node`
          : `${Yr}-${e}.so.node`;
  };
  var ve = function (e) {
    return Object.assign(e, {
      optional: () => zu(e),
      and: (t) => V(e, t),
      or: (t) => Yu(e, t),
      select: (t) => (t === undefined ? ls(e) : ls(t, e)),
    });
  };
  var zu = function (e) {
    return ve({
      [je]: () => ({
        match: (t) => {
          let r = {},
            n = (i, o) => {
              r[i] = o;
            };
          return t === undefined
            ? (Ye(e).forEach((i) => n(i, undefined)),
              { matched: true, selections: r })
            : { matched: Se(e, t, n), selections: r };
        },
        getSelectionKeys: () => Ye(e),
        matcherType: "optional",
      }),
    });
  };
  var V = function (...e) {
    return ve({
      [je]: () => ({
        match: (t) => {
          let r = {},
            n = (i, o) => {
              r[i] = o;
            };
          return { matched: e.every((i) => Se(i, t, n)), selections: r };
        },
        getSelectionKeys: () => Zt(e, Ye),
        matcherType: "and",
      }),
    });
  };
  var Yu = function (...e) {
    return ve({
      [je]: () => ({
        match: (t) => {
          let r = {},
            n = (i, o) => {
              r[i] = o;
            };
          return (
            Zt(e, Ye).forEach((i) => n(i, undefined)),
            { matched: e.some((i) => Se(i, t, n)), selections: r }
          );
        },
        getSelectionKeys: () => Zt(e, Ye),
        matcherType: "or",
      }),
    });
  };
  var F = function (e) {
    return { [je]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
  };
  var ls = function (...e) {
    let t = typeof e[0] == "string" ? e[0] : undefined,
      r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return ve({
      [je]: () => ({
        match: (n) => {
          let i = { [t ?? Xr]: n };
          return {
            matched:
              r === undefined ||
              Se(r, n, (o, s) => {
                i[o] = s;
              }),
            selections: i,
          };
        },
        getSelectionKeys: () => [t ?? Xr].concat(r === undefined ? [] : Ye(r)),
      }),
    });
  };
  var Re = function (e) {
    return typeof e == "number";
  };
  var pt = function (e) {
    return typeof e == "string";
  };
  var We = function (e) {
    return typeof e == "bigint";
  };
  var At = function (e) {
    return new Ei(e, wi);
  };
  var tr = function (e) {
    return (0, ys.default)(e, e, { fallback: le });
  };
  var rr = function (e, ...t) {
    tc.warn() && console.warn(`${ec.warn} ${e}`, ...t);
  };
  async function Es() {
    let e = rn.default.platform(),
      t = process.arch;
    if (e === "freebsd") {
      let s = await nn("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return {
            platform: "freebsd",
            targetDistro: `freebsd${l[1]}`,
            arch: t,
          };
      }
    }
    if (e !== "linux") return { platform: e, arch: t };
    let r = await oc(),
      n = await mc(),
      i = ac({ arch: t, archFromUname: n, familyDistro: r.familyDistro }),
      { libssl: o } = await lc(i);
    return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
  }
  var ic = function (e) {
    let t = /^ID="?([^"\n]*)"?$/im,
      r = /^ID_LIKE="?([^"\n]*)"?$/im,
      n = t.exec(e),
      i = (n && n[1] && n[1].toLowerCase()) || "",
      o = r.exec(e),
      s = (o && o[1] && o[1].toLowerCase()) || "",
      a = At({ id: i, idLike: s })
        .with({ id: "alpine" }, ({ id: l }) => ({
          targetDistro: "musl",
          familyDistro: l,
          originalDistro: l,
        }))
        .with({ id: "raspbian" }, ({ id: l }) => ({
          targetDistro: "arm",
          familyDistro: "debian",
          originalDistro: l,
        }))
        .with({ id: "nixos" }, ({ id: l }) => ({
          targetDistro: "nixos",
          originalDistro: l,
          familyDistro: "nixos",
        }))
        .with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({
          targetDistro: "debian",
          familyDistro: "debian",
          originalDistro: l,
        }))
        .with(
          { id: "rhel" },
          { id: "centos" },
          { id: "fedora" },
          ({ id: l }) => ({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l,
          }),
        )
        .when(
          ({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"),
          ({ id: l }) => ({
            targetDistro: "debian",
            familyDistro: "debian",
            originalDistro: l,
          }),
        )
        .when(
          ({ idLike: l }) => i === "arch" || l.includes("arch"),
          ({ id: l }) => ({
            targetDistro: "debian",
            familyDistro: "arch",
            originalDistro: l,
          }),
        )
        .when(
          ({ idLike: l }) =>
            l.includes("centos") ||
            l.includes("fedora") ||
            l.includes("rhel") ||
            l.includes("suse"),
          ({ id: l }) => ({
            targetDistro: "rhel",
            familyDistro: "rhel",
            originalDistro: l,
          }),
        )
        .otherwise(({ id: l }) => ({
          targetDistro: undefined,
          familyDistro: undefined,
          originalDistro: l,
        }));
    return (
      de(`Found distro info:
${JSON.stringify(a, null, 2)}`),
      a
    );
  };
  async function oc() {
    let e = "/etc/os-release";
    try {
      let t = await Ci.default.readFile(e, { encoding: "utf-8" });
      return ic(t);
    } catch {
      return {
        targetDistro: undefined,
        familyDistro: undefined,
        originalDistro: undefined,
      };
    }
  }
  var sc = function (e) {
    let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t) {
      let r = `${t[1]}.x`;
      return Ps(r);
    }
  };
  var hs = function (e) {
    let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t) {
      let r = `${t[1]}${t[2] ?? ".0"}.x`;
      return Ps(r);
    }
  };
  var Ps = function (e) {
    let t = (() => {
      if (Ts(e)) return e;
      let r = e.split(".");
      return (r[1] = "0"), r.join(".");
    })();
    if (nc.includes(t)) return t;
  };
  var ac = function (e) {
    return At(e)
      .with(
        { familyDistro: "musl" },
        () => (de('Trying platform-specific paths for "alpine"'), ["/lib"]),
      )
      .with(
        { familyDistro: "debian" },
        ({ archFromUname: t }) => (
          de('Trying platform-specific paths for "debian" (and "ubuntu")'),
          [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`]
        ),
      )
      .with(
        { familyDistro: "rhel" },
        () => (
          de('Trying platform-specific paths for "rhel"'),
          ["/lib64", "/usr/lib64"]
        ),
      )
      .otherwise(
        ({ familyDistro: t, arch: r, archFromUname: n }) => (
          de(
            `Don't know any platform-specific paths for "${t}" on ${r} (${n})`,
          ),
          []
        ),
      );
  };
  async function lc(e) {
    let t = 'grep -v "libssl.so.0"',
      r = await xs(e);
    if (r) {
      de(`Found libssl.so file using platform-specific paths: ${r}`);
      let o = hs(r);
      if ((de(`The parsed libssl version is: ${o}`), o))
        return { libssl: o, strategy: "libssl-specific-path" };
    }
    de('Falling back to "ldconfig" and other generic paths');
    let n = await nn(
      `ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`,
    );
    if ((n || (n = await xs(["/lib64", "/usr/lib64", "/lib"])), n)) {
      de(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
      let o = hs(n);
      if ((de(`The parsed libssl version is: ${o}`), o))
        return { libssl: o, strategy: "ldconfig" };
    }
    let i = await nn("openssl version -v");
    if (i) {
      de(`Found openssl binary with version: ${i}`);
      let o = sc(i);
      if ((de(`The parsed openssl version is: ${o}`), o))
        return { libssl: o, strategy: "openssl-binary" };
    }
    return (
      de("Couldn't find any version of libssl or OpenSSL in the system"), {}
    );
  }
  async function xs(e) {
    for (let t of e) {
      let r = await uc(t);
      if (r) return r;
    }
  }
  async function uc(e) {
    try {
      return (await Ci.default.readdir(e)).find(
        (r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"),
      );
    } catch (t) {
      if (t.code === "ENOENT") return;
      throw t;
    }
  }
  async function St() {
    let { binaryTarget: e } = await vs();
    return e;
  }
  var cc = function (e) {
    return e.binaryTarget !== undefined;
  };
  async function _i() {
    let { memoized: e, ...t } = await vs();
    return t;
  }
  async function vs() {
    if (cc(tn)) return Promise.resolve({ ...tn, memoized: true });
    let e = await Es(),
      t = pc(e);
    return (tn = { ...e, binaryTarget: t }), { ...tn, memoized: false };
  }
  var pc = function (e) {
    let {
      platform: t,
      arch: r,
      archFromUname: n,
      libssl: i,
      targetDistro: o,
      familyDistro: s,
      originalDistro: a,
    } = e;
    t === "linux" &&
      !["x64", "arm64"].includes(r) &&
      rr(
        `Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`,
      );
    let l = "1.1.x";
    if (t === "linux" && i === undefined) {
      let c = At({ familyDistro: s })
        .with(
          { familyDistro: "debian" },
          () =>
            "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.",
        )
        .otherwise(
          () =>
            "Please manually install OpenSSL and try installing Prisma again.",
        );
      rr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (
      (t === "linux" &&
        o === undefined &&
        rr(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${tr(
          "https://github.com/prisma/prisma/issues",
        )} so we can add your distro to the list of known supported distros.`),
      t === "darwin" && r === "arm64")
    )
      return "darwin-arm64";
    if (t === "darwin") return "darwin";
    if (t === "win32") return "windows";
    if (t === "freebsd") return o;
    if (t === "openbsd") return "openbsd";
    if (t === "netbsd") return "netbsd";
    if (t === "linux" && o === "nixos") return "linux-nixos";
    if (t === "linux" && r === "arm64")
      return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${
        i || l
      }`;
    if (t === "linux" && r === "arm") return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
      let c = "linux-musl";
      return !i || Ts(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i
      ? `${o}-openssl-${i}`
      : (t !== "linux" &&
          rr(
            `Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`,
          ),
        i
          ? `${u}-openssl-${i}`
          : o
            ? `${o}-openssl-${l}`
            : `${u}-openssl-${l}`);
  };
  async function dc(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  var nn = function (e) {
    return dc(async () => {
      let t = await rc(e);
      return de(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
    });
  };
  async function mc() {
    return typeof rn.default.machine == "function"
      ? rn.default.machine()
      : (await nn("uname -m"))?.trim();
  }
  var Ts = function (e) {
    return e.startsWith("1.");
  };
  var Rs = function (e) {
    let t = e.ignoreProcessEnv ? {} : process.env,
      r = (n) =>
        n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function (o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a) return o;
          let l = a[1],
            u,
            c;
          if (l === "\\") (c = a[0]), (u = c.replace("\\$", "$"));
          else {
            let p = a[2];
            (c = a[0].substring(l.length)),
              (u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || ""),
              (u = r(u));
          }
          return o.replace(c, u);
        }, n) ?? n;
    for (let n in e.parsed) {
      let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
      e.parsed[n] = r(i);
    }
    for (let n in e.parsed) t[n] = e.parsed[n];
    return e;
  };
  var nr = function (
    { rootEnvPath: e, schemaEnvPath: t },
    r = { conflictCheck: "none" },
  ) {
    let n = Ms(e);
    r.conflictCheck !== "none" && vc(n, t, r.conflictCheck);
    let i = null;
    return (
      Ss(n?.path, t) || (i = Ms(t)),
      !n && !i && Mi("No Environment variables loaded"),
      i?.dotenvResult.error
        ? console.error(Pe(pe("Schema Env Error: ")) + i.dotenvResult.error)
        : {
            message: [n?.message, i?.message].filter(Boolean).join(`
`),
            parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed },
          }
    );
  };
  var vc = function (e, t, r) {
    let n = e?.dotenvResult.parsed,
      i = !Ss(e?.path, t);
    if (n && t && i && an.default.existsSync(t)) {
      let o = Si.default.parse(an.default.readFileSync(t)),
        s = [];
      for (let a in o) n[a] === o[a] && s.push(a);
      if (s.length > 0) {
        let a = kt.default.relative(process.cwd(), e.path),
          l = kt.default.relative(process.cwd(), t);
        if (r === "error") {
          let u = `There is a conflict between env var${
            s.length > 1 ? "s" : ""
          } in ${le(a)} and ${le(l)}
Conflicting env vars:
${s.map((c) => `  ${pe(c)}`).join(`
`)}

We suggest to move the contents of ${le(l)} to ${le(
            a,
          )} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s
            .map((c) => pe(c))
            .join(", ")} in ${le(a)} and ${le(l)}
Env vars from ${le(l)} overwrite the ones from ${le(a)}
      `;
          console.warn(`${Ae("warn(prisma)")} ${u}`);
        }
      }
    }
  };
  var Ms = function (e) {
    return Tc(e)
      ? (Mi(`Environment variables loaded from ${e}`),
        {
          dotenvResult: Rs(
            Si.default.config({
              path: e,
              debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined,
            }),
          ),
          message: Je(
            `Environment variables loaded from ${kt.default.relative(
              process.cwd(),
              e,
            )}`,
          ),
          path: e,
        })
      : (Mi(`Environment variables not found at ${e}`), null);
  };
  var Ss = function (e, t) {
    return e && t && kt.default.resolve(e) === kt.default.resolve(t);
  };
  var Tc = function (e) {
    return !!(e && an.default.existsSync(e));
  };
  var mt = function (e) {
    let t = Cc();
    return (
      t ||
      (e?.config.engineType === "library"
        ? "library"
        : e?.config.engineType === "binary"
          ? "binary"
          : e?.config.engineType === "wasm"
            ? "wasm"
            : ks)
    );
  };
  var Cc = function () {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library"
      ? "library"
      : e === "binary"
        ? "binary"
        : e === "wasm"
          ? "wasm"
          : undefined;
  };
  var Ls = function () {
    return q.default.join(__dirname, "../");
  };
  var Fi = function (e) {
    if (process.platform === "win32") return;
    let t = Ii.default.statSync(e),
      r = t.mode | 64 | 8 | 1;
    if (t.mode === r) {
      $s(`Execution permissions of ${e} are fine`);
      return;
    }
    let n = r.toString(8).slice(-3);
    $s(`Have to call chmodPlusX on ${e}`), Ii.default.chmodSync(e, n);
  };
  var Di = function (e) {
    let t = e.e,
      r = (a) =>
        `Prisma cannot find the required \`${a}\` system library in your system`,
      n = t.message.includes("cannot open shared object file"),
      i = `Please refer to the documentation about Prisma's system requirements: ${tr(
        "https://pris.ly/d/system-requirements",
      )}`,
      o = `Unable to require(\`${Je(e.id)}\`).`,
      s = At({ message: t.message, code: t.code })
        .with({ code: "ENOENT" }, () => "File does not exist.")
        .when(
          ({ message: a }) => n && a.includes("libz"),
          () => `${r("libz")}. Please install it and try again.`,
        )
        .when(
          ({ message: a }) => n && a.includes("libgcc_s"),
          () => `${r("libgcc_s")}. Please install it and try again.`,
        )
        .when(
          ({ message: a }) => n && a.includes("libssl"),
          () => {
            let a = e.platformInfo.libssl
              ? `openssl-${e.platformInfo.libssl}`
              : "openssl";
            return `${r("libssl")}. Please install ${a} and try again.`;
          },
        )
        .when(
          ({ message: a }) => a.includes("GLIBC"),
          () =>
            `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`,
        )
        .when(
          ({ message: a }) =>
            e.platformInfo.platform === "linux" &&
            a.includes("symbol not found"),
          () =>
            `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`,
        )
        .otherwise(
          () =>
            `The Prisma engines do not seem to be compatible with your system. ${i}`,
        );
    return `${o}
${s}

Details: ${t.message}`;
  };
  var Oi = function (e) {
    return ir.default.sep === ir.default.posix.sep
      ? e
      : e.split(ir.default.sep).join(ir.default.posix.sep);
  };
  var $i = function (e) {
    return String(new Li(e));
  };
  var Sc = function (e) {
    let t;
    if (e.length > 0) {
      let r = e.find((n) => n.fromEnvVar !== null);
      r
        ? (t = `env("${r.fromEnvVar}")`)
        : (t = e.map((n) => (n.native ? "native" : n.value)));
    } else t = undefined;
    return t;
  };
  var kc = function (e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Ic(n)}`).join(`
`);
  };
  var Ic = function (e) {
    return JSON.parse(
      JSON.stringify(e, (t, r) =>
        Array.isArray(r)
          ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]`
          : JSON.stringify(r),
      ),
    );
  };
  var Fc = function (...e) {
    console.log(...e);
  };
  var qi = function (e, ...t) {
    Vs.warn() && console.warn(`${or.warn} ${e}`, ...t);
  };
  var Dc = function (e, ...t) {
    console.info(`${or.info} ${e}`, ...t);
  };
  var Oc = function (e, ...t) {
    console.error(`${or.error} ${e}`, ...t);
  };
  var Nc = function (e, ...t) {
    console.log(`${or.query} ${e}`, ...t);
  };
  var un = function (e, t) {
    if (!e)
      throw new Error(
        `${t}. This should never happen. If you see this error, please, open an issue at https://github.com/prisma/prisma/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug_report.yml`,
      );
  };
  var ft = function (e, t) {
    throw new Error(t);
  };
  var Vi = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  var It = function (e, t) {
    let r = {};
    for (let n of Object.keys(e)) r[n] = t(e[n], n);
    return r;
  };
  var Ui = function (e, t) {
    if (e.length === 0) return;
    let r = e[0];
    for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
    return r;
  };
  var E = function (e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var ur = function (e) {
    let t;
    return {
      get() {
        return t || (t = { value: e() }), t.value;
      },
    };
  };
  var Js = function (e, t) {
    let r = ur(() => $c(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  };
  var $c = function (e) {
    return {
      datamodel: {
        models: Ki(e.models),
        enums: Ki(e.enums),
        types: Ki(e.types),
      },
    };
  };
  var Ki = function (e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  };
  var Gi = function (e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var fr = function (e) {
    return {
      ok: false,
      error: e,
      map() {
        return fr(e);
      },
      flatMap() {
        return fr(e);
      },
    };
  };
  var Ze = function (e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  };
  var Vc = function (e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  };
  var Hs = function (e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError(
        "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
      );
    return new me([r, ...Array(e.length - 1).fill(t), n], e);
  };
  var Wi = function (e) {
    return new me([e], []);
  };
  var zi = function (e, ...t) {
    return new me(e, t);
  };
  var gr = function (e) {
    return {
      getKeys() {
        return Object.keys(e);
      },
      getPropertyValue(t) {
        return e[t];
      },
    };
  };
  var ue = function (e, t) {
    return {
      getKeys() {
        return [e];
      },
      getPropertyValue() {
        return t();
      },
    };
  };
  var gt = function (e) {
    let t = new Ie();
    return {
      getKeys() {
        return e.getKeys();
      },
      getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      },
      getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      },
    };
  };
  var fn = function (e) {
    let t = new Set(e);
    return {
      getOwnPropertyDescriptor: () => mn,
      has: (r, n) => t.has(n),
      set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
      ownKeys: () => [...t],
    };
  };
  var Fe = function (e, t) {
    let r = Bc(t),
      n = new Set(),
      i = new Proxy(e, {
        get(o, s) {
          if (n.has(s)) return o[s];
          let a = r.get(s);
          return a ? a.getPropertyValue(s) : o[s];
        },
        has(o, s) {
          if (n.has(s)) return true;
          let a = r.get(s);
          return a ? a.has?.(s) ?? true : Reflect.has(o, s);
        },
        ownKeys(o) {
          let s = Ys(Reflect.ownKeys(o), r),
            a = Ys(Array.from(r.keys()), r);
          return [...new Set([...s, ...a, ...n])];
        },
        set(o, s, a) {
          return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false
            ? false
            : (n.add(s), Reflect.set(o, s, a));
        },
        getOwnPropertyDescriptor(o, s) {
          let a = Reflect.getOwnPropertyDescriptor(o, s);
          if (a && !a.configurable) return a;
          let l = r.get(s);
          return l
            ? l.getPropertyDescriptor
              ? { ...mn, ...l?.getPropertyDescriptor(s) }
              : mn
            : a;
        },
        defineProperty(o, s, a) {
          return n.add(s), Reflect.defineProperty(o, s, a);
        },
      });
    return (
      (i[zs] = function (o, s, a = Zs.inspect) {
        let l = { ...this };
        return delete l[zs], a(l, s);
      }),
      i
    );
  };
  var Bc = function (e) {
    let t = new Map();
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n) t.set(i, r);
    }
    return t;
  };
  var Ys = function (e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  };
  var yr = function (e) {
    return {
      getKeys() {
        return e;
      },
      has() {
        return false;
      },
      getPropertyValue() {},
    };
  };
  var Ot = function (e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  };
  var gn = function (e) {
    return e.toString() !== "Invalid Date";
  };
  var te = function (e) {
    var t,
      r,
      n,
      i = e.length - 1,
      o = "",
      s = e[0];
    if (i > 0) {
      for (o += s, t = 1; t < i; t++)
        (n = e[t] + ""), (r = w - n.length), r && (o += Xe(r)), (o += n);
      (s = e[t]), (n = s + ""), (r = w - n.length), r && (o += Xe(r));
    } else if (s === 0) return "0";
    for (; s % 10 === 0; ) s /= 10;
    return o + s;
  };
  var fe = function (e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(tt + e);
  };
  var hr = function (e, t, r, n) {
    var i, o, s, a;
    for (o = e[0]; o >= 10; o /= 10) --t;
    return (
      --t < 0 ? ((t += w), (i = 0)) : ((i = Math.ceil((t + 1) / w)), (t %= w)),
      (o = Q(10, w - t)),
      (a = e[i] % o | 0),
      n == null
        ? t < 3
          ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
            (s =
              (r < 4 && a == 99999) ||
              (r > 3 && a == 49999) ||
              a == 50000 ||
              a == 0))
          : (s =
              (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
                ((e[i + 1] / o / 100) | 0) == Q(10, t - 2) - 1) ||
              ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
        : t < 4
          ? (t == 0
              ? (a = (a / 1000) | 0)
              : t == 1
                ? (a = (a / 100) | 0)
                : t == 2 && (a = (a / 10) | 0),
            (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
          : (s =
              (((n || r < 4) && a + 1 == o) ||
                (!n && r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 1000) | 0) == Q(10, t - 3) - 1),
      s
    );
  };
  var yn = function (e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
      for (o = i.length; o--; ) i[o] *= t;
      for (i[0] += Yi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
        i[n] > r - 1 &&
          (i[n + 1] === undefined && (i[n + 1] = 0),
          (i[n + 1] += (i[n] / r) | 0),
          (i[n] %= r));
    }
    return i.reverse();
  };
  var Hc = function (e, t) {
    var r, n, i;
    if (t.isZero()) return t;
    (n = t.d.length),
      n < 32
        ? ((r = Math.ceil(n / 3)), (i = (1 / Pn(4, r)).toString()))
        : ((r = 16), (i = "2.3283064365386962890625e-10")),
      (e.precision += r),
      (t = Lt(e, 1, t.times(i), new e(1)));
    for (var o = r; o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return (e.precision -= r), t;
  };
  var x = function (e, t, r, n) {
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      p,
      d,
      f = e.constructor;
    e: if (t != null) {
      if (((p = e.d), !p)) return e;
      for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
      if (((o = t - i), o < 0))
        (o += w),
          (s = t),
          (c = p[(d = 0)]),
          (l = (c / Q(10, i - s - 1)) % 10 | 0);
      else if (((d = Math.ceil((o + 1) / w)), (a = p.length), d >= a))
        if (n) {
          for (; a++ <= d; ) p.push(0);
          (c = l = 0), (i = 1), (o %= w), (s = o - w + 1);
        } else break e;
      else {
        for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
        (o %= w),
          (s = o - w + i),
          (l = s < 0 ? 0 : (c / Q(10, i - s - 1)) % 10 | 0);
      }
      if (
        ((n =
          n ||
          t < 0 ||
          p[d + 1] !== undefined ||
          (s < 0 ? c : c % Q(10, i - s - 1))),
        (u =
          r < 4
            ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
            : l > 5 ||
              (l == 5 &&
                (r == 4 ||
                  n ||
                  (r == 6 &&
                    (o > 0 ? (s > 0 ? c / Q(10, i - s) : 0) : p[d - 1]) % 10 &
                      1) ||
                  r == (e.s < 0 ? 8 : 7)))),
        t < 1 || !p[0])
      )
        return (
          (p.length = 0),
          u
            ? ((t -= e.e + 1),
              (p[0] = Q(10, (w - (t % w)) % w)),
              (e.e = -t || 0))
            : (p[0] = e.e = 0),
          e
        );
      if (
        (o == 0
          ? ((p.length = d), (a = 1), d--)
          : ((p.length = d + 1),
            (a = Q(10, w - o)),
            (p[d] = s > 0 ? ((c / Q(10, i - s)) % Q(10, s) | 0) * a : 0)),
        u)
      )
        for (;;)
          if (d == 0) {
            for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
            for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
            o != a && (e.e++, p[0] == Ce && (p[0] = 1));
            break;
          } else {
            if (((p[d] += a), p[d] != Ce)) break;
            (p[d--] = 0), (a = 1);
          }
      for (o = p.length; p[--o] === 0; ) p.pop();
    }
    return (
      P &&
        (e.e > f.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < f.minE && ((e.e = 0), (e.d = [0]))),
      e
    );
  };
  var De = function (e, t, r) {
    if (!e.isFinite()) return ca(e);
    var n,
      i = e.e,
      o = te(e.d),
      s = o.length;
    return (
      t
        ? (r && (n = r - s) > 0
            ? (o = o.charAt(0) + "." + o.slice(1) + Xe(n))
            : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
          (o = o + (e.e < 0 ? "e" : "e+") + e.e))
        : i < 0
          ? ((o = "0." + Xe(-i - 1) + o), r && (n = r - s) > 0 && (o += Xe(n)))
          : i >= s
            ? ((o += Xe(i + 1 - s)),
              r && (n = r - i - 1) > 0 && (o = o + "." + Xe(n)))
            : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
              r &&
                (n = r - s) > 0 &&
                (i + 1 === s && (o += "."), (o += Xe(n)))),
      o
    );
  };
  var En = function (e, t) {
    var r = e[0];
    for (t *= w; r >= 10; r /= 10) t++;
    return t;
  };
  var bn = function (e, t, r) {
    if (t > Jc) throw ((P = true), r && (e.precision = r), Error(na));
    return x(new e(hn), t, 1, true);
  };
  var Te = function (e, t, r) {
    if (t > Xi) throw Error(na);
    return x(new e(xn), t, r, true);
  };
  var aa = function (e) {
    var t = e.length - 1,
      r = t * w + 1;
    if (((t = e[t]), t)) {
      for (; t % 10 == 0; t /= 10) r--;
      for (t = e[0]; t >= 10; t /= 10) r++;
    }
    return r;
  };
  var Xe = function (e) {
    for (var t = ""; e--; ) t += "0";
    return t;
  };
  var la = function (e, t, r, n) {
    var i,
      o = new e(1),
      s = Math.ceil(n / w + 4);
    for (P = false; ; ) {
      if (
        (r % 2 && ((o = o.times(t)), ea(o.d, s) && (i = true)),
        (r = ae(r / 2)),
        r === 0)
      ) {
        (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      (t = t.times(t)), ea(t.d, s);
    }
    return (P = true), o;
  };
  var Xs = function (e) {
    return e.d[e.d.length - 1] & 1;
  };
  var ua = function (e, t, r) {
    for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
      if (((n = new e(t[o])), n.s)) i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
    return i;
  };
  var eo = function (e, t) {
    var r,
      n,
      i,
      o,
      s,
      a,
      l,
      u = 0,
      c = 0,
      p = 0,
      d = e.constructor,
      f = d.rounding,
      y = d.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d(
        e.d
          ? e.d[0]
            ? e.s < 0
              ? 0
              : 1 / 0
            : 1
          : e.s
            ? e.s < 0
              ? 0
              : e
            : 0 / 0,
      );
    for (
      t == null ? ((P = false), (l = y)) : (l = t), a = new d(0.03125);
      e.e > -2;

    )
      (e = e.times(a)), (p += 5);
    for (
      n = ((Math.log(Q(2, p)) / Math.LN10) * 2 + 5) | 0,
        l += n,
        r = o = s = new d(1),
        d.precision = l;
      ;

    ) {
      if (
        ((o = x(o.times(e), l, 1)),
        (r = r.times(++c)),
        (a = s.plus(N(o, r, l, 1))),
        te(a.d).slice(0, l) === te(s.d).slice(0, l))
      ) {
        for (i = p; i--; ) s = x(s.times(s), l, 1);
        if (t == null)
          if (u < 3 && hr(s.d, l - n, f, u))
            (d.precision = l += 10), (r = o = a = new d(1)), (c = 0), u++;
          else return x(s, (d.precision = y), f, (P = true));
        else return (d.precision = y), s;
      }
      s = a;
    }
  };
  var et = function (e, t) {
    var r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      p,
      d,
      f = 1,
      y = 10,
      g = e,
      v = g.d,
      C = g.constructor,
      _ = C.rounding,
      b = C.precision;
    if (g.s < 0 || !v || !v[0] || (!g.e && v[0] == 1 && v.length == 1))
      return new C(v && !v[0] ? -1 / 0 : g.s != 1 ? NaN : v ? 0 : g);
    if (
      (t == null ? ((P = false), (c = b)) : (c = t),
      (C.precision = c += y),
      (r = te(v)),
      (n = r.charAt(0)),
      Math.abs((o = g.e)) < 1500000000000000)
    ) {
      for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
        (g = g.times(e)), (r = te(g.d)), (n = r.charAt(0)), f++;
      (o = g.e),
        n > 1
          ? ((g = new C("0." + r)), o++)
          : (g = new C(n + "." + r.slice(1)));
    } else
      return (
        (u = bn(C, c + 2, b).times(o + "")),
        (g = et(new C(n + "." + r.slice(1)), c - y).plus(u)),
        (C.precision = b),
        t == null ? x(g, b, _, (P = true)) : g
      );
    for (
      p = g,
        l = s = g = N(g.minus(1), g.plus(1), c, 1),
        d = x(g.times(g), c, 1),
        i = 3;
      ;

    ) {
      if (
        ((s = x(s.times(d), c, 1)),
        (u = l.plus(N(s, new C(i), c, 1))),
        te(u.d).slice(0, c) === te(l.d).slice(0, c))
      )
        if (
          ((l = l.times(2)),
          o !== 0 && (l = l.plus(bn(C, c + 2, b).times(o + ""))),
          (l = N(l, new C(f), c, 1)),
          t == null)
        )
          if (hr(l.d, c - y, _, a))
            (C.precision = c += y),
              (u = s = g = N(p.minus(1), p.plus(1), c, 1)),
              (d = x(g.times(g), c, 1)),
              (i = a = 1);
          else return x(l, (C.precision = b), _, (P = true));
        else return (C.precision = b), l;
      (l = u), (i += 2);
    }
  };
  var ca = function (e) {
    return String((e.s * e.s) / 0);
  };
  var to = function (e, t) {
    var r, n, i;
    for (
      (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
        (n = t.search(/e/i)) > 0
          ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
          : r < 0 && (r = t.length),
        n = 0;
      t.charCodeAt(n) === 48;
      n++
    );
    for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
    if (((t = t.slice(n, i)), t)) {
      if (
        ((i -= n),
        (e.e = r = r - n - 1),
        (e.d = []),
        (n = (r + 1) % w),
        r < 0 && (n += w),
        n < i)
      ) {
        for (n && e.d.push(+t.slice(0, n)), i -= w; n < i; )
          e.d.push(+t.slice(n, (n += w)));
        (t = t.slice(n)), (n = w - t.length);
      } else n -= i;
      for (; n--; ) t += "0";
      e.d.push(+t),
        P &&
          (e.e > e.constructor.maxE
            ? ((e.d = null), (e.e = NaN))
            : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
    } else (e.e = 0), (e.d = [0]);
    return e;
  };
  var Wc = function (e, t) {
    var r, n, i, o, s, a, l, u, c;
    if (t.indexOf("_") > -1) {
      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), sa.test(t))) return to(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
    if (Kc.test(t)) (r = 16), (t = t.toLowerCase());
    else if (Uc.test(t)) r = 2;
    else if (Qc.test(t)) r = 8;
    else throw Error(tt + t);
    for (
      o = t.search(/p/i),
        o > 0
          ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
          : (t = t.slice(2)),
        o = t.indexOf("."),
        s = o >= 0,
        n = e.constructor,
        s &&
          ((t = t.replace(".", "")),
          (a = t.length),
          (o = a - o),
          (i = la(n, new n(r), o, o * 2))),
        u = yn(t, r, Ce),
        c = u.length - 1,
        o = c;
      u[o] === 0;
      --o
    )
      u.pop();
    return o < 0
      ? new n(e.s * 0)
      : ((e.e = En(u, c)),
        (e.d = u),
        (P = false),
        s && (e = N(e, i, a * 4)),
        l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : yt.pow(2, l))),
        (P = true),
        e);
  };
  var zc = function (e, t) {
    var r,
      n = t.d.length;
    if (n < 3) return t.isZero() ? t : Lt(e, 2, t, t);
    (r = 1.4 * Math.sqrt(n)),
      (r = r > 16 ? 16 : r | 0),
      (t = t.times(1 / Pn(5, r))),
      (t = Lt(e, 2, t, t));
    for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
      (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
    return t;
  };
  var Lt = function (e, t, r, n, i) {
    var o,
      s,
      a,
      l,
      u = 1,
      c = e.precision,
      p = Math.ceil(c / w);
    for (P = false, l = r.times(r), a = new e(n); ; ) {
      if (
        ((s = N(a.times(l), new e(t++ * t++), c, 1)),
        (a = i ? n.plus(s) : n.minus(s)),
        (n = N(s.times(l), new e(t++ * t++), c, 1)),
        (s = a.plus(n)),
        s.d[p] !== undefined)
      ) {
        for (o = p; s.d[o] === a.d[o] && o--; );
        if (o == -1) break;
      }
      (o = a), (a = n), (n = s), (s = o), u++;
    }
    return (P = true), (s.d.length = p + 1), s;
  };
  var Pn = function (e, t) {
    for (var r = e; --t; ) r *= e;
    return r;
  };
  var pa = function (e, t) {
    var r,
      n = t.s < 0,
      i = Te(e, e.precision, 1),
      o = i.times(0.5);
    if (((t = t.abs()), t.lte(o))) return (Be = n ? 4 : 1), t;
    if (((r = t.divToInt(i)), r.isZero())) Be = n ? 3 : 2;
    else {
      if (((t = t.minus(r.times(i))), t.lte(o)))
        return (Be = Xs(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
      Be = Xs(r) ? (n ? 1 : 4) : n ? 3 : 2;
    }
    return t.minus(i).abs();
  };
  var ro = function (e, t, r, n) {
    var i,
      o,
      s,
      a,
      l,
      u,
      c,
      p,
      d,
      f = e.constructor,
      y = r !== undefined;
    if (
      (y
        ? (fe(r, 1, rt), n === undefined ? (n = f.rounding) : fe(n, 0, 8))
        : ((r = f.precision), (n = f.rounding)),
      !e.isFinite())
    )
      c = ca(e);
    else {
      for (
        c = De(e),
          s = c.indexOf("."),
          y
            ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
            : (i = t),
          s >= 0 &&
            ((c = c.replace(".", "")),
            (d = new f(1)),
            (d.e = c.length - s),
            (d.d = yn(De(d), 10, i)),
            (d.e = d.d.length)),
          p = yn(c, 10, i),
          o = l = p.length;
        p[--l] == 0;

      )
        p.pop();
      if (!p[0]) c = y ? "0p+0" : "0";
      else {
        if (
          (s < 0
            ? o--
            : ((e = new f(e)),
              (e.d = p),
              (e.e = o),
              (e = N(e, d, r, n, 0, i)),
              (p = e.d),
              (o = e.e),
              (u = ra)),
          (s = p[r]),
          (a = i / 2),
          (u = u || p[r + 1] !== undefined),
          (u =
            n < 4
              ? (s !== undefined || u) && (n === 0 || n === (e.s < 0 ? 3 : 2))
              : s > a ||
                (s === a &&
                  (n === 4 ||
                    u ||
                    (n === 6 && p[r - 1] & 1) ||
                    n === (e.s < 0 ? 8 : 7)))),
          (p.length = r),
          u)
        )
          for (; ++p[--r] > i - 1; ) (p[r] = 0), r || (++o, p.unshift(1));
        for (l = p.length; !p[l - 1]; --l);
        for (s = 0, c = ""; s < l; s++) c += Yi.charAt(p[s]);
        if (y) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = yn(c, i, t), l = p.length; !p[l - 1]; --l);
              for (s = 1, c = "1."; s < l; s++) c += Yi.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
          c = c + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (; ++o; ) c = "0" + c;
          c = "0." + c;
        } else if (++o > l) for (o -= l; o--; ) c += "0";
        else o < l && (c = c.slice(0, o) + "." + c.slice(o));
      }
      c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
  };
  var ea = function (e, t) {
    if (e.length > t) return (e.length = t), true;
  };
  var Yc = function (e) {
    return new this(e).abs();
  };
  var Zc = function (e) {
    return new this(e).acos();
  };
  var Xc = function (e) {
    return new this(e).acosh();
  };
  var ep = function (e, t) {
    return new this(e).plus(t);
  };
  var tp = function (e) {
    return new this(e).asin();
  };
  var rp = function (e) {
    return new this(e).asinh();
  };
  var np = function (e) {
    return new this(e).atan();
  };
  var ip = function (e) {
    return new this(e).atanh();
  };
  var op = function (e, t) {
    (e = new this(e)), (t = new this(t));
    var r,
      n = this.precision,
      i = this.rounding,
      o = n + 4;
    return (
      !e.s || !t.s
        ? (r = new this(NaN))
        : !e.d && !t.d
          ? ((r = Te(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
          : !t.d || e.isZero()
            ? ((r = t.s < 0 ? Te(this, n, i) : new this(0)), (r.s = e.s))
            : !e.d || t.isZero()
              ? ((r = Te(this, o, 1).times(0.5)), (r.s = e.s))
              : t.s < 0
                ? ((this.precision = o),
                  (this.rounding = 1),
                  (r = this.atan(N(e, t, o, 1))),
                  (t = Te(this, o, 1)),
                  (this.precision = n),
                  (this.rounding = i),
                  (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                : (r = this.atan(N(e, t, o, 1))),
      r
    );
  };
  var sp = function (e) {
    return new this(e).cbrt();
  };
  var ap = function (e) {
    return x((e = new this(e)), e.e + 1, 2);
  };
  var lp = function (e, t, r) {
    return new this(e).clamp(t, r);
  };
  var up = function (e) {
    if (!e || typeof e != "object") throw Error(wn + "Object expected");
    var t,
      r,
      n,
      i = e.defaults === true,
      o = [
        "precision",
        1,
        rt,
        "rounding",
        0,
        8,
        "toExpNeg",
        -Nt,
        0,
        "toExpPos",
        0,
        Nt,
        "maxE",
        0,
        Nt,
        "minE",
        -Nt,
        0,
        "modulo",
        0,
        9,
      ];
    for (t = 0; t < o.length; t += 3)
      if (((r = o[t]), i && (this[r] = Zi[r]), (n = e[r]) !== undefined))
        if (ae(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
        else throw Error(tt + r + ": " + n);
    if (((r = "crypto"), i && (this[r] = Zi[r]), (n = e[r]) !== undefined))
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (
            typeof crypto < "u" &&
            crypto &&
            (crypto.getRandomValues || crypto.randomBytes)
          )
            this[r] = true;
          else throw Error(ia);
        else this[r] = false;
      else throw Error(tt + r + ": " + n);
    return this;
  };
  var cp = function (e) {
    return new this(e).cos();
  };
  var pp = function (e) {
    return new this(e).cosh();
  };
  var da = function (e) {
    var t, r, n;
    function i(o) {
      var s,
        a,
        l,
        u = this;
      if (!(u instanceof i)) return new i(o);
      if (((u.constructor = i), ta(o))) {
        (u.s = o.s),
          P
            ? !o.d || o.e > i.maxE
              ? ((u.e = NaN), (u.d = null))
              : o.e < i.minE
                ? ((u.e = 0), (u.d = [0]))
                : ((u.e = o.e), (u.d = o.d.slice()))
            : ((u.e = o.e), (u.d = o.d ? o.d.slice() : o.d));
        return;
      }
      if (((l = typeof o), l === "number")) {
        if (o === 0) {
          (u.s = 1 / o < 0 ? -1 : 1), (u.e = 0), (u.d = [0]);
          return;
        }
        if (
          (o < 0 ? ((o = -o), (u.s = -1)) : (u.s = 1), o === ~~o && o < 1e7)
        ) {
          for (s = 0, a = o; a >= 10; a /= 10) s++;
          P
            ? s > i.maxE
              ? ((u.e = NaN), (u.d = null))
              : s < i.minE
                ? ((u.e = 0), (u.d = [0]))
                : ((u.e = s), (u.d = [o]))
            : ((u.e = s), (u.d = [o]));
          return;
        } else if (o * 0 !== 0) {
          o || (u.s = NaN), (u.e = NaN), (u.d = null);
          return;
        }
        return to(u, o.toString());
      } else if (l !== "string") throw Error(tt + o);
      return (
        (a = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (u.s = -1))
          : (a === 43 && (o = o.slice(1)), (u.s = 1)),
        sa.test(o) ? to(u, o) : Wc(u, o)
      );
    }
    if (
      ((i.prototype = m),
      (i.ROUND_UP = 0),
      (i.ROUND_DOWN = 1),
      (i.ROUND_CEIL = 2),
      (i.ROUND_FLOOR = 3),
      (i.ROUND_HALF_UP = 4),
      (i.ROUND_HALF_DOWN = 5),
      (i.ROUND_HALF_EVEN = 6),
      (i.ROUND_HALF_CEIL = 7),
      (i.ROUND_HALF_FLOOR = 8),
      (i.EUCLID = 9),
      (i.config = i.set = up),
      (i.clone = da),
      (i.isDecimal = ta),
      (i.abs = Yc),
      (i.acos = Zc),
      (i.acosh = Xc),
      (i.add = ep),
      (i.asin = tp),
      (i.asinh = rp),
      (i.atan = np),
      (i.atanh = ip),
      (i.atan2 = op),
      (i.cbrt = sp),
      (i.ceil = ap),
      (i.clamp = lp),
      (i.cos = cp),
      (i.cosh = pp),
      (i.div = dp),
      (i.exp = mp),
      (i.floor = fp),
      (i.hypot = gp),
      (i.ln = yp),
      (i.log = hp),
      (i.log10 = bp),
      (i.log2 = xp),
      (i.max = wp),
      (i.min = Ep),
      (i.mod = Pp),
      (i.mul = vp),
      (i.pow = Tp),
      (i.random = Cp),
      (i.round = _p),
      (i.sign = Ap),
      (i.sin = Rp),
      (i.sinh = Mp),
      (i.sqrt = Sp),
      (i.sub = kp),
      (i.sum = Ip),
      (i.tan = Fp),
      (i.tanh = Dp),
      (i.trunc = Op),
      e === undefined && (e = {}),
      e && e.defaults !== true)
    )
      for (
        n = [
          "precision",
          "rounding",
          "toExpNeg",
          "toExpPos",
          "maxE",
          "minE",
          "modulo",
          "crypto",
        ],
          t = 0;
        t < n.length;

      )
        e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
    return i.config(e), i;
  };
  var dp = function (e, t) {
    return new this(e).div(t);
  };
  var mp = function (e) {
    return new this(e).exp();
  };
  var fp = function (e) {
    return x((e = new this(e)), e.e + 1, 3);
  };
  var gp = function () {
    var e,
      t,
      r = new this(0);
    for (P = false, e = 0; e < arguments.length; )
      if (((t = new this(arguments[e++])), t.d))
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s) return (P = true), new this(1 / 0);
        r = t;
      }
    return (P = true), r.sqrt();
  };
  var ta = function (e) {
    return e instanceof yt || (e && e.toStringTag === oa) || false;
  };
  var yp = function (e) {
    return new this(e).ln();
  };
  var hp = function (e, t) {
    return new this(e).log(t);
  };
  var xp = function (e) {
    return new this(e).log(2);
  };
  var bp = function (e) {
    return new this(e).log(10);
  };
  var wp = function () {
    return ua(this, arguments, "lt");
  };
  var Ep = function () {
    return ua(this, arguments, "gt");
  };
  var Pp = function (e, t) {
    return new this(e).mod(t);
  };
  var vp = function (e, t) {
    return new this(e).mul(t);
  };
  var Tp = function (e, t) {
    return new this(e).pow(t);
  };
  var Cp = function (e) {
    var t,
      r,
      n,
      i,
      o = 0,
      s = new this(1),
      a = [];
    if (
      (e === undefined ? (e = this.precision) : fe(e, 1, rt),
      (n = Math.ceil(e / w)),
      this.crypto)
    )
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
          (i = t[o]),
            i >= 4290000000
              ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
              : (a[o++] = i % 1e7);
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes((n *= 4)); o < n; )
          (i =
            t[o] +
            (t[o + 1] << 8) +
            (t[o + 2] << 16) +
            ((t[o + 3] & 127) << 24)),
            i >= 2140000000
              ? crypto.randomBytes(4).copy(t, o)
              : (a.push(i % 1e7), (o += 4));
        o = n / 4;
      } else throw Error(ia);
    else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
    for (
      n = a[--o],
        e %= w,
        n && e && ((i = Q(10, w - e)), (a[o] = ((n / i) | 0) * i));
      a[o] === 0;
      o--
    )
      a.pop();
    if (o < 0) (r = 0), (a = [0]);
    else {
      for (r = -1; a[0] === 0; r -= w) a.shift();
      for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
      n < w && (r -= w - n);
    }
    return (s.e = r), (s.d = a), s;
  };
  var _p = function (e) {
    return x((e = new this(e)), e.e + 1, this.rounding);
  };
  var Ap = function (e) {
    return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
  };
  var Rp = function (e) {
    return new this(e).sin();
  };
  var Mp = function (e) {
    return new this(e).sinh();
  };
  var Sp = function (e) {
    return new this(e).sqrt();
  };
  var kp = function (e, t) {
    return new this(e).sub(t);
  };
  var Ip = function () {
    var e = 0,
      t = arguments,
      r = new this(t[e]);
    for (P = false; r.s && ++e < t.length; ) r = r.plus(t[e]);
    return (P = true), x(r, this.precision, this.rounding);
  };
  var Fp = function (e) {
    return new this(e).tan();
  };
  var Dp = function (e) {
    return new this(e).tanh();
  };
  var Op = function (e) {
    return x((e = new this(e)), e.e + 1, 1);
  };
  var $t = function (e) {
    return yt.isDecimal(e)
      ? true
      : e !== null &&
          typeof e == "object" &&
          typeof e.s == "number" &&
          typeof e.e == "number" &&
          typeof e.toFixed == "function" &&
          Array.isArray(e.d);
  };
  var qt = function (e) {
    return e instanceof xr;
  };
  var An = function (e) {
    return new no(ga(e));
  };
  var ga = function (e) {
    let t = new Y();
    for (let [r, n] of Object.entries(e)) {
      let i = new _n(r, ya(n));
      t.addField(i);
    }
    return t;
  };
  var ya = function (e) {
    if (typeof e == "string") return new Z(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean") return new Z(String(e));
    if (typeof e == "bigint") return new Z(`${e}n`);
    if (e === null) return new Z("null");
    if (e === undefined) return new Z("undefined");
    if ($t(e)) return new Z(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e)
        ? new Z(`Buffer.alloc(${e.byteLength})`)
        : new Z(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = gn(e) ? e.toISOString() : "Invalid Date";
      return new Z(`new Date("${t}")`);
    }
    return e instanceof ke
      ? new Z(`Prisma.${e._getName()}`)
      : qt(e)
        ? new Z(`prisma.${Ko(e.modelName)}.\$fields.${e.name}`)
        : Array.isArray(e)
          ? Lp(e)
          : typeof e == "object"
            ? ga(e)
            : new Z(Object.prototype.toString.call(e));
  };
  var Lp = function (e) {
    let t = new Vt();
    for (let r of e) t.addItem(ya(r));
    return t;
  };
  var ha = function (e) {
    if (e === undefined) return "";
    let t = An(e);
    return new Dt(0, { colors: Cn }).write(t).toString();
  };
  var xa = function (e) {
    var t = e.split(`
`);
    return t.reduce(function (r, n) {
      var i = jp(n) || Bp(n) || Qp(n) || Wp(n) || Jp(n);
      return i && r.push(i), r;
    }, []);
  };
  var jp = function (e) {
    var t = $p.exec(e);
    if (!t) return null;
    var r = t[2] && t[2].indexOf("native") === 0,
      n = t[2] && t[2].indexOf("eval") === 0,
      i = qp.exec(t[2]);
    return (
      n && i != null && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3])),
      {
        file: r ? null : t[2],
        methodName: t[1] || br,
        arguments: r ? [t[2]] : [],
        lineNumber: t[3] ? +t[3] : null,
        column: t[4] ? +t[4] : null,
      }
    );
  };
  var Bp = function (e) {
    var t = Vp.exec(e);
    return t
      ? {
          file: t[2],
          methodName: t[1] || br,
          arguments: [],
          lineNumber: +t[3],
          column: t[4] ? +t[4] : null,
        }
      : null;
  };
  var Qp = function (e) {
    var t = Up.exec(e);
    if (!t) return null;
    var r = t[3] && t[3].indexOf(" > eval") > -1,
      n = Kp.exec(t[3]);
    return (
      r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
      {
        file: t[3],
        methodName: t[1] || br,
        arguments: t[2] ? t[2].split(",") : [],
        lineNumber: t[4] ? +t[4] : null,
        column: t[5] ? +t[5] : null,
      }
    );
  };
  var Jp = function (e) {
    var t = Gp.exec(e);
    return t
      ? {
          file: t[3],
          methodName: t[1] || br,
          arguments: [],
          lineNumber: +t[4],
          column: t[5] ? +t[5] : null,
        }
      : null;
  };
  var Wp = function (e) {
    var t = Hp.exec(e);
    return t
      ? {
          file: t[2],
          methodName: t[1] || br,
          arguments: [],
          lineNumber: +t[3],
          column: t[4] ? +t[4] : null,
        }
      : null;
  };
  var it = function (e) {
    return e === "minimal" ? new io() : new oo();
  };
  var Bt = function (e = {}) {
    let t = Yp(e);
    return Object.entries(t).reduce(
      (n, [i, o]) => (
        ba[i] !== undefined ? (n.select[i] = { select: o }) : (n[i] = o), n
      ),
      { select: {} },
    );
  };
  var Yp = function (e = {}) {
    return typeof e._count == "boolean"
      ? { ...e, _count: { _all: e._count } }
      : e;
  };
  var Rn = function (e = {}) {
    return (t) => (
      typeof e._count == "boolean" && (t._count = t._count._all), t
    );
  };
  var wa = function (e, t) {
    let r = Rn(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: Bt })(e);
  };
  var Zp = function (e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object"
      ? Bt({ ...r, _count: t })
      : Bt({ ...r, _count: { _all: true } });
  };
  var Xp = function (e = {}) {
    return typeof e.select == "object"
      ? (t) => Rn(e)(t)._count
      : (t) => Rn(e)(t)._count._all;
  };
  var Ea = function (e, t) {
    return t({ action: "count", unpacker: Xp(e), argsMapper: Zp })(e);
  };
  var ed = function (e = {}) {
    let t = Bt(e);
    if (Array.isArray(t.by))
      for (let r of t.by) typeof r == "string" && (t.select[r] = true);
    else typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  };
  var td = function (e = {}) {
    return (t) => (
      typeof e?._count == "boolean" &&
        t.forEach((r) => {
          r._count = r._count._all;
        }),
      t
    );
  };
  var Pa = function (e, t) {
    return t({ action: "groupBy", unpacker: td(e), argsMapper: ed })(e);
  };
  var va = function (e, t, r) {
    if (t === "aggregate") return (n) => wa(n, r);
    if (t === "count") return (n) => Ea(n, r);
    if (t === "groupBy") return (n) => Pa(n, r);
  };
  var Ta = function (e, t) {
    let r = t.fields.filter((i) => !i.relationName),
      n = Bi(r, (i) => i.name);
    return new Proxy(
      {},
      {
        get(i, o) {
          if (o in i || typeof o == "symbol") return i[o];
          let s = n[o];
          if (s) return new xr(e, o, s.type, s.isList, s.kind === "enum");
        },
        ...fn(Object.keys(n)),
      },
    );
  };
  var rd = function (e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  };
  var nd = function (e, t, r) {
    return t === undefined ? e ?? {} : _a(t, r, e || true);
  };
  var ao = function (e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce(
      (l, u) => ({ ...l, [u.name]: u }),
      {},
    );
    return (l) => {
      let u = it(e._errorFormat),
        c = rd(n, i),
        p = nd(l, o, c),
        d = r({ dataPath: c, callsite: u })(p),
        f = id(e, t);
      return new Proxy(d, {
        get(y, g) {
          if (!f.includes(g)) return y[g];
          let C = [a[g].type, r, g],
            _ = [c, p];
          return ao(e, ...C, ..._);
        },
        ...fn([...f, ...Object.getOwnPropertyNames(d)]),
      });
    };
  };
  var id = function (e, t) {
    return e._runtimeDataModel.models[t].fields
      .filter((r) => r.kind === "object")
      .map((r) => r.name);
  };
  var _e = function (e, t, r, n, i) {
    (this.type = e),
      (this.content = t),
      (this.alias = r),
      (this.length = (n || "").length | 0),
      (this.greedy = !!i);
  };
  var ad = function (e) {
    return Aa[e] || od;
  };
  var Ra = function (e) {
    return ld(e, T.languages.javascript);
  };
  var ld = function (e, t) {
    return T.tokenize(e, t)
      .map((n) => _e.stringify(n))
      .join("");
  };
  var Sa = function (e) {
    return (0, Ma.default)(e);
  };
  var pd = function (
    {
      callsite: e,
      message: t,
      originalMethod: r,
      isPanic: n,
      callArguments: i,
    },
    o,
  ) {
    let s = {
      functionName: `prisma.${r}()`,
      message: t,
      isPanic: n ?? false,
      callArguments: i,
    };
    if (!e || typeof window < "u" || false) return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber) return s;
    let l = Math.max(1, a.lineNumber - 3),
      u = Sn.read(a.fileName)?.slice(l, a.lineNumber),
      c = u?.lineAt(a.lineNumber);
    if (u && c) {
      let p = md(c),
        d = dd(c);
      if (!d) return s;
      (s.functionName = `${d.code})`),
        (s.location = a),
        n ||
          (u = u.mapLineAt(a.lineNumber, (y) =>
            y.slice(0, d.openingBraceIndex),
          )),
        (u = o.highlightSource(u));
      let f = String(u.lastLineNumber).length;
      if (
        ((s.contextLines = u
          .mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y)
          .mapLines((y) => o.dim(y))
          .prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192")))),
        i)
      ) {
        let y = p + f + 1;
        (y += 2), (s.callArguments = (0, Ia.default)(i, y).slice(y));
      }
    }
    return s;
  };
  var dd = function (e) {
    let t = Object.keys(we.ModelAction).join("|"),
      n = new RegExp(String.raw`\.(${t})\(`).exec(e);
    if (n) {
      let i = n.index + n[0].length,
        o = e.lastIndexOf(" ", n.index) + 1;
      return { code: e.slice(o, i), openingBraceIndex: i };
    }
    return null;
  };
  var md = function (e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
      if (e.charAt(r) !== " ") return t;
      t++;
    }
    return t;
  };
  var fd = function (
    {
      functionName: e,
      location: t,
      message: r,
      isPanic: n,
      contextLines: i,
      callArguments: o,
    },
    s,
  ) {
    let a = [""],
      l = t ? " in" : ":";
    if (
      (n
        ? (a.push(
            s.red(
              `Oops, an unknown error occurred! This is ${s.bold(
                "on us",
              )}, you did nothing wrong.`,
            ),
          ),
          a.push(
            s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
          ))
        : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
      t && a.push(s.underline(gd(t))),
      i)
    ) {
      a.push("");
      let u = [i.toString()];
      o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else a.push(""), o && a.push(o), a.push("");
    return (
      a.push(r),
      a.join(`
`)
    );
  };
  var gd = function (e) {
    let t = [e.fileName];
    return (
      e.lineNumber && t.push(String(e.lineNumber)),
      e.columnNumber && t.push(String(e.columnNumber)),
      t.join(":")
    );
  };
  var Ut = function (e) {
    let t = e.showColors ? ud : cd,
      r = pd(e, t);
    return fd(r, t);
  };
  var Fa = function (e, t, r, n) {
    return e === we.ModelAction.findFirstOrThrow ||
      e === we.ModelAction.findUniqueOrThrow
      ? yd(t, r, n)
      : n;
  };
  var yd = function (e, t, r) {
    return async (n) => {
      if ("rejectOnNotFound" in n.args) {
        let o = Ut({
          originalMethod: n.clientMethod,
          callsite: n.callsite,
          message: "'rejectOnNotFound' option is not supported",
        });
        throw new se(o, { clientVersion: t });
      }
      return await r(n).catch((o) => {
        throw o instanceof W && o.code === "P2025"
          ? new Ve(`No ${e} found`, t)
          : o;
      });
    };
  };
  var Le = function (e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  };
  var lo = function (e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {},
      n = [
        bd(e, t),
        Ed(e, t),
        gr(r),
        ue("name", () => t),
        ue("$name", () => t),
        ue("$parent", () => e._appliedParent),
      ];
    return Fe({}, n);
  };
  var bd = function (e, t) {
    let r = Le(t),
      n = Object.keys(we.ModelAction).concat("count");
    return {
      getKeys() {
        return n;
      },
      getPropertyValue(i) {
        let o = i,
          s = (l) => e._request(l);
        s = Fa(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = it(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = {
              args: u,
              dataPath: [],
              action: o,
              model: t,
              clientMethod: `${r}.${i}`,
              jsModelName: r,
              transaction: p,
              callsite: c,
            };
            return s({ ...d, ...l });
          });
        };
        return hd.includes(o) ? ao(e, t, a) : wd(i) ? va(e, i, a) : a({});
      },
    };
  };
  var wd = function (e) {
    return xd.includes(e);
  };
  var Ed = function (e, t) {
    return gt(
      ue("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Ta(t, r);
      }),
    );
  };
  var Da = function (e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  };
  var wr = function (e) {
    let t = [Pd(e), ue(uo, () => e), ue("$parent", () => e._appliedParent)],
      r = e._extensions.getAllClientExtensions();
    return r && t.push(gr(r)), Fe(e, t);
  };
  var Pd = function (e) {
    let t = Object.keys(e._runtimeDataModel.models),
      r = t.map(Le),
      n = [...new Set(t.concat(r))];
    return gt({
      getKeys() {
        return n;
      },
      getPropertyValue(i) {
        let o = Da(i);
        if (e._runtimeDataModel.models[o] !== undefined) return lo(e, o);
        if (e._runtimeDataModel.models[i] !== undefined) return lo(e, i);
      },
      getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      },
    });
  };
  var kn = function (e) {
    return e[uo] ? e[uo] : e;
  };
  var Oa = function (e) {
    if (typeof e == "function") return e(this);
    let t = kn(this),
      r = Object.create(t, {
        _extensions: { value: this._extensions.append(e) },
        _appliedParent: { value: this, configurable: true },
        $use: { value: undefined },
        $on: { value: undefined },
      });
    return wr(r);
  };
  var Na = function ({ result: e, modelName: t, select: r, extensions: n }) {
    let i = n.getAllComputedFields(t);
    if (!i) return e;
    let o = [],
      s = [];
    for (let a of Object.values(i)) {
      if (r) {
        if (!r[a.name]) continue;
        let l = a.needs.filter((u) => !r[u]);
        l.length > 0 && s.push(yr(l));
      }
      vd(e, a.needs) && o.push(Td(a, Fe(e, o)));
    }
    return o.length > 0 || s.length > 0 ? Fe(e, [...o, ...s]) : e;
  };
  var vd = function (e, t) {
    return t.every((r) => Vi(e, r));
  };
  var Td = function (e, t) {
    return gt(ue(e.name, () => e.compute(t)));
  };
  var In = function ({
    visitor: e,
    result: t,
    args: r,
    runtimeDataModel: n,
    modelName: i,
  }) {
    if (Array.isArray(t)) {
      for (let s = 0; s < t.length; s++)
        t[s] = In({
          result: t[s],
          args: r,
          modelName: i,
          runtimeDataModel: n,
          visitor: e,
        });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return (
      r.include &&
        La({
          includeOrSelect: r.include,
          result: o,
          parentModelName: i,
          runtimeDataModel: n,
          visitor: e,
        }),
      r.select &&
        La({
          includeOrSelect: r.select,
          result: o,
          parentModelName: i,
          runtimeDataModel: n,
          visitor: e,
        }),
      o
    );
  };
  var La = function ({
    includeOrSelect: e,
    result: t,
    parentModelName: r,
    runtimeDataModel: n,
    visitor: i,
  }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null) continue;
      let l = n.models[r].fields.find((c) => c.name === o);
      if (!l || l.kind !== "object" || !l.relationName) continue;
      let u = typeof s == "object" ? s : {};
      t[o] = In({
        visitor: i,
        result: t[o],
        args: u,
        modelName: l.type,
        runtimeDataModel: n,
      });
    }
  };
  var $a = function ({
    result: e,
    modelName: t,
    args: r,
    extensions: n,
    runtimeDataModel: i,
  }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
      ? e
      : In({
          result: e,
          args: r ?? {},
          modelName: t,
          runtimeDataModel: i,
          visitor: (s, a, l) =>
            Na({
              result: s,
              modelName: Le(a),
              select: l.select,
              extensions: n,
            }),
        });
  };
  var qa = function (e) {
    if (e instanceof me) return Cd(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1; n < e.length; n++) r[n] = Er(e[n]);
      return r;
    }
    let t = {};
    for (let r in e) t[r] = Er(e[r]);
    return t;
  };
  var Cd = function (e) {
    return new me(e.strings, e.values);
  };
  var Er = function (e) {
    if (typeof e != "object" || e == null || e instanceof ke || qt(e)) return e;
    if ($t(e)) return new Oe(e.toFixed());
    if (Ot(e)) return new Date(+e);
    if (ArrayBuffer.isView(e)) return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length,
        r;
      for (r = Array(t); t--; ) r[t] = Er(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__"
          ? Object.defineProperty(t, r, {
              value: Er(e[r]),
              configurable: true,
              enumerable: true,
              writable: true,
            })
          : (t[r] = Er(e[r]));
      return t;
    }
    ft(e, "Unknown value");
  };
  var Va = function (e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return (
        "transaction" in t &&
          i !== undefined &&
          (t.transaction?.kind === "batch" && t.transaction.lock.then(),
          (t.transaction = i)),
        n === r.length
          ? e._executeRequest(t)
          : r[n]({
              model: t.model,
              operation: t.model ? t.action : t.clientMethod,
              args: qa(t.args ?? {}),
              __internalParams: t,
              query: (s, a = t) => {
                let l = a.customDataProxyFetch;
                return (
                  (a.customDataProxyFetch = Qa(o, l)),
                  (a.args = s),
                  Va(e, a, r, n + 1)
                );
              },
            })
      );
    });
  };
  var Ba = function (e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t,
      o = r ? n : i;
    if (e._extensions.isEmpty()) return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return Va(e, t, s);
  };
  var Ua = function (e) {
    return (t) => {
      let r = { requests: t },
        n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? Ka(r, n, 0, e) : e(r);
    };
  };
  var Ka = function (e, t, r, n) {
    if (r === t.length) return n(e);
    let i = e.customDataProxyFetch,
      o = e.requests[0].transaction;
    return t[r]({
      args: {
        queries: e.requests.map((s) => ({
          model: s.modelName,
          operation: s.action,
          args: s.args,
        })),
        transaction: o
          ? {
              isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined,
            }
          : undefined,
      },
      __internalParams: e,
      query(s, a = e) {
        let l = a.customDataProxyFetch;
        return (a.customDataProxyFetch = Qa(i, l)), Ka(a, t, r + 1, n);
      },
    });
  };
  var Qa = function (e = ja, t = ja) {
    return (r) => e(t(r));
  };
  var Ja = function (e, t, r) {
    let n = Le(r);
    return !t.result || !(t.result.$allModels || t.result[n])
      ? e
      : _d({
          ...e,
          ...Ga(t.name, e, t.result.$allModels),
          ...Ga(t.name, e, t.result[n]),
        });
  };
  var _d = function (e) {
    let t = new Ie(),
      r = (n, i) =>
        t.getOrCreate(n, () =>
          i.has(n)
            ? [n]
            : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
        );
    return It(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
  };
  var Ga = function (e, t, r) {
    return r
      ? It(r, ({ needs: n, compute: i }, o) => ({
          name: o,
          needs: n ? Object.keys(n).filter((s) => n[s]) : [],
          compute: Ad(t, o, i),
        }))
      : {};
  };
  var Ad = function (e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  };
  var Ha = function (e, t) {
    if (!t) return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name]) for (let i of n.needs) r[i] = true;
    return r;
  };
  var Ya = function ({ postinstall: e, ciName: t, clientVersion: r }) {
    if (
      (Wa("checkPlatformCaching:postinstall", e),
      Wa("checkPlatformCaching:ciName", t),
      e === true && t && t in za)
    ) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${za[t]}-build`;
      throw (console.error(n), new k(n, r));
    }
  };
  var Za = function (e, t) {
    return e
      ? e.datasources
        ? e.datasources
        : e.datasourceUrl
          ? { [t[0]]: { url: e.datasourceUrl } }
          : {}
      : {};
  };
  var Pr = function ({ error: e, user_facing_error: t }, r) {
    return t.error_code
      ? new W(t.message, {
          code: t.error_code,
          clientVersion: r,
          meta: t.meta,
          batchRequestIdx: t.batch_request_idx,
        })
      : new z(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  };
  var On = function (e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Rd(e)}`;
  };
  var Rd = function (e) {
    let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e,
      i = { fromEnvVar: null, value: n },
      o = [...r, i];
    return $i({ ...t, binaryTargets: o });
  };
  var ot = function (e) {
    let { runtimeBinaryTarget: t } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
  };
  var st = function (e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
  };
  var Xa = function (e) {
    let { runtimeBinaryTarget: t } = e;
    return `${ot(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${On(e)}

${st(e)}`;
  };
  var Nn = function (e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  };
  var Ln = function (e) {
    let { errorStack: t } = e;
    return t?.match(/\/\.next|\/next@|\/next\//)
      ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.`
      : "";
  };
  var el = function (e) {
    let { queryEngineName: t } = e;
    return `${ot(e)}${Ln(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${
      e.expectedLocation
    }".

${Nn("engine-not-found-bundler-investigation")}

${st(e)}`;
  };
  var tl = function (e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e,
      n = r.find((i) => i.native);
    return `${ot(e)}

This happened because Prisma Client was generated for "${
      n?.value ?? "unknown"
    }", but the actual deployment required "${t}".
${On(e)}

${st(e)}`;
  };
  var rl = function (e) {
    let { queryEngineName: t } = e;
    return `${ot(e)}${Ln(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${
      e.expectedLocation
    }".

${Nn("engine-not-found-tooling-investigation")}

${st(e)}`;
  };
  async function il(e, t) {
    let r =
      {
        binary: process.env.PRISMA_QUERY_ENGINE_BINARY,
        library: process.env.PRISMA_QUERY_ENGINE_LIBRARY,
      }[e] ?? t.prismaPath;
    if (r !== undefined) return r;
    let { enginePath: n, searchedLocations: i } = await kd(e, t);
    if (
      (Md("enginePath", n),
      n !== undefined && e === "binary" && Fi(n),
      n !== undefined)
    )
      return (t.prismaPath = n);
    let o = await St(),
      s = t.generator?.binaryTargets ?? [],
      a = s.some((d) => d.native),
      l = !s.some((d) => d.value === o),
      u = __filename.match(Sd()) === null,
      c = {
        searchedLocations: i,
        generatorBinaryTargets: s,
        generator: t.generator,
        runtimeBinaryTarget: o,
        queryEngineName: ol(e, o),
        expectedLocation: vr.default.relative(process.cwd(), t.dirname),
        errorStack: new Error().stack,
      },
      p;
    throw (
      (a && l ? (p = tl(c)) : l ? (p = Xa(c)) : u ? (p = el(c)) : (p = rl(c)),
      new k(p, t.clientVersion))
    );
  }
  async function kd(engineType, config) {
    let binaryTarget = await St(),
      searchedLocations = [],
      dirname = (0, eval)("__dirname"),
      searchLocations = [
        config.dirname,
        vr.default.resolve(dirname, ".."),
        config.generator?.output?.value ?? dirname,
        vr.default.resolve(dirname, "../../../.prisma/client"),
        "/tmp/prisma-engines",
        config.cwd,
      ];
    __filename.includes("resolveEnginePath") && searchLocations.push(Ls());
    for (let e of searchLocations) {
      let t = ol(engineType, binaryTarget),
        r = vr.default.join(e, t);
      if ((searchedLocations.push(e), nl.default.existsSync(r)))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  var ol = function (e, t) {
    return e === "library"
      ? xi(t, "fs")
      : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
  };
  var $n = function (e, t) {
    return {
      batch: e,
      transaction:
        t?.kind === "batch"
          ? { isolationLevel: t.options.isolationLevel }
          : undefined,
    };
  };
  var sl = function (e) {
    return e
      ? e
          .replace(/".*"/g, '"X"')
          .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
      : "";
  };
  var al = function (e) {
    return e
      .split(
        `
`,
      )
      .map((t) =>
        t
          .replace(
            /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
            "",
          )
          .replace(/\+\d+\s*ms$/, ""),
      ).join(`
`);
  };
  var ul = function ({
    title: e,
    user: t = "prisma",
    repo: r = "prisma",
    template: n = "bug_report.md",
    body: i,
  }) {
    return (0, ll.default)({
      user: t,
      repo: r,
      template: n,
      title: e,
      body: i,
    });
  };
  var cl = function ({
    version: e,
    platform: t,
    title: r,
    description: n,
    engineVersion: i,
    database: o,
    query: s,
  }) {
    let a = ts(6000 - (s?.length ?? 0)),
      l = al((0, co.default)(a)),
      u = n
        ? `# Description
\`\`\`
${n}
\`\`\``
        : "",
      c = (0,
      co.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? sl(s) : ""}
\`\`\`
`),
      p = ul({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${le(p)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  };
  var qn = function ({
    inlineDatasources: e,
    overrideDatasources: t,
    env: r,
    clientVersion: n,
  }) {
    let i,
      o = Object.keys(e)[0],
      s = e[o]?.url,
      a = t[o]?.url;
    if (
      (o === undefined
        ? (i = undefined)
        : a
          ? (i = a)
          : s?.value
            ? (i = s.value)
            : s?.fromEnvVar && (i = r[s.fromEnvVar]),
      s?.fromEnvVar !== undefined && i === undefined)
    )
      throw new k(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new k(
        "error: Missing URL environment variable, value, or override.",
        n,
      );
    return i;
  };
  var S = function (e, t) {
    return { ...e, isRetryable: t };
  };
  async function Dd(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if (
          "EngineNotStarted" in r ||
          "InteractiveTransactionMisrouted" in r ||
          "InvalidRequestError" in r
        ) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" &&
            !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
            ? { type: "UnknownJsonError", body: r }
            : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === ""
        ? { type: "EmptyError" }
        : { type: "UnknownTextError", body: t };
    }
  }
  async function Dr(e, t) {
    if (e.ok) return;
    let r = { clientVersion: t, response: e },
      n = await Dd(e);
    if (n.type === "QueryEngineError")
      throw new W(n.body.message, {
        code: n.body.error_code,
        clientVersion: t,
      });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new Gt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new bt(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new Ar(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } =
            n.body.EngineNotStarted.reason.EngineStartupError;
          throw new _r(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } =
            n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new k(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new Cr(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = {
          IDParseError: "Could not parse interactive transaction ID",
          NoQueryEngineFoundError:
            "Could not find Query Engine for the specified host and transaction ID",
          TransactionStartError: "Could not start interactive transaction",
        };
        throw new Mr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new Sr(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403) throw new Ir(r, Jt(yo, n));
    if (e.status === 404) return new kr(r, Jt(fo, n));
    if (e.status === 429) throw new Fr(r, Jt(ho, n));
    if (e.status === 504) throw new Rr(r, Jt(mo, n));
    if (e.status >= 500) throw new Gt(r, Jt(go, n));
    if (e.status >= 400) throw new Tr(r, Jt(po, n));
  }
  var Jt = function (e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  };
  var pl = function (e) {
    let t = Math.pow(2, e) * 50,
      r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
      n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  };
  var dl = function (e) {
    if (
      !!e.generator?.previewFeatures.some((r) =>
        r.toLowerCase().includes("metrics"),
      )
    )
      throw new k(
        "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
        e.clientVersion,
      );
  };
  async function wt(e, t, r = (n) => n) {
    let n = t.clientVersion;
    try {
      return typeof fetch == "function"
        ? await r(fetch)(e, t)
        : await r(xo)(e, t);
    } catch (i) {
      let o = i.message ?? "Unknown error";
      throw new Or(o, { clientVersion: n });
    }
  }
  var Nd = function (e) {
    return { ...e.headers, "Content-Type": "application/json" };
  };
  var Ld = function (e) {
    return { method: e.method, headers: Nd(e) };
  };
  var $d = function (e, t) {
    return {
      text: () => Promise.resolve(Buffer.concat(e).toString()),
      json: () =>
        Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())),
      ok: t.statusCode >= 200 && t.statusCode <= 299,
      status: t.statusCode,
      url: t.url,
      headers: new bo(t.headers),
    };
  };
  async function xo(e, t = {}) {
    let r = qd("https"),
      n = Ld(t),
      i = [],
      { origin: o } = new URL(e);
    return new Promise((s, a) => {
      let l = r.request(e, n, (u) => {
        let {
          statusCode: c,
          headers: { location: p },
        } = u;
        c >= 301 &&
          c <= 399 &&
          p &&
          (p.startsWith("http") === false ? s(xo(`${o}${p}`, t)) : s(xo(p, t))),
          u.on("data", (d) => i.push(d)),
          u.on("end", () => s($d(i, u))),
          u.on("error", a);
      });
      l.on("error", a), l.end(t.body ?? "");
    });
  }
  async function Vd(e, t) {
    let r = ml["@prisma/engines-version"],
      n = t.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && jd.test(i)) return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [],
        [a, l, u] = s.split("."),
        c = Bd(`<=${a}.${l}.${u}`),
        p = await wt(c, { clientVersion: n });
      if (!p.ok)
        throw new Error(
          `Failed to fetch stable Prisma version, unpkg.com status ${
            p.status
          } ${p.statusText}, response body: ${
            (await p.text()) || "<empty body>"
          }`,
        );
      let d = await p.text();
      fl("length of body fetched from unpkg.com", d.length);
      let f;
      try {
        f = JSON.parse(d);
      } catch (y) {
        throw (
          (console.error("JSON.parse error: body fetched from unpkg.com: ", d),
          y)
        );
      }
      return f.version;
    }
    throw new xt(
      "Only `major.minor.patch` versions are supported by Accelerate.",
      { clientVersion: n },
    );
  }
  async function gl(e, t) {
    let r = await Vd(e, t);
    return fl("version", r), r;
  }
  var Bd = function (e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  };
  var hl = function (e) {
    if (e?.kind === "itx") return e.options.id;
  };
  var Ud = function () {
    let e = globalThis;
    return e[Po] === undefined && (e[Po] = {}), e[Po];
  };
  var Kd = function (e) {
    let t = Ud();
    if (t[e] !== undefined) return t[e];
    let r = xl.default.toNamespacedPath(e),
      n = { exports: {} },
      i = 0;
    return (
      process.platform !== "win32" &&
        (i =
          vo.default.constants.dlopen.RTLD_LAZY |
          vo.default.constants.dlopen.RTLD_DEEPBIND),
      process.dlopen(n, r, i),
      (t[e] = n.exports),
      n.exports
    );
  };
  var To = function (e) {
    h = e;
  };
  var Un = function () {
    return (
      (Vn === null || Vn.byteLength === 0) &&
        (Vn = new Uint8Array(h.memory.buffer)),
      Vn
    );
  };
  var Ht = function (e, t) {
    return (e = e >>> 0), wl.decode(Un().subarray(e, e + t));
  };
  var J = function (e) {
    Lr === Ue.length && Ue.push(Ue.length + 1);
    let t = Lr;
    return (Lr = Ue[t]), (Ue[t] = e), t;
  };
  var A = function (e) {
    return Ue[e];
  };
  var Gd = function (e) {
    e < 132 || ((Ue[e] = Lr), (Lr = e));
  };
  var ce = function (e) {
    let t = A(e);
    return Gd(e), t;
  };
  var re = function (e, t, r) {
    if (r === undefined) {
      let a = Kn.encode(e),
        l = t(a.length, 1) >>> 0;
      return (
        Un()
          .subarray(l, l + a.length)
          .set(a),
        (G = a.length),
        l
      );
    }
    let n = e.length,
      i = t(n, 1) >>> 0,
      o = Un(),
      s = 0;
    for (; s < n; s++) {
      let a = e.charCodeAt(s);
      if (a > 127) break;
      o[i + s] = a;
    }
    if (s !== n) {
      s !== 0 && (e = e.slice(s)),
        (i = r(i, n, (n = s + e.length * 3), 1) >>> 0);
      let a = Un().subarray(i + s, i + n),
        l = Hd(e, a);
      s += l.written;
    }
    return (G = s), i;
  };
  var Qn = function (e) {
    return e == null;
  };
  var xe = function () {
    return (
      (Bn === null || Bn.byteLength === 0) &&
        (Bn = new Int32Array(h.memory.buffer)),
      Bn
    );
  };
  var Wd = function (e, t, r, n) {
    let i = { a: e, b: t, cnt: 1, dtor: r },
      o = (...s) => {
        i.cnt++;
        let a = i.a;
        i.a = 0;
        try {
          return n(a, i.b, ...s);
        } finally {
          --i.cnt === 0 ? h.__wbindgen_export_2.get(i.dtor)(a, i.b) : (i.a = a);
        }
      };
    return (o.original = i), o;
  };
  var zd = function (e, t, r) {
    h.wasm_bindgen__convert__closures__invoke1_mut__hc8730847d9f9e207(
      e,
      t,
      J(r),
    );
  };
  var Yd = function () {
    let e = h.getBuildTimeInfo();
    return ce(e);
  };
  var Zd = function (e) {
    let t, r;
    try {
      let u = h.__wbindgen_add_to_stack_pointer(-16),
        c = re(e, h.__wbindgen_malloc, h.__wbindgen_realloc),
        p = G;
      h.dmmf(u, c, p);
      var n = xe()[u / 4 + 0],
        i = xe()[u / 4 + 1],
        o = xe()[u / 4 + 2],
        s = xe()[u / 4 + 3],
        a = n,
        l = i;
      if (s) throw ((a = 0), (l = 0), ce(o));
      return (t = a), (r = l), Ht(a, l);
    } finally {
      h.__wbindgen_add_to_stack_pointer(16), h.__wbindgen_free(t, r, 1);
    }
  };
  var Xd = function (e) {
    try {
      let o = h.__wbindgen_add_to_stack_pointer(-16);
      var t = Qn(e) ? 0 : re(e, h.__wbindgen_malloc, h.__wbindgen_realloc),
        r = G;
      h.debug_panic(o, t, r);
      var n = xe()[o / 4 + 0],
        i = xe()[o / 4 + 1];
      if (i) throw ce(n);
    } finally {
      h.__wbindgen_add_to_stack_pointer(16);
    }
  };
  var em = function () {
    h.init();
  };
  var Gn = function (e, t) {
    try {
      return e.apply(this, t);
    } catch (r) {
      h.__wbindgen_exn_store(J(r));
    }
  };
  var tm = function (e, t, r, n) {
    h.wasm_bindgen__convert__closures__invoke2_mut__h0a290c7e33a927ff(
      e,
      t,
      J(r),
      J(n),
    );
  };
  var rm = function (e, t) {
    let r = Ht(e, t);
    return J(r);
  };
  var nm = function () {
    return Gn(function (e, t, r) {
      let n = A(e).call(A(t), A(r));
      return J(n);
    }, arguments);
  };
  var im = function (e) {
    ce(e);
  };
  var om = function (e, t) {
    let r = new Error(Ht(e, t));
    return J(r);
  };
  var sm = function (e) {
    let t = A(e);
    return J(t);
  };
  var am = function (e) {
    return A(e) === undefined;
  };
  var lm = function () {
    return Gn(function (e) {
      let t = JSON.stringify(A(e));
      return J(t);
    }, arguments);
  };
  var um = function () {
    return Gn(function (e, t) {
      let r = Reflect.get(A(e), A(t));
      return J(r);
    }, arguments);
  };
  var cm = function (e) {
    return typeof A(e) == "function";
  };
  var pm = function (e) {
    return typeof A(e) == "string";
  };
  var dm = function (e, t) {
    let r = A(t),
      n = typeof r == "string" ? r : undefined;
    var i = Qn(n) ? 0 : re(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
      o = G;
    (xe()[e / 4 + 1] = o), (xe()[e / 4 + 0] = i);
  };
  var mm = function (e, t) {
    try {
      var r = { a: e, b: t },
        n = (o, s) => {
          let a = r.a;
          r.a = 0;
          try {
            return tm(a, r.b, o, s);
          } finally {
            r.a = a;
          }
        };
      let i = new Promise(n);
      return J(i);
    } finally {
      r.a = r.b = 0;
    }
  };
  var fm = function () {
    return Gn(function (e, t) {
      let r = JSON.parse(Ht(e, t));
      return J(r);
    }, arguments);
  };
  var gm = function (e) {
    console.error(A(e));
  };
  var ym = function () {
    let e = new Error();
    return J(e);
  };
  var hm = function (e, t) {
    let r = A(t).stack,
      n = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
      i = G;
    (xe()[e / 4 + 1] = i), (xe()[e / 4 + 0] = n);
  };
  var xm = function (e, t) {
    let r, n;
    try {
      (r = e), (n = t), console.error(Ht(e, t));
    } finally {
      h.__wbindgen_free(r, n, 1);
    }
  };
  var bm = function (e, t) {
    throw new Error(Ht(e, t));
  };
  var wm = function (e) {
    let t = ce(e).original;
    return t.cnt-- == 1 ? ((t.a = 0), true) : false;
  };
  var Em = function (e, t) {
    let r = A(e).then(A(t));
    return J(r);
  };
  var Pm = function (e) {
    let t = Promise.resolve(A(e));
    return J(t);
  };
  var vm = function (e, t, r, n) {
    console.error(A(e), A(t), A(r), A(n));
  };
  var Tm = function (e, t, r, n) {
    console.warn(A(e), A(t), A(r), A(n));
  };
  var Cm = function (e, t, r, n) {
    console.info(A(e), A(t), A(r), A(n));
  };
  var _m = function (e, t, r, n) {
    console.log(A(e), A(t), A(r), A(n));
  };
  var Am = function (e, t, r, n) {
    console.debug(A(e), A(t), A(r), A(n));
  };
  var Rm = function (e, t, r) {
    let n = Wd(e, t, 138, zd);
    return J(n);
  };
  var Sm = function (e) {
    return e.item_type === "query" && "query" in e;
  };
  var km = function (e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  };
  var Im = function (e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  };
  var Tl = function (e, t) {
    let r;
    try {
      r = qn({
        inlineDatasources: t.inlineDatasources,
        overrideDatasources: t.overrideDatasources,
        env: { ...t.env, ...process.env },
        clientVersion: t.clientVersion,
      });
    } catch {}
    e.noEngine !== true &&
      r?.startsWith("prisma://") &&
      ar(
        "recommend--no-engine",
        "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
      );
    let n = mt(t.generator);
    if (n === "wasm" && t.adapter !== undefined) return new Wt(t);
    if (r?.startsWith("prisma://") || e.noEngine) return new Nr(t);
    if (n === "library") return new Wt(t);
    throw (
      ("binary",
      new se("Invalid client engine type, please use `library` or `binary`", {
        clientVersion: t.clientVersion,
      }))
    );
  };
  var Jn = function ({ generator: e }) {
    return e?.previewFeatures ?? [];
  };
  var Rl = function (e, t) {
    let r = Ml(e),
      n = Fm(r),
      i = Om(n);
    i ? Hn(i, t) : t.addErrorMessage(() => "Unknown error");
  };
  var Ml = function (e) {
    return e.errors.flatMap((t) => (t.kind === "Union" ? Ml(t) : [t]));
  };
  var Fm = function (e) {
    let t = new Map(),
      r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
        o = t.get(i);
      o
        ? t.set(i, {
            ...n,
            argument: {
              ...n.argument,
              typeNames: Dm(o.argument.typeNames, n.argument.typeNames),
            },
          })
        : t.set(i, n);
    }
    return r.push(...t.values()), r;
  };
  var Dm = function (e, t) {
    return [...new Set(e.concat(t))];
  };
  var Om = function (e) {
    return Ui(e, (t, r) => {
      let n = _l(t),
        i = _l(r);
      return n !== i ? n - i : Al(t) - Al(r);
    });
  };
  var _l = function (e) {
    let t = 0;
    return (
      Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
      Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
      t
    );
  };
  var Al = function (e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  };
  var Hn = function (e, t) {
    switch (e.kind) {
      case "IncludeAndSelect":
        Nm(e, t);
        break;
      case "IncludeOnScalar":
        Lm(e, t);
        break;
      case "EmptySelection":
        $m(e, t);
        break;
      case "UnknownSelectionField":
        qm(e, t);
        break;
      case "UnknownArgument":
        jm(e, t);
        break;
      case "UnknownInputField":
        Vm(e, t);
        break;
      case "RequiredArgumentMissing":
        Bm(e, t);
        break;
      case "InvalidArgumentType":
        Um(e, t);
        break;
      case "InvalidArgumentValue":
        Km(e, t);
        break;
      case "ValueTooLarge":
        Qm(e, t);
        break;
      case "SomeFieldsMissing":
        Gm(e, t);
        break;
      case "TooManyFieldsGiven":
        Jm(e, t);
        break;
      case "Union":
        Rl(e, t);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  };
  var Nm = function (e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    r &&
      r instanceof Y &&
      (r.getField("include")?.markAsError(),
      r.getField("select")?.markAsError()),
      t.addErrorMessage(
        (n) =>
          `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green(
            "`select`",
          )}, but ${n.red("not both")} at the same time.`,
      );
  };
  var Lm = function (e, t) {
    let [r, n] = zn(e.selectionPath),
      i = e.outputType,
      o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new Ke(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold(
        "include",
      )} statement`;
      return (
        i ? (a += ` on model ${s.bold(i.name)}. ${qr(s)}`) : (a += "."),
        (a += `
Note that ${s.bold("include")} statements only accept relation fields.`),
        a
      );
    });
  };
  var $m = function (e, t) {
    let r = e.outputType,
      n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
      i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), Fl(n, r)),
      t.addErrorMessage((o) =>
        i
          ? `The ${o.red("`select`")} statement for type ${o.bold(
              r.name,
            )} must not be empty. ${qr(o)}`
          : `The ${o.red("`select`")} statement for type ${o.bold(
              r.name,
            )} needs ${o.bold("at least one truthy value")}.`,
      );
  };
  var qm = function (e, t) {
    let [r, n] = zn(e.selectionPath),
      i = t.arguments.getDeepSelectionParent(r);
    i && (i.value.getField(n)?.markAsError(), Fl(i.value, e.outputType)),
      t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return (
          i && s.push(`for ${o.bold(i.kind)} statement`),
          s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`),
          s.push(qr(o)),
          s.join(" ")
        );
      });
  };
  var jm = function (e, t) {
    let r = e.argumentPath[0],
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof Y && (n.getField(r)?.markAsError(), Hm(n, e.arguments)),
      t.addErrorMessage((i) =>
        kl(
          i,
          r,
          e.arguments.map((o) => o.name),
        ),
      );
  };
  var Vm = function (e, t) {
    let [r, n] = zn(e.argumentPath),
      i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (i instanceof Y) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r);
      o instanceof Y && Dl(o, e.inputType);
    }
    t.addErrorMessage((o) =>
      kl(
        o,
        n,
        e.inputType.fields.map((s) => s.name),
      ),
    );
  };
  var kl = function (e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`],
      i = zm(t, r);
    return (
      i && n.push(`Did you mean \`${e.green(i)}\`?`),
      r.length > 0 && n.push(qr(e)),
      n.join(" ")
    );
  };
  var Bm = function (e, t) {
    let r;
    t.addErrorMessage((l) =>
      r?.value instanceof Z && r.value.text === "null"
        ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.`
        : `Argument \`${l.green(o)}\` is missing.`,
    );
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (!(n instanceof Y)) return;
    let [i, o] = zn(e.argumentPath),
      s = new Wn(),
      a = n.getDeepFieldValue(i);
    if (a instanceof Y)
      if (
        ((r = a.getField(o)),
        r && a.removeField(o),
        e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
      ) {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new Ke(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Il).join(" | ");
        a.addSuggestion(new Ke(o, l).makeRequired());
      }
  };
  var Il = function (e) {
    return e.kind === "list" ? `${Il(e.elementType)}[]` : e.name;
  };
  var Um = function (e, t) {
    let r = e.argument.name,
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof Y && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
      t.addErrorMessage((i) => {
        let o = Yn(
          "or",
          e.argument.typeNames.map((s) => i.green(s)),
        );
        return `Argument \`${i.bold(
          r,
        )}\`: Invalid value provided. Expected ${o}, provided ${i.red(
          e.inferredType,
        )}.`;
      });
  };
  var Km = function (e, t) {
    let r = e.argument.name,
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof Y && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
      t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (
          (e.underlyingError && o.push(`: ${e.underlyingError}`),
          o.push("."),
          e.argument.typeNames.length > 0)
        ) {
          let s = Yn(
            "or",
            e.argument.typeNames.map((a) => i.green(a)),
          );
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
  };
  var Qm = function (e, t) {
    let r = e.argument.name,
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
      i;
    if (n instanceof Y) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof Z && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return (
        i && s.push(o.red(i)),
        s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
        s.join(" ")
      );
    });
  };
  var Gm = function (e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1],
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (n instanceof Y) {
      let i = n.getDeepFieldValue(e.argumentPath);
      i instanceof Y && Dl(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [
        `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
      ];
      return (
        e.constraints.minFieldCount === 1
          ? e.constraints.requiredFields
            ? o.push(
                `${i.green("at least one of")} ${Yn(
                  "or",
                  e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
                )} arguments.`,
              )
            : o.push(`${i.green("at least one")} argument.`)
          : o.push(
              `${i.green(
                `at least ${e.constraints.minFieldCount}`,
              )} arguments.`,
            ),
        o.push(qr(i)),
        o.join(" ")
      );
    });
  };
  var Jm = function (e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1],
      n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
      i = [];
    if (n instanceof Y) {
      let o = n.getDeepFieldValue(e.argumentPath);
      o instanceof Y && (o.markAsError(), (i = Object.keys(o.getFields())));
    }
    t.addErrorMessage((o) => {
      let s = [
        `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
      ];
      return (
        e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
          ? s.push(`${o.green("exactly one")} argument,`)
          : e.constraints.maxFieldCount == 1
            ? s.push(`${o.green("at most one")} argument,`)
            : s.push(
                `${o.green(
                  `at most ${e.constraints.maxFieldCount}`,
                )} arguments,`,
              ),
        s.push(
          `but you provided ${Yn(
            "and",
            i.map((a) => o.red(a)),
          )}. Please choose`,
        ),
        e.constraints.maxFieldCount === 1
          ? s.push("one.")
          : s.push(`${e.constraints.maxFieldCount}.`),
        s.join(" ")
      );
    });
  };
  var Fl = function (e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new Ke(r.name, "true"));
  };
  var Hm = function (e, t) {
    for (let r of t)
      e.hasField(r.name) ||
        e.addSuggestion(new Ke(r.name, r.typeNames.join(" | ")));
  };
  var Dl = function (e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) ||
          e.addSuggestion(new Ke(r.name, r.typeNames.join(" | ")));
  };
  var zn = function (e) {
    let t = [...e],
      r = t.pop();
    if (!r) throw new Error("unexpected empty path");
    return [t, r];
  };
  var qr = function ({ green: e, enabled: t }) {
    return (
      "Available options are " +
      (t ? `listed in ${e("green")}` : "marked with ?") +
      "."
    );
  };
  var Yn = function (e, t) {
    if (t.length === 1) return t[0];
    let r = [...t],
      n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  };
  var zm = function (e, t) {
    let r = 1 / 0,
      n;
    for (let i of t) {
      let o = (0, Sl.default)(e, i);
      o > Wm || (o < r && ((r = o), (n = i)));
    }
    return n;
  };
  var Zn = function ({
    args: e,
    errors: t,
    errorFormat: r,
    callsite: n,
    originalMethod: i,
    clientVersion: o,
  }) {
    let s = An(e);
    for (let p of t) Hn(p, s);
    let a = r === "pretty" ? ma : Cn,
      l = s.renderAllMessages(a),
      u = new Dt(0, { colors: a }).write(s).toString(),
      c = Ut({
        message: l,
        callsite: n,
        originalMethod: i,
        showColors: r === "pretty",
        callArguments: u,
      });
    throw new se(c, { clientVersion: o });
  };
  var Ol = function ({
    modelName: e,
    action: t,
    args: r,
    runtimeDataModel: n,
    extensions: i,
    callsite: o,
    clientMethod: s,
    errorFormat: a,
    clientVersion: l,
  }) {
    let u = new Ao({
      runtimeDataModel: n,
      modelName: e,
      action: t,
      rootArgs: r,
      callsite: o,
      extensions: i,
      selectionPath: [],
      argumentPath: [],
      originalMethod: s,
      errorFormat: a,
      clientVersion: l,
    });
    return { modelName: e, action: Ym[t], query: Ro(r, u) };
  };
  var Ro = function ({ select: e, include: t, ...r } = {}, n) {
    return { arguments: Ll(r, n), selection: Zm(e, t, n) };
  };
  var Zm = function (e, t, r) {
    return (
      e &&
        t &&
        r.throwValidationError({
          kind: "IncludeAndSelect",
          selectionPath: r.getSelectionPath(),
        }),
      e ? tf(e, r) : Xm(r, t)
    );
  };
  var Xm = function (e, t) {
    let r = {};
    return (
      e.model &&
        !e.isRawAction() &&
        ((r.$composites = true), (r.$scalars = true)),
      t && ef(r, t, e),
      r
    );
  };
  var ef = function (e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      let o = r.findField(n);
      o &&
        o?.kind !== "object" &&
        r.throwValidationError({
          kind: "IncludeOnScalar",
          selectionPath: r.getSelectionPath().concat(n),
          outputType: r.getOutputTypeDescription(),
        }),
        i === true
          ? (e[n] = true)
          : typeof i == "object" && (e[n] = Ro(i, r.nestSelection(n)));
    }
  };
  var tf = function (e, t) {
    let r = {},
      n = t.getComputedFields(),
      i = Ha(e, n);
    for (let [o, s] of Object.entries(i)) {
      let a = t.findField(o);
      (n?.[o] && !a) ||
        (s === true
          ? (r[o] = true)
          : typeof s == "object" && (r[o] = Ro(s, t.nestSelection(o))));
    }
    return r;
  };
  var Nl = function (e, t) {
    if (e === null) return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
    if (Ot(e)) {
      if (gn(e)) return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: t.getSelectionPath(),
        argumentPath: t.getArgumentPath(),
        argument: { name: t.getArgumentName(), typeNames: ["Date"] },
        underlyingError: "Provided Date object is invalid",
      });
    }
    if (qt(e))
      return {
        $type: "FieldRef",
        value: { _ref: e.name, _container: e.modelName },
      };
    if (Array.isArray(e)) return rf(e, t);
    if (ArrayBuffer.isView(e))
      return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
    if (nf(e)) return e.values;
    if ($t(e)) return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof ke) {
      if (e !== dn.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (of(e)) return e.toJSON();
    if (typeof e == "object") return Ll(e, t);
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: [] },
      underlyingError: `We could not serialize ${Object.prototype.toString.call(
        e,
      )} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
    });
  };
  var Ll = function (e, t) {
    if (e.$type) return { $type: "Json", value: JSON.stringify(e) };
    let r = {};
    for (let n in e) {
      let i = e[n];
      i !== undefined && (r[n] = Nl(i, t.nestArgument(n)));
    }
    return r;
  };
  var rf = function (e, t) {
    let r = [];
    for (let n = 0; n < e.length; n++) {
      let i = t.nestArgument(String(n)),
        o = e[n];
      o === undefined &&
        t.throwValidationError({
          kind: "InvalidArgumentValue",
          selectionPath: i.getSelectionPath(),
          argumentPath: i.getArgumentPath(),
          argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
          underlyingError:
            "Can not use `undefined` value within array. Use `null` or filter out `undefined` values",
        }),
        r.push(Nl(o, i));
    }
    return r;
  };
  var nf = function (e) {
    return (
      typeof e == "object" && e !== null && e.__prismaRawParameters__ === true
    );
  };
  var of = function (e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  };
  var jr = function (e) {
    try {
      return jl(e, "fast");
    } catch {
      return jl(e, "slow");
    }
  };
  var jl = function (e, t) {
    return JSON.stringify(e.map((r) => sf(r, t)));
  };
  var sf = function (e, t) {
    return typeof e == "bigint"
      ? { prisma__type: "bigint", prisma__value: e.toString() }
      : Ot(e)
        ? { prisma__type: "date", prisma__value: e.toJSON() }
        : Oe.isDecimal(e)
          ? { prisma__type: "decimal", prisma__value: e.toJSON() }
          : Buffer.isBuffer(e)
            ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
            : af(e) || ArrayBuffer.isView(e)
              ? {
                  prisma__type: "bytes",
                  prisma__value: Buffer.from(e).toString("base64"),
                }
              : typeof e == "object" && t === "slow"
                ? Bl(e)
                : e;
  };
  var af = function (e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
      ? true
      : typeof e == "object" && e !== null
        ? e[Symbol.toStringTag] === "ArrayBuffer" ||
          e[Symbol.toStringTag] === "SharedArrayBuffer"
        : false;
  };
  var Bl = function (e) {
    if (typeof e != "object" || e === null) return e;
    if (typeof e.toJSON == "function") return e.toJSON();
    if (Array.isArray(e)) return e.map(Vl);
    let t = {};
    for (let r of Object.keys(e)) t[r] = Vl(e[r]);
    return t;
  };
  var Vl = function (e) {
    return typeof e == "bigint" ? e.toString() : Bl(e);
  };
  var Mo = function (e, t, r, n) {
    if (
      !(e !== "postgresql" && e !== "cockroachdb") &&
      r.length > 0 &&
      lf.exec(t)
    )
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  };
  var ko = function (e) {
    return function (r) {
      let n,
        i = (o = e) => {
          try {
            return o === undefined || o?.kind === "itx"
              ? n ?? (n = Gl(r(o)))
              : Gl(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
      return {
        then(o, s) {
          return i().then(o, s);
        },
        catch(o) {
          return i().catch(o);
        },
        finally(o) {
          return i().finally(o);
        },
        requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        },
        [Symbol.toStringTag]: "PrismaPromise",
      };
    };
  };
  var Gl = function (e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  };
  var Hl = function (e) {
    return e.includes("tracing") ? new Io() : Jl;
  };
  var Wl = function (e, t = () => {}) {
    let r,
      n = new Promise((i) => (r = i));
    return {
      then(i) {
        return --e === 0 && r(t()), i?.(n);
      },
    };
  };
  var zl = function (e) {
    return typeof e == "string"
      ? e
      : e.reduce((t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        }, undefined);
  };
  var ei = function (e) {
    return typeof e.batchRequestIdx == "number";
  };
  var ti = function (e) {
    return e === null
      ? e
      : Array.isArray(e)
        ? e.map(ti)
        : typeof e == "object"
          ? cf(e)
            ? pf(e)
            : It(e, ti)
          : e;
  };
  var cf = function (e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  };
  var pf = function ({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes":
        return Buffer.from(t, "base64");
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new Oe(t);
      case "Json":
        return JSON.parse(t);
      default:
        ft(t, "Unknown tagged value");
    }
  };
  var Yl = function (e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
    let t = [];
    return (
      e.modelName && t.push(e.modelName),
      e.query.arguments && t.push(Do(e.query.arguments)),
      t.push(Do(e.query.selection)),
      t.join("")
    );
  };
  var Do = function (e) {
    return `(${Object.keys(e)
      .sort()
      .map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Do(n)})` : r;
      })
      .join(" ")})`;
  };
  var Oo = function (e) {
    return df[e];
  };
  var ff = function (e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx") return { kind: "itx", options: Xl(e) };
      ft(e, "Unknown transaction kind");
    }
  };
  var Xl = function (e) {
    return { id: e.id, payload: e.payload };
  };
  var gf = function (e, t) {
    return ei(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  };
  var yf = function (e) {
    return e.code === "P2009" || e.code === "P2012";
  };
  var eu = function (e) {
    if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(eu) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  };
  var nu = function (e) {
    return e.map((t) => {
      let r = {};
      for (let n of Object.keys(t)) r[n] = iu(t[n]);
      return r;
    });
  };
  var iu = function ({ prisma__type: e, prisma__value: t }) {
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes":
        return Buffer.from(t, "base64");
      case "decimal":
        return new Oe(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "array":
        return t.map(iu);
      default:
        return t;
    }
  };
  var uu = function (e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!ou.includes(r)) {
        let i = zt(r, ou);
        throw new B(
          `Unknown property ${r} provided to PrismaClient constructor.${i}`,
        );
      }
      xf[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new B(
        'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
      );
  };
  var zt = function (e, t) {
    if (t.length === 0 || typeof e != "string") return "";
    let r = bf(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  };
  var bf = function (e, t) {
    if (t.length === 0) return null;
    let r = t.map((i) => ({ value: i, distance: (0, lu.default)(e, i) }));
    r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  };
  var cu = function (e) {
    return e.length === 0
      ? Promise.resolve([])
      : new Promise((t, r) => {
          let n = new Array(e.length),
            i = null,
            o = false,
            s = 0,
            a = () => {
              o || (s++, s === e.length && ((o = true), i ? r(i) : t(n)));
            },
            l = (u) => {
              o || ((o = true), r(u));
            };
          for (let u = 0; u < e.length; u++)
            e[u].then(
              (c) => {
                (n[u] = c), a();
              },
              (c) => {
                if (!ei(c)) {
                  l(c);
                  return;
                }
                c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
              },
            );
        });
  };
  var gu = function (e) {
    class t {
      constructor(n) {
        this._middlewares = new Xn();
        this._createPrismaPromise = ko();
        this.$extends = Oa;
        Ya(e), n && uu(n, e);
        let i = n?.adapter ? Hi(n.adapter) : undefined,
          o = new mu.EventEmitter().on("error", () => {});
        (this._extensions = Dn.empty()),
          (this._previewFeatures = Jn(e)),
          (this._clientVersion = e.clientVersion ?? ru),
          (this._activeProvider = e.activeProvider),
          (this._tracingHelper = Hl(this._previewFeatures));
        let s = {
            rootEnvPath:
              e.relativeEnvPaths.rootEnvPath &&
              Vr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
            schemaEnvPath:
              e.relativeEnvPaths.schemaEnvPath &&
              Vr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
          },
          a =
            (!i && nr(s, { conflictCheck: "none" })) || e.injectableEdgeEnv?.();
        try {
          let l = n ?? {},
            u = l.__internal ?? {},
            c = u.debug === true;
          c && L.enable("prisma:client");
          let p = Vr.default.resolve(e.dirname, e.relativePath);
          fu.default.existsSync(p) || (p = e.dirname),
            at("dirname", e.dirname),
            at("relativePath", e.relativePath),
            at("cwd", p);
          let d = u.engine || {};
          if (
            (l.errorFormat
              ? (this._errorFormat = l.errorFormat)
              : process.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
            (this._runtimeDataModel = e.runtimeDataModel),
            (this._engineConfig = {
              cwd: p,
              dirname: e.dirname,
              enableDebugLogs: c,
              allowTriggerPanic: d.allowTriggerPanic,
              datamodelPath: Vr.default.join(
                e.dirname,
                e.filename ?? "schema.prisma",
              ),
              prismaPath: d.binaryPath ?? undefined,
              engineEndpoint: d.endpoint,
              generator: e.generator,
              showColors: this._errorFormat === "pretty",
              logLevel: l.log && zl(l.log),
              logQueries:
                l.log &&
                !!(typeof l.log == "string"
                  ? l.log === "query"
                  : l.log.find((f) =>
                      typeof f == "string"
                        ? f === "query"
                        : f.level === "query",
                    )),
              env: a?.parsed ?? {},
              flags: [],
              getQueryEngineWasmModule: e.getQueryEngineWasmModule,
              clientVersion: e.clientVersion,
              engineVersion: e.engineVersion,
              previewFeatures: this._previewFeatures,
              activeProvider: e.activeProvider,
              inlineSchema: e.inlineSchema,
              overrideDatasources: Za(l, e.datasourceNames),
              inlineDatasources: e.inlineDatasources,
              inlineSchemaHash: e.inlineSchemaHash,
              tracingHelper: this._tracingHelper,
              logEmitter: o,
              isBundled: e.isBundled,
              adapter: i,
            }),
            at("clientVersion", e.clientVersion),
            (this._engine = Tl(e, this._engineConfig)),
            (this._requestHandler = new ni(this, o)),
            l.log)
          )
            for (let f of l.log) {
              let y =
                typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              y &&
                this.$on(y, (g) => {
                  sr.log(`${sr.tags[y] ?? ""}`, g.message || g.query);
                });
            }
          this._metrics = new Ft(this._engine);
        } catch (l) {
          throw ((l.clientVersion = this._clientVersion), l);
        }
        return (this._appliedParent = wr(this));
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit"
          ? this._engine.on("beforeExit", i)
          : this._engine.on(n, (o) => {
              let s = o.fields;
              return i(
                n === "query"
                  ? {
                      timestamp: o.timestamp,
                      query: s?.query ?? o.query,
                      params: s?.params ?? o.params,
                      duration: s?.duration_ms ?? o.duration,
                      target: o.target,
                    }
                  : {
                      timestamp: o.timestamp,
                      message: s?.message ?? o.message,
                      target: o.target,
                    },
              );
            });
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw ((n.clientVersion = this._clientVersion), n);
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw ((n.clientVersion = this._clientVersion), n);
        } finally {
          rs();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider,
          l = this._engineConfig.adapter?.flavour;
        return this._request({
          action: "executeRaw",
          args: o,
          transaction: n,
          clientMethod: i,
          argsMapper: So({
            clientMethod: i,
            activeProvider: a,
            activeProviderFlavour: l,
          }),
          callsite: it(this._errorFormat),
          dataPath: [],
          middlewareArgsMapper: s,
        });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = pu(n, i);
            return (
              Mo(
                this._activeProvider,
                s.text,
                s.values,
                Array.isArray(n)
                  ? "prisma.$executeRaw`<SQL>`"
                  : "prisma.$executeRaw(sql`<SQL>`)",
              ),
              this.$executeRawInternal(o, "$executeRaw", s, a)
            );
          }
          throw new se(
            "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
            { clientVersion: this._clientVersion },
          );
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise(
          (o) => (
            Mo(
              this._activeProvider,
              n,
              i,
              "prisma.$executeRawUnsafe(<SQL>, [...values])",
            ),
            this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
          ),
        );
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new se(
            `The ${e.activeProvider} provider does not support \$runCommandRaw. Use the mongodb provider.`,
            { clientVersion: this._clientVersion },
          );
        return this._createPrismaPromise((i) =>
          this._request({
            args: n,
            clientMethod: "$runCommandRaw",
            dataPath: [],
            action: "runCommandRaw",
            argsMapper: $l,
            callsite: it(this._errorFormat),
            transaction: i,
          }),
        );
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider,
          l = this._engineConfig.adapter?.flavour;
        return this._request({
          action: "queryRaw",
          args: o,
          transaction: n,
          clientMethod: i,
          argsMapper: So({
            clientMethod: i,
            activeProvider: a,
            activeProviderFlavour: l,
          }),
          callsite: it(this._errorFormat),
          dataPath: [],
          middlewareArgsMapper: s,
        }).then(nu);
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...pu(n, i));
          throw new se(
            "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
            { clientVersion: this._clientVersion },
          );
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) =>
          this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
        );
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = Pf.nextId(),
          s = Wl(n.length),
          a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error(
                "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
              );
            let c = i?.isolationLevel,
              p = {
                kind: "batch",
                id: o,
                index: u,
                isolationLevel: c,
                lock: s,
              };
            return l.requestTransaction?.(p) ?? l;
          });
        return cu(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() },
          s = await this._engine.transaction("start", o, i),
          a;
        try {
          let l = { kind: "itx", ...s };
          (a = await n(this._createItxClient(l))),
            await this._engine.transaction("commit", o, s);
        } catch (l) {
          throw (
            (await this._engine.transaction("rollback", o, s).catch(() => {}),
            l)
          );
        }
        return a;
      }
      _createItxClient(n) {
        return wr(
          Fe(kn(this), [
            ue("_appliedParent", () => this._appliedParent._createItxClient(n)),
            ue("_createPrismaPromise", () => ko(n)),
            ue(Ef, () => n.id),
            yr(Fo),
          ]),
        );
      }
      $transaction(n, i) {
        let o;
        typeof n == "function"
          ? (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
          : (o = () => this._transactionWithArray({ promises: n, options: i }));
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? wf,
          o = {
            args: i.requestArgsToMiddlewareArgs(n.args),
            dataPath: n.dataPath,
            runInTransaction: !!n.transaction,
            action: n.action,
            model: n.model,
          },
          s = {
            middleware: {
              name: "middleware",
              middleware: true,
              attributes: { method: "$use" },
              active: false,
            },
            operation: {
              name: "operation",
              attributes: {
                method: o.action,
                model: o.model,
                name: o.model ? `${o.model}.${o.action}` : o.action,
              },
            },
          },
          a = -1,
          l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (v) =>
                c(u, (C) => (v?.end(), l(C))),
              );
            let { runInTransaction: p, args: d, ...f } = u,
              y = { ...n, ...f };
            d && (y.args = i.middlewareArgsToRequestArgs(d)),
              n.transaction !== undefined &&
                p === false &&
                delete y.transaction;
            let g = await Ba(this, y);
            return y.model
              ? $a({
                  result: g,
                  modelName: y.model,
                  args: y.args,
                  extensions: this._extensions,
                  runtimeDataModel: this._runtimeDataModel,
                })
              : g;
          };
        return this._tracingHelper.runInChildSpan(s.operation, () =>
          new du.AsyncResource("prisma-client-request").runInAsyncScope(() =>
            l(o),
          ),
        );
      }
      async _executeRequest({
        args: n,
        clientMethod: i,
        dataPath: o,
        callsite: s,
        action: a,
        model: l,
        argsMapper: u,
        transaction: c,
        unpacker: p,
        otelParentCtx: d,
        customDataProxyFetch: f,
      }) {
        try {
          n = u ? u(n) : n;
          let y = { name: "serialize" },
            g = this._tracingHelper.runInChildSpan(y, () =>
              Ol({
                modelName: l,
                runtimeDataModel: this._runtimeDataModel,
                action: a,
                args: n,
                clientMethod: i,
                callsite: s,
                extensions: this._extensions,
                errorFormat: this._errorFormat,
                clientVersion: this._clientVersion,
              }),
            );
          return (
            L.enabled("prisma:client") &&
              (at("Prisma Client call:"),
              at(`prisma.${i}(${ha(n)})`),
              at("Generated request:"),
              at(
                JSON.stringify(g, null, 2) +
                  `
`,
              )),
            c?.kind === "batch" && (await c.lock),
            this._requestHandler.request({
              protocolQuery: g,
              modelName: l,
              action: a,
              clientMethod: i,
              dataPath: o,
              callsite: s,
              args: n,
              extensions: this._extensions,
              transaction: c,
              unpacker: p,
              otelParentCtx: d,
              otelChildCtx: this._tracingHelper.getActiveContext(),
              customDataProxyFetch: f,
            })
          );
        } catch (y) {
          throw ((y.clientVersion = this._clientVersion), y);
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new se(
            "`metrics` preview feature must be enabled in order to access metrics API",
            { clientVersion: this._clientVersion },
          );
        return this._metrics;
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
    }
    return t;
  };
  var pu = function (e, t) {
    return vf(e) ? [new me(e, t), Kl] : [e, Ql];
  };
  var vf = function (e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  };
  var yu = function (e) {
    return new Proxy(e, {
      get(t, r) {
        if (r in t) return t[r];
        if (!Tf.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      },
    });
  };
  var hu = function (e) {
    nr(e, { conflictCheck: "warn" });
  };
  var __dirname =
      "/home/joaco/repos/apis-backend/node_modules/@prisma/client/runtime",
    __filename =
      "/home/joaco/repos/apis-backend/node_modules/@prisma/client/runtime/library.js";
  var xu = Object.create;
  var Ur = Object.defineProperty;
  var bu = Object.getOwnPropertyDescriptor;
  var wu = Object.getOwnPropertyNames;
  var Eu = Object.getPrototypeOf;
  var Pu = Object.prototype.hasOwnProperty;
  var K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Pt = (e, t) => {
    for (var r in t) Ur(e, r, { get: t[r], enumerable: true });
  };
  var No = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of wu(t))
        !Pu.call(e, i) &&
          i !== r &&
          Ur(e, i, {
            get: () => t[i],
            enumerable: !(n = bu(t, i)) || n.enumerable,
          });
    return e;
  };
  var I = (e, t, r) => (
    (r = e != null ? xu(Eu(e)) : {}),
    No(
      t || !e || !e.__esModule
        ? Ur(r, "default", { value: e, enumerable: true })
        : r,
      e,
    )
  );
  var vu = (e) => No(Ur({}, "__esModule", { value: true }), e);
  var Go = K((Lf, Qo) => {
    var vt = 1000,
      Tt = vt * 60,
      Ct = Tt * 60,
      ut = Ct * 24,
      Tu = ut * 7,
      Cu = ut * 365.25;
    Qo.exports = function (e, t) {
      t = t || {};
      var r = typeof e;
      if (r === "string" && e.length > 0) return _u(e);
      if (r === "number" && isFinite(e)) return t.long ? Ru(e) : Au(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e),
      );
    };
    function _u(e) {
      if (((e = String(e)), !(e.length > 100))) {
        var t =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e,
          );
        if (t) {
          var r = parseFloat(t[1]),
            n = (t[2] || "ms").toLowerCase();
          switch (n) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return r * Cu;
            case "weeks":
            case "week":
            case "w":
              return r * Tu;
            case "days":
            case "day":
            case "d":
              return r * ut;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return r * Ct;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return r * Tt;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return r * vt;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return r;
            default:
              return;
          }
        }
      }
    }
    function Au(e) {
      var t = Math.abs(e);
      return t >= ut
        ? Math.round(e / ut) + "d"
        : t >= Ct
          ? Math.round(e / Ct) + "h"
          : t >= Tt
            ? Math.round(e / Tt) + "m"
            : t >= vt
              ? Math.round(e / vt) + "s"
              : e + "ms";
    }
    function Ru(e) {
      var t = Math.abs(e);
      return t >= ut
        ? Qr(e, t, ut, "day")
        : t >= Ct
          ? Qr(e, t, Ct, "hour")
          : t >= Tt
            ? Qr(e, t, Tt, "minute")
            : t >= vt
              ? Qr(e, t, vt, "second")
              : e + " ms";
    }
    function Qr(e, t, r, n) {
      var i = t >= r * 1.5;
      return Math.round(e / r) + " " + n + (i ? "s" : "");
    }
  });
  var ui = K(($f, Jo) => {
    function Mu(e) {
      (r.debug = r),
        (r.default = r),
        (r.coerce = l),
        (r.disable = o),
        (r.enable = i),
        (r.enabled = s),
        (r.humanize = Go()),
        (r.destroy = u),
        Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }),
        (r.names = []),
        (r.skips = []),
        (r.formatters = {});
      function t(c) {
        let p = 0;
        for (let d = 0; d < c.length; d++)
          (p = (p << 5) - p + c.charCodeAt(d)), (p |= 0);
        return r.colors[Math.abs(p) % r.colors.length];
      }
      r.selectColor = t;
      function r(c) {
        let p,
          d = null,
          f,
          y;
        function g(...v) {
          if (!g.enabled) return;
          let C = g,
            _ = Number(new Date()),
            b = _ - (p || _);
          (C.diff = b),
            (C.prev = p),
            (C.curr = _),
            (p = _),
            (v[0] = r.coerce(v[0])),
            typeof v[0] != "string" && v.unshift("%O");
          let M = 0;
          (v[0] = v[0].replace(/%([a-zA-Z%])/g, (X, lt) => {
            if (X === "%%") return "%";
            M++;
            let U = r.formatters[lt];
            if (typeof U == "function") {
              let ne = v[M];
              (X = U.call(C, ne)), v.splice(M, 1), M--;
            }
            return X;
          })),
            r.formatArgs.call(C, v),
            (C.log || r.log).apply(C, v);
        }
        return (
          (g.namespace = c),
          (g.useColors = r.useColors()),
          (g.color = r.selectColor(c)),
          (g.extend = n),
          (g.destroy = r.destroy),
          Object.defineProperty(g, "enabled", {
            enumerable: true,
            configurable: false,
            get: () =>
              d !== null
                ? d
                : (f !== r.namespaces &&
                    ((f = r.namespaces), (y = r.enabled(c))),
                  y),
            set: (v) => {
              d = v;
            },
          }),
          typeof r.init == "function" && r.init(g),
          g
        );
      }
      function n(c, p) {
        let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
        return (d.log = this.log), d;
      }
      function i(c) {
        r.save(c), (r.namespaces = c), (r.names = []), (r.skips = []);
        let p,
          d = (typeof c == "string" ? c : "").split(/[\s,]+/),
          f = d.length;
        for (p = 0; p < f; p++)
          d[p] &&
            ((c = d[p].replace(/\*/g, ".*?")),
            c[0] === "-"
              ? r.skips.push(new RegExp("^" + c.slice(1) + "$"))
              : r.names.push(new RegExp("^" + c + "$")));
      }
      function o() {
        let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(
          ",",
        );
        return r.enable(""), c;
      }
      function s(c) {
        if (c[c.length - 1] === "*") return true;
        let p, d;
        for (p = 0, d = r.skips.length; p < d; p++)
          if (r.skips[p].test(c)) return false;
        for (p = 0, d = r.names.length; p < d; p++)
          if (r.names[p].test(c)) return true;
        return false;
      }
      function a(c) {
        return c
          .toString()
          .substring(2, c.toString().length - 2)
          .replace(/\.\*\?$/, "*");
      }
      function l(c) {
        return c instanceof Error ? c.stack || c.message : c;
      }
      function u() {
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        );
      }
      return r.enable(r.load()), r;
    }
    Jo.exports = Mu;
  });
  var Ho = K((ye, Gr) => {
    ye.formatArgs = ku;
    ye.save = Iu;
    ye.load = Fu;
    ye.useColors = Su;
    ye.storage = Du();
    ye.destroy = (() => {
      let e = false;
      return () => {
        e ||
          ((e = true),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          ));
      };
    })();
    ye.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ];
    function Su() {
      return typeof window < "u" &&
        window.process &&
        (window.process.type === "renderer" || window.process.__nwjs)
        ? true
        : typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          ? false
          : (typeof document < "u" &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            (typeof window < "u" &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }
    function ku(e) {
      if (
        ((e[0] =
          (this.useColors ? "%c" : "") +
          this.namespace +
          (this.useColors ? " %c" : " ") +
          e[0] +
          (this.useColors ? "%c " : " ") +
          "+" +
          Gr.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      let t = "color: " + this.color;
      e.splice(1, 0, t, "color: inherit");
      let r = 0,
        n = 0;
      e[0].replace(/%[a-zA-Z%]/g, (i) => {
        i !== "%%" && (r++, i === "%c" && (n = r));
      }),
        e.splice(n, 0, t);
    }
    ye.log = console.debug || console.log || (() => {});
    function Iu(e) {
      try {
        e ? ye.storage.setItem("debug", e) : ye.storage.removeItem("debug");
      } catch {}
    }
    function Fu() {
      let e;
      try {
        e = ye.storage.getItem("debug");
      } catch {}
      return (
        !e &&
          typeof process < "u" &&
          "env" in process &&
          (e = process.env.DEBUG),
        e
      );
    }
    function Du() {
      try {
        return localStorage;
      } catch {}
    }
    Gr.exports = ui()(ye);
    var { formatters: Ou } = Gr.exports;
    Ou.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    };
  });
  var ci = K((qf, Wo) => {
    Wo.exports = (e, t = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
        n = t.indexOf(r + e),
        i = t.indexOf("--");
      return n !== -1 && (i === -1 || n < i);
    };
  });
  var mi = K((jf, Yo) => {
    var Nu = __require("os"),
      zo = __require("tty"),
      Ee = ci(),
      { env: H } = process,
      Ge;
    Ee("no-color") || Ee("no-colors") || Ee("color=false") || Ee("color=never")
      ? (Ge = 0)
      : (Ee("color") ||
          Ee("colors") ||
          Ee("color=true") ||
          Ee("color=always")) &&
        (Ge = 1);
    "FORCE_COLOR" in H &&
      (H.FORCE_COLOR === "true"
        ? (Ge = 1)
        : H.FORCE_COLOR === "false"
          ? (Ge = 0)
          : (Ge =
              H.FORCE_COLOR.length === 0
                ? 1
                : Math.min(parseInt(H.FORCE_COLOR, 10), 3)));
    function pi(e) {
      return e === 0
        ? false
        : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function di(e, t) {
      if (Ge === 0) return 0;
      if (Ee("color=16m") || Ee("color=full") || Ee("color=truecolor"))
        return 3;
      if (Ee("color=256")) return 2;
      if (e && !t && Ge === undefined) return 0;
      let r = Ge || 0;
      if (H.TERM === "dumb") return r;
      if (process.platform === "win32") {
        let n = Nu.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586
          ? Number(n[2]) >= 14931
            ? 3
            : 2
          : 1;
      }
      if ("CI" in H)
        return [
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE",
        ].some((n) => n in H) || H.CI_NAME === "codeship"
          ? 1
          : r;
      if ("TEAMCITY_VERSION" in H)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(H.TEAMCITY_VERSION) ? 1 : 0;
      if (H.COLORTERM === "truecolor") return 3;
      if ("TERM_PROGRAM" in H) {
        let n = parseInt((H.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (H.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(H.TERM)
        ? 2
        : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
              H.TERM,
            ) || "COLORTERM" in H
          ? 1
          : r;
    }
    function Lu(e) {
      let t = di(e, e && e.isTTY);
      return pi(t);
    }
    Yo.exports = {
      supportsColor: Lu,
      stdout: pi(di(true, zo.isatty(1))),
      stderr: pi(di(true, zo.isatty(2))),
    };
  });
  var Xo = K((ee, Hr) => {
    var $u = __require("tty"),
      Jr = __require("util");
    ee.init = Qu;
    ee.log = Bu;
    ee.formatArgs = ju;
    ee.save = Uu;
    ee.load = Ku;
    ee.useColors = qu;
    ee.destroy = Jr.deprecate(
      () => {},
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
    );
    ee.colors = [6, 2, 3, 4, 5, 1];
    try {
      let e = mi();
      e &&
        (e.stderr || e).level >= 2 &&
        (ee.colors = [
          20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
          63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113,
          128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167,
          168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199,
          200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
        ]);
    } catch {}
    ee.inspectOpts = Object.keys(process.env)
      .filter((e) => /^debug_/i.test(e))
      .reduce((e, t) => {
        let r = t
            .substring(6)
            .toLowerCase()
            .replace(/_([a-z])/g, (i, o) => o.toUpperCase()),
          n = process.env[t];
        return (
          /^(yes|on|true|enabled)$/i.test(n)
            ? (n = true)
            : /^(no|off|false|disabled)$/i.test(n)
              ? (n = false)
              : n === "null"
                ? (n = null)
                : (n = Number(n)),
          (e[r] = n),
          e
        );
      }, {});
    function qu() {
      return "colors" in ee.inspectOpts
        ? !!ee.inspectOpts.colors
        : $u.isatty(process.stderr.fd);
    }
    function ju(e) {
      let { namespace: t, useColors: r } = this;
      if (r) {
        let n = this.color,
          i = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
          o = `  ${i};1m${t} \x1B[0m`;
        (e[0] =
          o +
          e[0]
            .split(
              `
`,
            )
            .join(
              `
` + o,
            )),
          e.push(i + "m+" + Hr.exports.humanize(this.diff) + "\x1B[0m");
      } else e[0] = Vu() + t + " " + e[0];
    }
    function Vu() {
      return ee.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
    }
    function Bu(...e) {
      return process.stderr.write(
        Jr.format(...e) +
          `
`,
      );
    }
    function Uu(e) {
      e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
    }
    function Ku() {
      return process.env.DEBUG;
    }
    function Qu(e) {
      e.inspectOpts = {};
      let t = Object.keys(ee.inspectOpts);
      for (let r = 0; r < t.length; r++)
        e.inspectOpts[t[r]] = ee.inspectOpts[t[r]];
    }
    Hr.exports = ui()(ee);
    var { formatters: Zo } = Hr.exports;
    Zo.o = function (e) {
      return (
        (this.inspectOpts.colors = this.useColors),
        Jr.inspect(e, this.inspectOpts)
          .split(
            `
`,
          )
          .map((t) => t.trim())
          .join(" ")
      );
    };
    Zo.O = function (e) {
      return (
        (this.inspectOpts.colors = this.useColors),
        Jr.inspect(e, this.inspectOpts)
      );
    };
  });
  var es = K((Vf, fi) => {
    typeof process > "u" ||
    process.type === "renderer" ||
    false ||
    process.__nwjs
      ? (fi.exports = Ho())
      : (fi.exports = Xo());
  });
  var cs = K((bg, Pi) => {
    var R = Pi.exports;
    Pi.exports.default = R;
    var D = "\x1B[",
      Xt = "\x1B]",
      Rt = "\x07",
      en = ";",
      us = process.env.TERM_PROGRAM === "Apple_Terminal";
    R.cursorTo = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t != "number"
        ? D + (e + 1) + "G"
        : D + (t + 1) + ";" + (e + 1) + "H";
    };
    R.cursorMove = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return (
        e < 0 ? (r += D + -e + "D") : e > 0 && (r += D + e + "C"),
        t < 0 ? (r += D + -t + "A") : t > 0 && (r += D + t + "B"),
        r
      );
    };
    R.cursorUp = (e = 1) => D + e + "A";
    R.cursorDown = (e = 1) => D + e + "B";
    R.cursorForward = (e = 1) => D + e + "C";
    R.cursorBackward = (e = 1) => D + e + "D";
    R.cursorLeft = D + "G";
    R.cursorSavePosition = us ? "\x1B7" : D + "s";
    R.cursorRestorePosition = us ? "\x1B8" : D + "u";
    R.cursorGetPosition = D + "6n";
    R.cursorNextLine = D + "E";
    R.cursorPrevLine = D + "F";
    R.cursorHide = D + "?25l";
    R.cursorShow = D + "?25h";
    R.eraseLines = (e) => {
      let t = "";
      for (let r = 0; r < e; r++)
        t += R.eraseLine + (r < e - 1 ? R.cursorUp() : "");
      return e && (t += R.cursorLeft), t;
    };
    R.eraseEndLine = D + "K";
    R.eraseStartLine = D + "1K";
    R.eraseLine = D + "2K";
    R.eraseDown = D + "J";
    R.eraseUp = D + "1J";
    R.eraseScreen = D + "2J";
    R.scrollUp = D + "S";
    R.scrollDown = D + "T";
    R.clearScreen = "\x1Bc";
    R.clearTerminal =
      process.platform === "win32"
        ? `${R.eraseScreen}${D}0f`
        : `${R.eraseScreen}${D}3J${D}H`;
    R.beep = Rt;
    R.link = (e, t) =>
      [Xt, "8", en, en, t, Rt, e, Xt, "8", en, en, Rt].join("");
    R.image = (e, t = {}) => {
      let r = `${Xt}1337;File=inline=1`;
      return (
        t.width && (r += `;width=${t.width}`),
        t.height && (r += `;height=${t.height}`),
        t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"),
        r + ":" + e.toString("base64") + Rt
      );
    };
    R.iTerm = {
      setCwd: (e = process.cwd()) => `${Xt}50;CurrentDir=${e}${Rt}`,
      annotation: (e, t = {}) => {
        let r = `${Xt}1337;`,
          n = typeof t.x < "u",
          i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error(
            "`x`, `y` and `length` must be defined when `x` or `y` is defined",
          );
        return (
          (e = e.replace(/\|/g, "")),
          (r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation="),
          t.length > 0
            ? (r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|"))
            : (r += e),
          r + Rt
        );
      },
    };
  });
  var ms = K((wg, ds) => {
    var Zu = mi(),
      Mt = ci();
    function ps(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return {
          major: 0,
          minor: parseInt(r[1], 10),
          patch: parseInt(r[2], 10),
        };
      }
      let t = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t[0], minor: t[1], patch: t[2] };
    }
    function vi(e) {
      let { env: t } = process;
      if ("FORCE_HYPERLINK" in t)
        return !(
          t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0
        );
      if (
        Mt("no-hyperlink") ||
        Mt("no-hyperlinks") ||
        Mt("hyperlink=false") ||
        Mt("hyperlink=never")
      )
        return false;
      if (Mt("hyperlink=true") || Mt("hyperlink=always") || "NETLIFY" in t)
        return true;
      if (
        !Zu.supportsColor(e) ||
        (e && !e.isTTY) ||
        process.platform === "win32" ||
        "CI" in t ||
        "TEAMCITY_VERSION" in t
      )
        return false;
      if ("TERM_PROGRAM" in t) {
        let r = ps(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || (r.major === 1 && r.minor >= 72);
        }
      }
      if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0") return false;
        let r = ps(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    ds.exports = {
      supportsHyperlink: vi,
      stdout: vi(process.stdout),
      stderr: vi(process.stderr),
    };
  });
  var gs = K((Eg, er) => {
    var Xu = cs(),
      Ti = ms(),
      fs = (e, t, { target: r = "stdout", ...n } = {}) =>
        Ti[r]
          ? Xu.link(e, t)
          : n.fallback === false
            ? e
            : typeof n.fallback == "function"
              ? n.fallback(e, t)
              : `${e} (\u200B${t}\u200B)`;
    er.exports = (e, t, r = {}) => fs(e, t, r);
    er.exports.stderr = (e, t, r = {}) => fs(e, t, { target: "stderr", ...r });
    er.exports.isSupported = Ti.stdout;
    er.exports.stderr.isSupported = Ti.stderr;
  });
  var Cs = K((qg, fc) => {
    fc.exports = {
      name: "dotenv",
      version: "16.0.3",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          require: "./lib/main.js",
          types: "./lib/main.d.ts",
          default: "./lib/main.js",
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json",
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        prerelease: "npm test",
        release: "standard-version",
      },
      repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" },
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings",
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@types/node": "^17.0.9",
        decache: "^4.6.1",
        dtslint: "^3.7.0",
        sinon: "^12.0.1",
        standard: "^16.0.4",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.3.2",
        tap: "^15.1.6",
        tar: "^6.1.11",
        typescript: "^4.5.4",
      },
      engines: { node: ">=12" },
    };
  });
  var As = K((jg, sn) => {
    var gc = __require("fs"),
      _s = __require("path"),
      yc = __require("os"),
      hc = Cs(),
      xc = hc.version,
      bc =
        /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
    function wc(e) {
      let t = {},
        r = e.toString();
      r = r.replace(
        /\r\n?/gm,
        `
`,
      );
      let n;
      for (; (n = bc.exec(r)) != null; ) {
        let i = n[1],
          o = n[2] || "";
        o = o.trim();
        let s = o[0];
        (o = o.replace(/^(['"`])([\s\S]*)\1$/gm, "$2")),
          s === '"' &&
            ((o = o.replace(
              /\\n/g,
              `
`,
            )),
            (o = o.replace(/\\r/g, "\r"))),
          (t[i] = o);
      }
      return t;
    }
    function Ri(e) {
      console.log(`[dotenv@${xc}][DEBUG] ${e}`);
    }
    function Ec(e) {
      return e[0] === "~" ? _s.join(yc.homedir(), e.slice(1)) : e;
    }
    function Pc(e) {
      let t = _s.resolve(process.cwd(), ".env"),
        r = "utf8",
        n = !!(e && e.debug),
        i = !!(e && e.override);
      e &&
        (e.path != null && (t = Ec(e.path)),
        e.encoding != null && (r = e.encoding));
      try {
        let o = on.parse(gc.readFileSync(t, { encoding: r }));
        return (
          Object.keys(o).forEach(function (s) {
            Object.prototype.hasOwnProperty.call(process.env, s)
              ? (i === true && (process.env[s] = o[s]),
                n &&
                  Ri(
                    i === true
                      ? `"${s}" is already defined in \`process.env\` and WAS overwritten`
                      : `"${s}" is already defined in \`process.env\` and was NOT overwritten`,
                  ))
              : (process.env[s] = o[s]);
          }),
          { parsed: o }
        );
      } catch (o) {
        return n && Ri(`Failed to load ${t} ${o.message}`), { error: o };
      }
    }
    var on = { config: Pc, parse: wc };
    sn.exports.config = on.config;
    sn.exports.parse = on.parse;
    sn.exports = on;
  });
  var Fs = K((Jg, Is) => {
    Is.exports = (e) => {
      let t = e.match(/^[ \t]*(?=\S)/gm);
      return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
    };
  });
  var Os = K((Hg, Ds) => {
    var _c = Fs();
    Ds.exports = (e) => {
      let t = _c(e);
      if (t === 0) return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    };
  });
  var Ns = K((Wg, Ac) => {
    Ac.exports = {
      name: "@prisma/engines-version",
      version: "5.6.0-32.e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
      main: "index.js",
      types: "index.d.ts",
      license: "Apache-2.0",
      author: "Tim Suchanek <suchanek@prisma.io>",
      prisma: { enginesVersion: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee" },
      repository: {
        type: "git",
        url: "https://github.com/prisma/engines-wrapper.git",
        directory: "packages/engines-version",
      },
      devDependencies: { "@types/node": "18.18.9", typescript: "4.9.5" },
      files: ["index.js", "index.d.ts"],
      scripts: { build: "tsc -d" },
    };
  });
  var ki = K((ln) => {
    Object.defineProperty(ln, "__esModule", { value: true });
    ln.enginesVersion = undefined;
    ln.enginesVersion = Ns().prisma.enginesVersion;
  });
  var Ni = K((ly, qs) => {
    qs.exports = (e, t = 1, r) => {
      if (
        ((r = { indent: " ", includeEmptyLines: false, ...r }),
        typeof e != "string")
      )
        throw new TypeError(
          `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
        );
      if (typeof t != "number")
        throw new TypeError(
          `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
        );
      if (typeof r.indent != "string")
        throw new TypeError(
          `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
        );
      if (t === 0) return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var Us = K((py, Bs) => {
    Bs.exports = ({ onlyFirst: e = false } = {}) => {
      let t = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
      ].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var ji = K((dy, Ks) => {
    var Lc = Us();
    Ks.exports = (e) => (typeof e == "string" ? e.replace(Lc(), "") : e);
  });
  var Qs = K((gy, cn) => {
    cn.exports = (e = {}) => {
      let t;
      if (e.repoUrl) t = e.repoUrl;
      else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error(
          "You need to specify either the `repoUrl` option or both the `user` and `repo` options",
        );
      let r = new URL(`${t}/issues/new`),
        n = [
          "body",
          "title",
          "labels",
          "template",
          "milestone",
          "assignee",
          "projects",
        ];
      for (let i of n) {
        let o = e[i];
        if (o !== undefined) {
          if (i === "labels" || i === "projects") {
            if (!Array.isArray(o))
              throw new TypeError(`The \`${i}\` option should be an array`);
            o = o.join(",");
          }
          r.searchParams.set(i, o);
        }
      }
      return r.toString();
    };
    cn.exports.default = cn.exports;
  });
  var _o = K((Y0, Cl) => {
    Cl.exports = (function () {
      function e(t, r, n, i, o) {
        return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
      }
      return function (t, r) {
        if (t === r) return 0;
        if (t.length > r.length) {
          var n = t;
          (t = r), (r = n);
        }
        for (
          var i = t.length, o = r.length;
          i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);

        )
          i--, o--;
        for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
        if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
        var a = 0,
          l,
          u,
          c,
          p,
          d,
          f,
          y,
          g,
          v,
          C,
          _,
          b,
          M = [];
        for (l = 0; l < i; l++) M.push(l + 1), M.push(t.charCodeAt(s + l));
        for (var be = M.length - 1; a < o - 3; )
          for (
            v = r.charCodeAt(s + (u = a)),
              C = r.charCodeAt(s + (c = a + 1)),
              _ = r.charCodeAt(s + (p = a + 2)),
              b = r.charCodeAt(s + (d = a + 3)),
              f = a += 4,
              l = 0;
            l < be;
            l += 2
          )
            (y = M[l]),
              (g = M[l + 1]),
              (u = e(y, u, c, v, g)),
              (c = e(u, c, p, C, g)),
              (p = e(c, p, d, _, g)),
              (f = e(p, d, f, b, g)),
              (M[l] = f),
              (d = p),
              (p = c),
              (c = u),
              (u = y);
        for (; a < o; )
          for (v = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < be; l += 2)
            (y = M[l]), (M[l] = f = e(y, u, f, v, M[l + 1])), (u = y);
        return f;
      };
    })();
  });
  var Cf = {};
  Pt(Cf, {
    DMMF: () => we,
    DMMFClass: () => Kr,
    Debug: () => gi,
    Decimal: () => Oe,
    Extensions: () => oi,
    MetricsClient: () => Ft,
    NotFoundError: () => Ve,
    ObjectEnumValue: () => ke,
    PrismaClientInitializationError: () => k,
    PrismaClientKnownRequestError: () => W,
    PrismaClientRustPanicError: () => he,
    PrismaClientUnknownRequestError: () => z,
    PrismaClientValidationError: () => se,
    Public: () => si,
    Sql: () => me,
    Types: () => ai,
    defineDmmfProperty: () => Js,
    empty: () => Ws,
    getPrismaClient: () => gu,
    itxClientDenyList: () => Fo,
    join: () => Hs,
    makeStrictEnum: () => yu,
    objectEnumNames: () => qc,
    objectEnumValues: () => dn,
    raw: () => Wi,
    sqltag: () => zi,
    warnEnvConflicts: () => hu,
    warnOnce: () => ar,
  });
  module.exports = vu(Cf);
  var oi = {};
  Pt(oi, { defineExtension: () => Lo, getExtensionContext: () => $o });
  var si = {};
  Pt(si, { validator: () => qo });
  var ai = {};
  Pt(ai, {
    Extensions: () => jo,
    Public: () => Vo,
    Result: () => Bo,
    Utils: () => Uo,
  });
  var jo = {};
  var Vo = {};
  var Bo = {};
  var Uo = {};
  var Qe = (e, t) => {
    let r = {};
    for (let n of e) {
      let i = n[t];
      r[i] = n;
    }
    return r;
  };
  var Kr = class {
    constructor(t) {
      this.document = t;
      (this.compositeNames = new Set(this.datamodel.types.map((r) => r.name))),
        (this.typeAndModelMap = this.buildTypeModelMap()),
        (this.mappingsMap = this.buildMappingsMap()),
        (this.outputTypeMap = this.buildMergedOutputTypeMap()),
        (this.rootFieldMap = this.buildRootFieldMap()),
        (this.inputTypesByName = this.buildInputTypesMap());
    }
    get datamodel() {
      return this.document.datamodel;
    }
    get mappings() {
      return this.document.mappings;
    }
    get schema() {
      return this.document.schema;
    }
    get inputObjectTypes() {
      return this.schema.inputObjectTypes;
    }
    get outputObjectTypes() {
      return this.schema.outputObjectTypes;
    }
    isComposite(t) {
      return this.compositeNames.has(t);
    }
    getOtherOperationNames() {
      return [
        Object.values(this.mappings.otherOperations.write),
        Object.values(this.mappings.otherOperations.read),
      ].flat();
    }
    hasEnumInNamespace(t, r) {
      return this.schema.enumTypes[r]?.find((n) => n.name === t) !== undefined;
    }
    resolveInputObjectType(t) {
      return this.inputTypesByName.get(li(t.type, t.namespace));
    }
    resolveOutputObjectType(t) {
      if (t.location === "outputObjectTypes")
        return this.outputObjectTypes[t.namespace ?? "prisma"].find(
          (r) => r.name === t.type,
        );
    }
    buildModelMap() {
      return Qe(this.datamodel.models, "name");
    }
    buildTypeMap() {
      return Qe(this.datamodel.types, "name");
    }
    buildTypeModelMap() {
      return { ...this.buildTypeMap(), ...this.buildModelMap() };
    }
    buildMappingsMap() {
      return Qe(this.mappings.modelOperations, "model");
    }
    buildMergedOutputTypeMap() {
      return {
        model: Qe(this.schema.outputObjectTypes.model, "name"),
        prisma: Qe(this.schema.outputObjectTypes.prisma, "name"),
      };
    }
    buildRootFieldMap() {
      return {
        ...Qe(this.outputTypeMap.prisma.Query.fields, "name"),
        ...Qe(this.outputTypeMap.prisma.Mutation.fields, "name"),
      };
    }
    buildInputTypesMap() {
      let t = new Map();
      for (let r of this.inputObjectTypes.prisma)
        t.set(li(r.name, "prisma"), r);
      if (!this.inputObjectTypes.model) return t;
      for (let r of this.inputObjectTypes.model) t.set(li(r.name, "model"), r);
      return t;
    }
  };
  var we;
  ((t) => {
    let e;
    ((b) => (
      (b.findUnique = "findUnique"),
      (b.findUniqueOrThrow = "findUniqueOrThrow"),
      (b.findFirst = "findFirst"),
      (b.findFirstOrThrow = "findFirstOrThrow"),
      (b.findMany = "findMany"),
      (b.create = "create"),
      (b.createMany = "createMany"),
      (b.update = "update"),
      (b.updateMany = "updateMany"),
      (b.upsert = "upsert"),
      (b.delete = "delete"),
      (b.deleteMany = "deleteMany"),
      (b.groupBy = "groupBy"),
      (b.count = "count"),
      (b.aggregate = "aggregate"),
      (b.findRaw = "findRaw"),
      (b.aggregateRaw = "aggregateRaw")
    ))((e = t.ModelAction || (t.ModelAction = {})));
  })(we || (we = {}));
  var Wr = I(es());
  var Gu = 100;
  var Yt = [];
  typeof process < "u" &&
    typeof process.stderr?.write != "function" &&
    (Wr.default.log = console.debug ?? console.log);
  var gi = Object.assign(Ju, Wr.default);
  var L = gi;
  var yi;
  var ns;
  var is;
  var os;
  var ss = true;
  typeof process < "u" &&
    (({
      FORCE_COLOR: yi,
      NODE_DISABLE_COLORS: ns,
      NO_COLOR: is,
      TERM: os,
    } = process.env || {}),
    (ss = process.stdout && process.stdout.isTTY));
  var Hu = {
    enabled:
      !ns && is == null && os !== "dumb" && ((yi != null && yi !== "0") || ss),
  };
  var Uf = $(0, 0);
  var pe = $(1, 22);
  var Je = $(2, 22);
  var Kf = $(3, 23);
  var le = $(4, 24);
  var Qf = $(7, 27);
  var Gf = $(8, 28);
  var Jf = $(9, 29);
  var Hf = $(30, 39);
  var Pe = $(31, 39);
  var ct = $(32, 39);
  var Ae = $(33, 39);
  var _t = $(34, 39);
  var Wf = $(35, 39);
  var He = $(36, 39);
  var zf = $(37, 39);
  var zr = $(90, 39);
  var Yf = $(90, 39);
  var Zf = $(40, 49);
  var Xf = $(41, 49);
  var eg = $(42, 49);
  var tg = $(43, 49);
  var rg = $(44, 49);
  var ng = $(45, 49);
  var ig = $(46, 49);
  var og = $(47, 49);
  var as = I(__require("fs"));
  var Yr = "libquery_engine";
  var bs = I(__require("child_process"));
  var Ci = I(__require("fs/promises"));
  var rn = I(__require("os"));
  var je = Symbol.for("@ts-pattern/matcher");
  var Wu = Symbol.for("@ts-pattern/isVariadic");
  var Xr = "@ts-pattern/anonymous-select-key";
  var bi = (e) => !!(e && typeof e == "object");
  var Zr = (e) => e && !!e[je];
  var Se = (e, t, r) => {
    if (Zr(e)) {
      let n = e[je](),
        { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (bi(e)) {
      if (!bi(t)) return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) return false;
        let n = [],
          i = [],
          o = [];
        for (let s of e.keys()) {
          let a = e[s];
          Zr(a) && a[Wu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error(
              "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
            );
          if (t.length < n.length + i.length) return false;
          let s = t.slice(0, n.length),
            a = i.length === 0 ? [] : t.slice(-i.length),
            l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return (
            n.every((u, c) => Se(u, s[c], r)) &&
            i.every((u, c) => Se(u, a[c], r)) &&
            (o.length === 0 || Se(o[0], l, r))
          );
        }
        return e.length === t.length && e.every((s, a) => Se(s, t[a], r));
      }
      return Object.keys(e).every((n) => {
        let i = e[n];
        return (
          (n in t || (Zr((o = i)) && o[je]().matcherType === "optional")) &&
          Se(i, t[n], r)
        );
        var o;
      });
    }
    return Object.is(t, e);
  };
  var Ye = (e) => {
    var t, r, n;
    return bi(e)
      ? Zr(e)
        ? (t =
            (r = (n = e[je]()).getSelectionKeys) == null
              ? undefined
              : r.call(n)) != null
          ? t
          : []
        : Array.isArray(e)
          ? Zt(e, Ye)
          : Zt(Object.values(e), Ye)
      : [];
  };
  var Zt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
  var pg = ve(
    F(function (e) {
      return true;
    }),
  );
  var dt = (e) =>
    Object.assign(ve(e), {
      startsWith: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.startsWith(r)))));
        var r;
      },
      endsWith: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.endsWith(r)))));
        var r;
      },
      minLength: (t) => dt(V(e, ((r) => F((n) => pt(n) && n.length >= r))(t))),
      maxLength: (t) => dt(V(e, ((r) => F((n) => pt(n) && n.length <= r))(t))),
      includes: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && n.includes(r)))));
        var r;
      },
      regex: (t) => {
        return dt(V(e, ((r = t), F((n) => pt(n) && !!n.match(r)))));
        var r;
      },
    });
  var dg = dt(F(pt));
  var Me = (e) =>
    Object.assign(ve(e), {
      between: (t, r) =>
        Me(V(e, ((n, i) => F((o) => Re(o) && n <= o && i >= o))(t, r))),
      lt: (t) => Me(V(e, ((r) => F((n) => Re(n) && n < r))(t))),
      gt: (t) => Me(V(e, ((r) => F((n) => Re(n) && n > r))(t))),
      lte: (t) => Me(V(e, ((r) => F((n) => Re(n) && n <= r))(t))),
      gte: (t) => Me(V(e, ((r) => F((n) => Re(n) && n >= r))(t))),
      int: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && Number.isInteger(t)),
          ),
        ),
      finite: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && Number.isFinite(t)),
          ),
        ),
      positive: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && t > 0),
          ),
        ),
      negative: () =>
        Me(
          V(
            e,
            F((t) => Re(t) && t < 0),
          ),
        ),
    });
  var mg = Me(F(Re));
  var ze = (e) =>
    Object.assign(ve(e), {
      between: (t, r) =>
        ze(V(e, ((n, i) => F((o) => We(o) && n <= o && i >= o))(t, r))),
      lt: (t) => ze(V(e, ((r) => F((n) => We(n) && n < r))(t))),
      gt: (t) => ze(V(e, ((r) => F((n) => We(n) && n > r))(t))),
      lte: (t) => ze(V(e, ((r) => F((n) => We(n) && n <= r))(t))),
      gte: (t) => ze(V(e, ((r) => F((n) => We(n) && n >= r))(t))),
      positive: () =>
        ze(
          V(
            e,
            F((t) => We(t) && t > 0),
          ),
        ),
      negative: () =>
        ze(
          V(
            e,
            F((t) => We(t) && t < 0),
          ),
        ),
    });
  var fg = ze(F(We));
  var gg = ve(
    F(function (e) {
      return typeof e == "boolean";
    }),
  );
  var yg = ve(
    F(function (e) {
      return typeof e == "symbol";
    }),
  );
  var hg = ve(
    F(function (e) {
      return e == null;
    }),
  );
  var wi = { matched: false, value: undefined };
  var Ei = class e {
    constructor(t, r) {
      (this.input = undefined),
        (this.state = undefined),
        (this.input = t),
        (this.state = r);
    }
    with(...t) {
      if (this.state.matched) return this;
      let r = t[t.length - 1],
        n = [t[0]],
        i;
      t.length === 3 && typeof t[1] == "function"
        ? (n.push(t[0]), (i = t[1]))
        : t.length > 2 && n.push(...t.slice(1, t.length - 1));
      let o = false,
        s = {},
        a = (u, c) => {
          (o = true), (s[u] = c);
        },
        l =
          !n.some((u) => Se(u, this.input, a)) || (i && !i(this.input))
            ? wi
            : {
                matched: true,
                value: r(o ? (Xr in s ? s[Xr] : s) : this.input, this.input),
              };
      return new e(this.input, l);
    }
    when(t, r) {
      if (this.state.matched) return this;
      let n = !!t(this.input);
      return new e(
        this.input,
        n ? { matched: true, value: r(this.input, this.input) } : wi,
      );
    }
    otherwise(t) {
      return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive() {
      return this.run();
    }
    run() {
      if (this.state.matched) return this.state.value;
      let t;
      try {
        t = JSON.stringify(this.input);
      } catch {
        t = this.input;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${t}`);
    }
    returnType() {
      return this;
    }
  };
  var ws = __require("util");
  var ys = I(gs());
  var ec = { warn: Ae("prisma:warn") };
  var tc = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var rc = (0, ws.promisify)(bs.default.exec);
  var de = L("prisma:get-platform");
  var nc = ["1.0.x", "1.1.x", "3.0.x"];
  var tn = {};
  var Ai = [
    "darwin",
    "darwin-arm64",
    "debian-openssl-1.0.x",
    "debian-openssl-1.1.x",
    "debian-openssl-3.0.x",
    "rhel-openssl-1.0.x",
    "rhel-openssl-1.1.x",
    "rhel-openssl-3.0.x",
    "linux-arm64-openssl-1.1.x",
    "linux-arm64-openssl-1.0.x",
    "linux-arm64-openssl-3.0.x",
    "linux-arm-openssl-1.1.x",
    "linux-arm-openssl-1.0.x",
    "linux-arm-openssl-3.0.x",
    "linux-musl",
    "linux-musl-openssl-3.0.x",
    "linux-musl-arm64-openssl-1.1.x",
    "linux-musl-arm64-openssl-3.0.x",
    "linux-nixos",
    "linux-static-x64",
    "linux-static-arm64",
    "windows",
    "freebsd11",
    "freebsd12",
    "freebsd13",
    "openbsd",
    "netbsd",
    "arm",
  ];
  var Si = I(As());
  var an = I(__require("fs"));
  var kt = I(__require("path"));
  var Mi = L("prisma:tryLoadEnv");
  var ks = "library";
  var Rc = I(ki());
  var q = I(__require("path"));
  var Mc = I(ki());
  var Zg = L("prisma:engines");
  q.default.join(__dirname, "../query-engine-darwin");
  q.default.join(__dirname, "../query-engine-darwin-arm64");
  q.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  q.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  q.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  q.default.join(__dirname, "../query-engine-linux-static-x64");
  q.default.join(__dirname, "../query-engine-linux-static-arm64");
  q.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  q.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  q.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  q.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  q.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  q.default.join(
    __dirname,
    "../libquery_engine-linux-arm64-openssl-1.0.x.so.node",
  );
  q.default.join(
    __dirname,
    "../libquery_engine-linux-arm64-openssl-1.1.x.so.node",
  );
  q.default.join(
    __dirname,
    "../libquery_engine-linux-arm64-openssl-3.0.x.so.node",
  );
  q.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  q.default.join(
    __dirname,
    "../libquery_engine-linux-musl-openssl-3.0.x.so.node",
  );
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  q.default.join(__dirname, "../query_engine-windows.dll.node");
  var Ii = I(__require("fs"));
  var $s = L("chmodPlusX");
  var ir = I(__require("path"));
  var js = I(Ni());
  var Li = class {
    constructor(t) {
      this.config = t;
    }
    toString() {
      let { config: t } = this,
        r = t.provider.fromEnvVar
          ? `env("${t.provider.fromEnvVar}")`
          : t.provider.value,
        n = JSON.parse(
          JSON.stringify({ provider: r, binaryTargets: Sc(t.binaryTargets) }),
        );
      return `generator ${t.name} {
${(0, js.default)(kc(n), 2)}
}`;
    }
  };
  var sr = {};
  Pt(sr, {
    error: () => Oc,
    info: () => Dc,
    log: () => Fc,
    query: () => Nc,
    should: () => Vs,
    tags: () => or,
    warn: () => qi,
  });
  var or = {
    error: Pe("prisma:error"),
    warn: Ae("prisma:warn"),
    info: He("prisma:info"),
    query: _t("prisma:query"),
  };
  var Vs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Bi = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {});
  var Gs = new Set();
  var ar = (e, t, ...r) => {
    Gs.has(e) || (Gs.add(e), qi(t, ...r));
  };
  var W = class extends Error {
    constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
      super(r);
      (this.name = "PrismaClientKnownRequestError"),
        (this.code = n),
        (this.clientVersion = i),
        (this.meta = o),
        Object.defineProperty(this, "batchRequestIdx", {
          value: s,
          enumerable: false,
          writable: true,
        });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  E(W, "PrismaClientKnownRequestError");
  var Ve = class extends W {
    constructor(t, r) {
      super(t, { code: "P2025", clientVersion: r }),
        (this.name = "NotFoundError");
    }
  };
  E(Ve, "NotFoundError");
  var k = class e extends Error {
    constructor(r, n, i) {
      super(r);
      (this.name = "PrismaClientInitializationError"),
        (this.clientVersion = n),
        (this.errorCode = i),
        Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  E(k, "PrismaClientInitializationError");
  var he = class extends Error {
    constructor(r, n) {
      super(r);
      (this.name = "PrismaClientRustPanicError"), (this.clientVersion = n);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  E(he, "PrismaClientRustPanicError");
  var z = class extends Error {
    constructor(r, { clientVersion: n, batchRequestIdx: i }) {
      super(r);
      (this.name = "PrismaClientUnknownRequestError"),
        (this.clientVersion = n),
        Object.defineProperty(this, "batchRequestIdx", {
          value: i,
          writable: true,
          enumerable: false,
        });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  E(z, "PrismaClientUnknownRequestError");
  var se = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  E(se, "PrismaClientValidationError");
  var Ft = class {
    constructor(t) {
      this._engine = t;
    }
    prometheus(t) {
      return this._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return this._engine.metrics({ format: "json", ...t });
    }
  };
  var qc = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ];
  var pn = Symbol();
  var Qi = new WeakMap();
  var ke = class {
    constructor(t) {
      t === pn
        ? Qi.set(this, `Prisma.${this._getName()}`)
        : Qi.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Qi.get(this);
    }
  };
  var cr = class extends ke {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var pr = class extends cr {};
  Gi(pr, "DbNull");
  var dr = class extends cr {};
  Gi(dr, "JsonNull");
  var mr = class extends cr {};
  Gi(mr, "AnyNull");
  var dn = {
    classes: { DbNull: pr, JsonNull: dr, AnyNull: mr },
    instances: {
      DbNull: new pr(pn),
      JsonNull: new dr(pn),
      AnyNull: new mr(pn),
    },
  };
  var Ji = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (; this.registeredErrors[r] !== undefined; ) r++;
      return (this.registeredErrors[r] = { error: t }), r;
    }
  };
  var Hi = (e) => {
    let t = new Ji(),
      r = Ze(t, e.startTransaction.bind(e));
    return {
      errorRegistry: t,
      queryRaw: Ze(t, e.queryRaw.bind(e)),
      executeRaw: Ze(t, e.executeRaw.bind(e)),
      flavour: e.flavour,
      startTransaction: async (...n) => (await r(...n)).map((o) => jc(t, o)),
      close: Ze(t, e.close.bind(e)),
    };
  };
  var jc = (e, t) => ({
    flavour: t.flavour,
    options: t.options,
    queryRaw: Ze(e, t.queryRaw.bind(t)),
    executeRaw: Ze(e, t.executeRaw.bind(t)),
    commit: Ze(e, t.commit.bind(t)),
    rollback: Ze(e, t.rollback.bind(t)),
    dispose: Vc(e, t.dispose.bind(t)),
  });
  var du = __require("async_hooks");
  var mu = __require("events");
  var fu = I(__require("fs"));
  var Vr = I(__require("path"));
  var me = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0
          ? new TypeError("Expected at least 1 string")
          : new TypeError(
              `Expected ${t.length} strings to have ${t.length - 1} values`,
            );
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      (this.values = new Array(n)),
        (this.strings = new Array(n + 1)),
        (this.strings[0] = t[0]);
      let i = 0,
        o = 0;
      for (; i < r.length; ) {
        let s = r[i++],
          a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (; l < s.values.length; )
            (this.values[o++] = s.values[l++]),
              (this.strings[o] = s.strings[l]);
          this.strings[o] += a;
        } else (this.values[o++] = s), (this.strings[o] = a);
      }
    }
    get text() {
      let t = 1,
        r = this.strings[0];
      for (; t < this.strings.length; ) r += `\$${t}${this.strings[t++]}`;
      return r;
    }
    get sql() {
      let t = 1,
        r = this.strings[0];
      for (; t < this.strings.length; ) r += `?${this.strings[t++]}`;
      return r;
    }
    inspect() {
      return { text: this.text, sql: this.sql, values: this.values };
    }
  };
  var Ws = Wi("");
  var Ie = class {
    constructor() {
      this._map = new Map();
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n) return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  var Zs = __require("util");
  var mn = { enumerable: true, configurable: true, writable: true };
  var zs = Symbol.for("nodejs.util.inspect.custom");
  var Dt = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return (
        typeof t == "string" ? (this.currentLine += t) : t.write(this), this
      );
    }
    writeJoined(t, r) {
      let n = r.length - 1;
      for (let i = 0; i < r.length; i++)
        this.write(r[i]), i !== n && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()),
        (this.currentLine = ""),
        (this.marginSymbol = undefined);
      let t = this.afterNextNewLineCallback;
      return (this.afterNextNewLineCallback = undefined), t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return (this.afterNextNewLineCallback = t), this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return (this.marginSymbol = t), this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(
        this.currentLine.length + 2 * this.currentIndent,
      );
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  var Nt = 9000000000000000;
  var rt = 1e9;
  var Yi = "0123456789abcdef";
  var hn =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var xn =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var Zi = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Nt,
    maxE: Nt,
    crypto: false,
  };
  var ra;
  var Be;
  var P = true;
  var wn = "[DecimalError] ";
  var tt = wn + "Invalid argument: ";
  var na = wn + "Precision limit exceeded";
  var ia = wn + "crypto unavailable";
  var oa = "[object Decimal]";
  var ae = Math.floor;
  var Q = Math.pow;
  var Uc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var Kc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var Qc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var sa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var Ce = 1e7;
  var w = 7;
  var Gc = 9007199254740991;
  var Jc = hn.length - 1;
  var Xi = xn.length - 1;
  var m = { toStringTag: oa };
  m.absoluteValue = m.abs = function () {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), x(e);
  };
  m.ceil = function () {
    return x(new this.constructor(this), this.e + 1, 2);
  };
  m.clampedTo = m.clamp = function (e, t) {
    var r,
      n = this,
      i = n.constructor;
    if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
    if (e.gt(t)) throw Error(tt + t);
    return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  m.comparedTo = m.cmp = function (e) {
    var t,
      r,
      n,
      i,
      o = this,
      s = o.d,
      a = (e = new o.constructor(e)).d,
      l = o.s,
      u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
    if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
    if (l !== u) return l;
    if (o.e !== e.e) return (o.e > e.e) ^ (l < 0) ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
      if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
    return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
  };
  m.cosine = m.cos = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return r.d
      ? r.d[0]
        ? ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + Math.max(r.e, r.sd()) + w),
          (n.rounding = 1),
          (r = Hc(n, pa(n, r))),
          (n.precision = e),
          (n.rounding = t),
          x(Be == 2 || Be == 3 ? r.neg() : r, e, t, true))
        : new n(1)
      : new n(NaN);
  };
  m.cubeRoot = m.cbrt = function () {
    var e,
      t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c = this,
      p = c.constructor;
    if (!c.isFinite() || c.isZero()) return new p(c);
    for (
      P = false,
        o = c.s * Q(c.s * c, 1 / 3),
        !o || Math.abs(o) == 1 / 0
          ? ((r = te(c.d)),
            (e = c.e),
            (o = (e - r.length + 1) % 3) &&
              (r += o == 1 || o == -2 ? "0" : "00"),
            (o = Q(r, 1 / 3)),
            (e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
            o == 1 / 0
              ? (r = "5e" + e)
              : ((r = o.toExponential()),
                (r = r.slice(0, r.indexOf("e") + 1) + e)),
            (n = new p(r)),
            (n.s = c.s))
          : (n = new p(o.toString())),
        s = (e = p.precision) + 3;
      ;

    )
      if (
        ((a = n),
        (l = a.times(a).times(a)),
        (u = l.plus(c)),
        (n = N(u.plus(c).times(a), u.plus(l), s + 2, 1)),
        te(a.d).slice(0, s) === (r = te(n.d)).slice(0, s))
      )
        if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
          if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
          }
          (s += 4), (i = 1);
        } else {
          (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
            (x(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)));
          break;
        }
    return (P = true), x(n, e, p.rounding, t);
  };
  m.decimalPlaces = m.dp = function () {
    var e,
      t = this.d,
      r = NaN;
    if (t) {
      if (((e = t.length - 1), (r = (e - ae(this.e / w)) * w), (e = t[e]), e))
        for (; e % 10 == 0; e /= 10) r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m.dividedBy = m.div = function (e) {
    return N(this, new this.constructor(e));
  };
  m.dividedToIntegerBy = m.divToInt = function (e) {
    var t = this,
      r = t.constructor;
    return x(N(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m.equals = m.eq = function (e) {
    return this.cmp(e) === 0;
  };
  m.floor = function () {
    return x(new this.constructor(this), this.e + 1, 3);
  };
  m.greaterThan = m.gt = function (e) {
    return this.cmp(e) > 0;
  };
  m.greaterThanOrEqualTo = m.gte = function (e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  m.hyperbolicCosine = m.cosh = function () {
    var e,
      t,
      r,
      n,
      i,
      o = this,
      s = o.constructor,
      a = new s(1);
    if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero()) return a;
    (r = s.precision),
      (n = s.rounding),
      (s.precision = r + Math.max(o.e, o.sd()) + 4),
      (s.rounding = 1),
      (i = o.d.length),
      i < 32
        ? ((e = Math.ceil(i / 3)), (t = (1 / Pn(4, e)).toString()))
        : ((e = 16), (t = "2.3283064365386962890625e-10")),
      (o = Lt(s, 1, o.times(t), new s(1), true));
    for (var l, u = e, c = new s(8); u--; )
      (l = o.times(o)), (o = a.minus(l.times(c.minus(l.times(c)))));
    return x(o, (s.precision = r), (s.rounding = n), true);
  };
  m.hyperbolicSine = m.sinh = function () {
    var e,
      t,
      r,
      n,
      i = this,
      o = i.constructor;
    if (!i.isFinite() || i.isZero()) return new o(i);
    if (
      ((t = o.precision),
      (r = o.rounding),
      (o.precision = t + Math.max(i.e, i.sd()) + 4),
      (o.rounding = 1),
      (n = i.d.length),
      n < 3)
    )
      i = Lt(o, 2, i, i, true);
    else {
      (e = 1.4 * Math.sqrt(n)),
        (e = e > 16 ? 16 : e | 0),
        (i = i.times(1 / Pn(5, e))),
        (i = Lt(o, 2, i, i, true));
      for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
        (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(u)))));
    }
    return (o.precision = t), (o.rounding = r), x(i, t, r, true);
  };
  m.hyperbolicTangent = m.tanh = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return r.isFinite()
      ? r.isZero()
        ? new n(r)
        : ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + 7),
          (n.rounding = 1),
          N(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
      : new n(r.s);
  };
  m.inverseCosine = m.acos = function () {
    var e,
      t = this,
      r = t.constructor,
      n = t.abs().cmp(1),
      i = r.precision,
      o = r.rounding;
    return n !== -1
      ? n === 0
        ? t.isNeg()
          ? Te(r, i, o)
          : new r(0)
        : new r(NaN)
      : t.isZero()
        ? Te(r, i + 4, o).times(0.5)
        : ((r.precision = i + 6),
          (r.rounding = 1),
          (t = t.asin()),
          (e = Te(r, i + 4, o).times(0.5)),
          (r.precision = i),
          (r.rounding = o),
          e.minus(t));
  };
  m.inverseHyperbolicCosine = m.acosh = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return r.lte(1)
      ? new n(r.eq(1) ? 0 : NaN)
      : r.isFinite()
        ? ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
          (n.rounding = 1),
          (P = false),
          (r = r.times(r).minus(1).sqrt().plus(r)),
          (P = true),
          (n.precision = e),
          (n.rounding = t),
          r.ln())
        : new n(r);
  };
  m.inverseHyperbolicSine = m.asinh = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return !r.isFinite() || r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
        (n.rounding = 1),
        (P = false),
        (r = r.times(r).plus(1).sqrt().plus(r)),
        (P = true),
        (n.precision = e),
        (n.rounding = t),
        r.ln());
  };
  m.inverseHyperbolicTangent = m.atanh = function () {
    var e,
      t,
      r,
      n,
      i = this,
      o = i.constructor;
    return i.isFinite()
      ? i.e >= 0
        ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
        : ((e = o.precision),
          (t = o.rounding),
          (n = i.sd()),
          Math.max(n, e) < 2 * -i.e - 1
            ? x(new o(i), e, t, true)
            : ((o.precision = r = n - i.e),
              (i = N(i.plus(1), new o(1).minus(i), r + e, 1)),
              (o.precision = e + 4),
              (o.rounding = 1),
              (i = i.ln()),
              (o.precision = e),
              (o.rounding = t),
              i.times(0.5)))
      : new o(NaN);
  };
  m.inverseSine = m.asin = function () {
    var e,
      t,
      r,
      n,
      i = this,
      o = i.constructor;
    return i.isZero()
      ? new o(i)
      : ((t = i.abs().cmp(1)),
        (r = o.precision),
        (n = o.rounding),
        t !== -1
          ? t === 0
            ? ((e = Te(o, r + 4, n).times(0.5)), (e.s = i.s), e)
            : new o(NaN)
          : ((o.precision = r + 6),
            (o.rounding = 1),
            (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
            (o.precision = r),
            (o.rounding = n),
            i.times(2)));
  };
  m.inverseTangent = m.atan = function () {
    var e,
      t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u = this,
      c = u.constructor,
      p = c.precision,
      d = c.rounding;
    if (u.isFinite()) {
      if (u.isZero()) return new c(u);
      if (u.abs().eq(1) && p + 4 <= Xi)
        return (s = Te(c, p + 4, d).times(0.25)), (s.s = u.s), s;
    } else {
      if (!u.s) return new c(NaN);
      if (p + 4 <= Xi) return (s = Te(c, p + 4, d).times(0.5)), (s.s = u.s), s;
    }
    for (
      c.precision = a = p + 10,
        c.rounding = 1,
        r = Math.min(28, (a / w + 2) | 0),
        e = r;
      e;
      --e
    )
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (
      P = false,
        t = Math.ceil(a / w),
        n = 1,
        l = u.times(u),
        s = new c(u),
        i = u;
      e !== -1;

    )
      if (
        ((i = i.times(l)),
        (o = s.minus(i.div((n += 2)))),
        (i = i.times(l)),
        (s = o.plus(i.div((n += 2)))),
        s.d[t] !== undefined)
      )
        for (e = t; s.d[e] === o.d[e] && e--; );
    return (
      r && (s = s.times(2 << (r - 1))),
      (P = true),
      x(s, (c.precision = p), (c.rounding = d), true)
    );
  };
  m.isFinite = function () {
    return !!this.d;
  };
  m.isInteger = m.isInt = function () {
    return !!this.d && ae(this.e / w) > this.d.length - 2;
  };
  m.isNaN = function () {
    return !this.s;
  };
  m.isNegative = m.isNeg = function () {
    return this.s < 0;
  };
  m.isPositive = m.isPos = function () {
    return this.s > 0;
  };
  m.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };
  m.lessThan = m.lt = function (e) {
    return this.cmp(e) < 0;
  };
  m.lessThanOrEqualTo = m.lte = function (e) {
    return this.cmp(e) < 1;
  };
  m.logarithm = m.log = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u = this,
      c = u.constructor,
      p = c.precision,
      d = c.rounding,
      f = 5;
    if (e == null) (e = new c(10)), (t = true);
    else {
      if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
        return new c(NaN);
      t = e.eq(10);
    }
    if (((r = u.d), u.s < 0 || !r || !r[0] || u.eq(1)))
      return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1) o = true;
      else {
        for (i = r[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
    if (
      ((P = false),
      (a = p + f),
      (s = et(u, a)),
      (n = t ? bn(c, a + 10) : et(e, a)),
      (l = N(s, n, a, 1)),
      hr(l.d, (i = p), d))
    )
      do
        if (
          ((a += 10),
          (s = et(u, a)),
          (n = t ? bn(c, a + 10) : et(e, a)),
          (l = N(s, n, a, 1)),
          !o)
        ) {
          +te(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 &&
            (l = x(l, p + 1, 0));
          break;
        }
      while (hr(l.d, (i += 10), d));
    return (P = true), x(l, p, d);
  };
  m.minus = m.sub = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      p,
      d,
      f = this,
      y = f.constructor;
    if (((e = new y(e)), !f.d || !e.d))
      return (
        !f.s || !e.s
          ? (e = new y(NaN))
          : f.d
            ? (e.s = -e.s)
            : (e = new y(e.d || f.s !== e.s ? f : NaN)),
        e
      );
    if (f.s != e.s) return (e.s = -e.s), f.plus(e);
    if (
      ((u = f.d),
      (d = e.d),
      (a = y.precision),
      (l = y.rounding),
      !u[0] || !d[0])
    ) {
      if (d[0]) e.s = -e.s;
      else if (u[0]) e = new y(f);
      else return new y(l === 3 ? -0 : 0);
      return P ? x(e, a, l) : e;
    }
    if (
      ((r = ae(e.e / w)), (c = ae(f.e / w)), (u = u.slice()), (o = c - r), o)
    ) {
      for (
        p = o < 0,
          p
            ? ((t = u), (o = -o), (s = d.length))
            : ((t = d), (r = c), (s = u.length)),
          n = Math.max(Math.ceil(a / w), s) + 2,
          o > n && ((o = n), (t.length = 1)),
          t.reverse(),
          n = o;
        n--;

      )
        t.push(0);
      t.reverse();
    } else {
      for (
        n = u.length, s = d.length, p = n < s, p && (s = n), n = 0;
        n < s;
        n++
      )
        if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
      o = 0;
    }
    for (
      p && ((t = u), (u = d), (d = t), (e.s = -e.s)),
        s = u.length,
        n = d.length - s;
      n > 0;
      --n
    )
      u[s++] = 0;
    for (n = d.length; n > o; ) {
      if (u[--n] < d[n]) {
        for (i = n; i && u[--i] === 0; ) u[i] = Ce - 1;
        --u[i], (u[n] += Ce);
      }
      u[n] -= d[n];
    }
    for (; u[--s] === 0; ) u.pop();
    for (; u[0] === 0; u.shift()) --r;
    return u[0]
      ? ((e.d = u), (e.e = En(u, r)), P ? x(e, a, l) : e)
      : new y(l === 3 ? -0 : 0);
  };
  m.modulo = m.mod = function (e) {
    var t,
      r = this,
      n = r.constructor;
    return (
      (e = new n(e)),
      !r.d || !e.s || (e.d && !e.d[0])
        ? new n(NaN)
        : !e.d || (r.d && !r.d[0])
          ? x(new n(r), n.precision, n.rounding)
          : ((P = false),
            n.modulo == 9
              ? ((t = N(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
              : (t = N(r, e, 0, n.modulo, 1)),
            (t = t.times(e)),
            (P = true),
            r.minus(t))
    );
  };
  m.naturalExponential = m.exp = function () {
    return eo(this);
  };
  m.naturalLogarithm = m.ln = function () {
    return et(this);
  };
  m.negated = m.neg = function () {
    var e = new this.constructor(this);
    return (e.s = -e.s), x(e);
  };
  m.plus = m.add = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      p = this,
      d = p.constructor;
    if (((e = new d(e)), !p.d || !e.d))
      return (
        !p.s || !e.s
          ? (e = new d(NaN))
          : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)),
        e
      );
    if (p.s != e.s) return (e.s = -e.s), p.minus(e);
    if (
      ((u = p.d),
      (c = e.d),
      (a = d.precision),
      (l = d.rounding),
      !u[0] || !c[0])
    )
      return c[0] || (e = new d(p)), P ? x(e, a, l) : e;
    if (
      ((o = ae(p.e / w)), (n = ae(e.e / w)), (u = u.slice()), (i = o - n), i)
    ) {
      for (
        i < 0
          ? ((r = u), (i = -i), (s = c.length))
          : ((r = c), (n = o), (s = u.length)),
          o = Math.ceil(a / w),
          s = o > s ? o + 1 : s + 1,
          i > s && ((i = s), (r.length = 1)),
          r.reverse();
        i--;

      )
        r.push(0);
      r.reverse();
    }
    for (
      s = u.length,
        i = c.length,
        s - i < 0 && ((i = s), (r = c), (c = u), (u = r)),
        t = 0;
      i;

    )
      (t = ((u[--i] = u[i] + c[i] + t) / Ce) | 0), (u[i] %= Ce);
    for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; ) u.pop();
    return (e.d = u), (e.e = En(u, n)), P ? x(e, a, l) : e;
  };
  m.precision = m.sd = function (e) {
    var t,
      r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0) throw Error(tt + e);
    return (
      r.d ? ((t = aa(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
    );
  };
  m.round = function () {
    var e = this,
      t = e.constructor;
    return x(new t(e), e.e + 1, t.rounding);
  };
  m.sine = m.sin = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return r.isFinite()
      ? r.isZero()
        ? new n(r)
        : ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + Math.max(r.e, r.sd()) + w),
          (n.rounding = 1),
          (r = zc(n, pa(n, r))),
          (n.precision = e),
          (n.rounding = t),
          x(Be > 2 ? r.neg() : r, e, t, true))
      : new n(NaN);
  };
  m.squareRoot = m.sqrt = function () {
    var e,
      t,
      r,
      n,
      i,
      o,
      s = this,
      a = s.d,
      l = s.e,
      u = s.s,
      c = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c(!u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0);
    for (
      P = false,
        u = Math.sqrt(+s),
        u == 0 || u == 1 / 0
          ? ((t = te(a)),
            (t.length + l) % 2 == 0 && (t += "0"),
            (u = Math.sqrt(t)),
            (l = ae((l + 1) / 2) - (l < 0 || l % 2)),
            u == 1 / 0
              ? (t = "5e" + l)
              : ((t = u.toExponential()),
                (t = t.slice(0, t.indexOf("e") + 1) + l)),
            (n = new c(t)))
          : (n = new c(u.toString())),
        r = (l = c.precision) + 3;
      ;

    )
      if (
        ((o = n),
        (n = o.plus(N(s, o, r + 2, 1)).times(0.5)),
        te(o.d).slice(0, r) === (t = te(n.d)).slice(0, r))
      )
        if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
          if (!i && (x(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          (r += 4), (i = 1);
        } else {
          (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
            (x(n, l + 1, 1), (e = !n.times(n).eq(s)));
          break;
        }
    return (P = true), x(n, l, c.rounding, e);
  };
  m.tangent = m.tan = function () {
    var e,
      t,
      r = this,
      n = r.constructor;
    return r.isFinite()
      ? r.isZero()
        ? new n(r)
        : ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + 10),
          (n.rounding = 1),
          (r = r.sin()),
          (r.s = 1),
          (r = N(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
          (n.precision = e),
          (n.rounding = t),
          x(Be == 2 || Be == 4 ? r.neg() : r, e, t, true))
      : new n(NaN);
  };
  m.times = m.mul = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c = this,
      p = c.constructor,
      d = c.d,
      f = (e = new p(e)).d;
    if (((e.s *= c.s), !d || !d[0] || !f || !f[0]))
      return new p(
        !e.s || (d && !d[0] && !f) || (f && !f[0] && !d)
          ? NaN
          : !d || !f
            ? e.s / 0
            : e.s * 0,
      );
    for (
      r = ae(c.e / w) + ae(e.e / w),
        l = d.length,
        u = f.length,
        l < u && ((o = d), (d = f), (f = o), (s = l), (l = u), (u = s)),
        o = [],
        s = l + u,
        n = s;
      n--;

    )
      o.push(0);
    for (n = u; --n >= 0; ) {
      for (t = 0, i = l + n; i > n; )
        (a = o[i] + f[n] * d[i - n - 1] + t),
          (o[i--] = a % Ce | 0),
          (t = (a / Ce) | 0);
      o[i] = (o[i] + t) % Ce | 0;
    }
    for (; !o[--s]; ) o.pop();
    return (
      t ? ++r : o.shift(),
      (e.d = o),
      (e.e = En(o, r)),
      P ? x(e, p.precision, p.rounding) : e
    );
  };
  m.toBinary = function (e, t) {
    return ro(this, 2, e, t);
  };
  m.toDecimalPlaces = m.toDP = function (e, t) {
    var r = this,
      n = r.constructor;
    return (
      (r = new n(r)),
      e === undefined
        ? r
        : (fe(e, 0, rt),
          t === undefined ? (t = n.rounding) : fe(t, 0, 8),
          x(r, e + r.e + 1, t))
    );
  };
  m.toExponential = function (e, t) {
    var r,
      n = this,
      i = n.constructor;
    return (
      e === undefined
        ? (r = De(n, true))
        : (fe(e, 0, rt),
          t === undefined ? (t = i.rounding) : fe(t, 0, 8),
          (n = x(new i(n), e + 1, t)),
          (r = De(n, true, e + 1))),
      n.isNeg() && !n.isZero() ? "-" + r : r
    );
  };
  m.toFixed = function (e, t) {
    var r,
      n,
      i = this,
      o = i.constructor;
    return (
      e === undefined
        ? (r = De(i))
        : (fe(e, 0, rt),
          t === undefined ? (t = o.rounding) : fe(t, 0, 8),
          (n = x(new o(i), e + i.e + 1, t)),
          (r = De(n, false, e + n.e + 1))),
      i.isNeg() && !i.isZero() ? "-" + r : r
    );
  };
  m.toFraction = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a,
      l,
      u,
      c,
      p,
      d,
      f = this,
      y = f.d,
      g = f.constructor;
    if (!y) return new g(f);
    if (
      ((u = r = new g(1)),
      (n = l = new g(0)),
      (t = new g(n)),
      (o = t.e = aa(y) - f.e - 1),
      (s = o % w),
      (t.d[0] = Q(10, s < 0 ? w + s : s)),
      e == null)
    )
      e = o > 0 ? t : u;
    else {
      if (((a = new g(e)), !a.isInt() || a.lt(u))) throw Error(tt + a);
      e = a.gt(t) ? (o > 0 ? t : u) : a;
    }
    for (
      P = false,
        a = new g(te(y)),
        c = g.precision,
        g.precision = o = y.length * w * 2;
      (p = N(a, t, 0, 1, 1)), (i = r.plus(p.times(n))), i.cmp(e) != 1;

    )
      (r = n),
        (n = i),
        (i = u),
        (u = l.plus(p.times(i))),
        (l = i),
        (i = t),
        (t = a.minus(p.times(i))),
        (a = i);
    return (
      (i = N(e.minus(r), n, 0, 1, 1)),
      (l = l.plus(i.times(u))),
      (r = r.plus(i.times(n))),
      (l.s = u.s = f.s),
      (d =
        N(u, n, o, 1)
          .minus(f)
          .abs()
          .cmp(N(l, r, o, 1).minus(f).abs()) < 1
          ? [u, n]
          : [l, r]),
      (g.precision = c),
      (P = true),
      d
    );
  };
  m.toHexadecimal = m.toHex = function (e, t) {
    return ro(this, 16, e, t);
  };
  m.toNearest = function (e, t) {
    var r = this,
      n = r.constructor;
    if (((r = new n(r)), e == null)) {
      if (!r.d) return r;
      (e = new n(1)), (t = n.rounding);
    } else {
      if (
        ((e = new n(e)), t === undefined ? (t = n.rounding) : fe(t, 0, 8), !r.d)
      )
        return e.s ? r : e;
      if (!e.d) return e.s && (e.s = r.s), e;
    }
    return (
      e.d[0]
        ? ((P = false), (r = N(r, e, 0, t, 1).times(e)), (P = true), x(r))
        : ((e.s = r.s), (r = e)),
      r
    );
  };
  m.toNumber = function () {
    return +this;
  };
  m.toOctal = function (e, t) {
    return ro(this, 8, e, t);
  };
  m.toPower = m.pow = function (e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a = this,
      l = a.constructor,
      u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
    if (((a = new l(a)), a.eq(1))) return a;
    if (((n = l.precision), (o = l.rounding), e.eq(1))) return x(a, n, o);
    if (((t = ae(e.e / w)), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Gc))
      return (i = la(l, a, r, n)), e.s < 0 ? new l(1).div(i) : x(i, n, o);
    if (((s = a.s), s < 0)) {
      if (t < e.d.length - 1) return new l(NaN);
      if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
        return (a.s = s), a;
    }
    return (
      (r = Q(+a, u)),
      (t =
        r == 0 || !isFinite(r)
          ? ae(u * (Math.log("0." + te(a.d)) / Math.LN10 + a.e + 1))
          : new l(r + "").e),
      t > l.maxE + 1 || t < l.minE - 1
        ? new l(t > 0 ? s / 0 : 0)
        : ((P = false),
          (l.rounding = a.s = 1),
          (r = Math.min(12, (t + "").length)),
          (i = eo(e.times(et(a, n + r)), n)),
          i.d &&
            ((i = x(i, n + 5, 1)),
            hr(i.d, n, o) &&
              ((t = n + 10),
              (i = x(eo(e.times(et(a, t + r)), t), t + 5, 1)),
              +te(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 &&
                (i = x(i, n + 1, 0)))),
          (i.s = s),
          (P = true),
          (l.rounding = o),
          x(i, n, o))
    );
  };
  m.toPrecision = function (e, t) {
    var r,
      n = this,
      i = n.constructor;
    return (
      e === undefined
        ? (r = De(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
        : (fe(e, 1, rt),
          t === undefined ? (t = i.rounding) : fe(t, 0, 8),
          (n = x(new i(n), e, t)),
          (r = De(n, e <= n.e || n.e <= i.toExpNeg, e))),
      n.isNeg() && !n.isZero() ? "-" + r : r
    );
  };
  m.toSignificantDigits = m.toSD = function (e, t) {
    var r = this,
      n = r.constructor;
    return (
      e === undefined
        ? ((e = n.precision), (t = n.rounding))
        : (fe(e, 1, rt), t === undefined ? (t = n.rounding) : fe(t, 0, 8)),
      x(new n(r), e, t)
    );
  };
  m.toString = function () {
    var e = this,
      t = e.constructor,
      r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m.truncated = m.trunc = function () {
    return x(new this.constructor(this), this.e + 1, 1);
  };
  m.valueOf = m.toJSON = function () {
    var e = this,
      t = e.constructor,
      r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  var N = (function () {
    function e(n, i, o) {
      var s,
        a = 0,
        l = n.length;
      for (n = n.slice(); l--; )
        (s = n[l] * i + a), (n[l] = s % o | 0), (a = (s / o) | 0);
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s) l = o > s ? 1 : -1;
      else
        for (a = l = 0; a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0; o--; )
        (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
      for (; !n[0] && n.length > 1; ) n.shift();
    }
    return function (n, i, o, s, a, l) {
      var u,
        c,
        p,
        d,
        f,
        y,
        g,
        v,
        C,
        _,
        b,
        M,
        be,
        X,
        lt,
        U,
        ne,
        qe,
        ie,
        Et,
        Br = n.constructor,
        ii = n.s == i.s ? 1 : -1,
        oe = n.d,
        O = i.d;
      if (!oe || !oe[0] || !O || !O[0])
        return new Br(
          !n.s || !i.s || (oe ? O && oe[0] == O[0] : !O)
            ? NaN
            : (oe && oe[0] == 0) || !O
              ? ii * 0
              : ii / 0,
        );
      for (
        l
          ? ((f = 1), (c = n.e - i.e))
          : ((l = Ce), (f = w), (c = ae(n.e / f) - ae(i.e / f))),
          ie = O.length,
          ne = oe.length,
          C = new Br(ii),
          _ = C.d = [],
          p = 0;
        O[p] == (oe[p] || 0);
        p++
      );
      if (
        (O[p] > (oe[p] || 0) && c--,
        o == null
          ? ((X = o = Br.precision), (s = Br.rounding))
          : a
            ? (X = o + (n.e - i.e) + 1)
            : (X = o),
        X < 0)
      )
        _.push(1), (y = true);
      else {
        if (((X = (X / f + 2) | 0), (p = 0), ie == 1)) {
          for (d = 0, O = O[0], X++; (p < ne || d) && X--; p++)
            (lt = d * l + (oe[p] || 0)),
              (_[p] = (lt / O) | 0),
              (d = lt % O | 0);
          y = d || p < ne;
        } else {
          for (
            d = (l / (O[0] + 1)) | 0,
              d > 1 &&
                ((O = e(O, d, l)),
                (oe = e(oe, d, l)),
                (ie = O.length),
                (ne = oe.length)),
              U = ie,
              b = oe.slice(0, ie),
              M = b.length;
            M < ie;

          )
            b[M++] = 0;
          (Et = O.slice()), Et.unshift(0), (qe = O[0]), O[1] >= l / 2 && ++qe;
          do
            (d = 0),
              (u = t(O, b, ie, M)),
              u < 0
                ? ((be = b[0]),
                  ie != M && (be = be * l + (b[1] || 0)),
                  (d = (be / qe) | 0),
                  d > 1
                    ? (d >= l && (d = l - 1),
                      (g = e(O, d, l)),
                      (v = g.length),
                      (M = b.length),
                      (u = t(g, b, v, M)),
                      u == 1 && (d--, r(g, ie < v ? Et : O, v, l)))
                    : (d == 0 && (u = d = 1), (g = O.slice())),
                  (v = g.length),
                  v < M && g.unshift(0),
                  r(b, g, M, l),
                  u == -1 &&
                    ((M = b.length),
                    (u = t(O, b, ie, M)),
                    u < 1 && (d++, r(b, ie < M ? Et : O, M, l))),
                  (M = b.length))
                : u === 0 && (d++, (b = [0])),
              (_[p++] = d),
              u && b[0] ? (b[M++] = oe[U] || 0) : ((b = [oe[U]]), (M = 1));
          while ((U++ < ne || b[0] !== undefined) && X--);
          y = b[0] !== undefined;
        }
        _[0] || _.shift();
      }
      if (f == 1) (C.e = c), (ra = y);
      else {
        for (p = 1, d = _[0]; d >= 10; d /= 10) p++;
        (C.e = p + c * f - 1), x(C, a ? o + C.e + 1 : o, s, y);
      }
      return C;
    };
  })();
  m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
  m[Symbol.toStringTag] = "Decimal";
  var yt = (m.constructor = da(Zi));
  hn = new yt(hn);
  xn = new yt(xn);
  var Oe = yt;
  var xr = class {
    constructor(t, r, n, i, o) {
      (this.modelName = t),
        (this.name = r),
        (this.typeName = n),
        (this.isList = i),
        (this.isEnum = o);
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "",
        r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  var vn = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var Tn = (e) => e;
  var Cn = { bold: Tn, red: Tn, green: Tn, dim: Tn, enabled: false };
  var ma = { bold: pe, red: Pe, green: ct, dim: Je, enabled: true };
  var jt = {
    write(e) {
      e.writeLine(",");
    },
  };
  var Ne = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return (this.isUnderlined = true), this;
    }
    setColor(t) {
      return (this.color = t), this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)),
        this.isUnderlined &&
          t.afterNextNewline(() => {
            t.write(" ".repeat(r)).writeLine(
              this.color("~".repeat(this.contents.length)),
            );
          });
    }
  };
  var nt = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return (this.hasError = true), this;
    }
  };
  var Vt = class extends nt {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new vn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0
        ? 2
        : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new Ne("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r
        .writeLine("[")
        .withIndent(() => r.writeJoined(jt, this.items).newLine())
        .write("]"),
        this.hasError &&
          r.afterNextNewline(() => {
            r.writeLine(n.red("~".repeat(this.getPrintWidth())));
          });
    }
  };
  var fa = ": ";
  var _n = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + fa.length;
    }
    write(t) {
      let r = new Ne(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(fa).write(this.value);
    }
  };
  var Y = class e extends nt {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r,
        o = this.getField(n);
      if (!o) return;
      let s = o;
      for (let a of i) {
        let l;
        if (
          (s.value instanceof e
            ? (l = s.value.getField(a))
            : s.value instanceof Vt && (l = s.value.getField(Number(a))),
          !l)
        )
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e)) return;
        let o = n.getSubSelectionValue(i);
        if (!o) return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n) return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e)) return;
        let a = s.getSelectionParent();
        if (!a) return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select");
      if (r?.value instanceof e) return { kind: "select", value: r.value };
      let n = this.getField("include");
      if (n?.value instanceof e) return { kind: "include", value: n.value };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0
        ? 2
        : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    writeEmpty(r) {
      let n = new Ne("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(jt, [...n, ...this.suggestions]).newLine();
      }),
        r.write("}"),
        this.hasError &&
          r.afterNextNewline(() => {
            r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
          });
    }
  };
  var Z = class extends nt {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new Ne(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
  };
  var no = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  var br = "<unknown>";
  var $p =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var qp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var Vp =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var Up =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var Kp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var Gp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  var Hp =
    /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var io = class {
    getLocation() {
      return null;
    }
  };
  var oo = class {
    constructor() {
      this._error = new Error();
    }
    getLocation() {
      let t = this._error.stack;
      if (!t) return null;
      let n = xa(t).find((i) => {
        if (!i.file) return false;
        let o = Oi(i.file);
        return (
          o !== "<anonymous>" &&
          !o.includes("@prisma") &&
          !o.includes("/packages/client/src/runtime/") &&
          !o.endsWith("/runtime/binary.js") &&
          !o.endsWith("/runtime/library.js") &&
          !o.endsWith("/runtime/edge.js") &&
          !o.endsWith("/runtime/edge-esm.js") &&
          !o.startsWith("internal/") &&
          !i.methodName.includes("new ") &&
          !i.methodName.includes("getCallSite") &&
          !i.methodName.includes("Proxy.") &&
          i.methodName.split(".").length < 4
        );
      });
      return !n || !n.file
        ? null
        : {
            fileName: n.file,
            lineNumber: n.lineNumber,
            columnNumber: n.column,
          };
    }
  };
  var ba = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  var Ca = (e) => (Array.isArray(e) ? e : e.split("."));
  var so = (e, t) => Ca(t).reduce((r, n) => r && r[n], e);
  var _a = (e, t, r) =>
    Ca(t).reduceRight(
      (n, i, o, s) => Object.assign({}, so(e, s.slice(0, o)), { [i]: n }),
      r,
    );
  var Ia = I(Ni());
  var ka = I(__require("fs"));
  var Aa = {
    keyword: He,
    entity: He,
    value: (e) => pe(_t(e)),
    punctuation: _t,
    directive: He,
    function: He,
    variable: (e) => pe(_t(e)),
    string: (e) => pe(ct(e)),
    boolean: Ae,
    number: He,
    comment: zr,
  };
  var od = (e) => e;
  var Mn = {};
  var sd = 0;
  var T = {
    manual: Mn.Prism && Mn.Prism.manual,
    disableWorkerMessageHandler:
      Mn.Prism && Mn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof _e) {
          let t = e;
          return new _e(t.type, T.util.encode(t.content), t.alias);
        } else
          return Array.isArray(e)
            ? e.map(T.util.encode)
            : e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return (
          e.__id || Object.defineProperty(e, "__id", { value: ++sd }), e.__id
        );
      },
      clone: function e(t, r) {
        let n,
          i,
          o = T.util.type(t);
        switch (((r = r || {}), o)) {
          case "Object":
            if (((i = T.util.objId(t)), r[i])) return r[i];
            (n = {}), (r[i] = n);
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return (
              (i = T.util.objId(t)),
              r[i]
                ? r[i]
                : ((n = []),
                  (r[i] = n),
                  t.forEach(function (s, a) {
                    n[a] = e(s, r);
                  }),
                  n)
            );
          default:
            return t;
        }
      },
    },
    languages: {
      extend: function (e, t) {
        let r = T.util.clone(T.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || T.languages;
        let i = n[e],
          o = {};
        for (let a in i)
          if (i.hasOwnProperty(a)) {
            if (a == t) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
            r.hasOwnProperty(a) || (o[a] = i[a]);
          }
        let s = n[e];
        return (
          (n[e] = o),
          T.languages.DFS(T.languages, function (a, l) {
            l === s && a != e && (this[a] = o);
          }),
          o
        );
      },
      DFS: function e(t, r, n, i) {
        i = i || {};
        let o = T.util.objId;
        for (let s in t)
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s],
              l = T.util.type(a);
            l === "Object" && !i[o(a)]
              ? ((i[o(a)] = true), e(a, r, null, i))
              : l === "Array" && !i[o(a)] && ((i[o(a)] = true), e(a, r, s, i));
          }
      },
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return (
        T.hooks.run("before-tokenize", n),
        (n.tokens = T.tokenize(n.code, n.grammar)),
        T.hooks.run("after-tokenize", n),
        _e.stringify(T.util.encode(n.tokens), n.language)
      );
    },
    matchGrammar: function (e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g]) continue;
        if (g == s) return;
        let v = r[g];
        v = T.util.type(v) === "Array" ? v : [v];
        for (let C = 0; C < v.length; ++C) {
          let _ = v[C],
            b = _.inside,
            M = !!_.lookbehind,
            be = !!_.greedy,
            X = 0,
            lt = _.alias;
          if (be && !_.pattern.global) {
            let U = _.pattern.toString().match(/[imuy]*$/)[0];
            _.pattern = RegExp(_.pattern.source, U + "g");
          }
          _ = _.pattern || _;
          for (let U = n, ne = i; U < t.length; ne += t[U].length, ++U) {
            let qe = t[U];
            if (t.length > e.length) return;
            if (qe instanceof _e) continue;
            if (be && U != t.length - 1) {
              _.lastIndex = ne;
              var p = _.exec(e);
              if (!p) break;
              var c = p.index + (M ? p[1].length : 0),
                d = p.index + p[0].length,
                a = U,
                l = ne;
              for (
                let O = t.length;
                a < O && (l < d || (!t[a].type && !t[a - 1].greedy));
                ++a
              )
                (l += t[a].length), c >= l && (++U, (ne = l));
              if (t[U] instanceof _e) continue;
              (u = a - U), (qe = e.slice(ne, l)), (p.index -= ne);
            } else {
              _.lastIndex = 0;
              var p = _.exec(qe),
                u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            M && (X = p[1] ? p[1].length : 0);
            var c = p.index + X,
              p = p[0].slice(X),
              d = c + p.length,
              f = qe.slice(0, c),
              y = qe.slice(d);
            let ie = [U, u];
            f && (++U, (ne += f.length), ie.push(f));
            let Et = new _e(g, b ? T.tokenize(p, b) : p, lt, p, be);
            if (
              (ie.push(Et),
              y && ie.push(y),
              Array.prototype.splice.apply(t, ie),
              u != 1 && T.matchGrammar(e, t, r, U, ne, true, g),
              o)
            )
              break;
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e],
        n = t.rest;
      if (n) {
        for (let i in n) t[i] = n[i];
        delete t.rest;
      }
      return T.matchGrammar(e, r, t, 0, 0, false), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = T.hooks.all;
        (r[e] = r[e] || []), r[e].push(t);
      },
      run: function (e, t) {
        let r = T.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, i; (i = r[n++]); ) i(t);
      },
    },
    Token: _e,
  };
  T.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
    "class-name": {
      pattern:
        /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/,
  };
  T.languages.javascript = T.languages.extend("clike", {
    "class-name": [
      T.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true,
      },
    ],
    keyword: [
      { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true },
      {
        pattern:
          /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true,
      },
    ],
    number:
      /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator:
      /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
  });
  T.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  T.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true,
    },
    "function-variable": {
      pattern:
        /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: "function",
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: T.languages.javascript,
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: T.languages.javascript,
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: T.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: T.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  });
  T.languages.markup &&
    T.languages.markup.tag.addInlined("script", "javascript");
  T.languages.js = T.languages.javascript;
  T.languages.typescript = T.languages.extend("javascript", {
    keyword:
      /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin:
      /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
  });
  T.languages.ts = T.languages.typescript;
  _e.stringify = function (e, t) {
    return typeof e == "string"
      ? e
      : Array.isArray(e)
        ? e
            .map(function (r) {
              return _e.stringify(r, t);
            })
            .join("")
        : ad(e.type)(e.content);
  };
  var Ma = I(Os());
  var Sn = class e {
    static read(t) {
      let r;
      try {
        r = ka.default.readFileSync(t, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t) {
      let r = t.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t, r) {
      (this.firstLineNumber = t), (this.lines = r);
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t, r) {
      if (
        t < this.firstLineNumber ||
        t > this.lines.length + this.firstLineNumber
      )
        return this;
      let n = t - this.firstLineNumber,
        i = [...this.lines];
      return (i[n] = r(i[n])), new e(this.firstLineNumber, i);
    }
    mapLines(t) {
      return new e(
        this.firstLineNumber,
        this.lines.map((r, n) => t(r, this.firstLineNumber + n)),
      );
    }
    lineAt(t) {
      return this.lines[t - this.firstLineNumber];
    }
    prependSymbolAt(t, r) {
      return this.mapLines((n, i) => (i === t ? `${r} ${n}` : `  ${n}`));
    }
    slice(t, r) {
      let n = this.lines.slice(t - 1, r).join(`
`);
      return new e(
        t,
        Sa(n).split(`
`),
      );
    }
    highlight() {
      let t = Ra(this.toString());
      return new e(
        this.firstLineNumber,
        t.split(`
`),
      );
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var ud = {
    red: Pe,
    gray: zr,
    dim: Je,
    bold: pe,
    underline: le,
    highlightSource: (e) => e.highlight(),
  };
  var cd = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
  var hd = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ];
  var xd = ["aggregate", "count", "groupBy"];
  var uo = Symbol();
  var ja = (e) => e;
  var Fn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Ie();
      this.modelExtensionsCache = new Ie();
      this.queryCallbacksCache = new Ie();
      this.clientExtensions = ur(() =>
        this.extension.client
          ? {
              ...this.previous?.getAllClientExtensions(),
              ...this.extension.client,
            }
          : this.previous?.getAllClientExtensions(),
      );
      this.batchCallbacks = ur(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [],
          r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Ja(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Le(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== undefined &&
              (o[t][r] !== undefined && i.push(o[t][r]),
              o[t].$allOperations !== undefined && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== undefined &&
              (o.$allModels[r] !== undefined && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== undefined &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== undefined && i.push(o[r]),
            o.$allOperations !== undefined && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var Dn = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Fn(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new Fn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var Wa = L("prisma:client");
  var za = { Vercel: "vercel", "Netlify CI": "netlify" };
  var Kt = class {};
  var nl = I(__require("fs"));
  var vr = I(__require("path"));
  var Md = L("prisma:client:engines:resolveEnginePath");
  var Sd = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  var co = I(ji());
  var ll = I(Qs());
  var jn = class extends Error {
    constructor(r, n) {
      super(r);
      (this.clientVersion = n.clientVersion), (this.cause = n.cause);
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var ge = class extends jn {
    constructor(r, n) {
      super(r, n);
      this.isRetryable = n.isRetryable ?? true;
    }
  };
  var Qt = class extends ge {
    constructor(r) {
      super("This request must be retried", S(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  E(Qt, "ForcedRetryError");
  var ht = class extends ge {
    constructor(r, n) {
      super(r, S(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P5002";
    }
  };
  E(ht, "InvalidDatasourceError");
  var xt = class extends ge {
    constructor(r, n) {
      super(r, S(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  E(xt, "NotImplementedYetError");
  var j = class extends ge {
    constructor(r, n) {
      super(r, n);
      this.response = n.response;
      let i = this.response.headers.get("prisma-request-id");
      if (i) {
        let o = `(The request id was: ${i})`;
        this.message = this.message + " " + o;
      }
    }
  };
  var bt = class extends j {
    constructor(r) {
      super("Schema needs to be uploaded", S(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  E(bt, "SchemaMissingError");
  var po = "This request could not be understood by the server";
  var Tr = class extends j {
    constructor(r, n, i) {
      super(n || po, S(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  E(Tr, "BadRequestError");
  var Cr = class extends j {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", S(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  E(Cr, "HealthcheckTimeoutError");
  var _r = class extends j {
    constructor(r, n, i) {
      super(n, S(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  E(_r, "EngineStartupError");
  var Ar = class extends j {
    constructor(r) {
      super("Engine version is not supported", S(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  E(Ar, "EngineVersionNotSupportedError");
  var mo = "Request timed out";
  var Rr = class extends j {
    constructor(r, n = mo) {
      super(n, S(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  E(Rr, "GatewayTimeoutError");
  var Id = "Interactive transaction error";
  var Mr = class extends j {
    constructor(r, n = Id) {
      super(n, S(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  E(Mr, "InteractiveTransactionError");
  var Fd = "Request parameters are invalid";
  var Sr = class extends j {
    constructor(r, n = Fd) {
      super(n, S(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  E(Sr, "InvalidRequestError");
  var fo = "Requested resource does not exist";
  var kr = class extends j {
    constructor(r, n = fo) {
      super(n, S(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  E(kr, "NotFoundError");
  var go = "Unknown server error";
  var Gt = class extends j {
    constructor(r, n, i) {
      super(n || go, S(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  E(Gt, "ServerError");
  var yo = "Unauthorized, check your connection string";
  var Ir = class extends j {
    constructor(r, n = yo) {
      super(n, S(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  E(Ir, "UnauthorizedError");
  var ho = "Usage exceeded, retry again later";
  var Fr = class extends j {
    constructor(r, n = ho) {
      super(n, S(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  E(Fr, "UsageExceededError");
  var ml = {
    "@prisma/debug": "workspace:*",
    "@prisma/engines-version":
      "5.6.0-32.e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
    "@prisma/fetch-engine": "workspace:*",
    "@prisma/get-platform": "workspace:*",
    "@swc/core": "1.3.96",
    "@swc/jest": "0.2.29",
    "@types/jest": "29.5.8",
    "@types/node": "18.18.9",
    execa: "5.1.1",
    jest: "29.7.0",
    typescript: "5.2.2",
  };
  var Or = class extends ge {
    constructor(r, n) {
      super(
        `Cannot fetch data from service:
${r}`,
        S(n, true),
      );
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  E(Or, "RequestError");
  var qd = typeof require < "u" ? require : () => {};
  var bo = class {
    constructor(t = {}) {
      this.headers = new Map();
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      return this.headers.get(t) ?? null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers) t.call(r, i, n, this);
    }
  };
  var jd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var fl = L("prisma:client:dataproxyEngine");
  var yl = 3;
  var wo = L("prisma:client:dataproxyEngine");
  var Eo = class {
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t ?? this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  };
  var Nr = class extends Kt {
    constructor(r) {
      super();
      dl(r),
        (this.config = r),
        (this.env = { ...this.config.env, ...process.env }),
        (this.inlineSchema = r.inlineSchema),
        (this.inlineDatasources = r.inlineDatasources),
        (this.inlineSchemaHash = r.inlineSchemaHash),
        (this.clientVersion = r.clientVersion),
        (this.engineHash = r.engineVersion),
        (this.logEmitter = r.logEmitter),
        (this.tracingHelper = this.config.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && (await this.startPromise),
        (this.startPromise = (async () => {
          let [r, n] = this.extractHostAndApiKey();
          (this.host = r),
            (this.headerBuilder = new Eo({
              apiKey: n,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await gl(r, this.config)),
            wo("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(r) {
      r?.logs?.length &&
        r.logs.forEach((n) => {
          switch (n.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i =
                typeof n.attributes.query == "string" ? n.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split("/* traceparent");
                i = o;
              }
              this.logEmitter.emit("query", {
                query: i,
                timestamp: n.timestamp,
                duration: n.attributes.duration_ms,
                params: n.attributes.params,
                target: n.attributes.target,
              });
            }
          }
        }),
        r?.traces?.length &&
          this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
    }
    on(r, n) {
      if (r === "beforeExit")
        throw new Error(
          '"beforeExit" hook is not applicable to the remote query engine',
        );
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`
      );
    }
    async uploadSchema() {
      let r = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(r, async () => {
        let n = await wt(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        n.ok || wo("schema response status", n.status);
        let i = await Dr(n, this.clientVersion);
        if (i)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${i.message}`,
            }),
            i)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
        });
      });
    }
    request(
      r,
      { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o },
    ) {
      return this.requestInternal({
        body: r,
        traceparent: n,
        interactiveTransaction: i,
        customDataProxyFetch: o,
      });
    }
    async requestBatch(
      r,
      { traceparent: n, transaction: i, customDataProxyFetch: o },
    ) {
      let s = i?.kind === "itx" ? i.options : undefined,
        a = $n(r, i),
        { batchResult: l, elapsed: u } = await this.requestInternal({
          body: a,
          customDataProxyFetch: o,
          interactiveTransaction: s,
          traceparent: n,
        });
      return l.map((c) =>
        "errors" in c && c.errors.length > 0
          ? Pr(c.errors[0], this.clientVersion)
          : { data: c, elapsed: u },
      );
    }
    requestInternal({
      body: r,
      traceparent: n,
      customDataProxyFetch: i,
      interactiveTransaction: o,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: s }) => {
          let a = o
            ? `${o.payload.endpoint}/graphql`
            : await this.url("graphql");
          s(a);
          let l = await wt(
            a,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: n,
                interactiveTransaction: o,
              }),
              body: JSON.stringify(r),
              clientVersion: this.clientVersion,
            },
            i,
          );
          l.ok || wo("graphql response status", l.status),
            await this.handleError(await Dr(l, this.clientVersion));
          let u = await l.json(),
            c = u.extensions;
          if ((c && this.propagateResponseExtensions(c), u.errors))
            throw u.errors.length === 1
              ? Pr(u.errors[0], this.config.clientVersion)
              : new z(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        },
      });
    }
    async transaction(r, n, i) {
      let o = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${o[r]} transaction`,
        callback: async ({ logHttpCall: s }) => {
          if (r === "start") {
            let a = JSON.stringify({
                max_wait: i?.maxWait ?? 2000,
                timeout: i?.timeout ?? 5000,
                isolation_level: i?.isolationLevel,
              }),
              l = await this.url("transaction/start");
            s(l);
            let u = await wt(l, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              body: a,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Dr(u, this.clientVersion));
            let c = await u.json(),
              p = c.extensions;
            p && this.propagateResponseExtensions(p);
            let d = c.id,
              f = c["data-proxy"].endpoint;
            return { id: d, payload: { endpoint: f } };
          } else {
            let a = `${i.payload.endpoint}/${r}`;
            s(a);
            let l = await wt(a, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: n.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Dr(l, this.clientVersion));
            let c = (await l.json()).extensions;
            c && this.propagateResponseExtensions(c);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let r = { clientVersion: this.clientVersion },
        n = Object.keys(this.inlineDatasources)[0],
        i = qn({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        o;
      try {
        o = new URL(i);
      } catch {
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      }
      let { protocol: s, host: a, searchParams: l } = o;
      if (s !== "prisma:")
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
          r,
        );
      let u = l.get("api_key");
      if (u === null || u.length < 1)
        throw new ht(
          `Error validating datasource \`${n}\`: the URL must contain a valid API key`,
          r,
        );
      return [a, u];
    }
    metrics() {
      throw new xt("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(r) {
      for (let n = 0; ; n++) {
        let i = (o) => {
          this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})` });
        };
        try {
          return await r.callback({ logHttpCall: i });
        } catch (o) {
          if (!(o instanceof ge) || !o.isRetryable) throw o;
          if (n >= yl) throw o instanceof Qt ? o.cause : o;
          this.logEmitter.emit("warn", {
            message: `Attempt ${n + 1}/${yl} failed for ${r.actionGerund}: ${
              o.message ?? "(unknown)"
            }`,
          });
          let s = await pl(n);
          this.logEmitter.emit("warn", { message: `Retrying after ${s}ms` });
        }
      }
    }
    async handleError(r) {
      if (r instanceof bt)
        throw (
          (await this.uploadSchema(),
          new Qt({ clientVersion: this.clientVersion, cause: r }))
        );
      if (r) throw r;
    }
  };
  var vo = I(__require("os"));
  var xl = I(__require("path"));
  var Po = Symbol("PrismaLibraryEngineCache");
  var bl = {
    async loadLibrary(e) {
      let t = await _i(),
        r = await il("library", e);
      try {
        return e.tracingHelper.runInChildSpan(
          { name: "loadLibrary", internal: true },
          () => Kd(r),
        );
      } catch (n) {
        let i = Di({ e: n, platformInfo: t, id: r });
        throw new k(i, e.clientVersion);
      }
    },
  };
  var Co = {};
  Pt(Co, {
    QueryEngine: () => $r,
    __wbg_call_9495de66fdbe016b: () => nm,
    __wbg_debug_7960d327fd96f71a: () => Am,
    __wbg_error_f851667af71bcfc6: () => xm,
    __wbg_error_fd84ca2a8a977774: () => vm,
    __wbg_error_fe807da27c4a4ced: () => gm,
    __wbg_get_baf4855f9a986186: () => um,
    __wbg_info_5566be377f5b52ae: () => Cm,
    __wbg_log_7b690f184ae4519b: () => _m,
    __wbg_new_9d3a9ce4282a18a8: () => mm,
    __wbg_new_abda76e883ba8a5f: () => ym,
    __wbg_parse_3ac95b51fc312db8: () => fm,
    __wbg_resolve_fd40f858d9db1a04: () => Pm,
    __wbg_set_wasm: () => To,
    __wbg_stack_658279fe44541cf6: () => hm,
    __wbg_stringify_029a979dfb73aa17: () => lm,
    __wbg_then_ec5db6d509eb475f: () => Em,
    __wbg_warn_48cbddced45e5414: () => Tm,
    __wbindgen_cb_drop: () => wm,
    __wbindgen_closure_wrapper2989: () => Rm,
    __wbindgen_error_new: () => om,
    __wbindgen_is_function: () => cm,
    __wbindgen_is_string: () => pm,
    __wbindgen_is_undefined: () => am,
    __wbindgen_object_clone_ref: () => sm,
    __wbindgen_object_drop_ref: () => im,
    __wbindgen_string_get: () => dm,
    __wbindgen_string_new: () => rm,
    __wbindgen_throw: () => bm,
    debug_panic: () => Xd,
    dmmf: () => Zd,
    getBuildTimeInfo: () => Yd,
    init: () => em,
  });
  var h;
  var Qd =
    typeof TextDecoder > "u"
      ? (0, module.require)("util").TextDecoder
      : TextDecoder;
  var wl = new Qd("utf-8", { ignoreBOM: true, fatal: true });
  wl.decode();
  var Vn = null;
  var Ue = new Array(128).fill(undefined);
  Ue.push(undefined, null, true, false);
  var Lr = Ue.length;
  var G = 0;
  var Jd =
    typeof TextEncoder > "u"
      ? (0, module.require)("util").TextEncoder
      : TextEncoder;
  var Kn = new Jd("utf-8");
  var Hd =
    typeof Kn.encodeInto == "function"
      ? function (e, t) {
          return Kn.encodeInto(e, t);
        }
      : function (e, t) {
          let r = Kn.encode(e);
          return t.set(r), { read: e.length, written: r.length };
        };
  var Bn = null;
  var $r = class e {
    static __wrap(t) {
      t = t >>> 0;
      let r = Object.create(e.prototype);
      return (r.__wbg_ptr = t), r;
    }
    __destroy_into_raw() {
      let t = this.__wbg_ptr;
      return (this.__wbg_ptr = 0), t;
    }
    free() {
      let t = this.__destroy_into_raw();
      h.__wbg_queryengine_free(t);
    }
    constructor(t, r, n) {
      try {
        let a = h.__wbindgen_add_to_stack_pointer(-16);
        h.queryengine_new(a, J(t), J(r), Qn(n) ? 0 : J(n));
        var i = xe()[a / 4 + 0],
          o = xe()[a / 4 + 1],
          s = xe()[a / 4 + 2];
        if (s) throw ce(o);
        return e.__wrap(i);
      } finally {
        h.__wbindgen_add_to_stack_pointer(16);
      }
    }
    connect(t) {
      let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        n = G,
        i = h.queryengine_connect(this.__wbg_ptr, r, n);
      return ce(i);
    }
    disconnect(t) {
      let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        n = G,
        i = h.queryengine_disconnect(this.__wbg_ptr, r, n);
      return ce(i);
    }
    query(t, r, n) {
      let i = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        o = G,
        s = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
        a = G;
      var l = Qn(n) ? 0 : re(n, h.__wbindgen_malloc, h.__wbindgen_realloc),
        u = G;
      let c = h.queryengine_query(this.__wbg_ptr, i, o, s, a, l, u);
      return ce(c);
    }
    startTransaction(t, r) {
      let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        i = G,
        o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
        s = G,
        a = h.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
      return ce(a);
    }
    commitTransaction(t, r) {
      let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        i = G,
        o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
        s = G,
        a = h.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
      return ce(a);
    }
    dmmf(t) {
      let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        n = G,
        i = h.queryengine_dmmf(this.__wbg_ptr, r, n);
      return ce(i);
    }
    rollbackTransaction(t, r) {
      let n = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        i = G,
        o = re(r, h.__wbindgen_malloc, h.__wbindgen_realloc),
        s = G,
        a = h.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
      return ce(a);
    }
    sdlSchema() {
      let t = h.queryengine_sdlSchema(this.__wbg_ptr);
      return ce(t);
    }
    metrics(t) {
      let r = re(t, h.__wbindgen_malloc, h.__wbindgen_realloc),
        n = G,
        i = h.queryengine_metrics(this.__wbg_ptr, r, n);
      return ce(i);
    }
  };
  var El = {
    async loadLibrary(e) {
      let { generator: t, clientVersion: r, adapter: n } = e,
        i = await e.getQueryEngineWasmModule?.();
      if (t?.previewFeatures.includes("driverAdapters") === undefined)
        throw new k(
          'The `driverAdapters` preview feature is required with `engineType="wasm"`',
          r,
        );
      if (n === undefined)
        throw new k(
          'The `adapter` option for `PrismaClient` is required with `engineType="wasm"`',
          r,
        );
      if (i == null)
        throw new k(
          "The loaded wasm module was unexpectedly `undefined` or `null` once loaded",
          r,
        );
      let o = new WebAssembly.Instance(i, { "./query_engine_bg.js": Co });
      return (
        To(o.exports),
        {
          debugPanic() {
            return Promise.reject("{}");
          },
          dmmf() {
            return Promise.resolve("{}");
          },
          version() {
            return { commit: "unknown", version: "unknown" };
          },
          QueryEngine: $r,
        }
      );
    },
  };
  var Mm = "P2036";
  var $e = L("prisma:client:libraryEngine");
  var Pl = [...Ai, "native"];
  var vl = 0;
  var Wt = class extends Kt {
    constructor(r, n) {
      super();
      mt(r.generator) === "wasm"
        ? (this.libraryLoader = n ?? El)
        : (this.libraryLoader = n ?? bl),
        (this.config = r),
        (this.libraryStarted = false),
        (this.logQueries = r.logQueries ?? false),
        (this.logLevel = r.logLevel ?? "error"),
        (this.logEmitter = r.logEmitter),
        (this.datamodel = atob(r.inlineSchema)),
        r.enableDebugLogs && (this.logLevel = "debug");
      let o = Object.keys(r.overrideDatasources)[0],
        s = r.overrideDatasources[o]?.url;
      o !== undefined &&
        s !== undefined &&
        (this.datasourceOverrides = { [o]: s }),
        (this.libraryInstantiationPromise = this.instantiateLibrary()),
        this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      vl === 10 &&
        console.warn(
          `${Ae(
            "warn(prisma-client)",
          )} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`,
        );
    }
    async transaction(r, n, i) {
      await this.start();
      let o = JSON.stringify(n),
        s;
      if (r === "start") {
        let l = JSON.stringify({
          max_wait: i?.maxWait ?? 2000,
          timeout: i?.timeout ?? 5000,
          isolation_level: i?.isolationLevel,
        });
        s = await this.engine?.startTransaction(l, o);
      } else
        r === "commit"
          ? (s = await this.engine?.commitTransaction(i.id, o))
          : r === "rollback" &&
            (s = await this.engine?.rollbackTransaction(i.id, o));
      let a = this.parseEngineResponse(s);
      if (Im(a)) {
        let l = this.getExternalAdapterError(a);
        throw l
          ? l.error
          : new W(a.message, {
              code: a.error_code,
              clientVersion: this.config.clientVersion,
              meta: a.meta,
            });
      }
      return a;
    }
    async instantiateLibrary() {
      if (($e("internalSetup"), this.libraryInstantiationPromise))
        return this.libraryInstantiationPromise;
      hi(),
        (this.platform = await this.getPlatform()),
        await this.loadEngine(),
        this.version();
    }
    async getPlatform() {
      {
        if (this.platform) return this.platform;
        let r = await St();
        if (!Pl.includes(r))
          throw new k(
            `Unknown ${Pe("PRISMA_QUERY_ENGINE_LIBRARY")} ${Pe(
              pe(r),
            )}. Possible binaryTargets: ${ct(
              Pl.join(", "),
            )} or a path to the query engine library.
You may have to run ${ct("prisma generate")} for your changes to take effect.`,
            this.config.clientVersion,
          );
        return r;
      }
    }
    parseEngineResponse(r) {
      if (!r)
        throw new z("Response from the Engine was empty", {
          clientVersion: this.config.clientVersion,
        });
      try {
        return JSON.parse(r);
      } catch {
        throw new z("Unable to JSON.parse response from engine", {
          clientVersion: this.config.clientVersion,
        });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor ||
          ((this.library = await this.libraryLoader.loadLibrary(this.config)),
          (this.QueryEngineConstructor = this.library.QueryEngine));
        try {
          let r = new WeakRef(this),
            { adapter: n } = this.config;
          n && $e("Using driver adapter: %O", n),
            (this.engine = new this.QueryEngineConstructor(
              {
                datamodel: this.datamodel,
                env: process.env,
                logQueries: this.config.logQueries ?? false,
                ignoreEnvVarErrors: true,
                datasourceOverrides: this.datasourceOverrides ?? {},
                logLevel: this.logLevel,
                configDir: this.config.cwd,
                engineProtocol: "json",
              },
              (i) => {
                r.deref()?.logger(i);
              },
              n,
            )),
            vl++;
        } catch (r) {
          let n = r,
            i = this.parseInitError(n.message);
          throw typeof i == "string"
            ? n
            : new k(i.message, this.config.clientVersion, i.error_code);
        }
      }
    }
    logger(r) {
      let n = this.parseEngineResponse(r);
      if (n) {
        if ("span" in n) {
          this.config.tracingHelper.createEngineSpan(n);
          return;
        }
        (n.level = n?.level.toLowerCase() ?? "unknown"),
          Sm(n)
            ? this.logEmitter.emit("query", {
                timestamp: new Date(),
                query: n.query,
                params: n.params,
                duration: Number(n.duration_ms),
                target: n.module_path,
              })
            : km(n)
              ? (this.loggerRustPanic = new he(
                  this.getErrorMessageWithLink(
                    `${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`,
                  ),
                  this.config.clientVersion,
                ))
              : this.logEmitter.emit(n.level, {
                  timestamp: new Date(),
                  message: n.message,
                  target: n.module_path,
                });
      }
    }
    getErrorMessageWithLink(r) {
      return cl({
        platform: this.platform,
        title: r,
        version: this.config.clientVersion,
        engineVersion: this.versionInfo?.commit,
        database: this.config.activeProvider,
        query: this.lastQuery,
      });
    }
    parseInitError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    parseRequestError(r) {
      try {
        return JSON.parse(r);
      } catch {}
      return r;
    }
    on(r, n) {
      if (r === "beforeExit")
        throw new Error(
          '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.',
        );
      this.logEmitter.on(r, n);
    }
    async start() {
      if (
        (await this.libraryInstantiationPromise,
        await this.libraryStoppingPromise,
        this.libraryStartingPromise)
      )
        return (
          $e(
            `library already starting, this.libraryStarted: ${this.libraryStarted}`,
          ),
          this.libraryStartingPromise
        );
      if (this.libraryStarted) return;
      let r = async () => {
        $e("library starting");
        try {
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(n)),
            (this.libraryStarted = true),
            $e("library started");
        } catch (n) {
          let i = this.parseInitError(n.message);
          throw typeof i == "string"
            ? n
            : new k(i.message, this.config.clientVersion, i.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return (
        (this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan(
          "connect",
          r,
        )),
        this.libraryStartingPromise
      );
    }
    async stop() {
      if (
        (await this.libraryStartingPromise,
        await this.executingQueryPromise,
        this.libraryStoppingPromise)
      )
        return $e("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted) return;
      let r = async () => {
        await new Promise((i) => setTimeout(i, 5)), $e("library stopping");
        let n = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(n)),
          (this.libraryStarted = false),
          (this.libraryStoppingPromise = undefined),
          $e("library stopped");
      };
      return (
        (this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan(
          "disconnect",
          r,
        )),
        this.libraryStoppingPromise
      );
    }
    version() {
      return (
        (this.versionInfo = this.library?.version()),
        this.versionInfo?.version ?? "unknown"
      );
    }
    debugPanic(r) {
      return this.library?.debugPanic(r);
    }
    async request(r, { traceparent: n, interactiveTransaction: i }) {
      $e(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let o = JSON.stringify({ traceparent: n }),
        s = JSON.stringify(r);
      try {
        await this.start(),
          (this.executingQueryPromise = this.engine?.query(s, o, i?.id)),
          (this.lastQuery = s);
        let a = this.parseEngineResponse(await this.executingQueryPromise);
        if (a.errors)
          throw a.errors.length === 1
            ? this.buildQueryError(a.errors[0])
            : new z(JSON.stringify(a.errors), {
                clientVersion: this.config.clientVersion,
              });
        if (this.loggerRustPanic) throw this.loggerRustPanic;
        return { data: a, elapsed: 0 };
      } catch (a) {
        if (a instanceof k) throw a;
        if (a.code === "GenericFailure" && a.message?.startsWith("PANIC:"))
          throw new he(
            this.getErrorMessageWithLink(a.message),
            this.config.clientVersion,
          );
        let l = this.parseRequestError(a.message);
        throw typeof l == "string"
          ? a
          : new z(
              `${l.message}
${l.backtrace}`,
              { clientVersion: this.config.clientVersion },
            );
      }
    }
    async requestBatch(r, { transaction: n, traceparent: i }) {
      $e("requestBatch");
      let o = $n(r, n);
      await this.start(),
        (this.lastQuery = JSON.stringify(o)),
        (this.executingQueryPromise = this.engine.query(
          this.lastQuery,
          JSON.stringify({ traceparent: i }),
          hl(n),
        ));
      let s = await this.executingQueryPromise,
        a = this.parseEngineResponse(s);
      if (a.errors)
        throw a.errors.length === 1
          ? this.buildQueryError(a.errors[0])
          : new z(JSON.stringify(a.errors), {
              clientVersion: this.config.clientVersion,
            });
      let { batchResult: l, errors: u } = a;
      if (Array.isArray(l))
        return l.map((c) =>
          c.errors && c.errors.length > 0
            ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0])
            : { data: c, elapsed: 0 },
        );
      throw u && u.length === 1
        ? new Error(u[0].error)
        : new Error(JSON.stringify(a));
    }
    buildQueryError(r) {
      if (r.user_facing_error.is_panic)
        return new he(
          this.getErrorMessageWithLink(r.user_facing_error.message),
          this.config.clientVersion,
        );
      let n = this.getExternalAdapterError(r.user_facing_error);
      return n ? n.error : Pr(r, this.config.clientVersion);
    }
    getExternalAdapterError(r) {
      if (r.error_code === Mm && this.config.adapter) {
        let n = r.meta?.id;
        un(
          typeof n == "number",
          "Malformed external JS error received from the engine",
        );
        let i = this.config.adapter.errorRegistry.consumeError(n);
        return un(i, "External error with reported id was not registered"), i;
      }
    }
    async metrics(r) {
      await this.start();
      let n = await this.engine.metrics(JSON.stringify(r));
      return r.format === "prometheus" ? n : this.parseEngineResponse(n);
    }
  };
  var Sl = I(_o());
  var Ke = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return (this.isRequired = true), this;
    }
    write(t) {
      let {
        colors: { green: r },
      } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
        t.write(r(this.name)),
        this.isRequired || t.write(r("?")),
        t.write(r(": ")),
        typeof this.value == "string"
          ? t.write(r(this.value))
          : t.write(this.value);
    }
  };
  var Wn = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return (
        this.fields.push({
          write(n) {
            let { green: i, dim: o } = n.context.colors;
            n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
          },
        }),
        this
      );
    }
    write(t) {
      let {
        colors: { green: r },
      } = t.context;
      t.writeLine(r("{"))
        .withIndent(() => {
          t.writeJoined(jt, this.fields).newLine();
        })
        .write(r("}"))
        .addMarginSymbol(r("+"));
    }
  };
  var Wm = 3;
  var Ym = {
    findUnique: "findUnique",
    findUniqueOrThrow: "findUniqueOrThrow",
    findFirst: "findFirst",
    findFirstOrThrow: "findFirstOrThrow",
    findMany: "findMany",
    count: "aggregate",
    create: "createOne",
    createMany: "createMany",
    update: "updateOne",
    updateMany: "updateMany",
    upsert: "upsertOne",
    delete: "deleteOne",
    deleteMany: "deleteMany",
    executeRaw: "executeRaw",
    queryRaw: "queryRaw",
    aggregate: "aggregate",
    groupBy: "groupBy",
    runCommandRaw: "runCommandRaw",
    findRaw: "findRaw",
    aggregateRaw: "aggregateRaw",
  };
  var Ao = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName &&
        (this.model =
          this.params.runtimeDataModel.models[this.params.modelName]);
    }
    throwValidationError(t) {
      Zn({
        errors: [t],
        originalMethod: this.params.originalMethod,
        args: this.params.rootArgs ?? {},
        callsite: this.params.callsite,
        errorFormat: this.params.errorFormat,
        clientVersion: this.params.clientVersion,
      });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.model))
        return {
          name: this.params.modelName,
          fields: this.model.fields.map((t) => ({
            name: t.name,
            typeName: "boolean",
            isRelation: t.kind === "object",
          })),
        };
    }
    isRawAction() {
      return [
        "executeRaw",
        "queryRaw",
        "runCommandRaw",
        "findRaw",
        "aggregateRaw",
      ].includes(this.params.action);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(
          this.params.modelName,
        );
    }
    findField(t) {
      return this.model?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t),
        n = r?.kind === "object" ? r.type : undefined;
      return new e({
        ...this.params,
        modelName: n,
        selectionPath: this.params.selectionPath.concat(t),
      });
    }
    nestArgument(t) {
      return new e({
        ...this.params,
        argumentPath: this.params.argumentPath.concat(t),
      });
    }
  };
  var $l = (e) => ({ command: e });
  var ql = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  var lf = /^(\s*alter\s)/i;
  var Ul = L("prisma:client");
  var So =
    ({ clientMethod: e, activeProvider: t, activeProviderFlavour: r }) =>
    (n) => {
      r !== undefined && (t = r);
      let i = "",
        o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        (i = s), (o = { values: jr(a || []), __prismaRawParameters__: true });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (i = n.sql),
              (o = { values: jr(n.values), __prismaRawParameters__: true });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (i = n.text),
              (o = { values: jr(n.values), __prismaRawParameters__: true });
            break;
          }
          case "sqlserver": {
            (i = ql(n)),
              (o = { values: jr(n.values), __prismaRawParameters__: true });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        o?.values
          ? Ul(`prisma.${e}(${i}, ${o.values})`)
          : Ul(`prisma.${e}(${i})`),
        { query: i, parameters: o }
      );
    };
  var Kl = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new me(t, r);
    },
  };
  var Ql = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
  var Jl = {
    isEnabled() {
      return false;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    async createEngineSpan() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  };
  var Io = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Jl;
    }
  };
  var uf = [
    "$connect",
    "$disconnect",
    "$on",
    "$transaction",
    "$use",
    "$extends",
  ];
  var Fo = uf;
  var Xn = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var Zl = I(ji());
  var df = {
    aggregate: false,
    aggregateRaw: false,
    createMany: true,
    createOne: true,
    deleteMany: true,
    deleteOne: true,
    executeRaw: true,
    findFirst: false,
    findFirstOrThrow: false,
    findMany: false,
    findRaw: false,
    findUnique: false,
    findUniqueOrThrow: false,
    groupBy: false,
    queryRaw: false,
    runCommandRaw: true,
    updateMany: true,
    updateOne: true,
    upsertOne: true,
  };
  var ri = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r
        ? (this.batches[r] ||
            ((this.batches[r] = []),
            this.tickActive ||
              ((this.tickActive = true),
              process.nextTick(() => {
                this.dispatchBatches(), (this.tickActive = false);
              }))),
          new Promise((n, i) => {
            this.batches[r].push({ request: t, resolve: n, reject: i });
          }))
        : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t],
          r.length === 1
            ? this.options
                .singleLoader(r[0].request)
                .then((n) => {
                  n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
                })
                .catch((n) => {
                  r[0].reject(n);
                })
            : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
              this.options
                .batchLoader(r.map((n) => n.request))
                .then((n) => {
                  if (n instanceof Error)
                    for (let i = 0; i < r.length; i++) r[i].reject(n);
                  else
                    for (let i = 0; i < r.length; i++) {
                      let o = n[i];
                      o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                    }
                })
                .catch((n) => {
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  var mf = L("prisma:client:request_handler");
  var ni = class {
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new ri({
          batchLoader: Ua(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((p) => p.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              u = n.some((p) => Oo(p.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: ff(o),
                containsWrite: u,
                customDataProxyFetch: i,
              })
            ).map((p, d) => {
              if (p instanceof Error) return p;
              try {
                return this.mapQueryEngineResult(n[d], p);
              } catch (f) {
                return f;
              }
            });
          }),
          singleLoader: async (n) => {
            let i =
                n.transaction?.kind === "itx" ? Xl(n.transaction) : undefined,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Oo(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Yl(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === "batch" &&
              i.transaction?.kind === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = n?.elapsed,
        s = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
    }) {
      if ((mf(t), gf(t, i) || t instanceof Ve)) throw t;
      if (t instanceof W && yf(t)) {
        let a = eu(t.meta);
        Zn({
          args: o,
          errors: [a],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
        });
      }
      let s = t.message;
      throw (
        (n &&
          (s = Ut({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: s,
          })),
        (s = this.sanitizeMessage(s)),
        t.code
          ? new W(s, {
              code: t.code,
              clientVersion: this.client._clientVersion,
              meta: t.meta,
              batchRequestIdx: t.batchRequestIdx,
            })
          : t.isPanic
            ? new he(s, this.client._clientVersion)
            : t instanceof z
              ? new z(s, {
                  clientVersion: this.client._clientVersion,
                  batchRequestIdx: t.batchRequestIdx,
                })
              : t instanceof k
                ? new k(s, this.client._clientVersion)
                : t instanceof he
                  ? new he(s, this.client._clientVersion)
                  : ((t.clientVersion = this.client._clientVersion), t))
      );
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, Zl.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.values(t)[0],
        o = r.filter((a) => a !== "select" && a !== "include"),
        s = ti(so(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  var tu = "5.6.0";
  var ru = tu;
  var lu = I(_o());
  var B = class extends Error {
    constructor(t) {
      super(
        t +
          `
Read more at https://pris.ly/d/client-constructor`,
      ),
        (this.name = "PrismaClientConstructorValidationError");
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  E(B, "PrismaClientConstructorValidationError");
  var ou = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "__internal",
  ];
  var su = ["pretty", "colorless", "minimal"];
  var au = ["info", "query", "warn", "error"];
  var xf = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new B(
            `Invalid value ${JSON.stringify(
              e,
            )} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = zt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(
              e,
            )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new B(`Invalid value ${JSON.stringify(
                  e,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new B(`Invalid value ${JSON.stringify(
                  o,
                )} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (e === null) return;
      if (e === undefined)
        throw new B(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Jn(t).includes("driverAdapters"))
        throw new B(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (mt() === "binary")
        throw new B(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new B(`Invalid value ${JSON.stringify(
          e,
        )} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new B(
            `Invalid value ${JSON.stringify(
              e,
            )} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!su.includes(e)) {
          let t = zt(e, su);
          throw new B(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new B(
          `Invalid value ${JSON.stringify(
            e,
          )} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !au.includes(r)) {
          let n = zt(r, au);
          throw new B(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = zt(i, o);
              throw new B(
                `Invalid value ${JSON.stringify(
                  i,
                )} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new B(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new B(
          `Invalid value ${JSON.stringify(
            e,
          )} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = zt(r, t);
          throw new B(
            `Invalid property ${JSON.stringify(
              r,
            )} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
  var at = L("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var wf = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  };
  var Ef = Symbol.for("prisma.client.transaction.id");
  var Pf = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
  var Tf = new Set([
    "toJSON",
    "$$typeof",
    "asymmetricMatch",
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive,
  ]);
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "/home/joaco/repos/apis-backend/node_modules/.prisma/client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    NotFoundError: NotFoundError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "5.6.0",
    engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.NotFoundError = NotFoundError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw2;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull,
  };
  var path = __require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    Serializable: "Serializable",
  });
  exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    email: "email",
    hash: "hash",
    name: "name",
    lastname: "lastname",
    phone: "phone",
  };
  exports.Prisma.TeacherScalarFieldEnum = {
    id: "id",
    title: "title",
    bio: "bio",
  };
  exports.Prisma.ServiceScalarFieldEnum = {
    id: "id",
    teacherId: "teacherId",
    name: "name",
    description: "description",
    category: "category",
    type: "type",
    frequency: "frequency",
    duration: "duration",
    price: "price",
    published: "published",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  exports.Prisma.CommentScalarFieldEnum = {
    id: "id",
    serviceId: "serviceId",
    comment: "comment",
    rejected: "rejected",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  exports.Prisma.ContractScalarFieldEnum = {
    id: "id",
    serviceId: "serviceId",
    userId: "userId",
    phone: "phone",
    email: "email",
    time: "time",
    text: "text",
    status: "status",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc",
  };
  exports.Prisma.ModelName = {
    User: "User",
    Teacher: "Teacher",
    Service: "Service",
    Comment: "Comment",
    Contract: "Contract",
  };
  var config = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js",
      },
      output: {
        value: "/home/joaco/repos/apis-backend/node_modules/@prisma/client",
        fromEnvVar: null,
      },
      config: {
        engineType: "library",
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "debian-openssl-3.0.x",
          native: true,
        },
      ],
      previewFeatures: [],
    },
    relativeEnvPaths: {
      rootEnvPath: "../../../.env",
      schemaEnvPath: "../../../.env",
    },
    relativePath: "../../../prisma",
    clientVersion: "5.6.0",
    engineVersion: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
    datasourceNames: ["db"],
    activeProvider: "sqlite",
    postinstall: false,
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null,
        },
      },
    },
    inlineSchema:
      "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAic3FsaXRlIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICBTdHJpbmcgQHVuaXF1ZQogIGhhc2ggICAgIFN0cmluZwogIG5hbWUgICAgIFN0cmluZwogIGxhc3RuYW1lIFN0cmluZwogIHBob25lICAgIFN0cmluZwoKICBjb250cmFjdHMgQ29udHJhY3RbXQp9Cgptb2RlbCBUZWFjaGVyIHsKICBpZCAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0aXRsZSBTdHJpbmcKICBiaW8gICBTdHJpbmcKCiAgc2VydmljZXMgU2VydmljZVtdCn0KCm1vZGVsIFNlcnZpY2UgewogIGlkICAgICAgICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0ZWFjaGVySWQgSW50CgogIG5hbWUgICAgICAgIFN0cmluZwogIGRlc2NyaXB0aW9uIFN0cmluZwogIGNhdGVnb3J5ICAgIFN0cmluZyAvLyBkZXBvcnRlLCBhcnRlLCBpZGlvbWFzLCBtw7pzaWNhLCBjb2NpbmEsIG1hbnVhbGlkYWRlcywgYmFpbGUsIG90cm9zCiAgdHlwZSAgICAgICAgU3RyaW5nIC8vIGluZGl2aWR1YWwsIGdydXBhbAogIGZyZXF1ZW5jeSAgIFN0cmluZyAvLyDDum5pY2EsIHNlbWFuYWwsIG1lbnN1YWwKICBkdXJhdGlvbiAgICBJbnQKICBwcmljZSAgICAgICBJbnQKICBwdWJsaXNoZWQgICBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQoKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKCiAgdGVhY2hlciAgIFRlYWNoZXIgICAgQHJlbGF0aW9uKGZpZWxkczogW3RlYWNoZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29tbWVudHMgIENvbW1lbnRbXQogIGNvbnRyYWN0cyBDb250cmFjdFtdCn0KCm1vZGVsIENvbW1lbnQgewogIGlkICAgICAgICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBzZXJ2aWNlSWQgSW50CgogIGNvbW1lbnQgIFN0cmluZwogIHJlamVjdGVkIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpCgogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAoKICBzZXJ2aWNlIFNlcnZpY2UgQHJlbGF0aW9uKGZpZWxkczogW3NlcnZpY2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIENvbnRyYWN0IHsKICBpZCAgICAgICAgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgc2VydmljZUlkIEludAogIHVzZXJJZCAgICBJbnQKCiAgcGhvbmUgIFN0cmluZwogIGVtYWlsICBTdHJpbmcKICB0aW1lICAgU3RyaW5nCiAgdGV4dCAgIFN0cmluZwogIHN0YXR1cyBTdHJpbmcgLy8gc29saWNpdGFkYSwgYWNlcHRhZGEsIGZpbmFsaXphZGEsIGNhbmNlbGFkYQoKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKCiAgdXNlciAgICBVc2VyICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHNlcnZpY2UgU2VydmljZSBAcmVsYXRpb24oZmllbGRzOiBbc2VydmljZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKfQo=",
    inlineSchemaHash:
      "128f369bf70feaac3c00f3106db88e4005dcd08421c78ac5c7940bb40aa63625",
    noEngine: false,
  };
  var fs = __require("fs");
  config.dirname = __dirname;
  if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = ["node_modules/.prisma/client", ".prisma/client"];
    const alternativePath =
      alternativePaths.find((altPath) => {
        return fs.existsSync(
          path.join(process.cwd(), altPath, "schema.prisma"),
        );
      }) ?? alternativePaths[0];
    config.dirname = path.join(process.cwd(), alternativePath);
    config.isBundled = true;
  }
  config.runtimeDataModel = JSON.parse(
    '{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"hash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"lastname","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contracts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Contract","relationName":"ContractToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Teacher":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bio","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"services","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Service","relationName":"ServiceToTeacher","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Service":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"teacherId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"category","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"frequency","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"duration","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"teacher","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Teacher","relationName":"ServiceToTeacher","relationFromFields":["teacherId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"comments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Comment","relationName":"CommentToService","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"contracts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Contract","relationName":"ContractToService","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Comment":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"serviceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"comment","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rejected","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"service","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Service","relationName":"CommentToService","relationFromFields":["serviceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Contract":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"serviceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"time","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"text","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"ContractToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"service","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Service","relationName":"ContractToService","relationFromFields":["serviceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
  );
  defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
  config.getQueryEngineWasmModule = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath:
      config.relativeEnvPaths.rootEnvPath &&
      path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath:
      config.relativeEnvPaths.schemaEnvPath &&
      path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
  });
  var PrismaClient = getPrismaClient2(config);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
  path.join(
    process.cwd(),
    "node_modules/.prisma/client/libquery_engine-debian-openssl-3.0.x.so.node",
  );
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
});

// node_modules/@prisma/client/index.js
var require_client2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_client(),
  };
});

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (path) => {
  const groups = [];
  for (let i = 0; ; ) {
    let replaced = false;
    path = path.replace(/\{[^}]+\}/g, (m) => {
      const mark = `@\\${i}`;
      groups[i] = [mark, m];
      i++;
      replaced = true;
      return mark;
    });
    if (!replaced) {
      break;
    }
  }
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].indexOf(mark) !== -1) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [
          label,
          match[1],
          new RegExp("^" + match[2] + "$"),
        ];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/"
    ? result.slice(0, -1)
    : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  const match = path.match(/^(.+|)(\/\:[^\/]+)\?$/);
  if (!match) return null;
  const base = match[1];
  const optional = base + match[2];
  return [base === "" ? "/" : base.replace(/\/$/, ""), optional];
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(
          url.slice(valueIndex, endIndex === -1 ? undefined : endIndex),
        );
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1
        ? nextKeyIndex === -1
          ? undefined
          : nextKeyIndex
        : valueIndex,
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(
        valueIndex + 1,
        nextKeyIndex === -1 ? undefined : nextKeyIndex,
      );
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      (results[name] ?? (results[name] = [])).push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  const pairs = cookie.trim().split(";");
  return pairs.reduce((parsedCookie, pairStr) => {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) return parsedCookie;
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if ((name && name !== cookieName) || !validCookieNameRegEx.test(cookieName))
      return parsedCookie;
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"'))
      cookieValue = cookieValue.slice(1, -1);
    if (validCookieValueRegEx.test(cookieValue))
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
    return parsedCookie;
  }, {});
};
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain) {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite}`;
  }
  if (opt.partitioned) {
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt = {}) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  constructor(writable) {
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder();
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch (e) {}
    return this;
  }
  async writeln(input) {
    await this.write(input + "\n");
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch (e) {}
  }
  async pipe(body) {
    this.writer.releaseLock();
    await body.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var Context = class {
  constructor(req, options) {
    this.env = {};
    this._var = {};
    this.finalized = false;
    this.error = undefined;
    this._status = 200;
    this._h = undefined;
    this._pH = undefined;
    this._init = true;
    this._renderer = (content) => this.html(content);
    this.notFoundHandler = () => new Response();
    this.render = (...args) => this._renderer(...args);
    this.setRenderer = (renderer) => {
      this._renderer = renderer;
    };
    this.header = (name, value, options2) => {
      if (value === undefined) {
        if (this._h) {
          this._h.delete(name);
        } else if (this._pH) {
          delete this._pH[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!this._h) {
          this._init = false;
          this._h = new Headers(this._pH);
          this._pH = {};
        }
        this._h.append(name, value);
      } else {
        if (this._h) {
          this._h.set(name, value);
        } else {
          this._pH ?? (this._pH = {});
          this._pH[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      this._init = false;
      this._status = status;
    };
    this.set = (key, value) => {
      this._var ?? (this._var = {});
      this._var[key] = value;
    };
    this.get = (key) => {
      return this._var ? this._var[key] : undefined;
    };
    this.newResponse = (data, arg, headers) => {
      if (this._init && !headers && !arg && this._status === 200) {
        return new Response(data, {
          headers: this._pH,
        });
      }
      if (arg && typeof arg !== "number") {
        const res = new Response(data, arg);
        const contentType = this._pH?.["content-type"];
        if (contentType) {
          res.headers.set("content-type", contentType);
        }
        return res;
      }
      const status = arg ?? this._status;
      this._pH ?? (this._pH = {});
      this._h ?? (this._h = new Headers());
      for (const [k, v] of Object.entries(this._pH)) {
        this._h.set(k, v);
      }
      if (this._res) {
        this._res.headers.forEach((v, k) => {
          this._h?.set(k, v);
        });
        for (const [k, v] of Object.entries(this._pH)) {
          this._h.set(k, v);
        }
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          this._h.set(k, v);
        } else {
          this._h.delete(k);
          for (const v2 of v) {
            this._h.append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: this._h,
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number"
        ? this.newResponse(data, arg, headers)
        : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!this._pH) {
        if (this._init && !headers && !arg) {
          return new Response(text);
        }
        this._pH = {};
      }
      if (this._pH["content-type"]) {
        this._pH["content-type"] = TEXT_PLAIN;
      }
      return typeof arg === "number"
        ? this.newResponse(text, arg, headers)
        : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number"
        ? this.newResponse(body, arg, headers)
        : this.newResponse(body, arg);
    };
    this.jsonT = (object, arg, headers) => {
      const response =
        typeof arg === "number"
          ? this.json(object, arg, headers)
          : this.json(object, arg);
      return {
        response,
        data: object,
        format: "json",
        status: response.status,
      };
    };
    this.html = (html, arg, headers) => {
      this._pH ?? (this._pH = {});
      this._pH["content-type"] = "text/html; charset=UTF-8";
      if (typeof html === "object") {
        if (!(html instanceof Promise)) {
          html = html.toString();
        }
        if (html instanceof Promise) {
          return html.then((html2) => {
            return typeof arg === "number"
              ? this.newResponse(html2, arg, headers)
              : this.newResponse(html2, arg);
          });
        }
      }
      return typeof arg === "number"
        ? this.newResponse(html, arg, headers)
        : this.newResponse(html, arg);
    };
    this.redirect = (location, status = 302) => {
      this._h ?? (this._h = new Headers());
      this._h.set("Location", location);
      return this.newResponse(null, status);
    };
    this.streamText = (cb, arg, headers) => {
      headers ?? (headers = {});
      this.header("content-type", TEXT_PLAIN);
      this.header("x-content-type-options", "nosniff");
      this.header("transfer-encoding", "chunked");
      return this.stream(cb, arg, headers);
    };
    this.stream = (cb, arg, headers) => {
      const { readable, writable } = new TransformStream();
      const stream2 = new StreamingApi(writable);
      cb(stream2).finally(() => stream2.close());
      return typeof arg === "number"
        ? this.newResponse(readable, arg, headers)
        : this.newResponse(readable, arg);
    };
    this.cookie = (name, value, opt) => {
      const cookie2 = serialize(name, value, opt);
      this.header("set-cookie", cookie2, { append: true });
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      this._exCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this._exCtx && "respondWith" in this._exCtx) {
      return this._exCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this._exCtx) {
      return this._exCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this._init = false;
    return (
      this._res || (this._res = new Response("404 Not Found", { status: 404 }))
    );
  }
  set res(_res) {
    this._init = false;
    if (this._res && _res) {
      this._res.headers.delete("content-type");
      this._res.headers.forEach((v, k) => {
        _res.headers.set(k, v);
      });
    }
    this._res = _res;
    this.finalized = true;
  }
  get var() {
    return { ...this._var };
  }
  get runtime() {
    const global = globalThis;
    if (global?.Deno !== undefined) {
      return "deno";
    }
    if (global?.Bun !== undefined) {
      return "bun";
    }
    if (typeof global?.WebSocketPair === "function") {
      return "workerd";
    }
    if (typeof global?.EdgeRuntime === "string") {
      return "edge-light";
    }
    if (global?.fastly !== undefined) {
      return "fastly";
    }
    if (global?.__lagon__ !== undefined) {
      return "lagon";
    }
    if (global?.process?.release?.name === "node") {
      return "node";
    }
    return "other";
  }
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0];
        if (context2 instanceof Context) {
          context2.req.setParams(middleware[i][1]);
        }
      } else {
        handler = (i === middleware.length && next) || undefined;
      }
      if (!handler) {
        if (
          context2 instanceof Context &&
          context2.finalized === false &&
          onNotFound
        ) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context2 instanceof Context && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res !== undefined && "response" in res) {
        res = res["response"];
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status,
    });
  }
};

// node_modules/hono/dist/utils/body.js
var isArrayField = (value) => {
  return Array.isArray(value);
};
var parseBody = async (
  request,
  options = {
    all: false,
  },
) => {
  let body = {};
  const contentType = request.headers.get("Content-Type");
  if (
    contentType &&
    (contentType.startsWith("multipart/form-data") ||
      contentType.startsWith("application/x-www-form-urlencoded"))
  ) {
    const formData = await request.formData();
    if (formData) {
      const form = {};
      formData.forEach((value, key) => {
        const shouldParseAllValues = options.all || key.slice(-2) === "[]";
        if (!shouldParseAllValues) {
          form[key] = value;
          return;
        }
        if (form[key] && isArrayField(form[key])) {
          form[key].push(value);
          return;
        }
        if (form[key]) {
          form[key] = [form[key], value];
          return;
        }
        form[key] = value;
      });
      body = form;
    }
  }
  return body;
};

// node_modules/hono/dist/request.js
var HonoRequest = class {
  constructor(request, path = "/", paramStash = undefined) {
    this._p = {};
    this.bodyCache = {};
    this.cachedBody = (key) => {
      const { bodyCache, raw: raw2 } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody) return cachedBody;
      if (bodyCache.arrayBuffer) {
        return (async () => {
          return await new Response(bodyCache.arrayBuffer)[key]();
        })();
      }
      return (bodyCache[key] = raw2[key]());
    };
    this.raw = request;
    this.path = path;
    this._s = paramStash;
    this.vData = {};
  }
  setParams(params) {
    this._p = params;
  }
  param(key) {
    if (key) {
      const param = this._s ? this._s[this._p[key]] : this._p[key];
      return param
        ? /\%/.test(param)
          ? decodeURIComponent_(param)
          : param
        : undefined;
    } else {
      const decoded = {};
      const keys = Object.keys(this._p);
      for (let i = 0, len = keys.length; i < len; i++) {
        const key2 = keys[i];
        const value = this._s ? this._s[this._p[key2]] : this._p[key2];
        if (value && typeof value === "string") {
          decoded[key2] = /\%/.test(value) ? decodeURIComponent_(value) : value;
        }
      }
      return decoded;
    }
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) return this.raw.headers.get(name.toLowerCase()) ?? undefined;
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  cookie(key) {
    const cookie3 = this.raw.headers.get("Cookie");
    if (!cookie3) return;
    const obj = parse(cookie3);
    if (key) {
      const value = obj[key];
      return value;
    } else {
      return obj;
    }
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) return this.bodyCache.parsedBody;
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.vData[target] = data;
  }
  valid(target) {
    return this.vData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get headers() {
    return this.raw.headers;
  }
  get body() {
    return this.raw.body;
  }
  get bodyUsed() {
    return this.raw.bodyUsed;
  }
  get integrity() {
    return this.raw.integrity;
  }
  get keepalive() {
    return this.raw.keepalive;
  }
  get referrer() {
    return this.raw.referrer;
  }
  get signal() {
    return this.raw.signal;
  }
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var UnsupportedPathError = class extends Error {};

// node_modules/hono/dist/hono-base.js
var defineDynamicClass = function () {
  return class {};
};
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  const message = "Internal Server Error";
  return c.text(message, 500);
};
var Hono = class extends defineDynamicClass() {
  constructor(options = {}) {
    super();
    this._basePath = "/";
    this.path = "/";
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.head = () => {
      console.warn(
        "`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.",
      );
      return this;
    };
    this.handleEvent = (event) => {
      return this.dispatch(
        event.request,
        event,
        undefined,
        event.request.method,
      );
    };
    this.fetch = (request2, Env, executionCtx) => {
      return this.dispatch(request2, executionCtx, Env, request2.method);
    };
    this.request = (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        if (requestInit !== undefined) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input, Env, executionCtx);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input)
        ? input
        : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req, Env, executionCtx);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(
          this.dispatch(event.request, event, undefined, event.request.method),
        );
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.path = args1;
        } else {
          this.addRoute(method, this.path, args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) return this;
      this.path = path;
      for (const m of [method].flat()) {
        handlers.map((handler) => {
          this.addRoute(m.toUpperCase(), this.path, handler);
        });
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.path = arg1;
      } else {
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath,
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app) {
    const subApp = this.basePath(path);
    if (!app) {
      return subApp;
    }
    app.routes.map((r) => {
      const handler =
        app.errorHandler === errorHandler
          ? r.handler
          : async (c, next) =>
              (await compose([], app.errorHandler)(c, () => r.handler(c, next)))
                .res;
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError(handler) {
    this.errorHandler = handler;
    return this;
  }
  notFound(handler) {
    this.notFoundHandler = handler;
    return this;
  }
  showRoutes() {
    const length = 8;
    this.routes.map((route) => {
      console.log(
        `\x1B[32m${route.method}\x1B[0m ${" ".repeat(
          length - route.method.length,
        )} ${route.path}`,
      );
    });
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {}
      const options = optionHandler
        ? optionHandler(c)
        : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(
        new Request(
          new URL(
            (c.req.path.slice(pathPrefixLength) || "/") + queryStrings,
            c.req.url,
          ),
          c.req.raw,
        ),
        ...optionsArray,
      );
      if (res) return res;
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  get routerName() {
    this.matchRoute("GET", "/");
    return this.router.name;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    this.router.add(method, path, handler);
    const r = { path, method, handler };
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request2, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () =>
        new Response(
          null,
          await this.dispatch(request2, executionCtx, env, "GET"),
        ))();
    }
    const path = this.getPath(request2, { env });
    const [handlers, paramStash] = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request2, path, paramStash), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler,
    });
    if (handlers.length === 1) {
      let res;
      c.req.setParams(handlers[0][1]);
      try {
        res = handlers[0][0](c, async () => {});
        if (!res) {
          return this.notFoundHandler(c);
        }
      } catch (err) {
        return this.handleError(err, c);
      }
      if (res instanceof Response) return res;
      if ("response" in res) {
        res = res.response;
      }
      if (res instanceof Response) return res;
      return (async () => {
        let awaited;
        try {
          awaited = await res;
          if (awaited !== undefined && "response" in awaited) {
            awaited = awaited["response"];
          }
          if (!awaited) {
            return this.notFoundHandler(c);
          }
        } catch (err) {
          return this.handleError(err, c);
        }
        return awaited;
      })();
    }
    const composed = compose(handlers, this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context3 = await composed(c);
        if (!context3.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`",
          );
        }
        return context3.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var compareKey = function (a, b) {
  if (a.length === 1) {
    return b.length === 1 ? (a < b ? -1 : 1) : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (
    b === ONLY_WILDCARD_REG_EXP_STR ||
    b === TAIL_WILDCARD_REG_EXP_STR
  ) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? (a < b ? -1 : 1) : b.length - a.length;
};
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context3, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern =
      token === "*"
        ? restTokens.length === 0
          ? ["", "", ONLY_WILDCARD_REG_EXP_STR]
          : ["", "", LABEL_REG_EXP_STR]
        : token === "/*"
          ? ["", "", TAIL_WILDCARD_REG_EXP_STR]
          : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (
          Object.keys(this.children).some(
            (k) =>
              k !== ONLY_WILDCARD_REG_EXP_STR &&
              k !== TAIL_WILDCARD_REG_EXP_STR,
          )
        ) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context3.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (
          Object.keys(this.children).some(
            (k) =>
              k.length > 1 &&
              k !== ONLY_WILDCARD_REG_EXP_STR &&
              k !== TAIL_WILDCARD_REG_EXP_STR,
          )
        ) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context3, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (
        (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) +
        c.buildRegExpStr()
      );
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node();
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(
      tokens,
      index,
      paramAssoc,
      this.context,
      pathErrorCheckOnly,
    );
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(
      /#(\d+)|@(\d+)|\.\*\$/g,
      (_, handlerIndex, paramIndex) => {
        if (typeof handlerIndex !== "undefined") {
          indexReplacementMap[++captureIndex] = Number(handlerIndex);
          return "$()";
        }
        if (typeof paramIndex !== "undefined") {
          paramReplacementMap[Number(paramIndex)] = ++captureIndex;
          return "";
        }
        return "";
      },
    );
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var buildWildcardRegExp = function (path) {
  return (
    wildcardRegExpCache[path] ??
    (wildcardRegExpCache[path] = new RegExp(
      path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}\$`,
    ))
  );
};
var clearWildcardRegExpCache = function () {
  wildcardRegExpCache = {};
};
var buildMatcherFromPreprocessedRoutes = function (routes) {
  const trie2 = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes
    .map((route) => [!/\*|\/:/.test(route[0]), ...route])
    .sort(([isStaticA, pathA], [isStaticB, pathB]) =>
      isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length,
    );
  const staticMap = {};
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, {}]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie2.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = {};
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] =
    trie2.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
};
var findMiddleware = function (middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
};
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) =>
  method.toUpperCase(),
);
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(
        "Can not add a route since the matcher is already built.",
      );
    }
    if (methodNames.indexOf(method) === -1) methodNames.push(method);
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a2;
          (_a2 = middleware[m])[path] ||
            (_a2[path] =
              findMiddleware(middleware[m], path) ||
              findMiddleware(middleware[METHOD_NAME_ALL], path) ||
              []);
        });
      } else {
        (_a = middleware[method])[path] ||
          (_a[path] =
            findMiddleware(middleware[method], path) ||
            findMiddleware(middleware[METHOD_NAME_ALL], path) ||
            []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount]),
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a2 = routes[m])[path2] ||
            (_a2[path2] = [
              ...(findMiddleware(middleware[m], path2) ||
                findMiddleware(middleware[METHOD_NAME_ALL], path2) ||
                []),
            ]);
          routes[m][path2].push([
            handler,
            paths.length === 2 && i === 0 ? paramCount - 1 : paramCount,
          ]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = undefined;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method]
        ? Object.keys(r[method]).map((path) => [path, r[method][path]])
        : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [
            path,
            r[METHOD_NAME_ALL][path],
          ]),
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(
        "Can not add a route since the matcher is already built.",
      );
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router5 = routers[i];
      try {
        routes.forEach((args) => {
          router5.add(...args);
        });
        res = router5.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router5.match.bind(router5);
      this.routers = [router5];
      this.routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.params = {};
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = {
        handler,
        params: {},
        possibleKeys: [],
        score: 0,
        name: this.name,
      };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    const parentPatterns = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) possibleKeys.push(pattern2[1]);
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
        possibleKeys.push(pattern[1]);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = {
      handler,
      params: {},
      possibleKeys,
      name: this.name,
      score: this.order,
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node3, method, params) {
    const handlerSets = [];
    for (let i = 0, len = node3.methods.length; i < len; i++) {
      const m = node3.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      if (handlerSet !== undefined) {
        handlerSet.possibleKeys.map((key) => {
          handlerSet.params[key] = params[key];
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    const params = {};
    this.params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node3 = curNodes[j];
        const nextNode = node3.children[part];
        if (nextNode) {
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, {
                  ...params,
                  ...node3.params,
                }),
              );
            }
            handlerSets.push(
              ...this.gHSets(nextNode, method, { ...params, ...node3.params }),
            );
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node3.patterns.length; k < len3; k++) {
          const pattern = node3.patterns[k];
          if (pattern === "*") {
            const astNode = node3.children["*"];
            if (astNode) {
              handlerSets.push(
                ...this.gHSets(astNode, method, { ...params, ...node3.params }),
              );
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") continue;
          const [key, name, matcher] = pattern;
          const child = node3.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(
              ...this.gHSets(child, method, { ...params, ...node3.params }),
            );
            continue;
          }
          if (
            matcher === true ||
            (matcher instanceof RegExp && matcher.test(part))
          ) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(
                  ...this.gHSets(child, method, { ...params, ...node3.params }),
                );
                if (child.children["*"]) {
                  handlerSets.push(
                    ...this.gHSets(child.children["*"], method, {
                      ...params,
                      ...node3.params,
                    }),
                  );
                }
              } else {
                child.params = { ...params };
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params: params2 }) => [handler, params2])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router =
      options.router ??
      new SmartRouter({
        routers: [new RegExpRouter(), new TrieRouter()],
      });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: [],
  };
  const opts = {
    ...defaults,
    ...options,
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => (optsOrigin.includes(origin) ? origin : optsOrigin[0]);
    }
  })(opts.origin);
  return async (c, next) => {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "");
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      set("Vary", "Origin");
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method !== "OPTIONS") {
      await next();
    } else {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: c.res.statusText,
      });
    }
  };
};

// src/db/index.ts
var client = __toESM(require_client2(), 1);
var db_default = new client.PrismaClient();

// node_modules/zod/lib/index.mjs
var setErrorMap = function (map) {
  overrideErrorMap = map;
};
var getErrorMap = function () {
  return overrideErrorMap;
};
var addIssueToContext = function (ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap,
    ].filter((x) => !!x),
  });
  ctx.common.issues.push(issue);
};
var processCreateParams = function (params) {
  if (!params) return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  }
  if (errorMap) return { errorMap, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type") return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return {
        message:
          required_error !== null && required_error !== undefined
            ? required_error
            : ctx.defaultError,
      };
    }
    return {
      message:
        invalid_type_error !== null && invalid_type_error !== undefined
          ? invalid_type_error
          : ctx.defaultError,
    };
  };
  return { errorMap: customMap, description };
};
var isValidIP = function (ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
};
var floatSafeRemainder = function (val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return (valInt % stepInt) / Math.pow(10, decCount);
};
var deepPartialify = function (schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape,
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element),
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
};
var mergeValues = function (a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util
      .objectKeys(a)
      .filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (
    aType === ZodParsedType.date &&
    bType === ZodParsedType.date &&
    +a === +b
  ) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
};
var createZodEnum = function (values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params),
  });
};
var util;
(function (util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2
      .objectKeys(obj)
      .filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function (e) {
      return obj[e];
    });
  };
  util2.objectKeys =
    typeof Object.keys === "function"
      ? (obj) => Object.keys(obj)
      : (object) => {
          const keys = [];
          for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
              keys.push(key);
            }
          }
          return keys;
        };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item)) return item;
    }
    return;
  };
  util2.isInteger =
    typeof Number.isInteger === "function"
      ? (val) => Number.isInteger(val)
      : (val) =>
          typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array
      .map((val) => (typeof val === "string" ? `'${val}'` : val))
      .join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second,
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set",
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (
        data.then &&
        typeof data.then === "function" &&
        data.catch &&
        typeof data.catch === "function"
      ) {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper =
      _mapper ||
      function (issue) {
        return issue.message;
      };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(
        issue.expected,
        util.jsonStringifyReplacer,
      )}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(
        issue.keys,
        ", ",
      )}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(
        issue.options,
      )}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(
        issue.options,
      )}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${
          issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`
        } ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${
          issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`
        } ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${
          issue.exact
            ? `exactly equal to `
            : issue.inclusive
              ? `greater than or equal to `
              : `greater than `
        }${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${
          issue.exact
            ? `exactly equal to `
            : issue.inclusive
              ? `greater than or equal to `
              : `greater than `
        }${new Date(Number(issue.minimum))}`;
      else message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${
          issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`
        } ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${
          issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`
        } ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${
          issue.exact
            ? `exactly`
            : issue.inclusive
              ? `less than or equal to`
              : `less than`
        } ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${
          issue.exact
            ? `exactly`
            : issue.inclusive
              ? `less than or equal to`
              : `less than`
        } ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${
          issue.exact
            ? `exactly`
            : issue.inclusive
              ? `smaller than or equal to`
              : `smaller than`
        } ${new Date(Number(issue.maximum))}`;
      else message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...(issueData.path || [])];
  const fullIssue = {
    ...issueData,
    path: fullPath,
  };
  let errorMessage = "";
  const maps = errorMaps
    .filter((m) => !!m)
    .slice()
    .reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage,
  };
};
var EMPTY_PATH = [];

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted") return INVALID;
      if (s.status === "dirty") status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value,
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted") return INVALID;
      if (value.status === "aborted") return INVALID;
      if (key.status === "dirty") status.dirty();
      if (value.status === "dirty") status.dirty();
      if (
        key.value !== "__proto__" &&
        (typeof value.value !== "undefined" || pair.alwaysSet)
      ) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted",
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function (errorUtil2) {
  errorUtil2.errToObj = (message) =>
    typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) =>
    typeof message === "string"
      ? message
      : message === null || message === undefined
        ? undefined
        : message.message;
})(errorUtil || (errorUtil = {}));

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      },
    };
  }
};

class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return (
      ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent,
      }
    );
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent,
      },
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async:
          (_a =
            params === null || params === undefined
              ? undefined
              : params.async) !== null && _a !== undefined
            ? _a
            : false,
        contextualErrorMap:
          params === null || params === undefined ? undefined : params.errorMap,
      },
      path:
        (params === null || params === undefined ? undefined : params.path) ||
        [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data),
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap:
          params === null || params === undefined ? undefined : params.errorMap,
        async: true,
      },
      path:
        (params === null || params === undefined ? undefined : params.path) ||
        [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data),
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult)
      ? maybeAsyncResult
      : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () =>
        ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val),
        });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(
          typeof refinementData === "function"
            ? refinementData(val, ctx)
            : refinementData,
        );
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement },
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform },
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def),
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description,
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+\$`;
var emojiRegex;
var ipv4Regex =
  /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex =
  /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`,
      );
    } else {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z\$`,
      );
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`,
      );
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z\$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)\$`,
      );
    } else {
      return new RegExp(
        `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z\$`,
      );
    }
  }
};

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType,
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message,
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message,
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message),
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options,
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision:
        typeof (options === null || options === undefined
          ? undefined
          : options.precision) === "undefined"
          ? null
          : options === null || options === undefined
            ? undefined
            : options.precision,
      offset:
        (_a =
          options === null || options === undefined
            ? undefined
            : options.offset) !== null && _a !== undefined
          ? _a
          : false,
      ...errorUtil.errToObj(
        options === null || options === undefined ? undefined : options.message,
      ),
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message),
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position:
        options === null || options === undefined
          ? undefined
          : options.position,
      ...errorUtil.errToObj(
        options === null || options === undefined ? undefined : options.message,
      ),
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message),
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message),
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message),
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message),
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message),
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce:
      (_a =
        params === null || params === undefined ? undefined : params.coerce) !==
        null && _a !== undefined
        ? _a
        : false,
    ...processCreateParams(params),
  });
};

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType,
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive
          ? input.data < check.value
          : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive
          ? input.data > check.value
          : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message),
        },
      ],
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message),
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message),
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message),
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message),
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message),
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(
      (ch) =>
        ch.kind === "int" ||
        (ch.kind === "multipleOf" && util.isInteger(ch.value)),
    );
  }
  get isFinite() {
    let max = null,
      min = null;
    for (const ch of this._def.checks) {
      if (
        ch.kind === "finite" ||
        ch.kind === "int" ||
        ch.kind === "multipleOf"
      ) {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce:
      (params === null || params === undefined ? undefined : params.coerce) ||
      false,
    ...processCreateParams(params),
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType,
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive
          ? input.data < check.value
          : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive
          ? input.data > check.value
          : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message),
        },
      ],
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message),
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce:
      (_a =
        params === null || params === undefined ? undefined : params.coerce) !==
        null && _a !== undefined
        ? _a
        : false,
    ...processCreateParams(params),
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce:
      (params === null || params === undefined ? undefined : params.coerce) ||
      false,
    ...processCreateParams(params),
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType,
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date,
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date",
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date",
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime()),
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message),
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message),
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce:
      (params === null || params === undefined ? undefined : params.coerce) ||
      false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params),
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params),
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params),
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params),
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params),
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params),
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType,
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params),
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params),
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message,
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message,
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message,
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all(
        [...ctx.data].map((item, i) => {
          return def.type._parseAsync(
            new ParseInputLazyPath(ctx, item, ctx.path, i),
          );
        }),
      ).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(
        new ParseInputLazyPath(ctx, item, ctx.path, i),
      );
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) },
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) },
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) },
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params),
  });
};

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return (this._cached = { shape, keys });
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType,
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (
      !(
        this._def.catchall instanceof ZodNever &&
        this._def.unknownKeys === "strip"
      )
    ) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(
          new ParseInputLazyPath(ctx, value, ctx.path, key),
        ),
        alwaysSet: key in ctx.data,
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] },
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys,
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip");
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key),
          ),
          alwaysSet: key in ctx.data,
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve()
        .then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            syncPairs.push({
              key,
              value: await pair.value,
              alwaysSet: pair.alwaysSet,
            });
          }
          return syncPairs;
        })
        .then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== undefined
        ? {
            errorMap: (issue, ctx) => {
              var _a, _b, _c, _d;
              const defaultError =
                (_c =
                  (_b = (_a = this._def).errorMap) === null || _b === undefined
                    ? undefined
                    : _b.call(_a, issue, ctx).message) !== null &&
                _c !== undefined
                  ? _c
                  : ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message:
                    (_d = errorUtil.errToObj(message).message) !== null &&
                    _d !== undefined
                      ? _d
                      : defaultError,
                };
              return {
                message: defaultError,
              };
            },
          }
        : {}),
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip",
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough",
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation,
      }),
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape(),
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject,
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index,
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape,
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape,
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape,
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape,
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params),
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params),
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params),
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map(
        (result) => new ZodError(result.ctx.common.issues),
      );
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors,
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(
        options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: [],
            },
            parent: null,
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx,
            }),
            ctx: childCtx,
          };
        }),
      ).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: [],
          },
          parent: null,
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx,
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors,
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params),
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator],
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(
          `A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`,
        );
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(
            `Discriminator property ${String(
              discriminator,
            )} has duplicate value ${String(value)}`,
          );
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params),
    });
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types,
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(
        this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
        this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
      );
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params),
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });
      status.dirty();
    }
    const items = [...ctx.data]
      .map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema) return null;
        return schema._parse(
          new ParseInputLazyPath(ctx, item, ctx.path, itemIndex),
        );
      })
      .filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest,
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params),
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(
          new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key),
        ),
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third),
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second),
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(
          new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"]),
        ),
        value: valueType._parse(
          new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]),
        ),
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params),
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message,
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message,
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set();
      for (const element of elements2) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) =>
      valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)),
    );
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) },
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) },
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params),
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap,
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error,
        },
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap,
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error,
        },
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function (...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args
          .parseAsync(args, params)
          .catch((e) => {
            error.addIssue(makeArgsIssue(args, e));
            throw error;
          });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type
          .parseAsync(result, params)
          .catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function (...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create()),
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType,
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params),
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params),
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value,
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params),
  });
};

class ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type,
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues,
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
}
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (
      ctx.parsedType !== ZodParsedType.string &&
      ctx.parsedType !== ZodParsedType.number
    ) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type,
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues,
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params),
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (
      ctx.parsedType !== ZodParsedType.promise &&
      ctx.common.async === false
    ) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    const promisified =
      ctx.parsedType === ZodParsedType.promise
        ? ctx.data
        : Promise.resolve(ctx.data);
    return OK(
      promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap,
        });
      }),
    );
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params),
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      },
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data,
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx,
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx,
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema
          ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
          .then((inner) => {
            if (inner.status === "aborted") return INVALID;
            if (inner.status === "dirty") status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (!isValid(base)) return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema
          ._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
          .then((base) => {
            if (!isValid(base)) return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then(
              (result) => ({ status: status.value, value: result }),
            );
          });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params),
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params),
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params),
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params),
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx,
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue:
      typeof params.default === "function"
        ? params.default
        : () => params.default,
    ...processCreateParams(params),
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: [],
      },
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx,
      },
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value:
            result2.status === "valid"
              ? result2.value
              : this._def.catchValue({
                  get error() {
                    return new ZodError(newCtx.common.issues);
                  },
                  input: newCtx.data,
                }),
        };
      });
    } else {
      return {
        status: "valid",
        value:
          result.status === "valid"
            ? result.value
            : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data,
              }),
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue:
      typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params),
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params),
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx,
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx,
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value,
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx,
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline,
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params),
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p =
          typeof params === "function"
            ? params(data)
            : typeof params === "string"
              ? { message: params }
              : params;
        const _fatal =
          (_b = (_a = p.fatal) !== null && _a !== undefined ? _a : fatal) !==
            null && _b !== undefined
            ? _b
            : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (
  cls,
  params = {
    message: `Input not instance of ${cls.name}`,
  },
) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) =>
    ZodBoolean.create({
      ...arg,
      coerce: true,
    }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true }),
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError,
});

// src/service/schema.ts
var $service = z.object({
  id: z.number().optional(),
  teacherId: z.number(),
  name: z.string(),
  type: z.string(),
  price: z.number(),
  category: z.string(),
  duration: z.number(),
  frequency: z.string(),
  description: z.string(),
});

// src/service/controller.ts
var controller_default = {
  async create(ctx) {
    const body2 = await ctx.req.json();
    const parse2 = $service.safeParse(body2);
    if (parse2.success) {
      const service = db_default.service.create({ data: parse2.data });
      return ctx.json(service);
    } else return ctx.text(parse2.error.message, 500);
  },
  async getUnique(ctx) {
    const id = ctx.req.query("id");
    const service = db_default.service.findUnique({
      where: { id: Number(id) },
    });
    if (service) return ctx.json(service);
    else return ctx.text("Servicio no encontrado", 404);
  },
  async getAll(ctx) {
    const services = db_default.service.findMany({
      where: JSON.parse(ctx.req.query("where") || "{}"),
    });
    return ctx.json(services);
  },
  async update(ctx) {
    const { id } = ctx.req.param();
    const service = db_default.service.update({
      where: { id: Number(id) },
      data: await ctx.req.json(),
    });
    return ctx.json(service);
  },
  async delete(ctx) {
    const { id } = ctx.req.param();
    await db_default.service.delete({ where: { id: Number(id) } });
    return ctx.text("Servicio eliminado", 200);
  },
};

// src/user/schema.ts
var $user = z.object({
  name: z
    .string()
    .trim()
    .min(3, "El nombre debe tener minimo 3 letras")
    .max(30, "El nombre debe tener minimo 3 letras"),
  lastname: z.string().trim(),
  phone: z.string().trim().min(10, "El telefono debe tener minimo 10 numeros"),
  email: z.string().trim().email("El email no es valido"),
  password: z
    .string()
    .trim()
    .min(6, "La contrase\xF1a debe tener minimo 6 caracteres")
    .max(12, "La contrase\xF1a debe tener maximo 12 caracteres"),
});

// src/user/service.ts
var service_default = {
  async login(user) {
    const { email, password } = user;
    try {
      const { hash, ...data } = await db_default.user.findUniqueOrThrow({
        where: { email },
      });
      const isMatch = await Bun.password.verify(password, hash);
      if (isMatch) return data;
      else throw new HTTPException(500, { message: "Contrase\xF1a invalida" });
    } catch (error) {
      throw new HTTPException(404, { message: "Usuario no encontrado" });
    }
  },
  async register(user) {
    const hash = await Bun.password.hash(user.password);
    return await db_default.user.create({ data: { ...user, hash } });
  },
};

// src/user/controller.ts
var controller_default2 = {
  async create(ctx) {
    const body2 = await ctx.req.json();
    const parse2 = $user.safeParse(body2);
    if (parse2.success) {
      const user = await service_default.register(parse2.data);
      return ctx.json(user);
    } else return ctx.text(parse2.error.message, 500);
  },
  getUnique(ctx) {
    const { email, password } = ctx.req.param();
    const user = service_default.login({ email, password });
    return ctx.json(user);
  },
  getAllByServiceId(ctx) {
    const id = ctx.req.query("serviceId");
    const users = db_default.contract.findMany({
      where: { serviceId: Number(id) },
      select: { user: true },
    });
    return ctx.json(users);
  },
  async update(ctx) {
    try {
      const { id } = ctx.req.param();
      const user = db_default.user.update({
        where: { id: Number(id) },
        data: await ctx.req.json(),
      });
      return ctx.json(user);
    } catch (error) {
      throw new HTTPException(500, { message: "Error al actualizar" });
    }
  },
  async delete(ctx) {
    const { id, email, password } = ctx.req.param();
    await service_default.login({ email, password });
    await db_default.user.delete({ where: { id: Number(id) } });
    return ctx.text("Usuario eliminado", 200);
  },
};

// src/index.ts
var app = new Hono2();
app.use("*", cors());
app.get("/", (c) => c.text("Hello World!"));
app.get("/user/:id", controller_default2.getUnique);
app.get("/user/service/:id", controller_default2.getAllByServiceId);
app.get("/service", controller_default.getAll);
app.get("/service/:id", controller_default.getUnique);
app.put("/user/:id", controller_default2.update);
app.put("/service/:id", controller_default.update);
app.post("/user", controller_default2.create);
app.post("/service", controller_default.create);
app.delete("/user/:id", controller_default2.delete);
app.delete("/service/:id", controller_default.delete);
var src_default = app;
export { src_default as default };
