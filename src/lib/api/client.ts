import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"

// applyCaseMiddleware:
// axios�Ŏ󂯎�������X�|���X�̒l���X�l�[�N�P�[�X���L�������P�[�X�ɕϊ�
// �܂��͑��M���郊�N�G�X�g�̒l���L�������P�[�X���X�l�[�N�P�[�X�ɕϊ����Ă���郉�C�u����

// �w�b�_�[�Ɋւ��Ă̓P�o�u�P�[�X�̂܂܂ŗǂ��̂œK�p�𖳎�����I�v�V������ǉ�
const options = {
  ignoreHeaders: true 
}

const client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options)

export default client