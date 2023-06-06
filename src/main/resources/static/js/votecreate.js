var options = []; // 선택지 배열

// 선택지 표시
function displayOptions() {
    var optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // 선택지를 업데이트하기 위해 내용을 비움

    options.forEach(function(option, index) {
        var optionDiv = document.createElement('div');

        var input = document.createElement('input');
        input.type = 'text';
        input.value = option;
        input.oninput = function() {
            updateOption(index, this.value);
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            deleteOption(index);
        };

        optionDiv.appendChild(input);
        optionDiv.appendChild(deleteButton);

        optionsDiv.appendChild(optionDiv);
    });
}

// 선택지 추가
function addOption() {
    var newOption = prompt('추가할 선택지를 입력하세요:');
    if (newOption) {
        options.push(newOption);
        displayOptions();
    }
}

// 선택지 업데이트
function updateOption(index, value) {
    options[index] = value;
}

// 선택지 삭제
function deleteOption(index) {
    options.splice(index, 1);
    displayOptions();
}

// 투표 제출
function submitVote() {
    if (options.length === 0) {
        alert('투표 선택지를 추가하세요.');
        return;
    }

    var selectedOption = document.querySelector('input[name="voteOption"]:checked');
    if (selectedOption) {
        alert('선택한 옵션: ' + selectedOption.value);
        // 여기에 투표 제출에 대한 추가 로직을 작성할 수 있습니다.
    } else {
        alert('투표 선택지를 선택하세요.');
    }
}

// 초기 선택지 표시
displayOptions();