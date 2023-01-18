/*
 * Copyright 2023 Thoughtworks, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.thoughtworks.go.agent.service;

import com.thoughtworks.go.util.SystemEnvironment;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;
import org.mockito.Answers;
import org.mockito.MockedStatic;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mockStatic;

class SystemInfoTest {

    @Test
    @EnabledOnOs(OS.MAC)
    public void shouldGetCompleteNameOnMac() {
        assertThat(SystemInfo.getOperatingSystemCompleteName()).matches("macOS [0-9.]+ \\(.*\\)");
    }

    @Test
    @EnabledOnOs(OS.WINDOWS)
    public void shouldGetCompleteNameOnWindows() {
        assertThat(SystemInfo.getOperatingSystemCompleteName()).matches("Windows( \\w+)? [0-9.]+( \\(.*\\))?");
    }

    @Test
    @EnabledOnOs(OS.LINUX)
    public void shouldGetCompleteNameOnLinux() {
        assertThat(SystemInfo.getOperatingSystemCompleteName()).matches("[ \\w]+ [0-9.]+( \\w+)?( \\(.*\\))?");
    }

    @Test
    public void shouldFallbackToJvmFamilyOnLibraryError() {
        try (MockedStatic<SystemInfo> systemInfo = mockStatic(SystemInfo.class, Answers.CALLS_REAL_METHODS)) {
            systemInfo.when(SystemInfo::getSystemInfo).thenThrow(new IllegalArgumentException("Cannot determine OS"));

            assertThat(SystemInfo.determineOperatingSystemCompleteName()).isEqualTo(new SystemEnvironment().getOperatingSystemFamilyJvmName());
        }
    }
}