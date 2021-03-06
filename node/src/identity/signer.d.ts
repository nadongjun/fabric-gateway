/*
 * Copyright 2020 IBM All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A signing implementation used to generate digital signatures from a supplied message digest. Standard
 * implementations can be obtained using factory methods on the Signers class.
 */
export type Signer = (digest: Uint8Array) => Promise<Uint8Array>;
