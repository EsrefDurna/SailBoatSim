/*********************************************************************
 *                                                                   *
 *   Copyright 2016 Simon M. Werner                                  *
 *                                                                   *
 *   Licensed to the Apache Software Foundation (ASF) under one      *
 *   or more contributor license agreements.  See the NOTICE file    *
 *   distributed with this work for additional information           *
 *   regarding copyright ownership.  The ASF licenses this file      *
 *   to you under the Apache License, Version 2.0 (the               *
 *   "License"); you may not use this file except in compliance      *
 *   with the License.  You may obtain a copy of the License at      *
 *                                                                   *
 *      http://www.apache.org/licenses/LICENSE-2.0                   *
 *                                                                   *
 *   Unless required by applicable law or agreed to in writing,      *
 *   software distributed under the License is distributed on an     *
 *   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY          *
 *   KIND, either express or implied.  See the License for the       *
 *   specific language governing permissions and limitations         *
 *   under the License.                                              *
 *                                                                   *
 *********************************************************************/

'use strict';

module.exports = {

    /**
     * Estimate the roll.
     * @param  {number} apparentWindHeading The apparent wind heading (degrees)
     * @param  {number} apparentWindSpeed   The apprent wind speed (m/s)
     * @return {number}                     The estimated roll (degrees)
     */
    estimate: function(dt, apparentWindSpeed, apparentWindHeading) {
        var estRoll = Math.sin(apparentWindHeading * Math.PI / 180) * (-Math.exp(-apparentWindSpeed * 0.09 + 4.5) + 90);
        return estRoll;
    }
};