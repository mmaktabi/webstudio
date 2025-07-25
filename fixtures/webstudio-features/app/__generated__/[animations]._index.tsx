/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import { Body as Body } from "@webstudio-is/sdk-components-react-router";
import {
  Box as Box,
  Heading as Heading,
} from "@webstudio-is/sdk-components-react";
import {
  AnimateChildren as AnimateChildren,
  AnimateText as AnimateText,
} from "@webstudio-is/sdk-components-animation";

export const projectId = "cddc1d44-af37-4cb6-a430-d300cf6f932d";

export const lastPublished = "2025-05-15T22:04:05.511Z";

export const siteName = "KittyGuardedZone";

export const breakpoints = [
  { id: "UoTkWyaFuTYJihS3MFYK5" },
  { id: "ZMaWCtWpH-ao0e_kgIHqR", minWidth: 372 },
  { id: "Z8WjyXWkCrr35PXgjHdpY", minWidth: 472 },
];

export const favIconAsset: string | undefined = undefined;

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [];

export const pageBackgroundImageAssets: string[] = [];

const Page = (_props: { system: any }) => {
  return (
    <Body className={`w-body c1jgcte3 cncutr5 c1ywt30e cqvurle`}>
      <Box className={`w-box c1m04i8w c13v7j50 cpjvam0 cqkqnmd`}>
        <Heading className={`w-heading`}>{"ANIMATIONS"}</Heading>
      </Box>
      <Box className={`w-box c1y8ynw5 c2gdfrb c1yk3skc c16asro7 c1pt69cw`}>
        <Box className={`w-box`}>
          <AnimateChildren
            action={{
              type: "view",
              animations: [
                {
                  name: "Fade In",
                  description: "Fade in the element as it scrolls into view.",
                  keyframes: [
                    {
                      offset: 0,
                      styles: {
                        opacity: { type: "unit", unit: "number", value: 0 },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "backwards",
                    rangeStart: [
                      "entry",
                      { type: "unit", value: 0, unit: "%" },
                    ],
                    rangeEnd: [
                      "entry",
                      { type: "unit", value: 100, unit: "%" },
                    ],
                  },
                },
                {
                  name: "Fade Out",
                  description:
                    "Fade out the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 1,
                      styles: {
                        opacity: { type: "unit", unit: "number", value: 0 },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "forwards",
                    rangeStart: ["exit", { type: "unit", value: 0, unit: "%" }],
                    rangeEnd: ["exit", { type: "unit", value: 100, unit: "%" }],
                  },
                },
                {
                  name: "Parallax In",
                  description:
                    "Parallax the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 0,
                      styles: {
                        translate: {
                          type: "tuple",
                          value: [
                            { type: "unit", unit: "number", value: 0 },
                            { type: "unit", unit: "px", value: 100 },
                          ],
                        },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "backwards",
                    rangeStart: [
                      "cover",
                      { type: "unit", value: 0, unit: "%" },
                    ],
                    rangeEnd: ["cover", { type: "unit", value: 50, unit: "%" }],
                  },
                },
                {
                  name: "Parallax Out",
                  description:
                    "Parallax the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 1,
                      styles: {
                        translate: {
                          type: "tuple",
                          value: [
                            { type: "unit", unit: "number", value: 0 },
                            { type: "unit", unit: "px", value: -100 },
                          ],
                        },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "forwards",
                    rangeStart: [
                      "cover",
                      { type: "unit", value: 50, unit: "%" },
                    ],
                    rangeEnd: [
                      "cover",
                      { type: "unit", value: 100, unit: "%" },
                    ],
                  },
                },
              ],
              isPinned: false,
            }}
          >
            <Heading className={`w-heading c1pdroxx cudat22`}>
              {"ANIMATED CHILD 0"}
            </Heading>
            <Heading className={`w-heading`}>{"ANIMATED CHILD 1"}</Heading>
          </AnimateChildren>
        </Box>
        <Box className={`w-box`}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus at nisi feugiat accumsan. Aliquam tristique vitae augue eget lacinia. "
          }
        </Box>
      </Box>
      <Box className={`w-box cq3mp4w`} />
      <Box className={`w-box c1y8ynw5 c2gdfrb c1yk3skc`}>
        <Box className={`w-box`}>
          <AnimateChildren
            action={{
              type: "view",
              animations: [
                {
                  name: "Fade In",
                  description: "Fade in the element as it scrolls into view.",
                  keyframes: [
                    {
                      offset: 0,
                      styles: {
                        opacity: { type: "unit", unit: "number", value: 0 },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "backwards",
                    rangeStart: [
                      "entry",
                      { type: "unit", value: 0, unit: "%" },
                    ],
                    rangeEnd: [
                      "entry",
                      { type: "unit", value: 100, unit: "%" },
                    ],
                  },
                },
                {
                  name: "Fade Out",
                  description:
                    "Fade out the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 1,
                      styles: {
                        opacity: { type: "unit", unit: "number", value: 0 },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "forwards",
                    rangeStart: ["exit", { type: "unit", value: 0, unit: "%" }],
                    rangeEnd: ["exit", { type: "unit", value: 100, unit: "%" }],
                  },
                },
                {
                  name: "Parallax In",
                  description:
                    "Parallax the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 0,
                      styles: {
                        translate: {
                          type: "tuple",
                          value: [
                            { type: "unit", unit: "number", value: 0 },
                            { type: "unit", unit: "px", value: 100 },
                          ],
                        },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "backwards",
                    rangeStart: [
                      "cover",
                      { type: "unit", value: 0, unit: "%" },
                    ],
                    rangeEnd: ["cover", { type: "unit", value: 50, unit: "%" }],
                  },
                },
                {
                  name: "Parallax Out",
                  description:
                    "Parallax the element as it scrolls out of view.",
                  keyframes: [
                    {
                      offset: 1,
                      styles: {
                        translate: {
                          type: "tuple",
                          value: [
                            { type: "unit", unit: "number", value: 0 },
                            { type: "unit", unit: "px", value: -100 },
                          ],
                        },
                      },
                    },
                  ],
                  timing: {
                    easing: "linear",
                    fill: "forwards",
                    rangeStart: [
                      "cover",
                      { type: "unit", value: 50, unit: "%" },
                    ],
                    rangeEnd: [
                      "cover",
                      { type: "unit", value: 100, unit: "%" },
                    ],
                  },
                },
              ],
              isPinned: false,
            }}
          >
            <AnimateText slidingWindow={20} className={`w-text-animation`}>
              <Heading className={`w-heading c1pdroxx`}>
                {"ANIMATED CHILD 1"}
              </Heading>
              <Box className={`w-box`}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus at nisi feugiat accumsan. Aliquam tristique vitae augue eget lacinia. "
                }
              </Box>
            </AnimateText>
          </AnimateChildren>
        </Box>
        <Box className={`w-box`}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tellus at nisi feugiat accumsan. Aliquam tristique vitae augue eget lacinia. "
          }
        </Box>
      </Box>
      <Box className={`w-box c1m04i8w c13v7j50 cpjvam0 cqkqnmd`}>
        <Heading className={`w-heading`}>{"THE END"}</Heading>
      </Box>
    </Body>
  );
};

export { Page };
