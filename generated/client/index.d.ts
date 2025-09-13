
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Localidad
 * 
 */
export type Localidad = $Result.DefaultSelection<Prisma.$LocalidadPayload>
/**
 * Model Provincia
 * 
 */
export type Provincia = $Result.DefaultSelection<Prisma.$ProvinciaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model LineaVenta
 * 
 */
export type LineaVenta = $Result.DefaultSelection<Prisma.$LineaVentaPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model MetodoPago
 * 
 */
export type MetodoPago = $Result.DefaultSelection<Prisma.$MetodoPagoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localidad`: Exposes CRUD operations for the **Localidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localidads
    * const localidads = await prisma.localidad.findMany()
    * ```
    */
  get localidad(): Prisma.LocalidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provincia`: Exposes CRUD operations for the **Provincia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provincias
    * const provincias = await prisma.provincia.findMany()
    * ```
    */
  get provincia(): Prisma.ProvinciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineaVenta`: Exposes CRUD operations for the **LineaVenta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineaVentas
    * const lineaVentas = await prisma.lineaVenta.findMany()
    * ```
    */
  get lineaVenta(): Prisma.LineaVentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodoPago`: Exposes CRUD operations for the **MetodoPago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetodoPagos
    * const metodoPagos = await prisma.metodoPago.findMany()
    * ```
    */
  get metodoPago(): Prisma.MetodoPagoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cliente: 'Cliente',
    Localidad: 'Localidad',
    Provincia: 'Provincia',
    Producto: 'Producto',
    Categoria: 'Categoria',
    Venta: 'Venta',
    LineaVenta: 'LineaVenta',
    Pago: 'Pago',
    MetodoPago: 'MetodoPago'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cliente" | "localidad" | "provincia" | "producto" | "categoria" | "venta" | "lineaVenta" | "pago" | "metodoPago"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Localidad: {
        payload: Prisma.$LocalidadPayload<ExtArgs>
        fields: Prisma.LocalidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          findFirst: {
            args: Prisma.LocalidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          findMany: {
            args: Prisma.LocalidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>[]
          }
          create: {
            args: Prisma.LocalidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          createMany: {
            args: Prisma.LocalidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocalidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          update: {
            args: Prisma.LocalidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          deleteMany: {
            args: Prisma.LocalidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocalidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          aggregate: {
            args: Prisma.LocalidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalidad>
          }
          groupBy: {
            args: Prisma.LocalidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalidadCountArgs<ExtArgs>
            result: $Utils.Optional<LocalidadCountAggregateOutputType> | number
          }
        }
      }
      Provincia: {
        payload: Prisma.$ProvinciaPayload<ExtArgs>
        fields: Prisma.ProvinciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findFirst: {
            args: Prisma.ProvinciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findMany: {
            args: Prisma.ProvinciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          create: {
            args: Prisma.ProvinciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          createMany: {
            args: Prisma.ProvinciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProvinciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          update: {
            args: Prisma.ProvinciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          deleteMany: {
            args: Prisma.ProvinciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProvinciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          aggregate: {
            args: Prisma.ProvinciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvincia>
          }
          groupBy: {
            args: Prisma.ProvinciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinciaCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      LineaVenta: {
        payload: Prisma.$LineaVentaPayload<ExtArgs>
        fields: Prisma.LineaVentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineaVentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineaVentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          findFirst: {
            args: Prisma.LineaVentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineaVentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          findMany: {
            args: Prisma.LineaVentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>[]
          }
          create: {
            args: Prisma.LineaVentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          createMany: {
            args: Prisma.LineaVentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LineaVentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          update: {
            args: Prisma.LineaVentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          deleteMany: {
            args: Prisma.LineaVentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineaVentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LineaVentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineaVentaPayload>
          }
          aggregate: {
            args: Prisma.LineaVentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineaVenta>
          }
          groupBy: {
            args: Prisma.LineaVentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineaVentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineaVentaCountArgs<ExtArgs>
            result: $Utils.Optional<LineaVentaCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      MetodoPago: {
        payload: Prisma.$MetodoPagoPayload<ExtArgs>
        fields: Prisma.MetodoPagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetodoPagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetodoPagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findFirst: {
            args: Prisma.MetodoPagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetodoPagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findMany: {
            args: Prisma.MetodoPagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>[]
          }
          create: {
            args: Prisma.MetodoPagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          createMany: {
            args: Prisma.MetodoPagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetodoPagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          update: {
            args: Prisma.MetodoPagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          deleteMany: {
            args: Prisma.MetodoPagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetodoPagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetodoPagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          aggregate: {
            args: Prisma.MetodoPagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodoPago>
          }
          groupBy: {
            args: Prisma.MetodoPagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetodoPagoCountArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cliente?: ClienteOmit
    localidad?: LocalidadOmit
    provincia?: ProvinciaOmit
    producto?: ProductoOmit
    categoria?: CategoriaOmit
    venta?: VentaOmit
    lineaVenta?: LineaVentaOmit
    pago?: PagoOmit
    metodoPago?: MetodoPagoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    ventas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ventas?: boolean | ClienteCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
  }


  /**
   * Count Type LocalidadCountOutputType
   */

  export type LocalidadCountOutputType = {
    clientes: number
  }

  export type LocalidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | LocalidadCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * LocalidadCountOutputType without action
   */
  export type LocalidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalidadCountOutputType
     */
    select?: LocalidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalidadCountOutputType without action
   */
  export type LocalidadCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type ProvinciaCountOutputType
   */

  export type ProvinciaCountOutputType = {
    localidades: number
  }

  export type ProvinciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidades?: boolean | ProvinciaCountOutputTypeCountLocalidadesArgs
  }

  // Custom InputTypes
  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinciaCountOutputType
     */
    select?: ProvinciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountLocalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    lineasVenta: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasVenta?: boolean | ProductoCountOutputTypeCountLineasVentaArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountLineasVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaVentaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    lineasVenta: number
    pagos: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lineasVenta?: boolean | VentaCountOutputTypeCountLineasVentaArgs
    pagos?: boolean | VentaCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountLineasVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaVentaWhereInput
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type MetodoPagoCountOutputType
   */

  export type MetodoPagoCountOutputType = {
    pagos: number
  }

  export type MetodoPagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | MetodoPagoCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPagoCountOutputType
     */
    select?: MetodoPagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    apellido: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nombre: string | null
    apellido: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nombre: number
    apellido: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    apellido?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    apellido?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nombre?: true
    apellido?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    nombre: string
    apellido: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nombre?: boolean
    apellido?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | User$clienteArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nombre?: boolean
    apellido?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nombre" | "apellido" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | User$clienteArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nombre: string
      apellido: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends User$clienteArgs<ExtArgs> = {}>(args?: Subset<T, User$clienteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly apellido: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cliente
   */
  export type User$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    localidadId: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    localidadId: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    direccion: string | null
    telefono: string | null
    localidadId: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    direccion: string | null
    telefono: string | null
    localidadId: number | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    userId: number
    direccion: number
    telefono: number
    localidadId: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    userId?: true
    localidadId?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    userId?: true
    localidadId?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    userId?: true
    direccion?: true
    telefono?: true
    localidadId?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    userId?: true
    direccion?: true
    telefono?: true
    localidadId?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    userId?: true
    direccion?: true
    telefono?: true
    localidadId?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    userId: number
    direccion: string | null
    telefono: string | null
    localidadId: number | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    direccion?: boolean
    telefono?: boolean
    localidadId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    localidad?: boolean | Cliente$localidadArgs<ExtArgs>
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    userId?: boolean
    direccion?: boolean
    telefono?: boolean
    localidadId?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "direccion" | "telefono" | "localidadId", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    localidad?: boolean | Cliente$localidadArgs<ExtArgs>
    ventas?: boolean | Cliente$ventasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      localidad: Prisma.$LocalidadPayload<ExtArgs> | null
      ventas: Prisma.$VentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      direccion: string | null
      telefono: string | null
      localidadId: number | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    localidad<T extends Cliente$localidadArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$localidadArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ventas<T extends Cliente$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly userId: FieldRef<"Cliente", 'Int'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly localidadId: FieldRef<"Cliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.localidad
   */
  export type Cliente$localidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    where?: LocalidadWhereInput
  }

  /**
   * Cliente.ventas
   */
  export type Cliente$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    cursor?: VentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Localidad
   */

  export type AggregateLocalidad = {
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  export type LocalidadAvgAggregateOutputType = {
    id: number | null
    provinciaId: number | null
  }

  export type LocalidadSumAggregateOutputType = {
    id: number | null
    provinciaId: number | null
  }

  export type LocalidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codPostal: string | null
    provinciaId: number | null
  }

  export type LocalidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codPostal: string | null
    provinciaId: number | null
  }

  export type LocalidadCountAggregateOutputType = {
    id: number
    nombre: number
    codPostal: number
    provinciaId: number
    _all: number
  }


  export type LocalidadAvgAggregateInputType = {
    id?: true
    provinciaId?: true
  }

  export type LocalidadSumAggregateInputType = {
    id?: true
    provinciaId?: true
  }

  export type LocalidadMinAggregateInputType = {
    id?: true
    nombre?: true
    codPostal?: true
    provinciaId?: true
  }

  export type LocalidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    codPostal?: true
    provinciaId?: true
  }

  export type LocalidadCountAggregateInputType = {
    id?: true
    nombre?: true
    codPostal?: true
    provinciaId?: true
    _all?: true
  }

  export type LocalidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidad to aggregate.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localidads
    **/
    _count?: true | LocalidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalidadMaxAggregateInputType
  }

  export type GetLocalidadAggregateType<T extends LocalidadAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalidad[P]>
      : GetScalarType<T[P], AggregateLocalidad[P]>
  }




  export type LocalidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadWhereInput
    orderBy?: LocalidadOrderByWithAggregationInput | LocalidadOrderByWithAggregationInput[]
    by: LocalidadScalarFieldEnum[] | LocalidadScalarFieldEnum
    having?: LocalidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalidadCountAggregateInputType | true
    _avg?: LocalidadAvgAggregateInputType
    _sum?: LocalidadSumAggregateInputType
    _min?: LocalidadMinAggregateInputType
    _max?: LocalidadMaxAggregateInputType
  }

  export type LocalidadGroupByOutputType = {
    id: number
    nombre: string
    codPostal: string
    provinciaId: number
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  type GetLocalidadGroupByPayload<T extends LocalidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
            : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
        }
      >
    >


  export type LocalidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codPostal?: boolean
    provinciaId?: boolean
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    clientes?: boolean | Localidad$clientesArgs<ExtArgs>
    _count?: boolean | LocalidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidad"]>



  export type LocalidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    codPostal?: boolean
    provinciaId?: boolean
  }

  export type LocalidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codPostal" | "provinciaId", ExtArgs["result"]["localidad"]>
  export type LocalidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    clientes?: boolean | Localidad$clientesArgs<ExtArgs>
    _count?: boolean | LocalidadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocalidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localidad"
    objects: {
      provincia: Prisma.$ProvinciaPayload<ExtArgs>
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codPostal: string
      provinciaId: number
    }, ExtArgs["result"]["localidad"]>
    composites: {}
  }

  type LocalidadGetPayload<S extends boolean | null | undefined | LocalidadDefaultArgs> = $Result.GetResult<Prisma.$LocalidadPayload, S>

  type LocalidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalidadCountAggregateInputType | true
    }

  export interface LocalidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localidad'], meta: { name: 'Localidad' } }
    /**
     * Find zero or one Localidad that matches the filter.
     * @param {LocalidadFindUniqueArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalidadFindUniqueArgs>(args: SelectSubset<T, LocalidadFindUniqueArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalidadFindUniqueOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalidadFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindFirstArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalidadFindFirstArgs>(args?: SelectSubset<T, LocalidadFindFirstArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindFirstOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalidadFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localidads
     * const localidads = await prisma.localidad.findMany()
     * 
     * // Get first 10 Localidads
     * const localidads = await prisma.localidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localidadWithIdOnly = await prisma.localidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalidadFindManyArgs>(args?: SelectSubset<T, LocalidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localidad.
     * @param {LocalidadCreateArgs} args - Arguments to create a Localidad.
     * @example
     * // Create one Localidad
     * const Localidad = await prisma.localidad.create({
     *   data: {
     *     // ... data to create a Localidad
     *   }
     * })
     * 
     */
    create<T extends LocalidadCreateArgs>(args: SelectSubset<T, LocalidadCreateArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localidads.
     * @param {LocalidadCreateManyArgs} args - Arguments to create many Localidads.
     * @example
     * // Create many Localidads
     * const localidad = await prisma.localidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalidadCreateManyArgs>(args?: SelectSubset<T, LocalidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localidad.
     * @param {LocalidadDeleteArgs} args - Arguments to delete one Localidad.
     * @example
     * // Delete one Localidad
     * const Localidad = await prisma.localidad.delete({
     *   where: {
     *     // ... filter to delete one Localidad
     *   }
     * })
     * 
     */
    delete<T extends LocalidadDeleteArgs>(args: SelectSubset<T, LocalidadDeleteArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localidad.
     * @param {LocalidadUpdateArgs} args - Arguments to update one Localidad.
     * @example
     * // Update one Localidad
     * const localidad = await prisma.localidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalidadUpdateArgs>(args: SelectSubset<T, LocalidadUpdateArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localidads.
     * @param {LocalidadDeleteManyArgs} args - Arguments to filter Localidads to delete.
     * @example
     * // Delete a few Localidads
     * const { count } = await prisma.localidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalidadDeleteManyArgs>(args?: SelectSubset<T, LocalidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localidads
     * const localidad = await prisma.localidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalidadUpdateManyArgs>(args: SelectSubset<T, LocalidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localidad.
     * @param {LocalidadUpsertArgs} args - Arguments to update or create a Localidad.
     * @example
     * // Update or create a Localidad
     * const localidad = await prisma.localidad.upsert({
     *   create: {
     *     // ... data to create a Localidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localidad we want to update
     *   }
     * })
     */
    upsert<T extends LocalidadUpsertArgs>(args: SelectSubset<T, LocalidadUpsertArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadCountArgs} args - Arguments to filter Localidads to count.
     * @example
     * // Count the number of Localidads
     * const count = await prisma.localidad.count({
     *   where: {
     *     // ... the filter for the Localidads we want to count
     *   }
     * })
    **/
    count<T extends LocalidadCountArgs>(
      args?: Subset<T, LocalidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalidadAggregateArgs>(args: Subset<T, LocalidadAggregateArgs>): Prisma.PrismaPromise<GetLocalidadAggregateType<T>>

    /**
     * Group by Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalidadGroupByArgs['orderBy'] }
        : { orderBy?: LocalidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localidad model
   */
  readonly fields: LocalidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provincia<T extends ProvinciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinciaDefaultArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientes<T extends Localidad$clientesArgs<ExtArgs> = {}>(args?: Subset<T, Localidad$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localidad model
   */
  interface LocalidadFieldRefs {
    readonly id: FieldRef<"Localidad", 'Int'>
    readonly nombre: FieldRef<"Localidad", 'String'>
    readonly codPostal: FieldRef<"Localidad", 'String'>
    readonly provinciaId: FieldRef<"Localidad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Localidad findUnique
   */
  export type LocalidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad findUniqueOrThrow
   */
  export type LocalidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad findFirst
   */
  export type LocalidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad findFirstOrThrow
   */
  export type LocalidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad findMany
   */
  export type LocalidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidads to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad create
   */
  export type LocalidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Localidad.
     */
    data: XOR<LocalidadCreateInput, LocalidadUncheckedCreateInput>
  }

  /**
   * Localidad createMany
   */
  export type LocalidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localidads.
     */
    data: LocalidadCreateManyInput | LocalidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localidad update
   */
  export type LocalidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Localidad.
     */
    data: XOR<LocalidadUpdateInput, LocalidadUncheckedUpdateInput>
    /**
     * Choose, which Localidad to update.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad updateMany
   */
  export type LocalidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localidads.
     */
    data: XOR<LocalidadUpdateManyMutationInput, LocalidadUncheckedUpdateManyInput>
    /**
     * Filter which Localidads to update
     */
    where?: LocalidadWhereInput
    /**
     * Limit how many Localidads to update.
     */
    limit?: number
  }

  /**
   * Localidad upsert
   */
  export type LocalidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Localidad to update in case it exists.
     */
    where: LocalidadWhereUniqueInput
    /**
     * In case the Localidad found by the `where` argument doesn't exist, create a new Localidad with this data.
     */
    create: XOR<LocalidadCreateInput, LocalidadUncheckedCreateInput>
    /**
     * In case the Localidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalidadUpdateInput, LocalidadUncheckedUpdateInput>
  }

  /**
   * Localidad delete
   */
  export type LocalidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter which Localidad to delete.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad deleteMany
   */
  export type LocalidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidads to delete
     */
    where?: LocalidadWhereInput
    /**
     * Limit how many Localidads to delete.
     */
    limit?: number
  }

  /**
   * Localidad.clientes
   */
  export type Localidad$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Localidad without action
   */
  export type LocalidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
  }


  /**
   * Model Provincia
   */

  export type AggregateProvincia = {
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  export type ProvinciaAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinciaSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinciaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvinciaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvinciaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ProvinciaAvgAggregateInputType = {
    id?: true
  }

  export type ProvinciaSumAggregateInputType = {
    id?: true
  }

  export type ProvinciaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvinciaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvinciaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ProvinciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincia to aggregate.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provincias
    **/
    _count?: true | ProvinciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinciaMaxAggregateInputType
  }

  export type GetProvinciaAggregateType<T extends ProvinciaAggregateArgs> = {
        [P in keyof T & keyof AggregateProvincia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvincia[P]>
      : GetScalarType<T[P], AggregateProvincia[P]>
  }




  export type ProvinciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinciaWhereInput
    orderBy?: ProvinciaOrderByWithAggregationInput | ProvinciaOrderByWithAggregationInput[]
    by: ProvinciaScalarFieldEnum[] | ProvinciaScalarFieldEnum
    having?: ProvinciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinciaCountAggregateInputType | true
    _avg?: ProvinciaAvgAggregateInputType
    _sum?: ProvinciaSumAggregateInputType
    _min?: ProvinciaMinAggregateInputType
    _max?: ProvinciaMaxAggregateInputType
  }

  export type ProvinciaGroupByOutputType = {
    id: number
    nombre: string
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  type GetProvinciaGroupByPayload<T extends ProvinciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
        }
      >
    >


  export type ProvinciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    localidades?: boolean | Provincia$localidadesArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>



  export type ProvinciaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ProvinciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["provincia"]>
  export type ProvinciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidades?: boolean | Provincia$localidadesArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProvinciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provincia"
    objects: {
      localidades: Prisma.$LocalidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["provincia"]>
    composites: {}
  }

  type ProvinciaGetPayload<S extends boolean | null | undefined | ProvinciaDefaultArgs> = $Result.GetResult<Prisma.$ProvinciaPayload, S>

  type ProvinciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinciaCountAggregateInputType | true
    }

  export interface ProvinciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provincia'], meta: { name: 'Provincia' } }
    /**
     * Find zero or one Provincia that matches the filter.
     * @param {ProvinciaFindUniqueArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinciaFindUniqueArgs>(args: SelectSubset<T, ProvinciaFindUniqueArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provincia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinciaFindUniqueOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinciaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinciaFindFirstArgs>(args?: SelectSubset<T, ProvinciaFindFirstArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinciaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provincias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provincias
     * const provincias = await prisma.provincia.findMany()
     * 
     * // Get first 10 Provincias
     * const provincias = await prisma.provincia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinciaWithIdOnly = await prisma.provincia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinciaFindManyArgs>(args?: SelectSubset<T, ProvinciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provincia.
     * @param {ProvinciaCreateArgs} args - Arguments to create a Provincia.
     * @example
     * // Create one Provincia
     * const Provincia = await prisma.provincia.create({
     *   data: {
     *     // ... data to create a Provincia
     *   }
     * })
     * 
     */
    create<T extends ProvinciaCreateArgs>(args: SelectSubset<T, ProvinciaCreateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provincias.
     * @param {ProvinciaCreateManyArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinciaCreateManyArgs>(args?: SelectSubset<T, ProvinciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Provincia.
     * @param {ProvinciaDeleteArgs} args - Arguments to delete one Provincia.
     * @example
     * // Delete one Provincia
     * const Provincia = await prisma.provincia.delete({
     *   where: {
     *     // ... filter to delete one Provincia
     *   }
     * })
     * 
     */
    delete<T extends ProvinciaDeleteArgs>(args: SelectSubset<T, ProvinciaDeleteArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provincia.
     * @param {ProvinciaUpdateArgs} args - Arguments to update one Provincia.
     * @example
     * // Update one Provincia
     * const provincia = await prisma.provincia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinciaUpdateArgs>(args: SelectSubset<T, ProvinciaUpdateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provincias.
     * @param {ProvinciaDeleteManyArgs} args - Arguments to filter Provincias to delete.
     * @example
     * // Delete a few Provincias
     * const { count } = await prisma.provincia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinciaDeleteManyArgs>(args?: SelectSubset<T, ProvinciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinciaUpdateManyArgs>(args: SelectSubset<T, ProvinciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Provincia.
     * @param {ProvinciaUpsertArgs} args - Arguments to update or create a Provincia.
     * @example
     * // Update or create a Provincia
     * const provincia = await prisma.provincia.upsert({
     *   create: {
     *     // ... data to create a Provincia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provincia we want to update
     *   }
     * })
     */
    upsert<T extends ProvinciaUpsertArgs>(args: SelectSubset<T, ProvinciaUpsertArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaCountArgs} args - Arguments to filter Provincias to count.
     * @example
     * // Count the number of Provincias
     * const count = await prisma.provincia.count({
     *   where: {
     *     // ... the filter for the Provincias we want to count
     *   }
     * })
    **/
    count<T extends ProvinciaCountArgs>(
      args?: Subset<T, ProvinciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinciaAggregateArgs>(args: Subset<T, ProvinciaAggregateArgs>): Prisma.PrismaPromise<GetProvinciaAggregateType<T>>

    /**
     * Group by Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinciaGroupByArgs['orderBy'] }
        : { orderBy?: ProvinciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provincia model
   */
  readonly fields: ProvinciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provincia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localidades<T extends Provincia$localidadesArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$localidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provincia model
   */
  interface ProvinciaFieldRefs {
    readonly id: FieldRef<"Provincia", 'Int'>
    readonly nombre: FieldRef<"Provincia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provincia findUnique
   */
  export type ProvinciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findUniqueOrThrow
   */
  export type ProvinciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findFirst
   */
  export type ProvinciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findFirstOrThrow
   */
  export type ProvinciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findMany
   */
  export type ProvinciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincias to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia create
   */
  export type ProvinciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Provincia.
     */
    data: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
  }

  /**
   * Provincia createMany
   */
  export type ProvinciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provincias.
     */
    data: ProvinciaCreateManyInput | ProvinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provincia update
   */
  export type ProvinciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Provincia.
     */
    data: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
    /**
     * Choose, which Provincia to update.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia updateMany
   */
  export type ProvinciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provincias.
     */
    data: XOR<ProvinciaUpdateManyMutationInput, ProvinciaUncheckedUpdateManyInput>
    /**
     * Filter which Provincias to update
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to update.
     */
    limit?: number
  }

  /**
   * Provincia upsert
   */
  export type ProvinciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Provincia to update in case it exists.
     */
    where: ProvinciaWhereUniqueInput
    /**
     * In case the Provincia found by the `where` argument doesn't exist, create a new Provincia with this data.
     */
    create: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
    /**
     * In case the Provincia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
  }

  /**
   * Provincia delete
   */
  export type ProvinciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter which Provincia to delete.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia deleteMany
   */
  export type ProvinciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincias to delete
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to delete.
     */
    limit?: number
  }

  /**
   * Provincia.localidades
   */
  export type Provincia$localidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    where?: LocalidadWhereInput
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    cursor?: LocalidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Provincia without action
   */
  export type ProvinciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    stock: number | null
    categoriaId: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    stock: number | null
    categoriaId: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    foto: string | null
    categoriaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    foto: string | null
    categoriaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    foto: number
    categoriaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    categoriaId?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    categoriaId?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    foto?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    foto?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    foto?: true
    categoriaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    precio: Decimal
    stock: number
    foto: string | null
    categoriaId: number
    createdAt: Date
    updatedAt: Date
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    foto?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    lineasVenta?: boolean | Producto$lineasVentaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    foto?: boolean
    categoriaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "foto" | "categoriaId" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    lineasVenta?: boolean | Producto$lineasVentaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      lineasVenta: Prisma.$LineaVentaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      precio: Prisma.Decimal
      stock: number
      foto: string | null
      categoriaId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lineasVenta<T extends Producto$lineasVentaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$lineasVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly foto: FieldRef<"Producto", 'String'>
    readonly categoriaId: FieldRef<"Producto", 'Int'>
    readonly createdAt: FieldRef<"Producto", 'DateTime'>
    readonly updatedAt: FieldRef<"Producto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.lineasVenta
   */
  export type Producto$lineasVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    where?: LineaVentaWhereInput
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    cursor?: LineaVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaVentaScalarFieldEnum | LineaVentaScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    id: number | null
    montoTotal: Decimal | null
    clienteId: number | null
  }

  export type VentaSumAggregateOutputType = {
    id: number | null
    montoTotal: Decimal | null
    clienteId: number | null
  }

  export type VentaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    montoTotal: Decimal | null
    clienteId: number | null
  }

  export type VentaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    montoTotal: Decimal | null
    clienteId: number | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    fecha: number
    montoTotal: number
    clienteId: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    id?: true
    montoTotal?: true
    clienteId?: true
  }

  export type VentaSumAggregateInputType = {
    id?: true
    montoTotal?: true
    clienteId?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    fecha?: true
    montoTotal?: true
    clienteId?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    fecha?: true
    montoTotal?: true
    clienteId?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    fecha?: true
    montoTotal?: true
    clienteId?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: number
    fecha: Date
    montoTotal: Decimal
    clienteId: number
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    montoTotal?: boolean
    clienteId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    lineasVenta?: boolean | Venta$lineasVentaArgs<ExtArgs>
    pagos?: boolean | Venta$pagosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>



  export type VentaSelectScalar = {
    id?: boolean
    fecha?: boolean
    montoTotal?: boolean
    clienteId?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "montoTotal" | "clienteId", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    lineasVenta?: boolean | Venta$lineasVentaArgs<ExtArgs>
    pagos?: boolean | Venta$pagosArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      lineasVenta: Prisma.$LineaVentaPayload<ExtArgs>[]
      pagos: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      montoTotal: Prisma.Decimal
      clienteId: number
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lineasVenta<T extends Venta$lineasVentaArgs<ExtArgs> = {}>(args?: Subset<T, Venta$lineasVentaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends Venta$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Venta$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'Int'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly montoTotal: FieldRef<"Venta", 'Decimal'>
    readonly clienteId: FieldRef<"Venta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.lineasVenta
   */
  export type Venta$lineasVentaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    where?: LineaVentaWhereInput
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    cursor?: LineaVentaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineaVentaScalarFieldEnum | LineaVentaScalarFieldEnum[]
  }

  /**
   * Venta.pagos
   */
  export type Venta$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model LineaVenta
   */

  export type AggregateLineaVenta = {
    _count: LineaVentaCountAggregateOutputType | null
    _avg: LineaVentaAvgAggregateOutputType | null
    _sum: LineaVentaSumAggregateOutputType | null
    _min: LineaVentaMinAggregateOutputType | null
    _max: LineaVentaMaxAggregateOutputType | null
  }

  export type LineaVentaAvgAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    subTotal: Decimal | null
  }

  export type LineaVentaSumAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    subTotal: Decimal | null
  }

  export type LineaVentaMinAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    subTotal: Decimal | null
  }

  export type LineaVentaMaxAggregateOutputType = {
    id: number | null
    ventaId: number | null
    productoId: number | null
    cantidad: number | null
    subTotal: Decimal | null
  }

  export type LineaVentaCountAggregateOutputType = {
    id: number
    ventaId: number
    productoId: number
    cantidad: number
    subTotal: number
    _all: number
  }


  export type LineaVentaAvgAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    subTotal?: true
  }

  export type LineaVentaSumAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    subTotal?: true
  }

  export type LineaVentaMinAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    subTotal?: true
  }

  export type LineaVentaMaxAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    subTotal?: true
  }

  export type LineaVentaCountAggregateInputType = {
    id?: true
    ventaId?: true
    productoId?: true
    cantidad?: true
    subTotal?: true
    _all?: true
  }

  export type LineaVentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaVenta to aggregate.
     */
    where?: LineaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaVentas to fetch.
     */
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineaVentas
    **/
    _count?: true | LineaVentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineaVentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineaVentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineaVentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineaVentaMaxAggregateInputType
  }

  export type GetLineaVentaAggregateType<T extends LineaVentaAggregateArgs> = {
        [P in keyof T & keyof AggregateLineaVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineaVenta[P]>
      : GetScalarType<T[P], AggregateLineaVenta[P]>
  }




  export type LineaVentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineaVentaWhereInput
    orderBy?: LineaVentaOrderByWithAggregationInput | LineaVentaOrderByWithAggregationInput[]
    by: LineaVentaScalarFieldEnum[] | LineaVentaScalarFieldEnum
    having?: LineaVentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineaVentaCountAggregateInputType | true
    _avg?: LineaVentaAvgAggregateInputType
    _sum?: LineaVentaSumAggregateInputType
    _min?: LineaVentaMinAggregateInputType
    _max?: LineaVentaMaxAggregateInputType
  }

  export type LineaVentaGroupByOutputType = {
    id: number
    ventaId: number
    productoId: number
    cantidad: number
    subTotal: Decimal
    _count: LineaVentaCountAggregateOutputType | null
    _avg: LineaVentaAvgAggregateOutputType | null
    _sum: LineaVentaSumAggregateOutputType | null
    _min: LineaVentaMinAggregateOutputType | null
    _max: LineaVentaMaxAggregateOutputType | null
  }

  type GetLineaVentaGroupByPayload<T extends LineaVentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineaVentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineaVentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineaVentaGroupByOutputType[P]>
            : GetScalarType<T[P], LineaVentaGroupByOutputType[P]>
        }
      >
    >


  export type LineaVentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    subTotal?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineaVenta"]>



  export type LineaVentaSelectScalar = {
    id?: boolean
    ventaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    subTotal?: boolean
  }

  export type LineaVentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaId" | "productoId" | "cantidad" | "subTotal", ExtArgs["result"]["lineaVenta"]>
  export type LineaVentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $LineaVentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineaVenta"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ventaId: number
      productoId: number
      cantidad: number
      subTotal: Prisma.Decimal
    }, ExtArgs["result"]["lineaVenta"]>
    composites: {}
  }

  type LineaVentaGetPayload<S extends boolean | null | undefined | LineaVentaDefaultArgs> = $Result.GetResult<Prisma.$LineaVentaPayload, S>

  type LineaVentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineaVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineaVentaCountAggregateInputType | true
    }

  export interface LineaVentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineaVenta'], meta: { name: 'LineaVenta' } }
    /**
     * Find zero or one LineaVenta that matches the filter.
     * @param {LineaVentaFindUniqueArgs} args - Arguments to find a LineaVenta
     * @example
     * // Get one LineaVenta
     * const lineaVenta = await prisma.lineaVenta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineaVentaFindUniqueArgs>(args: SelectSubset<T, LineaVentaFindUniqueArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineaVenta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineaVentaFindUniqueOrThrowArgs} args - Arguments to find a LineaVenta
     * @example
     * // Get one LineaVenta
     * const lineaVenta = await prisma.lineaVenta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineaVentaFindUniqueOrThrowArgs>(args: SelectSubset<T, LineaVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaVenta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaFindFirstArgs} args - Arguments to find a LineaVenta
     * @example
     * // Get one LineaVenta
     * const lineaVenta = await prisma.lineaVenta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineaVentaFindFirstArgs>(args?: SelectSubset<T, LineaVentaFindFirstArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineaVenta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaFindFirstOrThrowArgs} args - Arguments to find a LineaVenta
     * @example
     * // Get one LineaVenta
     * const lineaVenta = await prisma.lineaVenta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineaVentaFindFirstOrThrowArgs>(args?: SelectSubset<T, LineaVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineaVentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineaVentas
     * const lineaVentas = await prisma.lineaVenta.findMany()
     * 
     * // Get first 10 LineaVentas
     * const lineaVentas = await prisma.lineaVenta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineaVentaWithIdOnly = await prisma.lineaVenta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineaVentaFindManyArgs>(args?: SelectSubset<T, LineaVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineaVenta.
     * @param {LineaVentaCreateArgs} args - Arguments to create a LineaVenta.
     * @example
     * // Create one LineaVenta
     * const LineaVenta = await prisma.lineaVenta.create({
     *   data: {
     *     // ... data to create a LineaVenta
     *   }
     * })
     * 
     */
    create<T extends LineaVentaCreateArgs>(args: SelectSubset<T, LineaVentaCreateArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineaVentas.
     * @param {LineaVentaCreateManyArgs} args - Arguments to create many LineaVentas.
     * @example
     * // Create many LineaVentas
     * const lineaVenta = await prisma.lineaVenta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineaVentaCreateManyArgs>(args?: SelectSubset<T, LineaVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LineaVenta.
     * @param {LineaVentaDeleteArgs} args - Arguments to delete one LineaVenta.
     * @example
     * // Delete one LineaVenta
     * const LineaVenta = await prisma.lineaVenta.delete({
     *   where: {
     *     // ... filter to delete one LineaVenta
     *   }
     * })
     * 
     */
    delete<T extends LineaVentaDeleteArgs>(args: SelectSubset<T, LineaVentaDeleteArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineaVenta.
     * @param {LineaVentaUpdateArgs} args - Arguments to update one LineaVenta.
     * @example
     * // Update one LineaVenta
     * const lineaVenta = await prisma.lineaVenta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineaVentaUpdateArgs>(args: SelectSubset<T, LineaVentaUpdateArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineaVentas.
     * @param {LineaVentaDeleteManyArgs} args - Arguments to filter LineaVentas to delete.
     * @example
     * // Delete a few LineaVentas
     * const { count } = await prisma.lineaVenta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineaVentaDeleteManyArgs>(args?: SelectSubset<T, LineaVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineaVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineaVentas
     * const lineaVenta = await prisma.lineaVenta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineaVentaUpdateManyArgs>(args: SelectSubset<T, LineaVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LineaVenta.
     * @param {LineaVentaUpsertArgs} args - Arguments to update or create a LineaVenta.
     * @example
     * // Update or create a LineaVenta
     * const lineaVenta = await prisma.lineaVenta.upsert({
     *   create: {
     *     // ... data to create a LineaVenta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineaVenta we want to update
     *   }
     * })
     */
    upsert<T extends LineaVentaUpsertArgs>(args: SelectSubset<T, LineaVentaUpsertArgs<ExtArgs>>): Prisma__LineaVentaClient<$Result.GetResult<Prisma.$LineaVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineaVentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaCountArgs} args - Arguments to filter LineaVentas to count.
     * @example
     * // Count the number of LineaVentas
     * const count = await prisma.lineaVenta.count({
     *   where: {
     *     // ... the filter for the LineaVentas we want to count
     *   }
     * })
    **/
    count<T extends LineaVentaCountArgs>(
      args?: Subset<T, LineaVentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineaVentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineaVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineaVentaAggregateArgs>(args: Subset<T, LineaVentaAggregateArgs>): Prisma.PrismaPromise<GetLineaVentaAggregateType<T>>

    /**
     * Group by LineaVenta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaVentaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineaVentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineaVentaGroupByArgs['orderBy'] }
        : { orderBy?: LineaVentaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineaVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineaVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineaVenta model
   */
  readonly fields: LineaVentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineaVenta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineaVentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LineaVenta model
   */
  interface LineaVentaFieldRefs {
    readonly id: FieldRef<"LineaVenta", 'Int'>
    readonly ventaId: FieldRef<"LineaVenta", 'Int'>
    readonly productoId: FieldRef<"LineaVenta", 'Int'>
    readonly cantidad: FieldRef<"LineaVenta", 'Int'>
    readonly subTotal: FieldRef<"LineaVenta", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * LineaVenta findUnique
   */
  export type LineaVentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter, which LineaVenta to fetch.
     */
    where: LineaVentaWhereUniqueInput
  }

  /**
   * LineaVenta findUniqueOrThrow
   */
  export type LineaVentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter, which LineaVenta to fetch.
     */
    where: LineaVentaWhereUniqueInput
  }

  /**
   * LineaVenta findFirst
   */
  export type LineaVentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter, which LineaVenta to fetch.
     */
    where?: LineaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaVentas to fetch.
     */
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaVentas.
     */
    cursor?: LineaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaVentas.
     */
    distinct?: LineaVentaScalarFieldEnum | LineaVentaScalarFieldEnum[]
  }

  /**
   * LineaVenta findFirstOrThrow
   */
  export type LineaVentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter, which LineaVenta to fetch.
     */
    where?: LineaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaVentas to fetch.
     */
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineaVentas.
     */
    cursor?: LineaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaVentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineaVentas.
     */
    distinct?: LineaVentaScalarFieldEnum | LineaVentaScalarFieldEnum[]
  }

  /**
   * LineaVenta findMany
   */
  export type LineaVentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter, which LineaVentas to fetch.
     */
    where?: LineaVentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineaVentas to fetch.
     */
    orderBy?: LineaVentaOrderByWithRelationInput | LineaVentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineaVentas.
     */
    cursor?: LineaVentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineaVentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineaVentas.
     */
    skip?: number
    distinct?: LineaVentaScalarFieldEnum | LineaVentaScalarFieldEnum[]
  }

  /**
   * LineaVenta create
   */
  export type LineaVentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * The data needed to create a LineaVenta.
     */
    data: XOR<LineaVentaCreateInput, LineaVentaUncheckedCreateInput>
  }

  /**
   * LineaVenta createMany
   */
  export type LineaVentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineaVentas.
     */
    data: LineaVentaCreateManyInput | LineaVentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineaVenta update
   */
  export type LineaVentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * The data needed to update a LineaVenta.
     */
    data: XOR<LineaVentaUpdateInput, LineaVentaUncheckedUpdateInput>
    /**
     * Choose, which LineaVenta to update.
     */
    where: LineaVentaWhereUniqueInput
  }

  /**
   * LineaVenta updateMany
   */
  export type LineaVentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineaVentas.
     */
    data: XOR<LineaVentaUpdateManyMutationInput, LineaVentaUncheckedUpdateManyInput>
    /**
     * Filter which LineaVentas to update
     */
    where?: LineaVentaWhereInput
    /**
     * Limit how many LineaVentas to update.
     */
    limit?: number
  }

  /**
   * LineaVenta upsert
   */
  export type LineaVentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * The filter to search for the LineaVenta to update in case it exists.
     */
    where: LineaVentaWhereUniqueInput
    /**
     * In case the LineaVenta found by the `where` argument doesn't exist, create a new LineaVenta with this data.
     */
    create: XOR<LineaVentaCreateInput, LineaVentaUncheckedCreateInput>
    /**
     * In case the LineaVenta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineaVentaUpdateInput, LineaVentaUncheckedUpdateInput>
  }

  /**
   * LineaVenta delete
   */
  export type LineaVentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
    /**
     * Filter which LineaVenta to delete.
     */
    where: LineaVentaWhereUniqueInput
  }

  /**
   * LineaVenta deleteMany
   */
  export type LineaVentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineaVentas to delete
     */
    where?: LineaVentaWhereInput
    /**
     * Limit how many LineaVentas to delete.
     */
    limit?: number
  }

  /**
   * LineaVenta without action
   */
  export type LineaVentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineaVenta
     */
    select?: LineaVentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineaVenta
     */
    omit?: LineaVentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineaVentaInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    ventaId: number | null
    metodoPagoId: number | null
  }

  export type PagoSumAggregateOutputType = {
    id: number | null
    monto: Decimal | null
    ventaId: number | null
    metodoPagoId: number | null
  }

  export type PagoMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    monto: Decimal | null
    ventaId: number | null
    metodoPagoId: number | null
  }

  export type PagoMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    monto: Decimal | null
    ventaId: number | null
    metodoPagoId: number | null
  }

  export type PagoCountAggregateOutputType = {
    id: number
    fecha: number
    monto: number
    ventaId: number
    metodoPagoId: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id?: true
    monto?: true
    ventaId?: true
    metodoPagoId?: true
  }

  export type PagoSumAggregateInputType = {
    id?: true
    monto?: true
    ventaId?: true
    metodoPagoId?: true
  }

  export type PagoMinAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    ventaId?: true
    metodoPagoId?: true
  }

  export type PagoMaxAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    ventaId?: true
    metodoPagoId?: true
  }

  export type PagoCountAggregateInputType = {
    id?: true
    fecha?: true
    monto?: true
    ventaId?: true
    metodoPagoId?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id: number
    fecha: Date
    monto: Decimal
    ventaId: number
    metodoPagoId: number
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    monto?: boolean
    ventaId?: boolean
    metodoPagoId?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    metodoPago?: boolean | MetodoPagoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>



  export type PagoSelectScalar = {
    id?: boolean
    fecha?: boolean
    monto?: boolean
    ventaId?: boolean
    metodoPagoId?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "monto" | "ventaId" | "metodoPagoId", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    metodoPago?: boolean | MetodoPagoDefaultArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      metodoPago: Prisma.$MetodoPagoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      monto: Prisma.Decimal
      ventaId: number
      metodoPagoId: number
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metodoPago<T extends MetodoPagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetodoPagoDefaultArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly id: FieldRef<"Pago", 'Int'>
    readonly fecha: FieldRef<"Pago", 'DateTime'>
    readonly monto: FieldRef<"Pago", 'Decimal'>
    readonly ventaId: FieldRef<"Pago", 'Int'>
    readonly metodoPagoId: FieldRef<"Pago", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model MetodoPago
   */

  export type AggregateMetodoPago = {
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  export type MetodoPagoAvgAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoSumAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MetodoPagoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MetodoPagoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type MetodoPagoAvgAggregateInputType = {
    id?: true
  }

  export type MetodoPagoSumAggregateInputType = {
    id?: true
  }

  export type MetodoPagoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MetodoPagoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MetodoPagoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type MetodoPagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPago to aggregate.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetodoPagos
    **/
    _count?: true | MetodoPagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetodoPagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetodoPagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetodoPagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type GetMetodoPagoAggregateType<T extends MetodoPagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodoPago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodoPago[P]>
      : GetScalarType<T[P], AggregateMetodoPago[P]>
  }




  export type MetodoPagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetodoPagoWhereInput
    orderBy?: MetodoPagoOrderByWithAggregationInput | MetodoPagoOrderByWithAggregationInput[]
    by: MetodoPagoScalarFieldEnum[] | MetodoPagoScalarFieldEnum
    having?: MetodoPagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetodoPagoCountAggregateInputType | true
    _avg?: MetodoPagoAvgAggregateInputType
    _sum?: MetodoPagoSumAggregateInputType
    _min?: MetodoPagoMinAggregateInputType
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type MetodoPagoGroupByOutputType = {
    id: number
    nombre: string
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  type GetMetodoPagoGroupByPayload<T extends MetodoPagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetodoPagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetodoPagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
            : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
        }
      >
    >


  export type MetodoPagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    pagos?: boolean | MetodoPago$pagosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodoPago"]>



  export type MetodoPagoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type MetodoPagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["metodoPago"]>
  export type MetodoPagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | MetodoPago$pagosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MetodoPagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetodoPago"
    objects: {
      pagos: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["metodoPago"]>
    composites: {}
  }

  type MetodoPagoGetPayload<S extends boolean | null | undefined | MetodoPagoDefaultArgs> = $Result.GetResult<Prisma.$MetodoPagoPayload, S>

  type MetodoPagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetodoPagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetodoPagoCountAggregateInputType | true
    }

  export interface MetodoPagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetodoPago'], meta: { name: 'MetodoPago' } }
    /**
     * Find zero or one MetodoPago that matches the filter.
     * @param {MetodoPagoFindUniqueArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetodoPagoFindUniqueArgs>(args: SelectSubset<T, MetodoPagoFindUniqueArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetodoPago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetodoPagoFindUniqueOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetodoPagoFindUniqueOrThrowArgs>(args: SelectSubset<T, MetodoPagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetodoPagoFindFirstArgs>(args?: SelectSubset<T, MetodoPagoFindFirstArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetodoPagoFindFirstOrThrowArgs>(args?: SelectSubset<T, MetodoPagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetodoPagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany()
     * 
     * // Get first 10 MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metodoPagoWithIdOnly = await prisma.metodoPago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetodoPagoFindManyArgs>(args?: SelectSubset<T, MetodoPagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetodoPago.
     * @param {MetodoPagoCreateArgs} args - Arguments to create a MetodoPago.
     * @example
     * // Create one MetodoPago
     * const MetodoPago = await prisma.metodoPago.create({
     *   data: {
     *     // ... data to create a MetodoPago
     *   }
     * })
     * 
     */
    create<T extends MetodoPagoCreateArgs>(args: SelectSubset<T, MetodoPagoCreateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetodoPagos.
     * @param {MetodoPagoCreateManyArgs} args - Arguments to create many MetodoPagos.
     * @example
     * // Create many MetodoPagos
     * const metodoPago = await prisma.metodoPago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetodoPagoCreateManyArgs>(args?: SelectSubset<T, MetodoPagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetodoPago.
     * @param {MetodoPagoDeleteArgs} args - Arguments to delete one MetodoPago.
     * @example
     * // Delete one MetodoPago
     * const MetodoPago = await prisma.metodoPago.delete({
     *   where: {
     *     // ... filter to delete one MetodoPago
     *   }
     * })
     * 
     */
    delete<T extends MetodoPagoDeleteArgs>(args: SelectSubset<T, MetodoPagoDeleteArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetodoPago.
     * @param {MetodoPagoUpdateArgs} args - Arguments to update one MetodoPago.
     * @example
     * // Update one MetodoPago
     * const metodoPago = await prisma.metodoPago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetodoPagoUpdateArgs>(args: SelectSubset<T, MetodoPagoUpdateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetodoPagos.
     * @param {MetodoPagoDeleteManyArgs} args - Arguments to filter MetodoPagos to delete.
     * @example
     * // Delete a few MetodoPagos
     * const { count } = await prisma.metodoPago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetodoPagoDeleteManyArgs>(args?: SelectSubset<T, MetodoPagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetodoPagos
     * const metodoPago = await prisma.metodoPago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetodoPagoUpdateManyArgs>(args: SelectSubset<T, MetodoPagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetodoPago.
     * @param {MetodoPagoUpsertArgs} args - Arguments to update or create a MetodoPago.
     * @example
     * // Update or create a MetodoPago
     * const metodoPago = await prisma.metodoPago.upsert({
     *   create: {
     *     // ... data to create a MetodoPago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetodoPago we want to update
     *   }
     * })
     */
    upsert<T extends MetodoPagoUpsertArgs>(args: SelectSubset<T, MetodoPagoUpsertArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoCountArgs} args - Arguments to filter MetodoPagos to count.
     * @example
     * // Count the number of MetodoPagos
     * const count = await prisma.metodoPago.count({
     *   where: {
     *     // ... the filter for the MetodoPagos we want to count
     *   }
     * })
    **/
    count<T extends MetodoPagoCountArgs>(
      args?: Subset<T, MetodoPagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetodoPagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetodoPagoAggregateArgs>(args: Subset<T, MetodoPagoAggregateArgs>): Prisma.PrismaPromise<GetMetodoPagoAggregateType<T>>

    /**
     * Group by MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetodoPagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetodoPagoGroupByArgs['orderBy'] }
        : { orderBy?: MetodoPagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetodoPagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodoPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetodoPago model
   */
  readonly fields: MetodoPagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetodoPago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetodoPagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagos<T extends MetodoPago$pagosArgs<ExtArgs> = {}>(args?: Subset<T, MetodoPago$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetodoPago model
   */
  interface MetodoPagoFieldRefs {
    readonly id: FieldRef<"MetodoPago", 'Int'>
    readonly nombre: FieldRef<"MetodoPago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MetodoPago findUnique
   */
  export type MetodoPagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findUniqueOrThrow
   */
  export type MetodoPagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findFirst
   */
  export type MetodoPagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findFirstOrThrow
   */
  export type MetodoPagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findMany
   */
  export type MetodoPagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPagos to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago create
   */
  export type MetodoPagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to create a MetodoPago.
     */
    data: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
  }

  /**
   * MetodoPago createMany
   */
  export type MetodoPagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetodoPagos.
     */
    data: MetodoPagoCreateManyInput | MetodoPagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetodoPago update
   */
  export type MetodoPagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to update a MetodoPago.
     */
    data: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
    /**
     * Choose, which MetodoPago to update.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago updateMany
   */
  export type MetodoPagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetodoPagos.
     */
    data: XOR<MetodoPagoUpdateManyMutationInput, MetodoPagoUncheckedUpdateManyInput>
    /**
     * Filter which MetodoPagos to update
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to update.
     */
    limit?: number
  }

  /**
   * MetodoPago upsert
   */
  export type MetodoPagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The filter to search for the MetodoPago to update in case it exists.
     */
    where: MetodoPagoWhereUniqueInput
    /**
     * In case the MetodoPago found by the `where` argument doesn't exist, create a new MetodoPago with this data.
     */
    create: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
    /**
     * In case the MetodoPago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
  }

  /**
   * MetodoPago delete
   */
  export type MetodoPagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter which MetodoPago to delete.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago deleteMany
   */
  export type MetodoPagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPagos to delete
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to delete.
     */
    limit?: number
  }

  /**
   * MetodoPago.pagos
   */
  export type MetodoPago$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * MetodoPago without action
   */
  export type MetodoPagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nombre: 'nombre',
    apellido: 'apellido',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    direccion: 'direccion',
    telefono: 'telefono',
    localidadId: 'localidadId'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const LocalidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codPostal: 'codPostal',
    provinciaId: 'provinciaId'
  };

  export type LocalidadScalarFieldEnum = (typeof LocalidadScalarFieldEnum)[keyof typeof LocalidadScalarFieldEnum]


  export const ProvinciaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ProvinciaScalarFieldEnum = (typeof ProvinciaScalarFieldEnum)[keyof typeof ProvinciaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    foto: 'foto',
    categoriaId: 'categoriaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    montoTotal: 'montoTotal',
    clienteId: 'clienteId'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const LineaVentaScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    subTotal: 'subTotal'
  };

  export type LineaVentaScalarFieldEnum = (typeof LineaVentaScalarFieldEnum)[keyof typeof LineaVentaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    monto: 'monto',
    ventaId: 'ventaId',
    metodoPagoId: 'metodoPagoId'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const MetodoPagoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type MetodoPagoScalarFieldEnum = (typeof MetodoPagoScalarFieldEnum)[keyof typeof MetodoPagoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    nombre: 'nombre',
    apellido: 'apellido',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClienteOrderByRelevanceFieldEnum: {
    direccion: 'direccion',
    telefono: 'telefono'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const LocalidadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    codPostal: 'codPostal'
  };

  export type LocalidadOrderByRelevanceFieldEnum = (typeof LocalidadOrderByRelevanceFieldEnum)[keyof typeof LocalidadOrderByRelevanceFieldEnum]


  export const ProvinciaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type ProvinciaOrderByRelevanceFieldEnum = (typeof ProvinciaOrderByRelevanceFieldEnum)[keyof typeof ProvinciaOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    foto: 'foto'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const MetodoPagoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type MetodoPagoOrderByRelevanceFieldEnum = (typeof MetodoPagoOrderByRelevanceFieldEnum)[keyof typeof MetodoPagoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    apellido?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    apellido?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    cliente?: XOR<ClienteNullableScalarRelationFilter, ClienteWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    apellido?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    userId?: IntFilter<"Cliente"> | number
    direccion?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    localidadId?: IntNullableFilter<"Cliente"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    localidad?: XOR<LocalidadNullableScalarRelationFilter, LocalidadWhereInput> | null
    ventas?: VentaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    localidadId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    localidad?: LocalidadOrderByWithRelationInput
    ventas?: VentaOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    direccion?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    localidadId?: IntNullableFilter<"Cliente"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    localidad?: XOR<LocalidadNullableScalarRelationFilter, LocalidadWhereInput> | null
    ventas?: VentaListRelationFilter
  }, "id" | "userId">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    direccion?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    localidadId?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    userId?: IntWithAggregatesFilter<"Cliente"> | number
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    localidadId?: IntNullableWithAggregatesFilter<"Cliente"> | number | null
  }

  export type LocalidadWhereInput = {
    AND?: LocalidadWhereInput | LocalidadWhereInput[]
    OR?: LocalidadWhereInput[]
    NOT?: LocalidadWhereInput | LocalidadWhereInput[]
    id?: IntFilter<"Localidad"> | number
    nombre?: StringFilter<"Localidad"> | string
    codPostal?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    clientes?: ClienteListRelationFilter
  }

  export type LocalidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codPostal?: SortOrder
    provinciaId?: SortOrder
    provincia?: ProvinciaOrderByWithRelationInput
    clientes?: ClienteOrderByRelationAggregateInput
    _relevance?: LocalidadOrderByRelevanceInput
  }

  export type LocalidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalidadWhereInput | LocalidadWhereInput[]
    OR?: LocalidadWhereInput[]
    NOT?: LocalidadWhereInput | LocalidadWhereInput[]
    nombre?: StringFilter<"Localidad"> | string
    codPostal?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    clientes?: ClienteListRelationFilter
  }, "id">

  export type LocalidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codPostal?: SortOrder
    provinciaId?: SortOrder
    _count?: LocalidadCountOrderByAggregateInput
    _avg?: LocalidadAvgOrderByAggregateInput
    _max?: LocalidadMaxOrderByAggregateInput
    _min?: LocalidadMinOrderByAggregateInput
    _sum?: LocalidadSumOrderByAggregateInput
  }

  export type LocalidadScalarWhereWithAggregatesInput = {
    AND?: LocalidadScalarWhereWithAggregatesInput | LocalidadScalarWhereWithAggregatesInput[]
    OR?: LocalidadScalarWhereWithAggregatesInput[]
    NOT?: LocalidadScalarWhereWithAggregatesInput | LocalidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localidad"> | number
    nombre?: StringWithAggregatesFilter<"Localidad"> | string
    codPostal?: StringWithAggregatesFilter<"Localidad"> | string
    provinciaId?: IntWithAggregatesFilter<"Localidad"> | number
  }

  export type ProvinciaWhereInput = {
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    id?: IntFilter<"Provincia"> | number
    nombre?: StringFilter<"Provincia"> | string
    localidades?: LocalidadListRelationFilter
  }

  export type ProvinciaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    localidades?: LocalidadOrderByRelationAggregateInput
    _relevance?: ProvinciaOrderByRelevanceInput
  }

  export type ProvinciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    localidades?: LocalidadListRelationFilter
  }, "id" | "nombre">

  export type ProvinciaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ProvinciaCountOrderByAggregateInput
    _avg?: ProvinciaAvgOrderByAggregateInput
    _max?: ProvinciaMaxOrderByAggregateInput
    _min?: ProvinciaMinOrderByAggregateInput
    _sum?: ProvinciaSumOrderByAggregateInput
  }

  export type ProvinciaScalarWhereWithAggregatesInput = {
    AND?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    OR?: ProvinciaScalarWhereWithAggregatesInput[]
    NOT?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provincia"> | number
    nombre?: StringWithAggregatesFilter<"Provincia"> | string
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    foto?: StringNullableFilter<"Producto"> | string | null
    categoriaId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    lineasVenta?: LineaVentaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    foto?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    lineasVenta?: LineaVentaOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    foto?: StringNullableFilter<"Producto"> | string | null
    categoriaId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    lineasVenta?: LineaVentaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    foto?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringWithAggregatesFilter<"Producto"> | string
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Producto"> | number
    foto?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    categoriaId?: IntWithAggregatesFilter<"Producto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producto"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    productos?: ProductoListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    montoTotal?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    clienteId?: IntFilter<"Venta"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    lineasVenta?: LineaVentaListRelationFilter
    pagos?: PagoListRelationFilter
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    lineasVenta?: LineaVentaOrderByRelationAggregateInput
    pagos?: PagoOrderByRelationAggregateInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    fecha?: DateTimeFilter<"Venta"> | Date | string
    montoTotal?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    clienteId?: IntFilter<"Venta"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    lineasVenta?: LineaVentaListRelationFilter
    pagos?: PagoListRelationFilter
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venta"> | number
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    montoTotal?: DecimalWithAggregatesFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    clienteId?: IntWithAggregatesFilter<"Venta"> | number
  }

  export type LineaVentaWhereInput = {
    AND?: LineaVentaWhereInput | LineaVentaWhereInput[]
    OR?: LineaVentaWhereInput[]
    NOT?: LineaVentaWhereInput | LineaVentaWhereInput[]
    id?: IntFilter<"LineaVenta"> | number
    ventaId?: IntFilter<"LineaVenta"> | number
    productoId?: IntFilter<"LineaVenta"> | number
    cantidad?: IntFilter<"LineaVenta"> | number
    subTotal?: DecimalFilter<"LineaVenta"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type LineaVentaOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    venta?: VentaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type LineaVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ventaId_productoId?: LineaVentaVentaIdProductoIdCompoundUniqueInput
    AND?: LineaVentaWhereInput | LineaVentaWhereInput[]
    OR?: LineaVentaWhereInput[]
    NOT?: LineaVentaWhereInput | LineaVentaWhereInput[]
    ventaId?: IntFilter<"LineaVenta"> | number
    productoId?: IntFilter<"LineaVenta"> | number
    cantidad?: IntFilter<"LineaVenta"> | number
    subTotal?: DecimalFilter<"LineaVenta"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id" | "ventaId_productoId">

  export type LineaVentaOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
    _count?: LineaVentaCountOrderByAggregateInput
    _avg?: LineaVentaAvgOrderByAggregateInput
    _max?: LineaVentaMaxOrderByAggregateInput
    _min?: LineaVentaMinOrderByAggregateInput
    _sum?: LineaVentaSumOrderByAggregateInput
  }

  export type LineaVentaScalarWhereWithAggregatesInput = {
    AND?: LineaVentaScalarWhereWithAggregatesInput | LineaVentaScalarWhereWithAggregatesInput[]
    OR?: LineaVentaScalarWhereWithAggregatesInput[]
    NOT?: LineaVentaScalarWhereWithAggregatesInput | LineaVentaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LineaVenta"> | number
    ventaId?: IntWithAggregatesFilter<"LineaVenta"> | number
    productoId?: IntWithAggregatesFilter<"LineaVenta"> | number
    cantidad?: IntWithAggregatesFilter<"LineaVenta"> | number
    subTotal?: DecimalWithAggregatesFilter<"LineaVenta"> | Decimal | DecimalJsLike | number | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    id?: IntFilter<"Pago"> | number
    fecha?: DateTimeFilter<"Pago"> | Date | string
    monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    ventaId?: IntFilter<"Pago"> | number
    metodoPagoId?: IntFilter<"Pago"> | number
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    metodoPago?: XOR<MetodoPagoScalarRelationFilter, MetodoPagoWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
    venta?: VentaOrderByWithRelationInput
    metodoPago?: MetodoPagoOrderByWithRelationInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    fecha?: DateTimeFilter<"Pago"> | Date | string
    monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    ventaId?: IntFilter<"Pago"> | number
    metodoPagoId?: IntFilter<"Pago"> | number
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    metodoPago?: XOR<MetodoPagoScalarRelationFilter, MetodoPagoWhereInput>
  }, "id">

  export type PagoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pago"> | number
    fecha?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
    monto?: DecimalWithAggregatesFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    ventaId?: IntWithAggregatesFilter<"Pago"> | number
    metodoPagoId?: IntWithAggregatesFilter<"Pago"> | number
  }

  export type MetodoPagoWhereInput = {
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    id?: IntFilter<"MetodoPago"> | number
    nombre?: StringFilter<"MetodoPago"> | string
    pagos?: PagoListRelationFilter
  }

  export type MetodoPagoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    pagos?: PagoOrderByRelationAggregateInput
    _relevance?: MetodoPagoOrderByRelevanceInput
  }

  export type MetodoPagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    pagos?: PagoListRelationFilter
  }, "id" | "nombre">

  export type MetodoPagoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: MetodoPagoCountOrderByAggregateInput
    _avg?: MetodoPagoAvgOrderByAggregateInput
    _max?: MetodoPagoMaxOrderByAggregateInput
    _min?: MetodoPagoMinOrderByAggregateInput
    _sum?: MetodoPagoSumOrderByAggregateInput
  }

  export type MetodoPagoScalarWhereWithAggregatesInput = {
    AND?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    OR?: MetodoPagoScalarWhereWithAggregatesInput[]
    NOT?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetodoPago"> | number
    nombre?: StringWithAggregatesFilter<"MetodoPago"> | string
  }

  export type UserCreateInput = {
    email: string
    nombre: string
    apellido: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    nombre: string
    apellido: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente?: ClienteUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    nombre: string
    apellido: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    direccion?: string | null
    telefono?: string | null
    user: UserCreateNestedOneWithoutClienteInput
    localidad?: LocalidadCreateNestedOneWithoutClientesInput
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    userId: number
    direccion?: string | null
    telefono?: string | null
    localidadId?: number | null
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClienteNestedInput
    localidad?: LocalidadUpdateOneWithoutClientesNestedInput
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    localidadId?: NullableIntFieldUpdateOperationsInput | number | null
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    userId: number
    direccion?: string | null
    telefono?: string | null
    localidadId?: number | null
  }

  export type ClienteUpdateManyMutationInput = {
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    localidadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocalidadCreateInput = {
    nombre: string
    codPostal: string
    provincia: ProvinciaCreateNestedOneWithoutLocalidadesInput
    clientes?: ClienteCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateInput = {
    id?: number
    nombre: string
    codPostal: string
    provinciaId: number
    clientes?: ClienteUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput
    clientes?: ClienteUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    clientes?: ClienteUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadCreateManyInput = {
    id?: number
    nombre: string
    codPostal: string
    provinciaId: number
  }

  export type LocalidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
  }

  export type LocalidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProvinciaCreateInput = {
    nombre: string
    localidades?: LocalidadCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateInput = {
    id?: number
    nombre: string
    localidades?: LocalidadUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LocalidadUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ProvinciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    lineasVenta?: LineaVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lineasVenta?: LineaVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    lineasVenta?: LineaVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineasVenta?: LineaVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type VentaCreateInput = {
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    lineasVenta?: LineaVentaCreateNestedManyWithoutVentaInput
    pagos?: PagoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    clienteId: number
    lineasVenta?: LineaVentaUncheckedCreateNestedManyWithoutVentaInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    lineasVenta?: LineaVentaUpdateManyWithoutVentaNestedInput
    pagos?: PagoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: IntFieldUpdateOperationsInput | number
    lineasVenta?: LineaVentaUncheckedUpdateManyWithoutVentaNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    clienteId: number
  }

  export type VentaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type LineaVentaCreateInput = {
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutLineasVentaInput
    producto: ProductoCreateNestedOneWithoutLineasVentaInput
  }

  export type LineaVentaUncheckedCreateInput = {
    id?: number
    ventaId: number
    productoId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutLineasVentaNestedInput
    producto?: ProductoUpdateOneRequiredWithoutLineasVentaNestedInput
  }

  export type LineaVentaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaCreateManyInput = {
    id?: number
    ventaId: number
    productoId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PagoCreateInput = {
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutPagosInput
    metodoPago: MetodoPagoCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    ventaId: number
    metodoPagoId: number
  }

  export type PagoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutPagosNestedInput
    metodoPago?: MetodoPagoUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ventaId?: IntFieldUpdateOperationsInput | number
    metodoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type PagoCreateManyInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    ventaId: number
    metodoPagoId: number
  }

  export type PagoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ventaId?: IntFieldUpdateOperationsInput | number
    metodoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type MetodoPagoCreateInput = {
    nombre: string
    pagos?: PagoCreateNestedManyWithoutMetodoPagoInput
  }

  export type MetodoPagoUncheckedCreateInput = {
    id?: number
    nombre: string
    pagos?: PagoUncheckedCreateNestedManyWithoutMetodoPagoInput
  }

  export type MetodoPagoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pagos?: PagoUpdateManyWithoutMetodoPagoNestedInput
  }

  export type MetodoPagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pagos?: PagoUncheckedUpdateManyWithoutMetodoPagoNestedInput
  }

  export type MetodoPagoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type MetodoPagoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MetodoPagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteNullableScalarRelationFilter = {
    is?: ClienteWhereInput | null
    isNot?: ClienteWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LocalidadNullableScalarRelationFilter = {
    is?: LocalidadWhereInput | null
    isNot?: LocalidadWhereInput | null
  }

  export type VentaListRelationFilter = {
    every?: VentaWhereInput
    some?: VentaWhereInput
    none?: VentaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    localidadId?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    localidadId?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    localidadId?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    localidadId?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    localidadId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProvinciaScalarRelationFilter = {
    is?: ProvinciaWhereInput
    isNot?: ProvinciaWhereInput
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalidadOrderByRelevanceInput = {
    fields: LocalidadOrderByRelevanceFieldEnum | LocalidadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocalidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codPostal?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadAvgOrderByAggregateInput = {
    id?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codPostal?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codPostal?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadSumOrderByAggregateInput = {
    id?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadListRelationFilter = {
    every?: LocalidadWhereInput
    some?: LocalidadWhereInput
    none?: LocalidadWhereInput
  }

  export type LocalidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinciaOrderByRelevanceInput = {
    fields: ProvinciaOrderByRelevanceFieldEnum | ProvinciaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProvinciaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type LineaVentaListRelationFilter = {
    every?: LineaVentaWhereInput
    some?: LineaVentaWhereInput
    none?: LineaVentaWhereInput
  }

  export type LineaVentaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    foto?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoriaId?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    foto?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    foto?: SortOrder
    categoriaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    categoriaId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    id?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    id?: SortOrder
    montoTotal?: SortOrder
    clienteId?: SortOrder
  }

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type LineaVentaVentaIdProductoIdCompoundUniqueInput = {
    ventaId: number
    productoId: number
  }

  export type LineaVentaCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
  }

  export type LineaVentaAvgOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
  }

  export type LineaVentaMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
  }

  export type LineaVentaMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
  }

  export type LineaVentaSumOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    subTotal?: SortOrder
  }

  export type MetodoPagoScalarRelationFilter = {
    is?: MetodoPagoWhereInput
    isNot?: MetodoPagoWhereInput
  }

  export type PagoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    ventaId?: SortOrder
    metodoPagoId?: SortOrder
  }

  export type MetodoPagoOrderByRelevanceInput = {
    fields: MetodoPagoOrderByRelevanceFieldEnum | MetodoPagoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MetodoPagoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MetodoPagoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetodoPagoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MetodoPagoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MetodoPagoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteCreateNestedOneWithoutUserInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput
    connect?: ClienteWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput
    upsert?: ClienteUpsertWithoutUserInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutUserInput, ClienteUpdateWithoutUserInput>, ClienteUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutUserInput
    upsert?: ClienteUpsertWithoutUserInput
    disconnect?: ClienteWhereInput | boolean
    delete?: ClienteWhereInput | boolean
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutUserInput, ClienteUpdateWithoutUserInput>, ClienteUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutClienteInput = {
    create?: XOR<UserCreateWithoutClienteInput, UserUncheckedCreateWithoutClienteInput>
    connectOrCreate?: UserCreateOrConnectWithoutClienteInput
    connect?: UserWhereUniqueInput
  }

  export type LocalidadCreateNestedOneWithoutClientesInput = {
    create?: XOR<LocalidadCreateWithoutClientesInput, LocalidadUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutClientesInput
    connect?: LocalidadWhereUniqueInput
  }

  export type VentaCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type VentaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutClienteNestedInput = {
    create?: XOR<UserCreateWithoutClienteInput, UserUncheckedCreateWithoutClienteInput>
    connectOrCreate?: UserCreateOrConnectWithoutClienteInput
    upsert?: UserUpsertWithoutClienteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClienteInput, UserUpdateWithoutClienteInput>, UserUncheckedUpdateWithoutClienteInput>
  }

  export type LocalidadUpdateOneWithoutClientesNestedInput = {
    create?: XOR<LocalidadCreateWithoutClientesInput, LocalidadUncheckedCreateWithoutClientesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutClientesInput
    upsert?: LocalidadUpsertWithoutClientesInput
    disconnect?: LocalidadWhereInput | boolean
    delete?: LocalidadWhereInput | boolean
    connect?: LocalidadWhereUniqueInput
    update?: XOR<XOR<LocalidadUpdateToOneWithWhereWithoutClientesInput, LocalidadUpdateWithoutClientesInput>, LocalidadUncheckedUpdateWithoutClientesInput>
  }

  export type VentaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VentaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput> | VentaCreateWithoutClienteInput[] | VentaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VentaCreateOrConnectWithoutClienteInput | VentaCreateOrConnectWithoutClienteInput[]
    upsert?: VentaUpsertWithWhereUniqueWithoutClienteInput | VentaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VentaCreateManyClienteInputEnvelope
    set?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    disconnect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    delete?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    connect?: VentaWhereUniqueInput | VentaWhereUniqueInput[]
    update?: VentaUpdateWithWhereUniqueWithoutClienteInput | VentaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VentaUpdateManyWithWhereWithoutClienteInput | VentaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VentaScalarWhereInput | VentaScalarWhereInput[]
  }

  export type ProvinciaCreateNestedOneWithoutLocalidadesInput = {
    create?: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLocalidadesInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type ClienteCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput> | ClienteCreateWithoutLocalidadInput[] | ClienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLocalidadInput | ClienteCreateOrConnectWithoutLocalidadInput[]
    createMany?: ClienteCreateManyLocalidadInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput> | ClienteCreateWithoutLocalidadInput[] | ClienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLocalidadInput | ClienteCreateOrConnectWithoutLocalidadInput[]
    createMany?: ClienteCreateManyLocalidadInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput = {
    create?: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLocalidadesInput
    upsert?: ProvinciaUpsertWithoutLocalidadesInput
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutLocalidadesInput, ProvinciaUpdateWithoutLocalidadesInput>, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
  }

  export type ClienteUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput> | ClienteCreateWithoutLocalidadInput[] | ClienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLocalidadInput | ClienteCreateOrConnectWithoutLocalidadInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLocalidadInput | ClienteUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ClienteCreateManyLocalidadInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLocalidadInput | ClienteUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLocalidadInput | ClienteUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput> | ClienteCreateWithoutLocalidadInput[] | ClienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutLocalidadInput | ClienteCreateOrConnectWithoutLocalidadInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutLocalidadInput | ClienteUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ClienteCreateManyLocalidadInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutLocalidadInput | ClienteUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutLocalidadInput | ClienteUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type LocalidadCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
  }

  export type LocalidadUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
  }

  export type LocalidadUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    upsert?: LocalidadUpsertWithWhereUniqueWithoutProvinciaInput | LocalidadUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    set?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    disconnect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    delete?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    update?: LocalidadUpdateWithWhereUniqueWithoutProvinciaInput | LocalidadUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LocalidadUpdateManyWithWhereWithoutProvinciaInput | LocalidadUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
  }

  export type LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    upsert?: LocalidadUpsertWithWhereUniqueWithoutProvinciaInput | LocalidadUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    set?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    disconnect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    delete?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    update?: LocalidadUpdateWithWhereUniqueWithoutProvinciaInput | LocalidadUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LocalidadUpdateManyWithWhereWithoutProvinciaInput | LocalidadUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type LineaVentaCreateNestedManyWithoutProductoInput = {
    create?: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput> | LineaVentaCreateWithoutProductoInput[] | LineaVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutProductoInput | LineaVentaCreateOrConnectWithoutProductoInput[]
    createMany?: LineaVentaCreateManyProductoInputEnvelope
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
  }

  export type LineaVentaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput> | LineaVentaCreateWithoutProductoInput[] | LineaVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutProductoInput | LineaVentaCreateOrConnectWithoutProductoInput[]
    createMany?: LineaVentaCreateManyProductoInputEnvelope
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type LineaVentaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput> | LineaVentaCreateWithoutProductoInput[] | LineaVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutProductoInput | LineaVentaCreateOrConnectWithoutProductoInput[]
    upsert?: LineaVentaUpsertWithWhereUniqueWithoutProductoInput | LineaVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LineaVentaCreateManyProductoInputEnvelope
    set?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    disconnect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    delete?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    update?: LineaVentaUpdateWithWhereUniqueWithoutProductoInput | LineaVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LineaVentaUpdateManyWithWhereWithoutProductoInput | LineaVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
  }

  export type LineaVentaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput> | LineaVentaCreateWithoutProductoInput[] | LineaVentaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutProductoInput | LineaVentaCreateOrConnectWithoutProductoInput[]
    upsert?: LineaVentaUpsertWithWhereUniqueWithoutProductoInput | LineaVentaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: LineaVentaCreateManyProductoInputEnvelope
    set?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    disconnect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    delete?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    update?: LineaVentaUpdateWithWhereUniqueWithoutProductoInput | LineaVentaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: LineaVentaUpdateManyWithWhereWithoutProductoInput | LineaVentaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutVentasInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    connect?: ClienteWhereUniqueInput
  }

  export type LineaVentaCreateNestedManyWithoutVentaInput = {
    create?: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput> | LineaVentaCreateWithoutVentaInput[] | LineaVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutVentaInput | LineaVentaCreateOrConnectWithoutVentaInput[]
    createMany?: LineaVentaCreateManyVentaInputEnvelope
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
  }

  export type PagoCreateNestedManyWithoutVentaInput = {
    create?: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput> | PagoCreateWithoutVentaInput[] | PagoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVentaInput | PagoCreateOrConnectWithoutVentaInput[]
    createMany?: PagoCreateManyVentaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type LineaVentaUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput> | LineaVentaCreateWithoutVentaInput[] | LineaVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutVentaInput | LineaVentaCreateOrConnectWithoutVentaInput[]
    createMany?: LineaVentaCreateManyVentaInputEnvelope
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput> | PagoCreateWithoutVentaInput[] | PagoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVentaInput | PagoCreateOrConnectWithoutVentaInput[]
    createMany?: PagoCreateManyVentaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVentasInput
    upsert?: ClienteUpsertWithoutVentasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVentasInput, ClienteUpdateWithoutVentasInput>, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type LineaVentaUpdateManyWithoutVentaNestedInput = {
    create?: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput> | LineaVentaCreateWithoutVentaInput[] | LineaVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutVentaInput | LineaVentaCreateOrConnectWithoutVentaInput[]
    upsert?: LineaVentaUpsertWithWhereUniqueWithoutVentaInput | LineaVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: LineaVentaCreateManyVentaInputEnvelope
    set?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    disconnect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    delete?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    update?: LineaVentaUpdateWithWhereUniqueWithoutVentaInput | LineaVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: LineaVentaUpdateManyWithWhereWithoutVentaInput | LineaVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
  }

  export type PagoUpdateManyWithoutVentaNestedInput = {
    create?: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput> | PagoCreateWithoutVentaInput[] | PagoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVentaInput | PagoCreateOrConnectWithoutVentaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutVentaInput | PagoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: PagoCreateManyVentaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutVentaInput | PagoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutVentaInput | PagoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type LineaVentaUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput> | LineaVentaCreateWithoutVentaInput[] | LineaVentaUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: LineaVentaCreateOrConnectWithoutVentaInput | LineaVentaCreateOrConnectWithoutVentaInput[]
    upsert?: LineaVentaUpsertWithWhereUniqueWithoutVentaInput | LineaVentaUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: LineaVentaCreateManyVentaInputEnvelope
    set?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    disconnect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    delete?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    connect?: LineaVentaWhereUniqueInput | LineaVentaWhereUniqueInput[]
    update?: LineaVentaUpdateWithWhereUniqueWithoutVentaInput | LineaVentaUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: LineaVentaUpdateManyWithWhereWithoutVentaInput | LineaVentaUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput> | PagoCreateWithoutVentaInput[] | PagoUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVentaInput | PagoCreateOrConnectWithoutVentaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutVentaInput | PagoUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: PagoCreateManyVentaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutVentaInput | PagoUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutVentaInput | PagoUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type VentaCreateNestedOneWithoutLineasVentaInput = {
    create?: XOR<VentaCreateWithoutLineasVentaInput, VentaUncheckedCreateWithoutLineasVentaInput>
    connectOrCreate?: VentaCreateOrConnectWithoutLineasVentaInput
    connect?: VentaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutLineasVentaInput = {
    create?: XOR<ProductoCreateWithoutLineasVentaInput, ProductoUncheckedCreateWithoutLineasVentaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLineasVentaInput
    connect?: ProductoWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutLineasVentaNestedInput = {
    create?: XOR<VentaCreateWithoutLineasVentaInput, VentaUncheckedCreateWithoutLineasVentaInput>
    connectOrCreate?: VentaCreateOrConnectWithoutLineasVentaInput
    upsert?: VentaUpsertWithoutLineasVentaInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutLineasVentaInput, VentaUpdateWithoutLineasVentaInput>, VentaUncheckedUpdateWithoutLineasVentaInput>
  }

  export type ProductoUpdateOneRequiredWithoutLineasVentaNestedInput = {
    create?: XOR<ProductoCreateWithoutLineasVentaInput, ProductoUncheckedCreateWithoutLineasVentaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutLineasVentaInput
    upsert?: ProductoUpsertWithoutLineasVentaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutLineasVentaInput, ProductoUpdateWithoutLineasVentaInput>, ProductoUncheckedUpdateWithoutLineasVentaInput>
  }

  export type VentaCreateNestedOneWithoutPagosInput = {
    create?: XOR<VentaCreateWithoutPagosInput, VentaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutPagosInput
    connect?: VentaWhereUniqueInput
  }

  export type MetodoPagoCreateNestedOneWithoutPagosInput = {
    create?: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutPagosInput
    connect?: MetodoPagoWhereUniqueInput
  }

  export type VentaUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<VentaCreateWithoutPagosInput, VentaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: VentaCreateOrConnectWithoutPagosInput
    upsert?: VentaUpsertWithoutPagosInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutPagosInput, VentaUpdateWithoutPagosInput>, VentaUncheckedUpdateWithoutPagosInput>
  }

  export type MetodoPagoUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutPagosInput
    upsert?: MetodoPagoUpsertWithoutPagosInput
    connect?: MetodoPagoWhereUniqueInput
    update?: XOR<XOR<MetodoPagoUpdateToOneWithWhereWithoutPagosInput, MetodoPagoUpdateWithoutPagosInput>, MetodoPagoUncheckedUpdateWithoutPagosInput>
  }

  export type PagoCreateNestedManyWithoutMetodoPagoInput = {
    create?: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput> | PagoCreateWithoutMetodoPagoInput[] | PagoUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodoPagoInput | PagoCreateOrConnectWithoutMetodoPagoInput[]
    createMany?: PagoCreateManyMetodoPagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutMetodoPagoInput = {
    create?: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput> | PagoCreateWithoutMetodoPagoInput[] | PagoUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodoPagoInput | PagoCreateOrConnectWithoutMetodoPagoInput[]
    createMany?: PagoCreateManyMetodoPagoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUpdateManyWithoutMetodoPagoNestedInput = {
    create?: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput> | PagoCreateWithoutMetodoPagoInput[] | PagoUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodoPagoInput | PagoCreateOrConnectWithoutMetodoPagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMetodoPagoInput | PagoUpsertWithWhereUniqueWithoutMetodoPagoInput[]
    createMany?: PagoCreateManyMetodoPagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMetodoPagoInput | PagoUpdateWithWhereUniqueWithoutMetodoPagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMetodoPagoInput | PagoUpdateManyWithWhereWithoutMetodoPagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutMetodoPagoNestedInput = {
    create?: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput> | PagoCreateWithoutMetodoPagoInput[] | PagoUncheckedCreateWithoutMetodoPagoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMetodoPagoInput | PagoCreateOrConnectWithoutMetodoPagoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMetodoPagoInput | PagoUpsertWithWhereUniqueWithoutMetodoPagoInput[]
    createMany?: PagoCreateManyMetodoPagoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMetodoPagoInput | PagoUpdateWithWhereUniqueWithoutMetodoPagoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMetodoPagoInput | PagoUpdateManyWithWhereWithoutMetodoPagoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ClienteCreateWithoutUserInput = {
    direccion?: string | null
    telefono?: string | null
    localidad?: LocalidadCreateNestedOneWithoutClientesInput
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutUserInput = {
    id?: number
    direccion?: string | null
    telefono?: string | null
    localidadId?: number | null
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutUserInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
  }

  export type ClienteUpsertWithoutUserInput = {
    update: XOR<ClienteUpdateWithoutUserInput, ClienteUncheckedUpdateWithoutUserInput>
    create: XOR<ClienteCreateWithoutUserInput, ClienteUncheckedCreateWithoutUserInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutUserInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutUserInput, ClienteUncheckedUpdateWithoutUserInput>
  }

  export type ClienteUpdateWithoutUserInput = {
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    localidad?: LocalidadUpdateOneWithoutClientesNestedInput
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    localidadId?: NullableIntFieldUpdateOperationsInput | number | null
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type UserCreateWithoutClienteInput = {
    email: string
    nombre: string
    apellido: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutClienteInput = {
    id?: number
    email: string
    nombre: string
    apellido: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutClienteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClienteInput, UserUncheckedCreateWithoutClienteInput>
  }

  export type LocalidadCreateWithoutClientesInput = {
    nombre: string
    codPostal: string
    provincia: ProvinciaCreateNestedOneWithoutLocalidadesInput
  }

  export type LocalidadUncheckedCreateWithoutClientesInput = {
    id?: number
    nombre: string
    codPostal: string
    provinciaId: number
  }

  export type LocalidadCreateOrConnectWithoutClientesInput = {
    where: LocalidadWhereUniqueInput
    create: XOR<LocalidadCreateWithoutClientesInput, LocalidadUncheckedCreateWithoutClientesInput>
  }

  export type VentaCreateWithoutClienteInput = {
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    lineasVenta?: LineaVentaCreateNestedManyWithoutVentaInput
    pagos?: PagoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutClienteInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    lineasVenta?: LineaVentaUncheckedCreateNestedManyWithoutVentaInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutClienteInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaCreateManyClienteInputEnvelope = {
    data: VentaCreateManyClienteInput | VentaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClienteInput = {
    update: XOR<UserUpdateWithoutClienteInput, UserUncheckedUpdateWithoutClienteInput>
    create: XOR<UserCreateWithoutClienteInput, UserUncheckedCreateWithoutClienteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClienteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClienteInput, UserUncheckedUpdateWithoutClienteInput>
  }

  export type UserUpdateWithoutClienteInput = {
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalidadUpsertWithoutClientesInput = {
    update: XOR<LocalidadUpdateWithoutClientesInput, LocalidadUncheckedUpdateWithoutClientesInput>
    create: XOR<LocalidadCreateWithoutClientesInput, LocalidadUncheckedCreateWithoutClientesInput>
    where?: LocalidadWhereInput
  }

  export type LocalidadUpdateToOneWithWhereWithoutClientesInput = {
    where?: LocalidadWhereInput
    data: XOR<LocalidadUpdateWithoutClientesInput, LocalidadUncheckedUpdateWithoutClientesInput>
  }

  export type LocalidadUpdateWithoutClientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput
  }

  export type LocalidadUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
  }

  export type VentaUpsertWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    update: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
    create: XOR<VentaCreateWithoutClienteInput, VentaUncheckedCreateWithoutClienteInput>
  }

  export type VentaUpdateWithWhereUniqueWithoutClienteInput = {
    where: VentaWhereUniqueInput
    data: XOR<VentaUpdateWithoutClienteInput, VentaUncheckedUpdateWithoutClienteInput>
  }

  export type VentaUpdateManyWithWhereWithoutClienteInput = {
    where: VentaScalarWhereInput
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyWithoutClienteInput>
  }

  export type VentaScalarWhereInput = {
    AND?: VentaScalarWhereInput | VentaScalarWhereInput[]
    OR?: VentaScalarWhereInput[]
    NOT?: VentaScalarWhereInput | VentaScalarWhereInput[]
    id?: IntFilter<"Venta"> | number
    fecha?: DateTimeFilter<"Venta"> | Date | string
    montoTotal?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    clienteId?: IntFilter<"Venta"> | number
  }

  export type ProvinciaCreateWithoutLocalidadesInput = {
    nombre: string
  }

  export type ProvinciaUncheckedCreateWithoutLocalidadesInput = {
    id?: number
    nombre: string
  }

  export type ProvinciaCreateOrConnectWithoutLocalidadesInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
  }

  export type ClienteCreateWithoutLocalidadInput = {
    direccion?: string | null
    telefono?: string | null
    user: UserCreateNestedOneWithoutClienteInput
    ventas?: VentaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutLocalidadInput = {
    id?: number
    userId: number
    direccion?: string | null
    telefono?: string | null
    ventas?: VentaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutLocalidadInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput>
  }

  export type ClienteCreateManyLocalidadInputEnvelope = {
    data: ClienteCreateManyLocalidadInput | ClienteCreateManyLocalidadInput[]
    skipDuplicates?: boolean
  }

  export type ProvinciaUpsertWithoutLocalidadesInput = {
    update: XOR<ProvinciaUpdateWithoutLocalidadesInput, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
    create: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutLocalidadesInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutLocalidadesInput, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
  }

  export type ProvinciaUpdateWithoutLocalidadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinciaUncheckedUpdateWithoutLocalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUpsertWithWhereUniqueWithoutLocalidadInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutLocalidadInput, ClienteUncheckedUpdateWithoutLocalidadInput>
    create: XOR<ClienteCreateWithoutLocalidadInput, ClienteUncheckedCreateWithoutLocalidadInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutLocalidadInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutLocalidadInput, ClienteUncheckedUpdateWithoutLocalidadInput>
  }

  export type ClienteUpdateManyWithWhereWithoutLocalidadInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutLocalidadInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: IntFilter<"Cliente"> | number
    userId?: IntFilter<"Cliente"> | number
    direccion?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    localidadId?: IntNullableFilter<"Cliente"> | number | null
  }

  export type LocalidadCreateWithoutProvinciaInput = {
    nombre: string
    codPostal: string
    clientes?: ClienteCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateWithoutProvinciaInput = {
    id?: number
    nombre: string
    codPostal: string
    clientes?: ClienteUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadCreateOrConnectWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    create: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput>
  }

  export type LocalidadCreateManyProvinciaInputEnvelope = {
    data: LocalidadCreateManyProvinciaInput | LocalidadCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type LocalidadUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    update: XOR<LocalidadUpdateWithoutProvinciaInput, LocalidadUncheckedUpdateWithoutProvinciaInput>
    create: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput>
  }

  export type LocalidadUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    data: XOR<LocalidadUpdateWithoutProvinciaInput, LocalidadUncheckedUpdateWithoutProvinciaInput>
  }

  export type LocalidadUpdateManyWithWhereWithoutProvinciaInput = {
    where: LocalidadScalarWhereInput
    data: XOR<LocalidadUpdateManyMutationInput, LocalidadUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type LocalidadScalarWhereInput = {
    AND?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
    OR?: LocalidadScalarWhereInput[]
    NOT?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
    id?: IntFilter<"Localidad"> | number
    nombre?: StringFilter<"Localidad"> | string
    codPostal?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type LineaVentaCreateWithoutProductoInput = {
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutLineasVentaInput
  }

  export type LineaVentaUncheckedCreateWithoutProductoInput = {
    id?: number
    ventaId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaCreateOrConnectWithoutProductoInput = {
    where: LineaVentaWhereUniqueInput
    create: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput>
  }

  export type LineaVentaCreateManyProductoInputEnvelope = {
    data: LineaVentaCreateManyProductoInput | LineaVentaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LineaVentaUpsertWithWhereUniqueWithoutProductoInput = {
    where: LineaVentaWhereUniqueInput
    update: XOR<LineaVentaUpdateWithoutProductoInput, LineaVentaUncheckedUpdateWithoutProductoInput>
    create: XOR<LineaVentaCreateWithoutProductoInput, LineaVentaUncheckedCreateWithoutProductoInput>
  }

  export type LineaVentaUpdateWithWhereUniqueWithoutProductoInput = {
    where: LineaVentaWhereUniqueInput
    data: XOR<LineaVentaUpdateWithoutProductoInput, LineaVentaUncheckedUpdateWithoutProductoInput>
  }

  export type LineaVentaUpdateManyWithWhereWithoutProductoInput = {
    where: LineaVentaScalarWhereInput
    data: XOR<LineaVentaUpdateManyMutationInput, LineaVentaUncheckedUpdateManyWithoutProductoInput>
  }

  export type LineaVentaScalarWhereInput = {
    AND?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
    OR?: LineaVentaScalarWhereInput[]
    NOT?: LineaVentaScalarWhereInput | LineaVentaScalarWhereInput[]
    id?: IntFilter<"LineaVenta"> | number
    ventaId?: IntFilter<"LineaVenta"> | number
    productoId?: IntFilter<"LineaVenta"> | number
    cantidad?: IntFilter<"LineaVenta"> | number
    subTotal?: DecimalFilter<"LineaVenta"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineasVenta?: LineaVentaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lineasVenta?: LineaVentaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringFilter<"Producto"> | string
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    foto?: StringNullableFilter<"Producto"> | string | null
    categoriaId?: IntFilter<"Producto"> | number
    createdAt?: DateTimeFilter<"Producto"> | Date | string
    updatedAt?: DateTimeFilter<"Producto"> | Date | string
  }

  export type ClienteCreateWithoutVentasInput = {
    direccion?: string | null
    telefono?: string | null
    user: UserCreateNestedOneWithoutClienteInput
    localidad?: LocalidadCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutVentasInput = {
    id?: number
    userId: number
    direccion?: string | null
    telefono?: string | null
    localidadId?: number | null
  }

  export type ClienteCreateOrConnectWithoutVentasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
  }

  export type LineaVentaCreateWithoutVentaInput = {
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutLineasVentaInput
  }

  export type LineaVentaUncheckedCreateWithoutVentaInput = {
    id?: number
    productoId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaCreateOrConnectWithoutVentaInput = {
    where: LineaVentaWhereUniqueInput
    create: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput>
  }

  export type LineaVentaCreateManyVentaInputEnvelope = {
    data: LineaVentaCreateManyVentaInput | LineaVentaCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type PagoCreateWithoutVentaInput = {
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodoPago: MetodoPagoCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutVentaInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodoPagoId: number
  }

  export type PagoCreateOrConnectWithoutVentaInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput>
  }

  export type PagoCreateManyVentaInputEnvelope = {
    data: PagoCreateManyVentaInput | PagoCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutVentasInput = {
    update: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
    create: XOR<ClienteCreateWithoutVentasInput, ClienteUncheckedCreateWithoutVentasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVentasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVentasInput, ClienteUncheckedUpdateWithoutVentasInput>
  }

  export type ClienteUpdateWithoutVentasInput = {
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClienteNestedInput
    localidad?: LocalidadUpdateOneWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutVentasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    localidadId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LineaVentaUpsertWithWhereUniqueWithoutVentaInput = {
    where: LineaVentaWhereUniqueInput
    update: XOR<LineaVentaUpdateWithoutVentaInput, LineaVentaUncheckedUpdateWithoutVentaInput>
    create: XOR<LineaVentaCreateWithoutVentaInput, LineaVentaUncheckedCreateWithoutVentaInput>
  }

  export type LineaVentaUpdateWithWhereUniqueWithoutVentaInput = {
    where: LineaVentaWhereUniqueInput
    data: XOR<LineaVentaUpdateWithoutVentaInput, LineaVentaUncheckedUpdateWithoutVentaInput>
  }

  export type LineaVentaUpdateManyWithWhereWithoutVentaInput = {
    where: LineaVentaScalarWhereInput
    data: XOR<LineaVentaUpdateManyMutationInput, LineaVentaUncheckedUpdateManyWithoutVentaInput>
  }

  export type PagoUpsertWithWhereUniqueWithoutVentaInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutVentaInput, PagoUncheckedUpdateWithoutVentaInput>
    create: XOR<PagoCreateWithoutVentaInput, PagoUncheckedCreateWithoutVentaInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutVentaInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutVentaInput, PagoUncheckedUpdateWithoutVentaInput>
  }

  export type PagoUpdateManyWithWhereWithoutVentaInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutVentaInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    id?: IntFilter<"Pago"> | number
    fecha?: DateTimeFilter<"Pago"> | Date | string
    monto?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    ventaId?: IntFilter<"Pago"> | number
    metodoPagoId?: IntFilter<"Pago"> | number
  }

  export type VentaCreateWithoutLineasVentaInput = {
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    pagos?: PagoCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutLineasVentaInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    clienteId: number
    pagos?: PagoUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutLineasVentaInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutLineasVentaInput, VentaUncheckedCreateWithoutLineasVentaInput>
  }

  export type ProductoCreateWithoutLineasVentaInput = {
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutLineasVentaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    categoriaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoCreateOrConnectWithoutLineasVentaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutLineasVentaInput, ProductoUncheckedCreateWithoutLineasVentaInput>
  }

  export type VentaUpsertWithoutLineasVentaInput = {
    update: XOR<VentaUpdateWithoutLineasVentaInput, VentaUncheckedUpdateWithoutLineasVentaInput>
    create: XOR<VentaCreateWithoutLineasVentaInput, VentaUncheckedCreateWithoutLineasVentaInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutLineasVentaInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutLineasVentaInput, VentaUncheckedUpdateWithoutLineasVentaInput>
  }

  export type VentaUpdateWithoutLineasVentaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    pagos?: PagoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutLineasVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type ProductoUpsertWithoutLineasVentaInput = {
    update: XOR<ProductoUpdateWithoutLineasVentaInput, ProductoUncheckedUpdateWithoutLineasVentaInput>
    create: XOR<ProductoCreateWithoutLineasVentaInput, ProductoUncheckedCreateWithoutLineasVentaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutLineasVentaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutLineasVentaInput, ProductoUncheckedUpdateWithoutLineasVentaInput>
  }

  export type ProductoUpdateWithoutLineasVentaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutLineasVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateWithoutPagosInput = {
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    cliente: ClienteCreateNestedOneWithoutVentasInput
    lineasVenta?: LineaVentaCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateWithoutPagosInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
    clienteId: number
    lineasVenta?: LineaVentaUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaCreateOrConnectWithoutPagosInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutPagosInput, VentaUncheckedCreateWithoutPagosInput>
  }

  export type MetodoPagoCreateWithoutPagosInput = {
    nombre: string
  }

  export type MetodoPagoUncheckedCreateWithoutPagosInput = {
    id?: number
    nombre: string
  }

  export type MetodoPagoCreateOrConnectWithoutPagosInput = {
    where: MetodoPagoWhereUniqueInput
    create: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
  }

  export type VentaUpsertWithoutPagosInput = {
    update: XOR<VentaUpdateWithoutPagosInput, VentaUncheckedUpdateWithoutPagosInput>
    create: XOR<VentaCreateWithoutPagosInput, VentaUncheckedCreateWithoutPagosInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutPagosInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutPagosInput, VentaUncheckedUpdateWithoutPagosInput>
  }

  export type VentaUpdateWithoutPagosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cliente?: ClienteUpdateOneRequiredWithoutVentasNestedInput
    lineasVenta?: LineaVentaUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    clienteId?: IntFieldUpdateOperationsInput | number
    lineasVenta?: LineaVentaUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type MetodoPagoUpsertWithoutPagosInput = {
    update: XOR<MetodoPagoUpdateWithoutPagosInput, MetodoPagoUncheckedUpdateWithoutPagosInput>
    create: XOR<MetodoPagoCreateWithoutPagosInput, MetodoPagoUncheckedCreateWithoutPagosInput>
    where?: MetodoPagoWhereInput
  }

  export type MetodoPagoUpdateToOneWithWhereWithoutPagosInput = {
    where?: MetodoPagoWhereInput
    data: XOR<MetodoPagoUpdateWithoutPagosInput, MetodoPagoUncheckedUpdateWithoutPagosInput>
  }

  export type MetodoPagoUpdateWithoutPagosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MetodoPagoUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateWithoutMetodoPagoInput = {
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutMetodoPagoInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    ventaId: number
  }

  export type PagoCreateOrConnectWithoutMetodoPagoInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput>
  }

  export type PagoCreateManyMetodoPagoInputEnvelope = {
    data: PagoCreateManyMetodoPagoInput | PagoCreateManyMetodoPagoInput[]
    skipDuplicates?: boolean
  }

  export type PagoUpsertWithWhereUniqueWithoutMetodoPagoInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutMetodoPagoInput, PagoUncheckedUpdateWithoutMetodoPagoInput>
    create: XOR<PagoCreateWithoutMetodoPagoInput, PagoUncheckedCreateWithoutMetodoPagoInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutMetodoPagoInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutMetodoPagoInput, PagoUncheckedUpdateWithoutMetodoPagoInput>
  }

  export type PagoUpdateManyWithWhereWithoutMetodoPagoInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutMetodoPagoInput>
  }

  export type VentaCreateManyClienteInput = {
    id?: number
    fecha?: Date | string
    montoTotal: Decimal | DecimalJsLike | number | string
  }

  export type VentaUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lineasVenta?: LineaVentaUpdateManyWithoutVentaNestedInput
    pagos?: PagoUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lineasVenta?: LineaVentaUncheckedUpdateManyWithoutVentaNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    montoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ClienteCreateManyLocalidadInput = {
    id?: number
    userId: number
    direccion?: string | null
    telefono?: string | null
  }

  export type ClienteUpdateWithoutLocalidadInput = {
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutClienteNestedInput
    ventas?: VentaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    ventas?: VentaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocalidadCreateManyProvinciaInput = {
    id?: number
    nombre: string
    codPostal: string
  }

  export type LocalidadUpdateWithoutProvinciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
    clientes?: ClienteUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codPostal?: StringFieldUpdateOperationsInput | string
  }

  export type LineaVentaCreateManyProductoInput = {
    id?: number
    ventaId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutLineasVentaNestedInput
  }

  export type LineaVentaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ventaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    descripcion: string
    precio: Decimal | DecimalJsLike | number | string
    stock: number
    foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineasVenta?: LineaVentaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lineasVenta?: LineaVentaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineaVentaCreateManyVentaInput = {
    id?: number
    productoId: number
    cantidad: number
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type PagoCreateManyVentaInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodoPagoId: number
  }

  export type LineaVentaUpdateWithoutVentaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutLineasVentaNestedInput
  }

  export type LineaVentaUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LineaVentaUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PagoUpdateWithoutVentaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodoPago?: MetodoPagoUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type PagoUncheckedUpdateManyWithoutVentaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodoPagoId?: IntFieldUpdateOperationsInput | number
  }

  export type PagoCreateManyMetodoPagoInput = {
    id?: number
    fecha?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    ventaId: number
  }

  export type PagoUpdateWithoutMetodoPagoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutMetodoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ventaId?: IntFieldUpdateOperationsInput | number
  }

  export type PagoUncheckedUpdateManyWithoutMetodoPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ventaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}